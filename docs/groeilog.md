# BerekenZZP groeilog

## 5 november 2026 — mobiele navigatie

- Daniel meldde met telefoonscreenshots dat blogs onvindbaar waren en mobiel alleen een Tools-knop zichtbaar was. Oorzaak: de navigatie gebruikte `hidden sm:flex` zonder mobiel menu, en de homepage bevatte geen artikelverwijzingen.
- Hamburgerknop Menu/Sluiten onder 1024px toegevoegd, met aria-expanded/controls, alle calculators/generators, Blogs & kennisbank, Home, Over ons en Contact. Sluit bij keuze, Escape (focus terug) en klik buiten het menu. Menu scrollt binnen de schermhoogte; header blijft bereikbaar.
- Homepage heeft nu een directe Blogs & tips-knop plus de twee nieuwste artikelen vóór alle tools. Dynamisch uit dezelfde artikelregistry, zodat nieuwe blogs vanzelf verschijnen. Footerlabel verduidelijkt.
- Productiebuild en TypeScript geslaagd, 26 statische routes. Navigatiecodes gecontroleerd op toetsenbordtoegang, effect-opruiming en touchdoelen. Live interactiecontrole volgt na deploy.

## 5 november 2026

- Publicatie bevestigd: commit `0b2b0b63a4bde5ebb95e34e1508ee72d855655f2`, Vercel-status success. Live artikel en bijgewerkte calculator op 5 november geopend; parkeer-/tolcorrectie en wederzijdse link zichtbaar. Live calculator met 80 km × €0,45 getest: €36,00. Aanvankelijke 404 tijdens de build verdween na voltooiing van de deployment.

- Artikel `/kennisbank/kilometervergoeding-doorberekenen-klant`: richt zich op facturatie (afspraken, retourafstand, btw, voorbeeldfactuur) in aanvulling op de bestaande kilometercalculator.
- Onderwerp sluit aan op eerder aangeleverde querysignalen over kilometervergoeding en doorberekenen aan klanten. Geen nieuwe GSC-meting: serviceaccountsleutel niet aanwezig in de checkout; geen toegang of cijfers gefingeerd.
- Bronnen op 5 november 2026 gelezen: KVK uurtarief/bijkomende kosten, Belastingdienst btw over diensten, Belastingdienst zakelijk gebruik privévervoermiddel 2026. Bronlinks in het artikel.
- Eigen factuurvoorbeeld: 4 × €65 + 80 × €0,45 = €296 excl. btw; 21% = €62,16; totaal €358,16. Fiscale aftrek van dezelfde 80 km bij €0,25 = €20, geen €20 belastingteruggave.
- Bestaande kilometerpagina gecorrigeerd: parkeren/tol niet afzonderlijk aftrekbaar naast het privévoertuigforfait. Intro en omschrijving onderscheiden nu aftrek, klanttarief en belastingeffect. Btw-uitzonderingen toegevoegd; niet onderbouwde claim over gebruikelijk klanttarief verwijderd. Contextuele link naar artikel toegevoegd.
- Artikelregistry verzorgt kennisbank, sitemap en metadata. Bestaande componenten leveren Article, BreadcrumbList en FAQPage. Geen nieuwe afbeelding: factuurgegevens zijn een toegankelijke HTML-tabel.
- Verificatie vóór publicatie: productiebuild geslaagd (26 statische routes); alle bestaande tests geslaagd via `node --import tsx scripts/test.ts`. HTML gecontroleerd op titel, één H1, canonical, schema’s, sitemap en bestaande interne linkdoelen. Factuurvoorbeeld onafhankelijk nagerekend. De tabel heeft kolomkoppen en een horizontale scrollcontainer voor smalle schermen; geen mobiele viewporttest uitgevoerd.
- Volgende ronde: controleer overige te brede auto/ov-uitspraken en fiscale rekenvoorbeelden op de oudere pagina’s. Meet pas groei bij werkelijk beschikbare nieuwe Search Console-data.

## 4 november 2026

- Dagelijkse artikelpublicatie ingesteld tot en met 3 januari 2027. Bestaande groeitaak gewijzigd, geen dubbele taak.
- Eerste artikel: `/kennisbank/verschil-marge-en-opslag`. Aanvullende uitleg bij de bestaande margecalculator: definities, terugrekenen, omrekentabel, kostenbasis, korting en terugcontrole.
- Primaire bronnen gelezen: KVK verkoopprijs bepalen en Ondernemersplein kostprijs/verkoopprijs, op 4 november 2026. Bronnen ondersteunen kostenplanning; rekenvoorbeelden zijn eigen berekeningen.
- Artikel opgenomen in registry: kennisbank, sitemap, artikelmetadata, Article/Breadcrumb en FAQ via bestaande componenten. Contextuele link vanuit margecalculator toegevoegd.
- Geen nieuwe Search Console-meting beschikbaar tijdens deze bewerking. Eerdere query-export liet margegerelateerde vertoningen zien; geen rankingwinst geclaimd.
- Volgende prioriteit: fiscale feiten en calculatorvoorbeelden verifiëren bij actuele Belastingdienst-bronnen. Bestaande margepagina bevat te stellige btw-uitleg; controleer uitzonderingen voordat deze inhoud wordt herschreven.
- Controleer bij volgende runs eerst live publicatie, voorkom dubbele artikelen en leg resultaat en verificatiegrenzen hier vast.
- Productiebuild geslaagd (25 statische routes). Gegenereerde HTML gecontroleerd: één H1, correcte titel/canonical, Article/BreadcrumbList/FAQPage en sitemapvermelding. Rekentabel en korting onafhankelijk nagerekend.
- Artikel live in browser bevestigd op 4 november 2026. Auteurstekst en generieke controleclaim gecorrigeerd om geen persoonlijke of fiscale verificatie te suggereren die niet is vastgesteld.
