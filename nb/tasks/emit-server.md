---
job: EmitServer
title: Emit Server
description: Hent meldinger fra Emit sin meldingsserver
category: StationData
---

# {{ $frontmatter.title }} ({{ $frontmatter.job }})

Oppgaven henter meldinger fra [Emit sin meldingsserver](http://emittiming.cloudapp.net/) med et gitt intervall (5 sekunder er standard).

Oppgaven henter kun nye meldinger etter forrige kjøring.

Oppgaven må være aktiv for å kjøre. Oppgaven kan aktiveres direkte fra dashbordet til arrangementet.

Det må angis hvilke [stasjoner](/nb/resources/event/stations) det skal hentes meldinger for (basert på serienummer). 
Hvis man ikke angis noe, så hentes det fra alle stasjoner med stasjonstype ***Emit Server*** (standard innstilling)

## Tidsplan

Oppgaven har en tidsplan som starter én time før løpets første start og slutter fem timer etter løpets første start.
Tidsplanen kan endres under fanen ***Tidsplaner*** inne på oppgaven.

::: warning OBS!
Enkelte arrangementer i Eventor står med første start 00:00.
Da vil Emitserver-oppgaven starte 23:00 dagen før og slutte 05:00 på morgenen. Det kan derfor være lurt å dobbeltsjekke at tidsplanen er riktig!
:::



## Konfigurasjon

| Innstilling      | Beskrivelse                                                 |
|------------------|-------------------------------------------------------------|
| Stasjoner        | Stasjoner det skal hentes meldinger fra når oppgaven kjøres |
          

## Lenker

- [Emit meldingsserver](http://emittiming.cloudapp.net/)
- [Mellomtider](/nb/guide/tutorials/intermediate-times)   
- [Startsjekk](/nb/guide/tutorials/start-check)   

          



