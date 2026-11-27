# BerekenZZP groeilog

## 27 november 2026 — actuele uitkomst bij het vergelijken van marges

- De review-sheet eindigde bij rij 45. Geen nieuwe Search Console-inspectie van de tien artikelen in rij 26 aangetroffen. In de registry staan nul nieuwe artikelen voor de week 23–29 november. Deze run richt zich op de bestaande margecalculator.
- Eigen meetomgeving. De live margepagina gaf HTTP 200. In de bestaande code bleef de vorige uitkomst kopieerbaar na een wijziging in de inkoopprijs, verkoopprijs of extra kosten.
- De formulierwijziging laat de vorige uitkomst en kopieerknop vervallen bij een wijziging en ondersteunt herberekenen met Enter. De rekenfunctie blijft gelijk. Testvoorbeeld: bij €4 kosten en €6 verkoop resteert €2; na verlaging naar €5,40 resteert €1,40.
- Het lokale testproces kon geen IPC-socket openen. De uitvoeromgeving viel weg tijdens de nieuwe testpoging. De buildstatus en publicatiestatus worden in de review-sheet vastgelegd.

## 26 november 2026 — oude offertesamenvatting verdwijnt bij gewijzigde invoer

- Review-sheet gelezen t/m rij 44. De vervolginspectie van de tien artikelen uit rij 26 ontbreekt nog in de sheet. Laatste vastgelegde Search Console-prestatieperiode eindigt op 17 november. Deze kalenderweek staan nul nieuwe artikelen in de registry.
- Eigen omgeving. Offertecalculator live HTTP 200. In de component gebruikte de oude berekening het nieuwe btw-label zodra de bezoeker het percentage veranderde. Ook de te kopiëren tekst kon zo bedragen en percentages uit verschillende invoer combineren.
- Bij een wijziging aan een van de zes velden vervallen de resultaatkaarten, tekst en kopieerknop. De bezoeker kan opnieuw berekenen met de knop of Enter. De kopieertekst noemt de uitkomst een prijsindicatie en legt geen ongevraagde geldigheid van 30 dagen meer vast.
- Eigen omgeving. Productiebuild, TypeScript en bestaande rekentests geslaagd. Geïsoleerde componentcontrole op zes invoerwijzigingen, herberekening, foutieve invoer en kopieertekst geslaagd. Voor twee uur à €100 gaf de bestaande functie €242 bij 21% en €218 bij 9%. Lokale browserstart geblokkeerd doordat het Chromium-programmabestand ontbreekt. De productiecontrole wordt geregistreerd in de review-sheet.

## 25 november 2026 — Nederlandstalige hulp bij een ontbrekende pagina

- Bij start eindigde de review-sheet op rij 43. De actuele Search Console-inspectiestatus van de tien artikelen uit rij 26 stond daar nog open. De laatste vastgelegde prestatie-export loopt tot 17 november (rij 40). De registry telt nul nieuwe artikelen in kalenderweek 23–29 november.
- Eigen meetomgeving. Een bewust gekozen ontbrekend kennisbankadres gaf HTTP 404 en de standaard Engelse fouttekst. Er is geen bezoekvolume voor ontbrekende adressen gemeten.
- De gedeelde foutpagina verwijst bezoekers direct naar het calculatoroverzicht en de kennisbank. Het gevraagde adres levert HTTP 404 en bevat noindex. De tekst is Nederlands.
- Eigen meetomgeving. Productiebuild, TypeScript en bestaande rekentests geslaagd. Lokale productiecontrole van twee ontbrekende adressen, drie bestaande pagina’s, het tools-anker en de zestien artikelkaarten geslaagd. De sitemap bevat 34 URL’s. De live nacontrole wordt in de review-sheet vastgelegd.

## 24 november 2026 — kennisbank op onderwerp doorzoekbaar via vier spronglinks

