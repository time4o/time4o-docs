# Stafett

Time4o har støtte for ulike stafettkonsepter og følger i prinsipp modellen i IOF XML 3.0 med mulighet for blant annet parallelletapper.

Time4o kan importere etappeoppsett, påmeldinger og lagoppstillinger fra Eventor, og eksportere startliste og resultatliste til Eventor.

Det er også mulig å gjenbruke en brikke på flere etapper.

::: warning Obs!
Iom. at stafett-støtten er ny og lite brukt ønsker Time4o å være delaktig når stafett arrangeres. Ta kontakt om du ønsker å arrangere stafett i Time4o.
:::

Under følger en grov oversikt over oppsettet til stafett med utgangspunkt arrangementet importeres fra Eventor.
Flere detaljer kommer etter hvert.

## Opprette arrangement

Importer arrangementet fra Eventor. 
   - Løpet vil automatisk bli satt opp med konkurransetype ***stafett*** og starttype ***fellesstart*** 
   - ***Kilde starttid*** blir dessuten satt til ***tidtaking***, noe som er riktig for alle etapper bortsett fra 1. etappe 
   som automatisk bruker ***startliste*** som i praksis er første start for klassen.
   - ***Kilde starttid mellomtid*** skal alltid være ***startliste***. Alle mellomtider beregnes fra klassens starttid.

## Stasjoner

Opprett to nye stasjoner (dette vil i framtiden skje automatisk)

1. Stasjon med stasjonstype ***stafettveksling***. Velg typer ***starttid*** og ***status***. 
   Prioritet løpsstasjon kan være ***12*** og prioritet data ***bruk første data***
2. Stasjon med stasjonstype ***stafettomstart***. Velg typer ***starttid*** og ***status***.
  Prioritet løpsstasjon kan være ***11*** og prioritet data ***bruk siste data***

I tillegg må avlesingsstasjonen tilpasses slik at den kun leverer tidtakingsdata med type ***Måltid***, ***Strekktid*** og ***Status***.


## Klasser

Ved stafett vises Etappe-fanen på klasse. Etappe-oppsette importeres fra Eventor, men kan også settes opp manuelt i Time4o hvis Eventor ikke benyttes.


## Påmeldinger

I stafett er påmeldinger delt opp i lagspåmeldinger og etappepåmeldinger. Etappepåmeldingene er knyttet mot en lagspåmelding

- Etappepåmeldinger er i prinsipp det samme som påmeldinger i individuelle løp, og innholder tidtakingsdataene. 

- Lagspåmelding inneholder informasjon om navnet på laget, startnummer og hvilken klubber(er) det tilhører.

### Opprette lagspåmelding

Det enkleste er at alle lag melder seg på via Eventor, men det er også mulig å gjøre det direkte i Time4o.
Det må i såfall opprettes en lagspåmelding. Etappepåmeldingene opprettes automatisk basert på klasseoppsettet når det opprettes en lagspåmelding, 
og det er svært sjelden disse skal oppretts manuelt

Etappepåmeldingene er naturligvis uten løpernavn (personer), så når laget er klar må personene legges inn på hver etappe. 
Her kan man søke i Eventor-registerert tilsvarende individuelle løp.

## Starter

I stafett er starter delt opp i lagstarter og etappestarter. Etappestartene er knyttet mot en lagstart.

- Etappestarter er i prinsipp det samme som starter i individuelle løp. 
Etappestarten knyttes mot etappepåmelding, og angir i hovedsak hvilken etappens gafling.

- Lagstarten inneholder kun startnummeret til laget

### Opprette lagstarter

Den enkleste metoden for å opprette lagstarter er å sette opp startnummerserier og gaflinger i løypeleggerprogrammet og så importere dette i Time4o
Når løypene importeres så må det hukes av for ***Opprett lagsstarter***. 

OCAD legger all nødvendig informasjon i IOF XML 3.0 fila slik at de kun er den ene fila som skal importeres for å både få på plass løyper og startnummer.
I andre løypeleggerprogram kan det være at informasjonen om startnummer ligger i egen fil. Pr. nå er ikke støtte for å importere denne på plass, men det er mulig å manuelt slå sammen de to filene.
Ta kontakt med Time4o for bistand. 

Alternativt kan lagstarter opprettes ved å importere en excel-fil via oppgaven [Opprett starter](/nb/tasks/create-starts).

I begge tilfeller bør antall startnummer beregnes i forhold til antall kart som skal trykkes. 
Eventuelt opprett nok, og rydd vekk overflødige lagstarter fra Time4o når antall trykte kart er bestemt.

### Tildele lagstarter

En lagspåmelding må tildeles en lagstart for å gi laget et startnummer og etappene en gafling.

Dette kan gjøres manuelt eller ved hjelp av oppgaven ***Tildel starter*** som tildeler lagstarter og etappestarter til lagspåmeldinger og etappepåmeldinger.

Tildeling kan gjøres via trekking (tilfeldig rekkefølge), seeding og seedinggrupper med trekking, eller alfabetisk rekkefølge.

## Tidtaking


### Omstart

Mer info kommer...


