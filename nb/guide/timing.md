# Tidtaking

## Generelt

Et viktig prinsipp i Time4o er at data skal lagres i sin opprinnelige form (rådata), og ikke skal kunne endres av
systemet.
I mange tilfeller skal data heller ikke kunne slettes, og må deaktiveres for å unnlates i tidtakingen slik at det er
mulig å aktivere dataene igjen hvis de ble deaktivert ved en feil.

Hvis systemet er feilkonfigurert så skal det være enkelt og sikkert og rekonfiguere og produsere riktig resultater.

## Stasjonsdata og tidtakingsdata

For å produsere stasjonsdata og tidtakingsdata må det [opprettes en stasjon](/nb/resources/event/stations).

Stasjonsdata kan ikke endres med noen unntak (f.eks. manuelle stasjonsdata).

Stasjonsdata "prosesseres" til tidtakingsdata basert på innstillinger på stasjonen og klassen/løpet.
Tidtakingsdata er typisk sluttiden eller statusen til deltageren og er noe som kan endre seg om innstillingene endres og
stasjonsdata prosesseres på nytt.
Et eksempel på en innstilling er om løpet kjører brikketid eller ikke, noe som vil påvirke starttiden og sluttiden.

Tidtakingsdataene er det som danner grunnlaget for resultatlisten.

### Prosessering

Stasjonsdata prosesseres automatisk til tidtakingsdata én gang. Hvis prosesseringen skal gjentas må den startes manuelt
ved å markere stasjonsdataene i tabellen og trykke knappen ***Prosessér*** eller ved å åpne stasjonsdataene og så lagre.

Dette er blant annet aktuelt hvis det er rettet feil i innstillinger eller oppsett.

::: warning Obs!
Tidtakingsdata kan kun endres/oppdateres ved å prosessere stasjonsdata på nytt.
:::

### Overstyring

Iom. at de fleste stasjonsdata ikke kan endres så må de overstyres i de tilfeller de ikke er som ønsket.

Fordelen med denne måte å gjøre det på er at vi har full sporbarhet. Det er lett og se hvilke deltagere som er behandlet
manuelt, og det er lett å reversere endringer som er gjort. De opprinnelige dataene fra avlesingen ligger uendret.

**Eksempel**

En deltager mangler en post og får status ***MissingPunch*** ved avlesing (Status er en type tidtakingsdata!). Det viser
seg at deltageren har en backuplapp som bekrefter at hen har vært på posten så vi ønsker å godkjenne deltageren.

Vi kan ikke endre stasjonsdataene som stammer fra avlesingen slik at vi får endret ***Status***, så vi må opprette nye
stasjonsdata som overstyrer stasjonsdataene fra avlesingen.
I dette tilfellet oppretter vi manuelle stasjonsdata der ***Status*** er ***OK***. Iom. at stasjonen ***Manuell*** har
innstillingen ***Overstyr andre data*** så vil denne statusen overstyre statusen fra avlesingen og deltageren blir
godkjent.

::: info Tips!
Hvis du har markert stasjonsdata når du oppretter manuelle data, så vil de manuelle dataene automatisk legges mot samme
påmelding som den du har markert. "Overstyr påmelding" er forhåndsutfylt.
:::

## Brikkeavlesing {#readout}

### Koble til stasjon

