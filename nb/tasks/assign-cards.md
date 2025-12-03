---
title: Tildel brikker
job: Assign Cards
description: 
category: Cards
---

# {{ $frontmatter.title }}

### Beskrivelse

Denne oppgaven kan tildele ledige leiebrikker, eller tildele brikker fra annet løp i samme arrangement.

Begge metodene støtter å tildele brikker til påmeldinger uten brikker, eller til alle påmeldinger.

::: warning OBS!
Hvis ***Mål*** er ***Alle påmeldinger*** så vil påmeldinger som allerede har brikke få tildelt ny brikke.
:::

Oppgaven kan [tidsstyres](/nb/tasks#schedules).

## Tildeling av leiebrikker

På forhånd må leiebrikkene være opprettet slik at de er tilgjengelige i brikkeregisteret. 
Se oppgaven [Importer brikker](/nb/tasks/import-cards) for å importere brikker fra fil eller ved avlesing på en stasjon. 

***Kilde*** skal være ***Ledige leiebrikker***. 

De ledige leiebrikker tildeles etter brikkenummer i stigende rekkefølge, og påmeldingene sorteres etter klubb og starttid slik at det er enklere å pakke leiebrikkene klubbvis hvis det er ønsket.

## Tildele brikker fra annet løp

I typisk flerdagersløp kan det være nyttig å kunne tildele brikker fra tidligere etapper slik at man får med seg brikkeendringer fra dag til dag.
Det er påmeldingens person som benyttes for å finne påmeldinger i tidligere løp.

***Kilde*** skal være ***Brikker fra påmeldinger annet løp*** og ***Løp*** skal være løpet brikken skal hentes fra.

***Mål*** må være ***Alle påmeldinger*** om alle brikkeendringer fra tidligere løp skal oppdateres.

## Konfigurasjon

### Kilde

| Innstilling   | Beskrivelse                        |
|---------------|------------------------------------|
| Kilde         | Hvor skal brikker hentes fra.      |
| Brikketype    | Hent brikker med valgt brikketype. |

### Mål

| Innstilling    | Beskrivelse                               |
|----------------|-------------------------------------------|
| Mål            | Hvilke påmeldinger skal tildeles brikke.  |
| Løp og klasser | Løp og klasser det skal tildeles brikker. |




