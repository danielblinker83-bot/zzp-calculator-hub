# BerekenZZP groeilog

## 7 november 2026 — btw op een gemengde bon

- Nieuw artikel `/kennisbank/btw-terugrekenen-gemengde-bon`, gericht op een bon met meerdere tarieven, ontbrekende uitsplitsing en centverschillen. Sluit aan op de bestaande btwcalculator en de historische zoekvragen ‘btw omrekenen’ (11 vertoningen) en ‘bedrag zonder btw berekenen’ (7 vertoningen) in de beschikbare export 2 augustus–1 november. Geen gemeten zoekvolume voor de specifieke nieuwe titel geclaimd. De calculator blijft de interactieve rekenpagina.
- Live kennisbank gaf vóór publicatie HTTP 200. Repository bijgewerkt vanaf `88c0459`. Geen nieuwe GSC-API-data beschikbaar doordat de lokale sleutel ontbreekt. De oudere export blijft een historische aanwijzing; de nieuwere nulmeting uit de gesprekshistorie is geen actuele meting voor vandaag.
- Op 7 november primaire Belastingdienst-bronnen gelezen over terugrekenen, afronden, factuureisen, aftrekvoorwaarden en verlegging. Eigen voorbeelden onafhankelijk gecontroleerd met de bestaande btwfunctie. €121 inclusief 21% en €109 inclusief 9% geeft samen €200 exclusief plus €30 btw. Het hele totaal terugrekenen tegen 21% geeft €9,92 te veel btw. Tweede verdeling van €230 geeft €24,50 btw. Afrondingsvoorbeeld gecontroleerd.
- Contextuele link vanuit btwcalculator toegevoegd. Onjuiste uitleg ‘0% rekenen’ bij verlegging in dezelfde calculator vervangen door de juiste factuurvermelding met primaire bron.
- Nieuw herkenbaar beeld met olijfgroen overhemd en staande houding met bon en pen. Beide vaste Daniel-referenties gebruikt, zie beeldlog. Metadata met werkelijke JPEG-afmetingen 1536 × 864, redactie als auteur, echte publicatiedatum 7 november. Registry verzorgt kennisbank, homepage, sitemap en gerelateerde artikelen.
- Productiebuild met TypeScript en 28 statische routes geslaagd; alle bestaande calculatortests geslaagd. Responsieve markup en tabel met toegankelijke koppen en focusbare scrollcontainer gecontroleerd. Geen fysieke telefoontest uitgevoerd.

## 6 november 2026 — verkoopprijs met platformkosten

- Nieuw artikel `/kennisbank/verkoopprijs-platformkosten`. Onderscheidt vaste vergoeding en prijsafhankelijke commissie, met een formule voor een doelmarge en een terugcontrole in de margecalculator. De bestaande pagina over marge versus opslag blijft de uitleg bij die begrippen.
- Keuze op basis van de beschikbare Search Console-export (2 augustus–1 november 2026): 23 vertoningen voor ‘bol.com marge berekenen’ en 2.184 vertoningen voor de margecalculator. Totaal in deze export 10 klikken en 3.419 vertoningen. Historische periode, geen nieuwe API-meting: lokale serviceaccountsleutel ontbreekt. Voor de wijziging live vier bestaande kennisbankartikelen aangetroffen.
- KVK (kostprijs en platformkosten), bol Partnerplatform (commissie en afrekening) en Belastingdienst (btw-tarieven en aftrekvoorwaarden) gecontroleerd op 6 november. Commissietarieven in de voorbeelden zijn fictief. Nagerekend: €35 ÷ 0,70 = €50 met 20% marge. Bij 10% commissie over €60,50 inclusief btw blijft €8,95 of 17,9% over. Kostendekkende prijs in het eerste scenario €38,89 en doelprijs in het tweede scenario €51,55, beide naar boven afgerond.
- Teruglinks vanuit margecalculator en artikel over marge versus opslag. Btw-uitleg bij de calculator verduidelijkt voor niet-aftrekbare inkoop-btw; ongefundeerde branchepercentages verwijderd en kortingsvoorbeeld beperkt tot gelijkblijvende kosten.
- Nieuw beeld `public/kennisbank/verkoopprijs-platformkosten.jpg`, 1536 × 864, 149.917 bytes. Beide aangeleverde referenties gebruikt. Lichtblauw overhemd met opgerolde mouwen, zijwaarts op een kruk met een doos op schoot. Gezicht, handen en Nederlandse kop visueel gecontroleerd, ook verkleind tot 320px breed.
- Productiebuild (27 statische routes) en bestaande calculatortests geslaagd. Prerender gecontroleerd op canonieke URL, Article/BreadcrumbList/FAQPage, Open Graph en sociale afbeelding, sitemap, bronnen, geldige interne linkdoelen en afbeeldingen op artikel, kennisbank en homepage. Tabel met twee kolommen en meeschalende breedte; geen test op fysiek toestel.
- Vercel-publicatie geslaagd voor commit `4a3ff6c211189649b6e778457ac64a0565652d72`. Live artikel geopend via de kennisbankkaart, afbeelding geladen op artikel, kennisbank en homepage. Open Graph, Twitter en directe JPEG gecontroleerd; sitemap bevat de nieuwe URL. De teruglink en het bronverwijzende btw-blok zijn live. Calculator in browser getest met €30 inkoop, €50 verkoop en €10 extra kosten: €10 per verkoop, 20% marge en 25% opslag. Live browserbreedte 1348px; mobiel beeld apart visueel gecontroleerd op 320px en responsieve markup nagekeken. Lokale productie-HTTP-test: alle gecontroleerde routes gaven 200, de geoptimaliseerde 384px-variant was 14.822 bytes WebP. Geen live veldmetingen beschikbaar voor deze run.

