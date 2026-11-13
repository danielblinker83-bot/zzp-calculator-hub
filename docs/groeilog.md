# BerekenZZP groeilog

## 13 november 2026 — maximale korting bij een minimale marge

- Nieuw artikel `/kennisbank/maximale-korting-berekenen`. Vertrekt vanuit een minimale marge om een maximale korting te bepalen, inclusief percentagecommissie en afronding. Bestaand marge/opslagartikel legt het effect van een gegeven korting uit. De historische nulmeting geeft 2.193 vertoningen voor de margecalculator. Geen actuele Search Console-export of afzonderlijke meting voor deze zoekvraag beschikbaar.
- Live sitemap en margecalculator gaven vooraf HTTP 200. Eén externe meting vanuit deze omgeving gaf 4,00 s en 4,02 s tot de eerste byte. Geen veldmeting.
- KVK en OpenStax gecontroleerd voor kostenbasis, marge en nettoverkoop. Fictieve prijzen en kortingsgrenzen onafhankelijk nagerekend. €54 ÷ 0,75 = €72, maximaal 20% korting op €90. Bij 5% commissie is €77,15 de eerste prijs op hele centen die het margedoel haalt.
- De margecalculator linkt naar de nieuwe uitleg. Zichtbare byline gebruikt de bestaande redactievlag, in overeenstemming met de Article-gegevens. Nieuw herkenbaar beeld met lila overhemd, op een kruk bij de toonbank. Zie beeldstijl.
- Productiebuild (34 statische routes), rekentests en lokale productie-HTTP geslaagd. Alle interne artikellinks, sitemap (29 URL’s), FAQ, canonical, schema’s, sociale metadata en drie beeldplekken geverifieerd. Mobiele HTML, tabel en voorbeeldbeeld op 320 px gecontroleerd. De lokale browser kon niet starten door de beperking op Unix-sockets.

## 12 november 2026 — sitemap en vindbaarheid

- Live robots.txt verwijst naar de sitemap. Alle elf artikelen staan in de sitemap en zijn gelinkt vanuit de kennisbank. Elk artikel gaf HTTP 200, verwees canoniek naar de eigen URL en bevatte geen `noindex` in HTML of headers. Actuele indexstatus in Search Console niet beschikbaar.
- De sitemap gebruikte de buildtijd als wijzigingsdatum voor elke URL. Artikelen krijgen nu hun inhoudelijke wijzigingsdatum of publicatiedatum. URL’s zonder vastgelegde datum laten `lastmod` weg.
- Productiebuild en rekentests geslaagd. De gebouwde sitemap bevat dezelfde 28 URL’s. Alle elf artikeldatums gecontroleerd tegen de kennisbankregistry.

## 12 november 2026 — voorlopige aanslag en belastingreserve

- Nieuw artikel `/kennisbank/voorlopige-aanslag-belastingreserve`. Vergelijkt de jaarinschatting met betaalde en geplande termijnen en behandelt al opgebouwde reserves. Vult de belastingcalculator en de uitleg over winst aan. Historische export 2 augustus–1 november bevat drie vertoningen voor ‘belasting berekenen zzp’ en twee voor ‘zzp inkomen belasting berekenen’. Geen aparte meting voor de nieuwe titel. GSC-sleutel ontbreekt, geen nieuwe Search Console-cijfers.
- Repository bijgewerkt vanaf `0e256f6`. Live kennisbank vooraf HTTP 200 en tien bestaande artikelen. Eén externe HTTP-meting gaf 10,083 s tot de eerste byte. Geen veldmeting beschikbaar.
- Belastingdienst geraadpleegd voor wijzigen bij meer of minder winst, termijnen, verrekening en de afzonderlijke Zvw-aanslag. Fictieve bedragen nagerekend. Extra reserve €800 inkomstenbelasting plus €400 bijdrage Zvw, samen €300 per maand bij vier maanden. Met €600 beschikbaar voor het verschil resteert €150 per maand.
- Teruglink vanuit belastingcalculator toegevoegd. Stellige uitspraken over het voorkomen van belastingrente, het tijdstip van de aanslag en het marginale schijftarief vervangen door uitleg over betaaldata, schatting en herberekening.
- Nieuw beeld in roestoranje overhemd, zijwaarts aan tafel met envelop. Beide identiteitsreferenties gebruikt. Zie beeldlog.
- Productiebuild (33 statische routes), bestaande tests, rekenvoorbeeld, lokale productie-HTTP, interne links, canonical, Article/BreadcrumbList/FAQPage, sitemap, sociale metadata en drie beeldplekken gecontroleerd. Mobiele opmaak via HTML en beeld op 320px gecontroleerd. Geen gerenderde mobiele browsertest uitgevoerd.
- Vercel-publicatie `286063f97d010c1952081c2860725d3ffb1d44b6` geslaagd. Live HTTP 200 voor homepage, kennisbank, artikel, calculator, sitemap en beide beeldvarianten. Teruglink, bedragen, schema’s en sociale metadata bevestigd. Origineel bytegelijk aan de repository, thumbnail 384 × 216 en 18.004 bytes.