1. [Opprett en stasjon](/nb/resources/event/stations#create)
2. [Koble til stasjon](/nb/resources/event/stations#connect)

### Avlesing

Når stasjonen er koblet til så er det klart for å lese av brikker.

Gå til siden ***Tidtaking*** > ***Stasjonsdata*** og les av brikker. Ved avlesing opprettes det stasjonsdata som vises
øverst i tabellen.

Det første systemet gjør er å forsøke å identifisere stasjonsdatane, dvs. finne ut hvilken påmelding dataene tilhører.

***Datastatus*** viser enten ***OK*** eller en feilstatus. (Datastatus må ikke forveksles med diskkontrollen!)
Datastatus gir feilmelding hvis f.eks. brikkenummeret er ukjent, eller det mangler målpost i løypeoppsettet.

Når datastatus er ***OK*** "prosesseres" stasjonsdata til tidtakingsdata som vil vises på linje to.
Hvilke typer tidtakingsdata som opprettes er bestemt av innstillingene på løpsstasjonen.

Så lenge ingen av tidtakingsdatene er røde er alt i orden og deltageren er godkjent.

::: info Tips!
Alle stasjonsdata, uavhengig av stasjon, vises i stasjonsdata-tabellen. Hvis det hentes stasjonsdata fra flere
stasjoner, som f.eks. mellomtider fra Emit sin server, så vil tabellen bli full av data som ikke er relevant for
avlesingen.
Bruk derfor kolonnefilteret for kun å se stasjonsdata fra din avleser-stasjon.
:::

## Konkurransestatuser

Disse statusene beskriver deltagerens status i selve konkurransen.

| Status             | Beskrivelse                                                      |
|:-------------------|:-----------------------------------------------------------------|
| **OK**             | Deltageren er i mål og godkjent.                                 |
| **Fullført**       | Deltageren er i mål, men har ikke lest av brikken!               |
| **Ikke godkjent**  | Deltageren er i mål, men mangler stemplinger.                    |
| **Diskvalifisert** | Deltageren er diskvalifisert.                                    |
| **Brutt**          | Deltageren har brutt.                                            |
| **Ikke startet**   | Deltageren startet ikke.                                         |
| **Startet**        | Deltageren har startet og er i skogen.                           |
| **Sjekket**        | Deltageren har vært på brikkesjekk og er sannsynligvis i skogen. |
| **Inaktiv**        | Deltageren har ingen status og er potensielt i skogen.           |

## Feilstatuser {#error-status}

### Stasjonsdata {#station-data-status}

Feilstatuser i kolonnen **datastatus** i stasjonsdata-tabellen.

| Status                             | Beskrivelse                                                                                                     | Løsning                                                                                                                                             
|:-----------------------------------|:----------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------
| **Lagret**                         | Stasjonsdata er lagret i systemet.                                                                              |
| **I kø**                           | Stasjonsdata venter i kø på å bli prosessert.                                                                   |
| **Ikke i kø**                      | Stasjonsdata ble ikke lagt i køen av ukjent årsak.                                                              | Prosesser stasjonsdata på nytt. Kontakt Time4o support hvis det gjentar seg.                                                                        |
| **Finner ikke løpsstasjon**        | Stasjonen har ingen løpsstasjoner.                                                                              | Legg til løpsstasjon.                                                                                                                               |
| **Mangler brikkernr. og startnr.** | Stasjonsdata mangler både brikkenummer og startnummer.                                                          | Alle stasjonsdata bør ha brikkenummer eller startnummer. Ta kontakt med Time4o support.                                                             |
| **Finner ikke brikke**             | Brikkenummeret finnes ikke i arrangementet.                                                                     | Koble stasjonsdata manuelt mot riktig påmelding                                                                                                     |
| **Flere brikker funnet**           | Fant flere brikker med brikkenummeret. (De må i såfall ha ulik brikketype.)                                     | Koble stasjonsdata manuelt mot riktig påmelding. Hvis dette gjentar seg bør man vurdere å endre løpsstasjonen til kun å håndtere ønsket brikketype. |  
| **Finner ikke start**              | Fant ingen start med startnummeret.                                                                             | Koble stasjonsdata manuelt mot riktig påmelding.                                                                                                    |
| **Flere starter funnet**           | Fant flere starter med samme startnummer.                                                                       | Koble stasjonsdata manuelt mot riktig påmelding. Sjekk gjerne hvorfor samme startnummer eksisterer flere ganger.                                    
| **Finner ikke påmelding**          | Fant ingen påmelding. Brikkenummer eller startnummer er derimot funnet.                                         | Koble stasjonsdata manuelt mot riktig påmelding.                                                                                                    |
| **Flere påmeldinger funnet**       | Fant flere påmeldinger med angitt brikkenummer eller startnummer.                                               | Koble stasjonsdata manuelt mot riktig påmelding.                                                                                                    
| **Ingen løype**                    | Påmeldingens klasse eller start har ingen løype.                                                                | Legg til løype på klassen eller starten.                                                                                                            
| **Ingen stemplinger**              | Stasjonsdata har ingen poststemplinger.                                                                         | Prøv ny avlesing. Sjekk at avleser bruker riktig kode og protokoll.                                                                                 
| **Flere avlesinger**               | Brikken er leste av flere ganger.                                                                               | Sjekk at brikken er nullet.                                                                                                                         |
| **Før start**                      | Stasjonen har påslått valget ***Ingen prosessering før start*** og passeringstiden er før deltagerens starttid. |                                                                                                                                                     |

Følgende statuser er relatert til autopåmeldingen.

| Status                    | Beskrivelse                                                                 | Løsning 
|:--------------------------|:----------------------------------------------------------------------------|:--------
| **Finner ikke person**    | Fant ingen person med brikkenummeret.                                       |         |
| **Flere personer funnet** | Fant flere personer med brikkenummeret.                                     |         |
| **Finner ikke klasse**    | Fant ikke en klasse som personen kvalifiserer for basert på kjønn og alder. |         |
| **Flere klasser funnet**  | Fant flere klasser som personen kvalifiserer for basert på kjønn og alder.  |         |

### Tidtakingsdata

Feilstatuser i tidtakingsdata og tidtakingstyper

| Status                         | Beskrivelse                                       | Løsning                     |
|:-------------------------------|:--------------------------------------------------|:----------------------------|
| **Løypa har ingen målpost**    | Det er ikke definert noen målpost for løypa.      | Legg til målpost i løypa.   |
| **Løypa har ingen startpost**  | Det er ikke definert noen startpost for løypa.    | Legg til startpost i løypa. |
| **Finner ikke startstempling** | Deltageren mangler stempling på startpost.        |                             |
| **Finner ikke målstempling**   | Deltageren mangler stempling på målpost.          |                             |
| **Mangler stemplinger**        | Deltageren mangler en eller flere poster i løypa. |                             |

Følgende statuser er relatert til mellomtider.

| Status                       | Beskrivelse                                                              | Løsning                                                                                                                                                             |
|:-----------------------------|:-------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Finner ikke post**         | En mellomtid ble registrert på en post som ikke finnes.                  | Sjekk om løypeoppsettet har feil. Korriger og prosesser stasjonsdate på nytt.                                                                                       |
| **Posten er ikke meldepost** | Posten finnes, men er ikke definert som meldepost.                       | Sjekk om posten skulle været definert som meldepost. Korriger og prosesser stasjonsdate på nytt.                                                                    |
| **Finner ikke løypepost**    | Posten finnes, men er ikke en del av deltagerens løype.                  | Sjekk om deltagerens løypeoppsett er riktig. Korriger og prosesser stasjonsdate på nytt  . (Det er ikke unormalt at deltagere stempler på poster de ikke selv har.) |
| **Finner ikke starttid**     | Time4o får ikke beregnet mellomtiden fordi deltageren mangler startttid. | Deltageren har sannsynligvis fristart. Sjekk om stasjonen også kan levere starttid basert på nulltidspunktet.                                                       |

### Overstyr påmelding

I tilfeller der stasjonsdata ikke finner påmeldingen (ukjent brikke ol.), men påmeldingen eksisterer, så er den
kjappeste metoden følgende:

1. Vis aktuell stasjonsdata ved å klikke på tabellraden.
2. Huk av for ***Overstyr påmelding*** og søk opp riktig påmeldingen.
3. Lagre og OK

Stasjonsdataene er låst til påmeldingen og prosesseres på nytt.

## Oppgaver

<TaskList category="StationData" />