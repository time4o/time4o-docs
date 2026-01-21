---
job: Create Starts
title: Opprett starter
description: 
category: Starts
---

# {{ $frontmatter.title }}  ({{ $frontmatter.job }})

### Beskrivelse

Denne oppgaven oppretter [starter](/nb/resources/event/starts), dvs. startnummer og starttider, basert på [klasseoppsettet](/nb/resources/event/classes#start).
Det er også mulig å importere starter fra fil, eller fra et annet løp i samme arrangement i forbindelse med jaktstart.

Ved individuell gafling består en start også av en løype.

Antall starter som bli opprettet for en klassen tilsvarer antall påmeldte i klassen pluss ledige starter angitt på klassen.

Klasser med samme løype tildeles starttider etter hverandre, såfremt ikke ***først start*** er satt på klassen. 

Rekkefølgen bestemmes av klasseinnstillingen ***rekkefølge trekking***.

::: warning OBS!
Hvis du ønsker å plassere løyper etter hverandre må løypene plasseres i samme startbås (innstilling på løypen). Rekkefølgen styres fortsatt på klassene slik at det er mulig å flette klasser med forskjellige løyper.
:::

 
#### Fletting av klasser

Hvis du ønsker å flette klasser med samme løype må ***første start*** settes på alle involverte klasser selv om en av klassene arver riktig ***første start*** fra løpet.

## Opprett starter fra fil

### IOF XML 3.0 (StartList)

Hvis man kjører en poengserie i Eventor med jaktstart tilslutt så kan Eventor generer en jaktstartlist i dette formatet.

### Excel

Følgende kolonner støttes:
- CLASS NAME (obligatorisk)
- LEG (obligatorisk i stafett)
- BIB NO (obligatorisk)
- START TIME
- COURSE NAME

Hvis kombinasjonen av klasse, etappe (stafett) og startnummer allerede eksisterer, så oppdateres eksisterende start.

OBS! Hvis verdien i kolonnen COURSE NAME eller START TIME er tom så vil løypen eller starttiden fjernes fra starten.

## Tildel løype

Valget for å tildele løype er **kun tiltenkt løp med individuell gafling**, og skal ikke brukes i vanlig løp med én løype per klasse.

Alle løypene (gaflingene) legges på klassen. Når startene opprettes vil de få tildelt løype fra klassene i rekkefølgen de ligger på klassen.

## Konfigurasjon

| Innstilling                | Beskrivelse                                                           |
|----------------------------|-----------------------------------------------------------------------|
| Løp                        | Løpet det skal opprettes starter for.                                 |
| Klasse                     | Klassene det skal opprettes starter for.                              |
| Slett eksisterende starter | Slett eksisterende starter for valgte klasser før opprettelse av nye. |
| Opprett fra                | Hvor skal starttidene hentes fra.                                     |
| Tildel løype               | Tildel løyper (gaflinger) når startene opprettes.                    |

