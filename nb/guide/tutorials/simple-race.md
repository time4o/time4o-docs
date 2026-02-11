# Enkelt o-løp

Å sette opp et o-løp der alle har fristart er relativt kjapt og enkelt i Time4o.
Fristart er standard innstilling for alle nye løp.


## Før arrangementet

I oppskriften refereres det til diverse oppgaver for blant annet import og eksport av data. 
Oppgavene finnes under relevant menypunkt og knappen med tre vertikale prikker.

1. [Opprett arrangementet](/nb/resources/hub/event)
   - Husk å velg hva slags [avleser-stasjon](/nb/resources/event/stations) du skal bruke så slipper du å legge til den senere.

##### Klasser

2. [Opprett eller importer klasser](/nb/resources/event/classes) hvis import ikke ble gjort i forbindelse med opprettelse av arrangementet.

::: warning OBS!
Klasser opprettes også i forbindelse med import av påmeldinger, men kun klasser det er påmeldte i, og med manglende innstillinger som aldersgrenser o.l.
:::

3. Sjekk at klassene har riktig ***Resultatlistetype*** (vanlig, usortert, uten tid). Denne innstillingen følger ikke nødvendigvis med fra Eventor, men Time4o forsøke å sette den automatisk basert på klassenavn.

##### Påmeldinger

4. [Opprett eller importer påmeldinger](/nb/resources/event/entries) hvis import ikke ble gjort i forbindelse med opprettelse av arrangementet. Import kan gjøres flere ganger

##### Løyper

5. [Opprett eller importer løyper](/nb/resources/event/courses_controls). 
   - Husk å sett målkode (koden på målbukken) så slipper du å gjøre det senere. 
   - Hvis løypefila inneholder klasseoppsett vil Time4o koble løype mot klasse automatisk såfremt klassenavn matcher.

6. Sjekk at alle klasser har en løype og koble løype til klasse hvis noen mangler.

##### Annet

7. Sjekk at de to Center-oppgavene på dashbordet er aktive for [liveresultater](/nb/resources/hub/centers).
   
8. Sjekk at du ikke har noen advarsler på dashbordet!

## Under arrangementet

1. [Koble til stasjon og les av brikker](/nb/guide/timing#readout)
   - Husk å still klokka! 
   - Det anbefales å slette alle tidligere meldinger hvis eScan2 eller MTR4
   - Ved emiTag og flere avlesere (også brikkesjekk) er det viktig at avleserne har ulik kode!

2. Håndter feilsituasjoner ved hjelp av [jukselappen](/nb/guide/cheat-sheet).

3. Følge med på **Statuser** på dashbordet for oversikt over antall løpere som er ute i skogen (Inaktiv). Klikk på statusen for en liste er påmeldinger med statusen.

## Etter arrangementet

1. Løpere med status **Inaktiv** bør settes til **Ikke startet**. Gjøres ved å klikke på statusen for å vise alle påmeldinger uten status, markere alle påmeldinger og menyvalget ***Opprett status "Ikke startet"*** via menyen.

2. [Eksporter resultater](/nb/tasks/export-results) til Eventor eller generer en resultatliste som pdf (***Resultater -> Resultatliste***).

3. [Fakturering](/nb/guide/tutorials/invoicing) 

## Neste steg

Et enkelt o-løp kan utvides med mer funksjonalitet.

- Åpne for direktepåmelding (dokumentasjon kommer)
- [Opprette starter](/nb/resources/event/starts) (trekke startliste)
- [Startsjekk](/nb/guide/tutorials/start-check), [brikkesjekk](/nb/guide/tutorials/card-check) og [mellomtider](/nb/guide/tutorials/intermediate-times)