- Laatste gevulde reviewrij bij start was 42. De tien URL’s van rij 26 zijn op 17 november aangemeld. De review-sheet bevatte vanochtend nog geen Search Console-uitkomst van de vervolginspectie. Laatste beschikbare Search Console-prestatieperiode in rij 40 eindigt op 17 november. Indexstatus per URL blijft open bij Daniel/Claude. Week 23–29 november telt nul nieuwe artikelen.
- Eigen omgeving, live vóór wijziging: voor elk van de tien artikelen een succesvolle HTTP-opvraag, eigen canonical, geen noindex in robots-/googlebot-meta of X-Robots-Tag, vermelding in de sitemap en een directe link vanuit de kennisbank én ten minste één rekentool. Dit controleert technische bereikbaarheid. Alleen een Search Console-inspectie geeft de gevraagde indexstatus.
- Kennisbank met zestien kaarten ingedeeld in vier onderwerpen. Een spronglink per onderwerp werkt vanuit de HTML. De centrale artikelregistry vereist een onderwerp voor elke nieuwe kaart. Binnen elk onderwerp staat het nieuwste artikel bovenaan.
- Eigen omgeving: productiebuild, TypeScript en bestaande rekentests geslaagd. Lokale productiecontrole bevestigt alle vier ankerdoelen en alle zestien kaarten elk precies één keer. Alle 34 sitemap-pagina’s opgevraagd. Geen gerenderde telefoontest uitgevoerd. Live nacontrole wordt onderaan de review-sheet vastgelegd.

## 23 november 2026 — directe toetsenbordroute naar inhoud

- Review-sheet eerst gelezen tot en met laatste gevulde rij 41. Bron Search Console blijft de export in rij 40 (21 oktober–17 november, 8 klikken en 2.120 vertoningen). Geen nieuwe indexeringscontrole of nieuwe Search Console-meting beschikbaar in de sheet; volgende controle tien artikelen van 17 november blijft bij Daniel/Claude op 24 november.
- Kalenderweek 23–29 november telt vóór deze wijziging nul nieuwe artikelen. Vandaag geen nieuw artikel; bestaande toegankelijkheid verbeterd terwijl nieuwe indexeringsgegevens ontbreken. Geen belastingberekeningen, parameters, metadata, goedgekeurde beelden of artikelpublicatiedatums gewijzigd.
- Eigen omgeving: live homepage vóór wijziging HTTP 200, maar geen directe inhoudlink. De root-layout had wel een main-landmark, zonder focusbaar ankerdoel. Eerste bedienbare element is nu ‘Direct naar de inhoud’, met een native anker naar de unieke main met tabindex -1. Werkt zonder extra JavaScript. De link wordt zichtbaar bij focus en verschijnt boven de vaste header; de inhoud heeft ruimte onder de header bij het springen.
- Primaire bron geraadpleegd op 23 november: W3C/WAI, techniek G1, https://www.w3.org/WAI/WCAG22/Techniques/general/G1. Dit is een gerichte verbetering, geen claim dat de gehele site aan WCAG voldoet of dat rankings hierdoor stijgen.
- Eigen omgeving: productiebuild/TypeScript geslaagd (39 statische routes); alle bestaande rekentests inclusief box 3 T1–T11 geslaagd. Lokale productie-HTTP-controle op alle 34 sitemap-pagina’s bevestigt de eerste inhoudlink, één uniek focusbaar main-doel, H1 in de hoofdinhoud, viewport en blijvende mobiele kennisbanklink. Gecompileerde CSS gecontroleerd op verbergen zonder focus, zichtbaar maken bij focus, z-index boven de header en scrollruimte. Sitemap behoudt dezelfde 34 URL’s en een onbekende URL blijft HTTP 404.
- Geen echte toetsenbord-, schermlezer- of mobiele browsertest uitgevoerd; de controle omvat HTML, CSS en HTTP. Geen actuele bezoekers- of Core Web Vitals-veldmeting beschikbaar. Publicatie en live nacontrole worden onderaan de review-sheet vastgelegd.

## 22 november 2026 — marge-uitkomst en rekentabel verduidelijkt