## 11 november 2026 — break-even afzet

- Nieuw artikel `/kennisbank/break-even-afzet-berekenen`. Rekent van de bijdrage per verkoop naar het aantal verkopen voor kostendekking en een winstdoel. Historische Search Console-export van 2 augustus–1 november bevat 118 vertoningen voor ‘winstmarge berekenen’ en één voor ‘contributiemarge’. Geen gemeten zoekvolume voor de nieuwe titel. Lokale GSC-sleutel ontbreekt en er zijn geen nieuwe cijfers beschikbaar.
- Repository bijgewerkt vanaf `d35e64d`. Live kennisbank vooraf HTTP 200, 4,751 s tot de eerste byte bij één externe meting vanuit deze omgeving. Geen nieuwe veldmetingen beschikbaar.
- KVK, OpenStax en Belastingdienst gecontroleerd voor kostenindeling, formule en aftrekbare btw. Eigen voorbeeld met margefunctie nagerekend. €45 min €28 geeft €17 per verkoop. Bij 70 stuks ontbreekt €10 en bij 71 resteert €7 na €1.200 vaste kosten. Bij €40 verkoopprijs zijn 100 verkopen nodig. Voor €500 winst bij €45 eveneens 100.
- Contextuele link vanaf de margecalculator. Het artikel verwijst naar die calculator, het voorbeeld over platformkosten en de uitleg over winst en banksaldo.
- Nieuw JPEG met beide vaste identiteitsreferenties. Daniel staat in marineblauw bij een werkbank en houdt een productdoos vast. Zie beeldlog.
- Productiebuild met TypeScript (32 statische routes), rekentests, rekenvoorbeelden, interne links, canonical, Article/BreadcrumbList/FAQPage, sitemap en sociale metadata gecontroleerd. Mobiele markup en beeld op 320px bekeken. Er is geen gerenderde mobiele browsertest uitgevoerd.
- Vercel-publicatie `088054761cc537360feeac0cdb669ee039c21ad0` geslaagd. Lokale productie-HTTP-test en live nacontrole geslaagd. Homepage, kennisbank, artikel, calculator, sitemap en beide beeldvarianten geven 200. Teruglink, schema’s, sociale metadata en drie beeldplekken bevestigd. Live JPEG bytegelijk aan repositorybestand. Thumbnail 384 × 216 en 17.577 bytes.

## 10 november 2026 — omzet, winst en banksaldo

- Nieuw artikel `/kennisbank/omzet-winst-banksaldo` over een openstaande factuur, kasplanning en de omzet- en kostenvelden van de nettocalculator. Historische export 2 augustus–1 november bevat 20 vertoningen voor ‘bruto netto zzp’ en 3 voor ‘zzp winst berekenen’. Het specifieke onderwerp heeft geen eigen zoekmeting. De lokale GSC-sleutel ontbreekt en er zijn geen nieuwe Search Console-cijfers beschikbaar.
- Repository bijgewerkt vanaf `85bb8ec`. Live kennisbank vóór publicatie HTTP 200, acht bestaande artikelen gevonden. Eén externe HTTP-meting gaf 5,253 s tot de eerste byte. Er is geen nieuwe veldmeting of snelheidstrend vastgesteld.
- KVK-bronnen voor exploitatie en liquiditeit en Belastingdienst-bronnen voor zakelijke kosten en btw gecontroleerd. Fictief voorbeeld nagerekend. €4.000 omzet min €700 kosten geeft €3.300 winst vóór belasting. €1.000 beginsaldo plus €3.025 ontvangen min €847 betaald geeft €3.178 banksaldo. De openstaande factuur is €1.815 inclusief btw.
- Link vanuit de nettocalculator toegevoegd. De uitleg over niet-aftrekbare btw, gemengde uitgaven en afschrijving verduidelijkt.
- Nieuw beeld in bordeauxrood overhemd met factuur en postbakken. Beide vaste referenties gebruikt. Zie beeldlog.
- Productiebuild (31 statische routes), bestaande tests, calculatorinvoer, tabel, interne links, canonical, Article/BreadcrumbList/FAQPage, sitemap en sociale metadata gecontroleerd. Lokale productie-HTTP-test geeft 200 voor artikel, calculator, origineel en 384px-variant. Mobiele markup en beeld op 320px bekeken. Chromium kon niet starten door een geblokkeerde lokale socket, waardoor er geen gerenderde mobiele controle is uitgevoerd.
- Vercel-publicatie `10bf005d234f83a841105135dd233019614e3eb5` geslaagd. Artikel, homepage, kennisbank, calculator, sitemap, JPEG en 384px-variant geven live 200. Teruglink, beide rekenuitkomsten, drie beeldplekken, schema’s en sociale metadata bevestigd. Live JPEG bytegelijk aan het repositorybestand, thumbnail 384 × 216 en 17.217 bytes.