## 5 november 2026 — blogafbeeldingen

- Controle geslaagd: productiebuild 26 routes, HTML-afbeeldingsverwijzingen op beide artikelen/homepage/overzicht en OG 1536 × 864 gecontroleerd. Vercel-deploy success. Live browser bevestigt beide afbeeldingen geladen op artikel, kennisbank en homepagekaarten. Bestaande oudere beelden laden ook. Geen wijzigingen aan herkenbaarheid, kleding of compositie van de twee aangeleverde beelden gedaan.

- Twee door Daniel aangeleverde afbeeldingen gekoppeld aan kilometervergoeding doorberekenen en verschil marge/opslag. Aangeleverde inhoud behouden, met correcte JPEG-extensie en werkelijke afmetingen 1536 × 864.
- Afbeeldingen zichtbaar via artikelregistry op artikel en kennisbank. Homepagekaarten uitgebreid met dezelfde afbeeldingen. Responsieve sizes toegevoegd aan alle artikelbeelden; Open Graph neemt de juiste afmetingen mee.
- `docs/beeldstijl.md` bevat blijvende identiteits-/stijlreferenties, kleding-/houdinglog en publicatiecheck. Dagelijkse taak bijgewerkt: ieder nieuw artikel vereist een nieuw passend beeld met Daniel herkenbaar, ander overhemd en andere houding.

## 5 november 2026 — mobiele navigatie

- Daniel meldde met telefoonscreenshots dat blogs onvindbaar waren en mobiel alleen een Tools-knop zichtbaar was. Oorzaak: de navigatie gebruikte `hidden sm:flex` zonder mobiel menu, en de homepage bevatte geen artikelverwijzingen.
- Hamburgerknop Menu/Sluiten onder 1024px toegevoegd, met aria-expanded/controls, alle calculators/generators, Blogs & kennisbank, Home, Over ons en Contact. Sluit bij keuze, Escape (focus terug) en klik buiten het menu. Menu scrollt binnen de schermhoogte; header blijft bereikbaar.
- Homepage heeft nu een directe Blogs & tips-knop plus de twee nieuwste artikelen vóór alle tools. Dynamisch uit dezelfde artikelregistry, zodat nieuwe blogs vanzelf verschijnen. Footerlabel verduidelijkt.
- Productiebuild en TypeScript geslaagd, 26 statische routes. Navigatiecodes gecontroleerd op toetsenbordtoegang, effect-opruiming en touchdoelen. Vercel-deploy geslaagd; live homepage toont blogknop en beide nieuwe artikelen. Geïsoleerde DOM-test met de echte Header geslaagd: openen, 16 links, Escape/focusterugkeer, buitenklik en linkkeuze. Browser-viewport was 1363px en kon via beschikbare bediening niet naar telefoongrootte worden gezet; dus geen echte mobiele viewport- of toesteltest geclaimd. Publieke screenshot van homepage bewaard als bewijs van blogtoegang.

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