- Review-sheet eerst gelezen t/m rij 40. Bron Search Console: export van 20 november, meetperiode 21 oktober–17 november, 8 klikken en 2.120 vertoningen. De laatste 14 dagen in die export tellen 1.460 vertoningen, de voorafgaande 14 dagen 660. Dit is historische Search Console-data uit de sheet, geen nieuwe meting vandaag en geen bewezen effect van deze wijziging. Een nieuwe indexeringscontrole van de tien artikelen van 17 november ontbreekt nog; die blijft bij Daniel/Claude.
- Kalenderweek 16–22 november telt twee nieuwe artikelen (17 en 18 november). Vandaag geen nieuw artikel tijdens de indexeringscontrole. De bestaande margecalculator krijgt een inhoudelijke correctie; eerdere Search Console-export 2 augustus–1 november bevatte 2.184 vertoningen voor deze calculator, geen actuele zoekvraagmeting.
- Intro, meta-omschrijving, Open Graph en uitleg verduidelijken dat de uitkomst alleen de ingevulde kosten aftrekt. Resultaatkaart en kopieertekst noemen de nog niet meegenomen bedrijfskosten. De FAQ verwart brutomarge niet langer met een bedrag en stelt niet meer dat eigen uren automatisch een bedrijfskostenpost zijn. Calculatorlogica en belastingberekeningen blijven ongewijzigd.
- KVK geraadpleegd op 22 november: https://www.kvk.nl/geldzaken/exploitatiebegroting/, https://www.kvk.nl/geldzaken/waarom-een-winst-en-verliesrekening/ en https://www.kvk.nl/geldzaken/moeilijke-woorden-die-je-tegenkomt-bij-bedrijfsfinanciering/. OpenStax begrippenlijst financiële administratie geraadpleegd voor brutowinstmarge. KVK-bronlink toegevoegd aan de zichtbare uitleg. Geen nieuwe fiscale tarieven of claims toegevoegd.
- Fictief voorbeeld: €100 verkoop min €60 inkoop min €5 extra kosten = €35; 35% marge en 53,8% opslag. Bij 100 verkopen en €1.200 overige bedrijfskosten resteert €2.300. Alle vier bestaande tabelrijen onafhankelijk nagerekend met de ongewijzigde margefunctie en terugrekenformule.
- Tabel heeft nu een zichtbaar bijschrift, expliciete kolomkoppen, een benoemde focusbare scrollcontainer met focusmarkering en een mobiele schuifinstructie. De bestaande link naar break-even is verplaatst naar de uitleg over vaste kosten; alle zeven inhoudelijke interne linkdoelen blijven behouden.
- Eigen omgeving: productiebuild/TypeScript geslaagd (39 statische routes); alle bestaande tests geslaagd inclusief box 3 T1–T11. Lokale productie-HTTP-controle bevestigt één H1, canonical, metadata, tien gelijke zichtbare/schema-FAQ-antwoorden, toegankelijke tabelmarkup, zeven inhoudelijke linkdoelen en homepage/kennisbank met HTTP 200. Sitemap behoudt exact dezelfde 34 URL’s. Mobiele HTML gecontroleerd; geen gerenderde mobiele browser- of toesteltest uitgevoerd.
- Bestaande goedgekeurde afbeeldingen en artikelpublicatiedatums behouden. Geen indexeringsaanvraag gedaan. Productie-nacontrole en publicatiecommit worden na uitrol onderaan de review-sheet vastgelegd.

## 20 november 2026 — vindbaarheid bestaande box 3-calculator hersteld

- Review-sheet gelezen, laatste gevulde rij 38. Geen nieuwe Search Console-indexeringscontrole vastgelegd. De tien aanvragen van 17 november blijven volgens rij 26 bij Daniel/Claude in controle op 20 en 24 november.
- Registry telt deze week twee artikelen (17 en 18 november). Vandaag geen nieuw artikel.
- Eigen omgeving/live broncontrole: box 3-calculator is live sinds de eerdere publicatie, maar ontbrak in TOOLS, homepage en sitemap. Artikel meldde nog dat de calculator later online zou komen.
- Calculator aan bestaande toolregistry toegevoegd. Daardoor verschijnen menu-, homepage- en sitemapverwijzingen via bestaande componenten. Artikel linkt naar calculator en calculator terug naar artikel. Verouderde aankondiging vervangen door de link.
- Inhoudelijke wijzigingsdatum artikel is 20 november, publicatiedatum blijft 18 november en datum fiscale broncontrole blijft 18 november. Metadata en Article gebruiken eerst de inhoudelijke wijzigingsdatum. Bij artikelen met een wijzigingsdatum wordt die nu ook zichtbaar getoond.
- Eigen omgeving: productiebuild en alle bestaande tests geslaagd, inclusief T1–T11. Lokale productie-HTTP-test bevestigt alle 34 sitemap-URL’s, hoofdmenu, homepagekaart, tweeweglinks, canonicals en consistente datums. Mobiele HTML gecontroleerd, geen gerenderde mobiele browsertest uitgevoerd.
- Geen belastingberekeningen, parameters, calculatorlogica of goedgekeurde afbeeldingen aangepast. Geen indexeringsaanvraag gedaan.