## 9 november 2026 — zakelijke ritten bijhouden

- Nieuw artikel `/kennisbank/zakelijke-ritten-bijhouden` over registratie met een privéauto, ritcategorieën en maandcontrole. Sluit aan op de kilometercalculator en het bestaande artikel over klantfacturen. Historische export 2 augustus–1 november bevat 77 vertoningen voor ‘kilometervergoeding zzp’ en 33 voor ‘kilometervergoeding berekenen’. Geen aparte meting voor het nieuwe onderwerp of nieuwe GSC-cijfers beschikbaar. De lokale serviceaccountsleutel ontbreekt.
- Repository bijgewerkt vanaf `0707ea2`. Live kennisbank vóór publicatie HTTP 200, alle zeven bestaande artikelen aangetroffen. Eén HTTP-meting vanuit deze omgeving gaf 4,570 s tot de eerste byte. Er zijn geen actuele bezoekersmetingen beschikbaar.
- Belastingdienst gecontroleerd op 9 november voor de aftrek van €0,25 per zakelijke kilometer met privévervoer in 2026, behandeling woon-werkverkeer voor inkomstenbelasting en btw en afzonderlijke eisen bij bewijs voor privégebruik van een auto van de zaak. Rekenvoorbeeld gecontroleerd met bestaande functie. Van 76 km tellen 64 km mee voor de inkomstenbelasting (€16 winstaftrek) en zijn 48 km zakelijk voor de btw.
- Contextuele teruglink vanuit kilometercalculator. FAQ over woon-werkverkeer, zakelijke ov-kosten en bewijs van ritten verduidelijkt. Onderscheid tussen winstaftrek en belastingeffect aangescherpt.
- Nieuw beeld `public/kennisbank/zakelijke-ritten-bijhouden.jpg` met leigrijs overhemd, zittend in geparkeerde auto. Beide referenties gebruikt en JPEG geoptimaliseerd. Zie beeldlog.
- Productiebuild (30 statische routes), TypeScript, bestaande rekentests, aparte rekenvoorbeelden, canonical, social metadata, Article/BreadcrumbList/FAQPage, sitemap, interne links en drie beeldplekken gecontroleerd. Mobiele markup en beeld op 320px bekeken, geen gerenderde mobiele browsertest uitgevoerd.
- Vercel-publicatie `2b24c4eb0e79faa02b79cf73b8fbc66fb2b61a29` geslaagd. Live HTTP 200 voor artikel, homepage, kennisbank, calculator, sitemap en beide beeldvarianten. Beeldverwijzingen op alle drie plekken, social metadata en teruglink gecontroleerd. Live JPEG bytegelijk aan repositorybestand, 384px-thumbnail 19.377 bytes.

## 8 november 2026 — declarabele uren plannen

- Nieuw artikel `/kennisbank/declarabele-uren-plannen`. Verdiept week-, jaar- en maandplanning, lege uren en het dubbel verwerken van vakantie. Aanvulling op de bestaande algemene tariefuitleg en interactieve calculator. Historische export 2 augustus–1 november toont 110 vertoningen voor ‘uurtarief berekenen zzp’ en 41 voor ‘zzp tarief berekenen’. Specifiek zoekvolume voor deze nieuwe titel is onbekend. Geen nieuwe GSC-meting beschikbaar: lokale serviceaccountsleutel ontbreekt.
- Repository bijgewerkt vanaf `5e0a321`. Live kennisbank vooraf HTTP 200. Eén externe HTTP-meting gaf TTFB 4,587 s en totaal 4,628 s. Dit is een netwerkmeting vanuit deze omgeving, geen bezoekersmeting of snelheidstrend.
- Op 8 november primaire KVK- en Belastingdienstbronnen gelezen over tariefplanning, urenregistratie en welke uren meetellen. Artikel gebruikt eigen scenario’s en noemt geen nieuw fiscaal tarief of aanbevolen branchepercentage.
- Nagerekend met calculatorfunctie: 20 × 46 = 920 uur/jaar, 76,67 uur/maand. 86,666… uur/maand met 6 vrije weken is equivalent aan 76,666… uur/maand zonder aparte vrije weken. 76,67 met opnieuw 6 weken geeft 67,82. Tabel bij €60.000 omzet onafhankelijk gecontroleerd, tarieven naar boven op centen afgerond.
- Contextuele teruglink en zichtbare uitleg bij de ureninvoer toegevoegd. Onbewezen algemene bandbreedte in calculator-FAQ verwijderd; de afspraak over factureerbare klanttijd verduidelijkt. Rekenlogica ongewijzigd.
- Nieuw beeld `public/kennisbank/declarabele-uren-plannen.jpg`, zandkleurig overhemd en andere houding. Identiteit en stijl met beide vaste referenties bewaakt, zie beeldlog.
- Productiebuild/TypeScript (29 statische routes), alle bestaande tests en artikelberekeningen geslaagd. Canonical, OG/Twitter-afbeelding, Article/BreadcrumbList/FAQPage, geldige interne linkdoelen, sitemap en beeldverwijzingen op homepage/kennisbank/artikel gecontroleerd. Tabel heeft toegankelijke koppen en focusbare scrollcontainer. Mobiele markup gecontroleerd; geen gerenderde mobiele browser- of toesteltest uitgevoerd.
- Publicatie `2bb6829ff69d71e02946007ae4031ab208c893ae` geslaagd, Vercel-status success. Lokale productie-HTTP-test en live HTTP-nacontrole geslaagd. Homepage, kennisbank, artikel, calculator, sitemap, origineel beeld en 384px-thumbnail geven 200. Live HTML bevat teruglink, nieuwe invoeruitleg, schema’s, social metadata en drie beeldplekken. Live JPEG bytegelijk aan repositorybestand, thumbnail 384 × 216 en 18.660 bytes. Beeld op 320px gecontroleerd. Geen nieuwe rankings, bezoekersresultaten of veldmetingen vastgesteld.

