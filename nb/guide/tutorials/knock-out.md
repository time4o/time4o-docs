# Knock-out sprint

Time4o støtter knock-out sprint og flere ulike måter å fordele deltagere fra heat til heat.


## Prolog

Prologen kjøres som en vanlig sprint med intervallstart. Det er i prologklassene at deltagerne melder seg på. 

#### Annet løp som prolog

I noen tilfeller ønsker man å bruke et annet løp brukes som prolog, f.eks. et eget individuelt sprintløp som er arrangert en annen dag.
Dette løpet bør kjøres i samme arrangement som knock-out-løpet i Time4o for å forenkle veien videre. 

For å kunne fordele løperne fra prologen til finaler så må resultatene fra dette løpet kopieres over til prolog-klassene til knock-out-løpet.

Først må det [opprettes én egendefinert oppgave](/nb/tasks#create) med jobb ***Copy Entries***.

Denne kjøres med følgende innstillinger:
- Velg riktig kildeklasse og målklasse
- ***Kopier påmelding*** skal **IKKE** være valgt. Det samme gjelder ***kopier start*** og ***inkluder brikker***.
- Huk av for ***kopier resultat*** 
  - ***Stasjon*** skal være ***overstyr resultat*** 
  - ***Typer*** skal være ***status*** og ***tid***.
- ***Kopier stasjonsdata*** skal IKKE brukes.

[Les mer om oppgaven her](/nb/tasks/copy-entries)


## Heat (klasser)

### Oppsett

Alle heat må opprettes som en egne klasser, og settes opp som fellesstart med heatets starttid som ***første start*** på klassen og ***kilde starttid*** til ***startliste***.

::: warning Viktig!
Klassenavnet må ende med nummeret på heatet for at fordeling av deltagere i heatene skal fungere. Kvartfinale 1 for D21 må hete "D 21 kvartfinale 1" for at Time4o skal skjønne at dette er heat 1.  
:::

Heatene kan opprettes som klasser i Eventor slik at resultatene enkelt kan lastes opp i Eventor for alle heat.
Husk å unnta disse klassene for påmelding i Eventor.


### Fordeling

Deltagere skal ofte fordeles fra prolog til kvartfinale, kvartfinale til semifinale og semifinale til finale.

Time4o har en dedikert oppgave som fordeler deltagerne. Det er ingen begrensinger på hvor mange finale-nivåer man kan ha. 
Det er mulig å ha åttendedelsfinaler, eller å gå direkte fra prolog til finale.

Først må det [opprettes én eller flere egendefinerte oppgaver](/nb/tasks#create) med jobb ***knockout***.

Denne oppgaven bør kjøres når alle heat på samme nivå er ferdig og resultatene er klare, 
men i prinsipp kan oppgaven også kjøre selv om f.eks. kun 3 av 6 kvartfinaler er ferdig, og så enda en gang når alle er ferdig.

[Les mer om oppgaven her](/nb/tasks/knockout)

::: info Tips!
Hvis det er gafling i klassene det fordeles til bør valget ***Sett seeding basert på resultat*** vurderes slik at startnummer og gafling kan tildeles etter plassering i foregående prolog/heat
:::

## Runners choice

Arrangør kan enkelt registrere deltagerens gaflingsvalg (runners choice) på start.

### Oppsett

Først må [løypene importeres](/nb/tasks/import-courses) på vanlig måte. Den anbefales å ha korte løypenavn.

Løypene (gaflingsvariantene) må legges til på sine respektive klasser (heat). 

### Gjennomføring

Gå til ***Løyper*** > ***Løypetildeling***.

Velg klassen fra rullegardinlista og alle deltagere og løypene i klassen der løypene er knapper som kan trykkes på for å tildele løypen. 
Hvis man trykker feil er det bare å korrigere ved å trykke på den riktige. Det er også mulig å trykke på samme knapp en gang til for å reversere valget.

Løypa lagres på starten til deltagerens påmelding. Hvis deltageren ikke har en start så opprettes den.

Siden er mobilvennlig såfremt ikke det er mange og lange løypenavn.


## Gafling

Det er mulig å gafle heatene. Gaflingsoppsettet kan importeres i god før løpsdagen slik at man kun trenger å tildele startnummer og gafling på løpsdagen.

### Importer løyper

Først må [løypene importeres](/nb/tasks/import-courses) på vanlig måte.

### Opprette starter

Gaflingoppsettet med klasse, startnummer og løype settes opp i et [excel-ark](/nb/tasks/create-starts#excel). Kolonneoverskriftene må være: 
- CLASS NAME
- BIB NO
- COURSE NAME

Dette excel-arket importeres via oppgaven [opprett starter](/nb/tasks/create-starts) med følgende innstillinger 
- Velg riktig løp og ikke velg noen klasser.
- ***Opprett fra*** skal være ***Fil Excel***. 
- ***Automatisk tildeling av løype*** er ikke relevant her og skal forbli ***ingen tildeling***.

De relevante klassene har nå fått ledige starter med startnummer og løype (gafling).

### Tildele starter

Når heatene som skal gafles er klare, dvs. de har fått deltagere, så kan startene tildeles via oppgaven [tildel starter](/nb/tasks/assign-starts).

Tildelingsmetode skal være enten ***trekk*** eller ***seeding***. Hvis det er kvartfinaler der deltagerne har fått en seeding basert på resultatet sitt i prologen (ref. tipset lenger oppe) så anbefales ***seeding***. 


## Endelig resultatliste

En oppgave for å produsere endelige resultatliste etter NM-regler er under arbeid.

## Liveresultater

Kommer...