## 19 november 2026 — prijsverhogingsmail inhoudelijk verbeterd

- Review-sheet gelezen t/m rij 37. Search Console-bron blijft Claude’s onderzoek van 17 november: de prijsverhogingsmail was gecrawld en niet geïndexeerd. Geen nieuwe indexeringsmeting beschikbaar. Volgende controle van de tien artikelen blijft bij Daniel/Claude.
- Kalenderweek 16–22 november bevat twee artikelen: uurtarief-indexeren (17 november) en box-3-zzp-belastingreserve (18 november). Vandaag bestaande pagina verbeterd.
- Prijsverhogingsmail bevat een volledig fictief voorbeeld voor nieuwe zakelijke opdrachten, invoeruitleg, controle op lopende afspraken, een rekenvoorbeeld van €75 naar €81 (8%) en een verzendchecklist. Ongestaafde standaardtermijnen en algemene fiscale onderbouwing verwijderd. KVK geraadpleegd op 19 november voor tijdige en persoonlijke communicatie en prijsafspraken.
- Titel en meta-omschrijving sluiten aan op het voorbeeld en de generator. Zichtbare FAQ en FAQ-schema gebruiken dezelfde tekst. Geen wijzigingen aan generatorlogica of belastingberekeningen.
- Eigen omgeving: productiebuild en bestaande tests geslaagd (inclusief ongewijzigde box 3-tests). Lokale productie-HTTP bevestigt de invoervelden, mailknop, voorbeeld, zes FAQ’s, interne links en ongewijzigde sitemap. Mobiele HTML gecontroleerd. Geen gerenderde mobiele browsertest uitgevoerd.
- Aanvullende eigen livecontrole: /box-3-berekenen-zzp geeft HTTP 200; de productiegeschiedenis bevat ‘Publiceer box 3-calculator voor zzp’ers’. De oudere sheetvermelding in rij 35 (ongepubliceerd/404) beschrijft de huidige productie niet meer. Geen wijzigingen aan deze calculator gedaan.


## 18 november 2026 — ontbrekende links vanuit calculators afgerond

- Review-sheet ‘Kansen & review’ gelezen t/m rij 27. Bron Search Console via Claude, rapportage 17 november (rij 22): netto-calculator 63 vertoningen en loondienstcalculator 22 vertoningen plus één klik over 6–15 november. Rij 26 bevestigt tien indexeringsaanvragen door Claude op 17 november, controle rond 20 en 24 november. Geen nieuwe indexstatus gemeten.
- Deze kalenderweek (16–22 november, Europe/Amsterdam) bevat de artikelregistry één publicatie, uurtarief-indexeren op 17 november. Vandaag gekozen voor bestaande pagina’s tijdens de wachtperiode op indexering.
- Ontbrekende twee links uit rij 6 uitgevoerd. Netto-calculator linkt onder de tool naar de belastinguitleg. Loondienstcalculator linkt onder de tool naar het uurtariefartikel. De twee andere links en thematisch gerelateerde artikelen waren op 17 november uitgevoerd.
- Productiebuild, bestaande rekentests en lokale productie-HTTP-controle geslaagd. Twee calculators en beide artikelbestemmingen geven 200, canonicals en mobiele HTML gecontroleerd. Sitemap bevat 32 URL’s. Geen gerenderde mobiele browsertest uitgevoerd.
- Geen wijziging aan belastingberekeningen of calculatorlogica. Geen indexeringsaanvraag gedaan.
- Publicatieafspraak vastgelegd voor volgende runs. Tot en met 1 december maximaal drie nieuwe artikelen per kalenderweek. Na 1 december geen nieuwe artikelen tot Daniels besluit. Sheet alleen onderaan aanvullen na eerst lezen, nieuwe artikel-URL dezelfde dag met ‘aanmelden bij Google’ opnemen.

