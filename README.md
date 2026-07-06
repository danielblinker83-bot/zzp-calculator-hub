# ZZP Calculator Hub

Gratis Nederlandse rekentools voor zzp'ers: btw, uurtarief, netto inkomen, belastingreserve, kilometervergoeding, marge, offertes en tekstgenerators.

## Tech stack
- Next.js 14 (App Router) + React 18 + TypeScript + Tailwind CSS
- Geen database, geen login, geen externe API's. Alles draait client-side.
- Alle pagina's zijn statisch (SSG) → zeer snel en goedkoop te hosten.

## Lokaal draaien
```bash
npm install
npm run dev      # http://localhost:3000
npm test         # unit tests op alle formules
npm run build    # productie-build
```

## Belangrijk vóór livegang
1. Zet in `lib/site.ts` je echte domein in `SITE.url` (nu: voorbeeld-domein.nl) en je e-mailadres.
2. Controleer het standaard km-tarief in de kilometertool tegen het actuele maximum van de Belastingdienst.

## Nieuwe calculator toevoegen
1. Formule in `lib/calc/naam.ts` (pure functie, testbaar).
2. Test toevoegen in `scripts/test.ts`.
3. Map `app/nieuwe-slug/` met `page.tsx` (metadata + `CalculatorLayout`) en een client-component.
4. Tool registreren in `TOOLS` in `lib/site.ts` → verschijnt automatisch op homepage, footer, interne links en sitemap.

## Advertenties activeren
Zet `SHOW_ADS = true` in `components/AdPlaceholderTop.tsx`, `AdPlaceholderInline.tsx` en `AdPlaceholderSidebar.tsx` en plaats daar je AdSense-code.

## Deployen op Vercel
1. Push deze map naar een GitHub-repository.
2. Ga naar vercel.com → Add New Project → importeer de repo.
3. Framework wordt automatisch herkend (Next.js). Geen environment variables nodig.
4. Deploy. Elke push naar main deployt automatisch.

## Hostinger-domein koppelen aan Vercel
1. In Vercel: Project → Settings → Domains → voeg jouw domein toe (bijv. zzpcalculatorhub.nl en www-variant).
2. Vercel toont welke DNS-records nodig zijn.
3. In Hostinger hPanel: Domeinen → DNS Zone Editor:
   - A-record `@` → 76.76.21.21
   - CNAME `www` → cname.vercel-dns.com
4. Wacht op DNS-propagatie (meestal < 1 uur). Vercel regelt SSL automatisch.
5. Zet daarna `SITE.url` in `lib/site.ts` op je definitieve domein en deploy opnieuw (canonicals + sitemap).