## 7 november 2026 — btw op een gemengde bon

- Nieuw artikel `/kennisbank/btw-terugrekenen-gemengde-bon`, gericht op een bon met meerdere tarieven, ontbrekende uitsplitsing en centverschillen. Sluit aan op de bestaande btwcalculator en de historische zoekvragen ‘btw omrekenen’ (11 vertoningen) en ‘bedrag zonder btw berekenen’ (7 vertoningen) in de beschikbare export 2 augustus–1 november. Geen gemeten zoekvolume voor de specifieke nieuwe titel geclaimd. De calculator blijft de interactieve rekenpagina.
- Live kennisbank gaf vóór publicatie HTTP 200. Repository bijgewerkt vanaf `88c0459`. Geen nieuwe GSC-API-data beschikbaar doordat de lokale sleutel ontbreekt. De oudere export blijft een historische aanwijzing; de nieuwere nulmeting uit de gesprekshistorie is geen actuele meting voor vandaag.
- Op 7 november primaire Belastingdienst-bronnen gelezen over terugrekenen, afronden, factuureisen, aftrekvoorwaarden en verlegging. Eigen voorbeelden onafhankelijk gecontroleerd met de bestaande btwfunctie. €121 inclusief 21% en €109 inclusief 9% geeft samen €200 exclusief plus €30 btw. Het hele totaal terugrekenen tegen 21% geeft €9,92 te veel btw. Tweede verdeling van €230 geeft €24,50 btw. Afrondingsvoorbeeld gecontroleerd.
- Contextuele link vanuit btwcalculator toegevoegd. Onjuiste uitleg ‘0% rekenen’ bij verlegging in dezelfde calculator vervangen door de juiste factuurvermelding met primaire bron.
- Nieuw herkenbaar beeld met olijfgroen overhemd en staande houding met bon en pen. Beide vaste Daniel-referenties gebruikt, zie beeldlog. Metadata met werkelijke JPEG-afmetingen 1536 × 864, redactie als auteur, echte publicatiedatum 7 november. Registry verzorgt kennisbank, homepage, sitemap en gerelateerde artikelen.
- Productiebuild met TypeScript en 28 statische routes geslaagd; alle bestaande calculatortests geslaagd. Responsieve markup en tabel met toegankelijke koppen en focusbare scrollcontainer gecontroleerd. Geen fysieke telefoontest uitgevoerd.
- Publicatie `1dc275d134b4d69f29a35213fadc749c629d5ffd` geslaagd, Vercel-status success. Live HTTP-nacontrole op 7 november: artikel, kennisbank, calculator, sitemap, JPEG en 384px-thumbnail allemaal 200. HTML toont beeld op artikel, kennisbank en homepagekaart, met juiste canonical/OG/Twitter, schema’s en teruglink. Live JPEG bytegelijk aan de gecontroleerde repository-afbeelding, thumbnail 384 × 216 en 20.349 bytes. Beeld ook op 320px visueel bekeken. Geen gerenderde mobiele browsercheck uitgevoerd.
- Eén externe homepage-HTTP-meting gaf 7,794 s tot eerste byte en 7,796 s totale ophaaltijd. Dit is één netwerkmeting vanuit deze omgeving en geen Core Web Vitals- of bezoekersmeting; geen snelheidstrend of rankingwinst vastgesteld.

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