## 17 november 2026 — wijzigingen naar aanleiding van de review

- Kilometerartikel aangepast op basis van Claude’s Search Console-analyse: titeltag, meta description, eerste alinea, btw-kop (naar voren verplaatst) en FAQ-vraag bijgewerkt. H1 en URL zijn gelijk gebleven. Het punt over ov- en parkeerkosten is niet toegevoegd; dat volgt pas na controle bij de Belastingdienst.
- Search Console (Claude, export/rapport van 17-11): voor het kilometerartikel is de nulmeting 591 vertoningen, 0 klikken en gemiddelde positie 19,45 over 1–15 november; de aparte AI-features-export toont 61 vertoningen. Dit zijn Search Console-metingen. Geen prestatiemeting na de wijzigingen beschikbaar.
- Afbeeldingen: nieuw belastingbeeld volgens docs/beeldstijl.md, met Daniel herkenbaar in lichtblauw en zonder overheidsnamen, logo’s, formulieren of cijfers. Het uurtariefbeeld is inhoudelijk behouden en naar JPEG geconverteerd. Eigen omgeving/bestandscontrole: beide 1536 × 864; belastingbeeld 180.878 bytes, uurtariefbeeld 183.389 bytes. Dit zijn bestandsmetingen, geen Search Console-cijfers.
- Interne links toegevoegd van /uurtarief-berekenen naar het uurtariefartikel en van /belasting-reserveren-zzp naar het belastingartikel. ‘Meer uit de kennisbank’ kiest eerst artikelen met dezelfde gerelateerde tools en vult daarna aan met recente publicaties.
- Publicatieritme ingesteld op maximaal drie artikelen per week tot en met 1 december 2026. Daarna volgt een besluit op basis van de indexering van de tien op 17-11 aangemelde artikelen. Na iedere publicatie moet dezelfde dag de URL in de sheet komen met de actie ‘aanmelden bij Google’; Daniel of Claude doet de aanvraag in Search Console.
- Geen belastingberekeningen, tarieven, formules of calculatorlogica aangepast.
- Metingen aan websiteprestaties worden gelabeld naar bron: Search Console voor Google-rapportages, eigen omgeving voor lokale code-, beeld- of servermetingen. Googlebot 125 ms is afkomstig uit Search Console volgens rij 23; eerdere 4–10 s waren eigen omgevingsmetingen en zijn niet als Googlebot-snelheid gebruikt.
- Productiepublicatie en live nacontrole worden vastgelegd zodra de Vercel-deployment gereed is.


## 17 november 2026 — uurtarief indexeren

- Nieuw artikel `/kennisbank/uurtarief-indexeren` rekent een afgesproken index door naar nieuw tarief en maandomzet. Vult de calculator voor het basistarief en de mailgenerator aan. In de beschikbare historische Search Console-export (2 augustus–1 november) had ‘uurtarief berekenen zzp’ 110 vertoningen, geen gemeten indexeringsquery. Geen actuele export of serviceaccountsleutel beschikbaar.
- Live sitemap, kennisbank en uurtariefcalculator vooraf HTTP 200. Sitemap 31 URL’s, waarvan 14 artikelen. Eenmalige meting voor de uurtariefcalculator vanuit deze omgeving 5,59 s tot de eerste byte. Geen veldmeting.
- CBS-formule en gebruik van indexreeksen gecontroleerd, KVK geraadpleegd over prijsaanpassingen. Fictieve index 108,15 ÷ 105 = 1,03. €80 wordt €82,40. Bij 60 uur stijgt de omzet van €4.800 naar €4.944. Bij 58 uur is die €4.779,20. Met decimale rekencontrole bevestigd.
- Teruglinks vanaf beide tools. De mailgenerator verwijst bij indexering naar de prijsafspraak en gebruikt geen algemene aanbeveling van 10 tot 20 procent meer. Nieuw beeld in oudroze overhemd bij werkblad, zie beeldstijl.
- Productiebuild (37 statische routes), bestaande tests en lokale productie-HTTP-controle geslaagd. Sitemap (32 URL’s), links, schema’s, FAQ’s en sociale metadata gecontroleerd. Origineel en thumbnail bevestigd op de drie beeldplekken. Mobiele HTML en het beeld op 320 px gecontroleerd. Geen gerenderde browsertest uitgevoerd.

