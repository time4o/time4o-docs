# Jaktstart

Time4o støtter jaktstart og oppsett av startliste basert på andre resultater i Time4o eller import av IOF XML startliste som f.eks. kan eksporteres fra seriene i Eventor.

Ved jaktstart kan enkeltklasser eller hele løpet settes opp som jaktsstart (starttype).

Det er også støtte for jaktstart i flerdagersløp. 

## Startliste

På samme måte som for løp med individuell start foregår oppsett av startliste i to steg:

#### 1. Opprett starter 

Bruk oppgaven [Opprett starter](/nb/tasks/create-starts.md) for å opprette starter fra IOF XML, Excel eller direkte fra resultater fra annet løp i Time4o. Sistnevnte alternativ er det aller enkleste. 

Når startene er opprettet ligger de som ledige starter, men de har en [identifikator](/nb/resources/common/identifiers) som gjør at Time4o vet hvilken person starttiden tilhører.

#### 2. Tildel starter

Tildeling av starter skjer via oppgaven [Tildel starter](/nb/tasks/assign-starts.md). 
Tildelingsmetode skal være ***Identifisér*** da det er det som gjør at Time4o kan tildele riktig starttid til riktig påmelding. 

En forutsetning for at dette skal fungere er at personen også har en [identifikator](/nb/resources/common/identifiers). Alle som er påmeldt via Eventor har dette.

Tildelingen kan gjøres i flere omganger. Dette betyr at man kan opprette startene så snart de er klare, og før påmeldingen til jaktstarten har stengt. 
Etter hvert som det kommer inn etteranmeldinger kan man kjøre oppgaven på nytt og de etteranmeldte vil får tildelt sin starttid.

::: warning OBS!
Hvis deltagere kun er påmeldt jaktstarten, så vil de ikke ha en start(starttid) tilgjengelig. For disse må starter opprettes og tildeles manuelt.  
:::


## Resultater

### PDF

Oppgaven [Resultatliste](/nb/tasks/result-list) som viser resultater i PDF-format må tilpasses for å vise jaktstartresultatene.
(Som standard viser oppgaven netto løpstid og plassering.)

Hent fram kolonnene **Totalplassering**, **Totaltid** og **Totaltid bak** og velg sortering etter **Totalplassering** for å vise jaktstartresultater.


### Eventor

Ved opplasting av resultater til Eventor brukes nettotider som standard. 
I oppgaven  [Eksportér resultater](/nb/tasks/export-results.md) kan man velge **Bruk totaltid i jaktstart-klasser** for heller å laste opp totaltidene.
I begge tilfeller kan man lage en PDF-resultatliste som man legger i Eventor slik at både netto løpstider og jakstartresultater er tilgjengelig.

### Liveresultater

Liveresultatene håndterer jaktstart automatisk så lenge man har satt jakstart som starttype. 


## Hjelp

Ta gjerne kontakt med support om du har spørsmål eller behov for hjelp rundt jaktstart.
