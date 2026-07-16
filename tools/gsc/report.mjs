// Haalt de Search Console-prestaties van berekenzzp.nl op via de Search Console API
// en print een leesbaar wekelijks rapport. Gebruikt het serviceaccount in
// ../../.secrets/gsc-key.json (git-genegeerd).
//
// Draaien:  node report.mjs            -> afgelopen 7 dagen
//           node report.mjs 28         -> afgelopen 28 dagen
//
// De property is de DOMEIN-property in Search Console, dus siteUrl = "sc-domain:berekenzzp.nl".

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { GoogleAuth } from "google-auth-library";

const __dirname = dirname(fileURLToPath(import.meta.url));
const KEY_PATH = resolve(__dirname, "../../.secrets/gsc-key.json");
const SITE_URL = "sc-domain:berekenzzp.nl";
const SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";

// Search Console-data loopt ~2-3 dagen achter. We rekenen van (vandaag - 2 - venster) tot (vandaag - 2).
const dagenVenster = Number(process.argv[2]) || 7;

function datumStr(d) {
  return d.toISOString().slice(0, 10);
}

async function haalOp(client, body) {
  const url = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
    SITE_URL
  )}/searchAnalytics/query`;
  const res = await client.request({ url, method: "POST", data: body });
  return res.data;
}

function euro(n) {
  return n.toLocaleString("nl-NL");
}

async function main() {
  let keyFile;
  try {
    keyFile = JSON.parse(readFileSync(KEY_PATH, "utf8"));
  } catch {
    console.error(`FOUT: kan de sleutel niet lezen op ${KEY_PATH}`);
    process.exit(1);
  }

  const auth = new GoogleAuth({ credentials: keyFile, scopes: [SCOPE] });
  const client = await auth.getClient();

  const eind = new Date();
  eind.setDate(eind.getDate() - 2);
  const start = new Date(eind);
  start.setDate(start.getDate() - (dagenVenster - 1));
  const startStr = datumStr(start);
  const eindStr = datumStr(eind);

  const basis = { startDate: startStr, endDate: eindStr, dataState: "all" };

  // Totalen
  const totaal = await haalOp(client, { ...basis });
  const t = totaal.rows?.[0] ?? { clicks: 0, impressions: 0, ctr: 0, position: 0 };

  // Per pagina, zoekopdracht en dag
  const [paginas, queries, dagen] = await Promise.all([
    haalOp(client, { ...basis, dimensions: ["page"], rowLimit: 25 }),
    haalOp(client, { ...basis, dimensions: ["query"], rowLimit: 250 }),
    haalOp(client, { ...basis, dimensions: ["date"] }),
  ]);

  // Sorteer beide op vertoningen (aflopend) en houd de top 10 over.
  const opVertoningen = (rows) => [...(rows ?? [])].sort((a, b) => b.impressions - a.impressions).slice(0, 10);
  const topPaginas = opVertoningen(paginas.rows);
  const topQueries = opVertoningen(queries.rows);

  const regel = "─".repeat(56);
  console.log(`\n📊 berekenzzp.nl — Search Console\nPeriode: ${startStr} t/m ${eindStr} (${dagenVenster} dagen)`);
  console.log(regel);
  console.log(`Klikken:      ${euro(t.clicks)}`);
  console.log(`Vertoningen:  ${euro(t.impressions)}`);
  console.log(`CTR:          ${(t.ctr * 100).toFixed(2)}%`);
  console.log(`Gem. positie: ${t.position.toFixed(1)}`);

  console.log(`\n🔝 Beste pagina's (op vertoningen)`);
  console.log(regel);
  for (const r of topPaginas) {
    const pad = r.keys[0].replace("https://www.berekenzzp.nl", "") || "/";
    console.log(`${String(r.impressions).padStart(4)} vert.  pos ${r.position.toFixed(0).padStart(3)}  ${pad}`);
  }

  console.log(`\n🔎 Beste zoekopdrachten (op vertoningen)`);
  console.log(regel);
  for (const r of topQueries) {
    console.log(`${String(r.impressions).padStart(4)} vert.  pos ${r.position.toFixed(0).padStart(3)}  ${r.keys[0]}`);
  }

  const totVert = (dagen.rows ?? []).reduce((s, r) => s + r.impressions, 0);
  console.log(`\nDagen met data: ${dagen.rows?.length ?? 0}, totaal ${euro(totVert)} vertoningen in de periode.`);
  console.log("");
}

main().catch((e) => {
  console.error("FOUT bij ophalen:", e?.response?.data?.error?.message || e.message);
  process.exit(1);
});
