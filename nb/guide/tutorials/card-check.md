# Brikkesjekk

Time4o støtter både betjent og ubetjent brikkesjekk, og i arrangementer med doble brikker kan begge brikkene sjekkes på samme brikkesjekk. 

Det er dessuten mulig å bruke samme brikkesjekk mot flere løp i samme arrangement hvis f.eks. stafett og individuelle klasser foregår samtidig.

En brikkesjekk består av en [stasjon](/nb/resources/event/stations) og en [infoskjerm](/nb/resources/event/info-screens). Stasjonen brukes til å lese av brikken og infoskjermen viser informasjon om deltageren, eller ev. en feilmelding om brikken er ukjent. 

## Opprett brikkesjekk

1. Gå til stasjonsoversikten (***Tidtaking*** > ***Stasjoner***)
2. Opprett ny stasjon med stasjonsrolle ***Brikkesjekk***
3. Velg ønsket [stasjonstype](/nb/guide/station-types) (tilkoblet via USB)
4. Skriv inn valgfritt navn eller behold det som foreslåes (Merk at navnet vises nede i høyre hjørne på brikkesjekken!)
5. La valget ***Opprett infoskjerm*** være avkrysset såfremt du ikke allerede har opprettet en [infoskjerm](/nb/resources/event/info-screens). Da opprettes det automatisk en infoskjerm som kobles mot stasjonen.
6. Lagre stasjonen
7. Hvis arrangementet har flere løp, sjekk at [løpsstasjonen](/nb/resources/event/stations#race-station) er koblet mot riktig løp.
8. Åpne infoskjermen for eventuelt å endre teksten som vises på infoskjermen. 

Som standard vil brikkesjekken gi deltagere statusen ***Sjekket***. Dette kan endres på løpsstasjonen og feltet **Lås status**.

## Koble opp brikkesjekk

1. [Koble til stasjon](/nb/resources/event/stations#connect)
2. Åpne infoskjermen i eget nettleservindu og vis den på ønsket skjerm. Gjerne i fullskjermmodus. Link finnes på dashbordet. 
3. Gjør en testavlesing og sjekk at det skjer noe på infoskjermen! :-)

::: warning OBS!
Hvis pc-en med brikkesjekken mister nettilgangen over tid kan det være nødvendig å gjøre en refresh av nettsiden slik at den etablerer kontakt med serveren. 
:::

## Ubetjent brikkesjekk

Brikkesjekken kan gjerne settes opp uten å være betjent, med skjermen vent mot løperen. 
Det er mulig å legge inn valgfri tekst ved ukjent brikke, f.eks. beskjed om å henvende seg i informasjonen for å endre brikkernummeret.


## Betjent brikkesjekk

Hvis brikkesjekken betjenes for å håndterer brikkeendringer så fungerer det veldig likt en vanlig brikkeavlesing. 

Funksjonæren overvåker avlesingene fra brikkesjekken i ***Tidtaking*** > ***Stasjonsdata*** og overvåker om de stasjonsdataene som kommer inn knyttes mot en påmeldingen eller ikke. 

::: info Tips!
Det er anbefalt å filtrere stasjonsdata-tabellen etter brikkesjekkens stasjon for skjule stasjonsdata fra andre stasjoner. 
:::

Stasjonsdata som ikke knyttes mot en påmelding, dvs. får en feilmelding, håndteres på følgende måte:
 
1. Klikk på stasjonsdata-raden.
2. Huk av for ***Overstyr påmelding***
3. Søk opp riktig påmelding
4. Huk av for ***Oppdater påmelding og person med brikkenummer*** (som regel huket av)
5. Lagre

Brikkenummeret vil legges på påmeldingen og påmeldingens person. Gammelt brikkenummer slettes. 

::: warning Obs!
En betjent brikkesjekk trenger ikke nødvendigvis en infoskjerm, 
men det er en fordel å vende en infoskjerm mot deltageren slik at deltageren selv kan se at påmeldingen er korrekt.  
:::

::: info Tips!!
Iom. at Time4o støtter flere stasjoner tilkoblet samme datamaskin kan én datamaskin håndtere flere brikkesjekker hvis datamaskinen støtter flere skjermer.
Hver avlesingsenhet knyttes mot hver sin infoskjerm.

Flere brikkesjekker kan dermed betjenes av én funksjonær iom. at funksjonæren kan overvåke stasjonsdata fra flere brikkesjekker i stasjonsdata-tabellen.
:::