## 15 november 2026 — vaste projectprijs als zzp’er

- Nieuw artikel `/kennisbank/vaste-projectprijs-berekenen`. Voegt een methode toe om de uren, speling en directe kosten voor een vaste prijs te begroten en het effect van uitloop na te rekenen. De bestaande offertecalculator blijft de totaalberekening doen. In de historische Search Console-export van 2 augustus–1 november had ‘uurtarief berekenen zzp’ 110 vertoningen en ‘zzp tarief berekenen’ 41. Geen signaal voor ‘projectprijs’ zelf en geen nieuwe export of serviceaccountsleutel beschikbaar.
- Voor publicatie live kennisbank, sitemap en offertecalculator HTTP 200. Offertecalculator 5,11 s tot de eerste byte in één externe meting vanuit deze omgeving. Geen veldmeting. Sitemap vooraf 30 URL’s, waarvan 13 artikelen.
- KVK en Ondernemersplein geraadpleegd voor uren- en kostenbasis, prijssoorten en afspraken over werkzaamheden en oplevering. Fictief voorbeeld onafhankelijk nagerekend. €1.560 totaal en €1.440 na directe kosten. Bij 16, 18 en 22 uur blijft respectievelijk €90, €80 en €65,45 per uur over.
- Contextuele teruglink toegevoegd vanuit de offertecalculator. Het artikel verwijst naar de offerte- en uurtariefcalculators. Nieuw beeld met blauwgroen overhemd aan een vergadertafel. Zie beeldstijl.
- Productiebuild (36 statische routes), bestaande tests en lokale productie-HTTP-controle geslaagd. Sitemap (31 URL’s), interne links, FAQ, canonical, sociale metadata en schema’s bevestigd. Alle drie beeldplekken, origineel en thumbnail getest. Mobiele HTML en beeld op 320 px gecontroleerd. Geen gerenderde mobiele browsertest uitgevoerd.

## 14 november 2026 — werkelijke autokosten per kilometer

- Nieuw artikel `/kennisbank/autokosten-per-kilometer-berekenen` over de eigen kostprijs van rijden, aanvullend op de calculator voor aftrek en klanttarieven, de uitleg over rittenregistratie en het factuurvoorbeeld. Historische export 2 augustus–1 november bevat 77 vertoningen voor ‘kilometervergoeding zzp’ en 33 voor ‘kilometervergoeding berekenen’. Geen afzonderlijke zoekmeting voor dit onderwerp of nieuwe Search Console-cijfers beschikbaar.
- Live kennisbank, sitemap en kilometercalculator vooraf HTTP 200. De eenmalige tijd tot eerste byte voor de calculator was 4,42 s vanuit deze omgeving. Geen veldmeting. Live sitemap vooraf 29 URL’s, waarvan 12 artikelen.
- ANWB geraadpleegd voor kostenposten en waardedaling en Belastingdienst voor €0,25 aftrek per zakelijke kilometer met privévervoer in 2026. Fictieve jaarkosten €6.000 ÷ 15.000 km = €0,40 per km. Bij 80 km gemiddeld €32 toerekenen, €9,60 aan extra brandstof en €20 forfaitaire winstaftrek. Voorbeelden nagerekend.
- Teruglinks vanuit kilometercalculator en het bestaande factuurartikel. Calculator verduidelijkt dat het forfait de afzonderlijke kosten vervangt voor de winstaangifte. Nieuw beeld in okergeel bij geopende autodeur, zie beeldstijl.
- Productiebuild, bestaande tests en lokale productie-HTTP-controle geslaagd. Sitemap, drie beeldplekken, thumbnail, FAQ, schema’s, social metadata en links gecontroleerd. Mobiele HTML en afbeelding op 320 px gecontroleerd. Geen gerenderde browsertest uitgevoerd.
- Live nacontrole van `47a7026` geslaagd voor artikel, homepage, kennisbank, kilometercalculator, factuurartikel, sitemap en beide beeldvarianten. De ANWB-link gaat rechtstreeks naar de uitleg over de kostenposten. Voor fiscale informatie verwijst het artikel naar de Belastingdienst.

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

