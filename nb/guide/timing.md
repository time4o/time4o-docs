# Tidtaking

## Generelt

Et viktig prinsipp i Time4o er at data skal lagres i sin opprinnelige form (rådata), og ikke skal kunne endres av
systemet.
Som standard vil de fleste typer stasjonsdata ikke kunne slettes, og må deaktiveres for å unnlates i tidtakingen. Dette
gjør at det er
mulig å aktivere dataene igjen hvis de ble deaktivert ved en feil.

Hvis systemet er feilkonfigurert skal det være enkelt og sikkert og rekonfiguere og prosessere stasjonsdata på nytt for
å produsere riktige resultater.

## Stasjonsdata og tidtakingsdata {#data}

For å produsere stasjonsdata og tidtakingsdata må det [opprettes en stasjon](/nb/resources/event/stations#create).

Stasjonsdata kan ikke endres med noen unntak (f.eks. manuelle stasjonsdata).

Stasjonsdata "prosesseres" til tidtakingsdata basert på innstillinger på stasjonen og klassen/løpet.
Tidtakingsdata er typisk sluttiden eller statusen til deltageren og er noe som kan endre seg om innstillingene endres og
stasjonsdata prosesseres på nytt.
Et eksempel på en innstilling er om løpet kjører brikketid eller ikke, noe som typisk vil påvirke starttiden og
sluttiden.

Tidtakingsdataene er det som danner grunnlaget for resultatlisten. En deltager kan ha flere tidtakingsdata av samme
type, og hvilke som brukes som resultat er avhenging av prioriteten til stasjonen.
Hvis en deltagere har flere statuser så er det statusen fra stasjonen med best prioritet (lavest verdi) som brukes som
resultat.

En brikkesjekk vil derfor ha dårligst prioritet, en startsjekk nest dårligst prioritet, en målpassering nest best
prioritet og en avlesing/disksjekk best prioritet.
På denne måten vil en løper starte med status ***Sjekket*** etter brikkesjekk, deretter ***Startet*** etter startsjekk,
***Fullført*** etter målpassering og tilslutt ***OK*** etter avlesing.

### Prosessering {#process}

Stasjonsdata prosesseres automatisk til tidtakingsdata én gang. Hvis prosesseringen skal gjentas må den startes manuelt
ved å markere stasjonsdataene i tabellen og trykke knappen ***prosessér*** eller ved å åpne stasjonsdataene og så lagre.

Å prosessere på nytt kan være aktuelt hvis det f.eks. er rettet feil starttid, innstillinger eller oppsett.

::: warning Obs!
Tidtakingsdata kan kun endres/oppdateres ved å prosessere stasjonsdata på nytt.
:::

### Overstyring

Iom. at de fleste stasjonsdata ikke kan endres så må de overstyres med nye stasjonsdata i de tilfeller de ikke er som
ønsket.

Fordelen med denne måten å gjøre det på er at det er full sporbarhet i datagrunnlaget for et resultat. Det er lett og se
hvilke deltagere som er behandlet
manuelt, og det er lett å reversere endringer som er gjort. De opprinnelige dataene fra avlesingen ligger uendret.

**Eksempel**

En deltager mangler en post og får status ***MissingPunch*** ved avlesing (Status er en type tidtakingsdata!). Det viser
seg at deltageren har en backuplapp som bekrefter at hen har vært på posten, så vi ønsker å godkjenne deltageren.

Vi kan ikke endre stasjonsdataene som stammer fra avlesingen slik at vi får endret ***status***, så vi må opprette nye
stasjonsdata som overstyrer stasjonsdataene fra avlesingen.

I dette tilfellet åpner vi påmeldingen setter ***status*** til ***OK*** under **Overstyr resultat**.
**Overstyr resultat** er i praksis en stasjon som har bedre prioritet enn alle andre stasjoner, og statusen fra denne
vil derfor overstyre statusen fra avlesingen.

[Se jukselappen for feilsituasjoner og løsninger](/nb/guide/cheat-sheet)

## Brikkeavlesing {#readout}

### Koble til stasjon

1. [Opprett en stasjon](/nb/resources/event/stations#create)
2. [Koble til stasjon](/nb/resources/event/stations#connect)

### Avlesing

Når stasjonen er koblet til så er det klart for å lese av brikker.

Gå til siden ***Tidtaking*** > ***Stasjonsdata*** og les av brikker. Ved avlesing opprettes det stasjonsdata som vises
øverst i tabellen.

Det første systemet gjør er å forsøke å identifisere stasjonsdatane, dvs. finne ut hvilken påmelding dataene tilhører.

***Datastatus*** viser en [feilstatus](/nb/guide/timing#error-status) en feilstatus hvis f.eks. brikkenummeret er
ukjent, eller det mangler målpost i løypeoppsettet.

Hvis datastatus er uten feilmelding, "prosesseres" stasjonsdata til tidtakingsdata som vil vises på linje to.
Hvilke typer tidtakingsdata som opprettes er bestemt av hva slags stasjon det er og innstillingene på løpsstasjonen.

Så lenge ingen av tidtakingsdatene er røde er alt i orden og deltageren er godkjent.

[Se jukselappen for feilsituasjoner og løsninger](/nb/guide/cheat-sheet)

::: info Tips!
Alle stasjonsdata, uavhengig av stasjon, vises i stasjonsdata-tabellen. Hvis det hentes stasjonsdata fra flere
stasjoner, som f.eks. mellomtider fra Emit sin server og brikkesjekk så vil tabellen bli full av data som ikke er
relevant for
avlesingen.
Bruk derfor stasjonsfilteret for kun å se stasjonsdata fra din avleser-stasjon.
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
|:-----------------------------------|:----------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------
| **Lagret**                         | Stasjonsdata er lagret i systemet.                                                                              |
| **I kø**                           | Stasjonsdata venter i kø på å bli prosessert.                                                                   |
| **Ikke i kø**                      | Stasjonsdata ble ikke lagt i køen av ukjent årsak.                                                              | [Prosesser stasjonsdata](/nb/guide/timing#process) på nytt. Kontakt Time4o support hvis det gjentar seg.                                                  |
| **Finner ikke løpsstasjon**        | Stasjonen har ingen løpsstasjoner.                                                                              | Legg til løpsstasjon.<br/>[Prosesser stasjonsdata](/nb/guide/timing#process)                                                                              |
| **Mangler brikkernr. og startnr.** | Stasjonsdata mangler både brikkenummer og startnummer.                                                          | Alle stasjonsdata bør ha brikkenummer eller startnummer. Ta kontakt med Time4o support.                                                                   |
| **Finner ikke brikke**             | Brikkenummeret finnes ikke i arrangementet.                                                                     | [Overstyr påmelding](/nb/guide/cheat-sheet#timing)                                                                                                        |
| **Flere brikker funnet**           | Fant flere brikker med brikkenummeret. (De må i såfall ha ulik brikketype.)                                     | [Overstyr påmelding](/nb/guide/cheat-sheet#timing)<br/>Hvis dette gjentar seg bør man vurdere å endre løpsstasjonen til kun å håndtere ønsket brikketype. |  
| **Finner ikke start**              | Fant ingen start med startnummeret.                                                                             | [Overstyr påmelding](/nb/guide/cheat-sheet#timing)                                                                                                        |
| **Flere starter funnet**           | Fant flere starter med samme startnummer.                                                                       | [Overstyr påmelding](/nb/guide/cheat-sheet#timing) Sjekk gjerne hvorfor samme startnummer eksisterer flere ganger.                                        
| **Finner ikke påmelding**          | Fant ingen påmelding. Brikkenummer eller startnummer er derimot funnet.                                         | [Overstyr påmelding](/nb/guide/cheat-sheet#timing)                                                                                                        |
| **Flere påmeldinger funnet**       | Fant flere påmeldinger med angitt brikkenummer eller startnummer.                                               | [Overstyr påmelding](/nb/guide/cheat-sheet#timing)                                                                                                        
| **Ingen løype**                    | Påmeldingens klasse eller start har ingen løype.                                                                | Legg til løype på klassen eller starten.<br/>[Prosesser stasjonsdata](/nb/guide/timing#process)                                                           
| **Ingen stemplinger**              | Stasjonsdata har ingen poststemplinger.                                                                         | Prøv ny avlesing. Sjekk at avleser bruker riktig kode og protokoll.                                                                                       
| **Flere avlesinger**               | Brikken er leste av flere ganger.                                                                               | Sjekk at brikken er nullet.                                                                                                                               |
| **Før start**                      | Stasjonen har påslått valget ***Ingen prosessering før start*** og passeringstiden er før deltagerens starttid. |                                                                                                                                                           |

Følgende statuser er relatert til autopåmeldingen.

| Status                    | Beskrivelse                                                                 | Løsning   
|:--------------------------|:----------------------------------------------------------------------------|:----------
| **Finner ikke person**    | Fant ingen person med brikkenummeret.                                       | Kommer... |
| **Flere personer funnet** | Fant flere personer med brikkenummeret.                                     | Kommer... |
| **Finner ikke klasse**    | Fant ikke en klasse som personen kvalifiserer for basert på kjønn og alder. | Kommer... |
| **Flere klasser funnet**  | Fant flere klasser som personen kvalifiserer for basert på kjønn og alder.  | Kommer... |

### Tidtakingsdata

Feilstatuser i tidtakingsdata og tidtakingstyper

| Status                         | Beskrivelse                                       | Løsning                                                                        |
|:-------------------------------|:--------------------------------------------------|:-------------------------------------------------------------------------------|
| **Løypa har ingen målpost**    | Det er ikke definert noen målpost for løypa.      | Legg til målpost i løypa. [Prosesser stasjonsdata](/nb/guide/timing#process)   |
| **Løypa har ingen startpost**  | Det er ikke definert noen startpost for løypa.    | Legg til startpost i løypa. [Prosesser stasjonsdata](/nb/guide/timing#process) |
| **Finner ikke startstempling** | Deltageren mangler stempling på startpost.        |                                                                                |
| **Finner ikke målstempling**   | Deltageren mangler stempling på målpost.          |                                                                                |
| **Mangler stemplinger**        | Deltageren mangler en eller flere poster i løypa. |                                                                                |

Følgende statuser er relatert til mellomtider.

| Status                       | Beskrivelse                                                              | Løsning                                                                                                                                                                                         |
|:-----------------------------|:-------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Finner ikke post**         | En mellomtid ble registrert på en post som ikke finnes.                  | Sjekk om løypeoppsettet har feil. Korriger og [prosesser stasjonsdata](/nb/guide/timing#process) på nytt.                                                                                       |
| **Posten er ikke meldepost** | Posten finnes, men er ikke definert som meldepost.                       | Sjekk om posten skulle været definert som meldepost. Korriger og [prosesser stasjonsdata](/nb/guide/timing#process) på nytt.                                                                    |
| **Finner ikke løypepost**    | Posten finnes, men er ikke en del av deltagerens løype.                  | Sjekk om deltagerens løypeoppsett er riktig. Korriger og [prosesser stasjonsdata](/nb/guide/timing#process) på nytt  . (Det er ikke unormalt at deltagere stempler på poster de ikke selv har.) |
| **Finner ikke starttid**     | Time4o får ikke beregnet mellomtiden fordi deltageren mangler startttid. | Deltageren har sannsynligvis fristart. Sjekk om stasjonen også kan levere starttid basert på nulltidspunktet.                                                                                   |

## Oppgaver

<TaskList category="StationData" />