## 18 november 2026 — box 3-artikel en calculator in voorbereiding

- Op basis van Daniels akkoord op rijen 30–31 en Claude’s document zijn het artikel `/kennisbank/box-3-zzp-belastingreserve` en een box 3-calculator uitgewerkt. De checklist uit Deel B is toegepast. Het artikel gebruikt alleen officiële Belastingdienst- en Eerste Kamer-bronnen voor veranderlijke fiscale claims. Er staat geen bedrag voor het heffingsvrij vermogen van 2027 in artikel, metadata of beeld.
- Artikel toegevoegd met uitleg over de 2026-forfaits, de privébelastingreserve, de beperkte uitzondering voor bepaalde belastingschulden en een controleerbaar voorbeeld. De niet primair onderbouwde rechtszaak en een specifieke ingangsdatum van het nieuwe stelsel zijn weggelaten. Werkelijk rendement is bijgewerkt naar de actuele Belastingdienst-instructie: vanaf 2025 in de aangifte, voor 2024 en eerder via Opgaaf werkelijk rendement.
- Nieuwe JPEG gemaakt volgens `docs/beeldstijl.md`: zandkleurig overhemd, staand bij bureau, zakelijke uitlegpose; beeld bevat geen overheidsnaam, logo, formulier of getal. Afmetingen 1536 × 864. Alt-tekst beschrijft Daniel en de context. Dit zijn eigen bestands-/beeldcontroles, geen Search Console-metingen.
- Interne links toegevoegd vanaf `/belasting-reserveren-zzp` en `/kennisbank/voorlopige-aanslag-belastingreserve`. De artikeltekst linkt terug naar de relevante calculators. Calculatorlink in het artikel blijft tot stemming onbeschikbaar; de calculatorcode staat op een aparte branch.
- Calculator rekent uitsluitend met 2026-uitgangspunten, labelt uitkomsten als indicatie, houdt de belastingreserve binnen het spaarbedrag en bevat uitleg over voorlopige forfaits. Testgevallen T1–T11 uit Claude’s document toegevoegd aan `scripts/test.ts`; automatische testuitvoering wordt bij de feature branch-build geregistreerd.
- Nog geen actuele Search Console-meting van dit artikel of deze calculator. Na artikelpublicatie wordt de URL in de eerstvolgende lege sheetrij gezet met `aanmelden bij Google`; indexering zelf laat ik aan Daniel of Claude.
- Geen bestaande belastingberekeningen gewijzigd. Calculator niet op productie publiceren voordat de Eerste Kamer over de relevante wetgeving heeft gestemd.

- Na live nacontrole de directe Belastingdienst-link voor de voorlopige box 3-berekening genormaliseerd naar de actuele officiële URL `/berekening-box-3-inkomen-2026`.
- De officiële Belastingdienst-link voor vermogensetikettering is eveneens gecontroleerd en gecorrigeerd naar de werkende pagina over vermogensetikettering en duurzaam overtollige liquide middelen.


## 18 november 2026 — box 3-calculator live gezet

- Daniel gaf op 18-11 een nieuwe instructie om de calculator live te zetten; daarmee is de eerdere wachtinstructie tot de Eerste Kamerstemming vervallen. Calculator gepubliceerd op `/box-3-berekenen-zzp`.
- Productiecontrole: pagina opent en toont de invoervelden, indicatie en reservevergelijking. Eigen omgeving/livecontrole: HTTP 200 en de standaardinvoer toont €187,28 heffing, €49,04 zonder de reserve en €138,24 verschil. Dit zijn testuitkomsten in de eigen omgeving, geen Search Console-metingen.
- Automatische tests T1–T11 geslaagd; Next.js productiebuild geslaagd. De actuele code bevat alleen 2026-uitgangspunten, geeft een schatting en noemt geen heffingsvrij bedrag voor 2027. Werkelijk rendement wordt niet berekend.
- De regels en percentages kunnen wijzigen. Eerstvolgende actualiteitscontrole na de Eerste Kamerbehandeling; parameters voor een later jaar pas toevoegen na officiële bevestiging. Search Console heeft nog geen post-publicatie meting.
