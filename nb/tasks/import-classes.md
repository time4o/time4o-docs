---
title: Importer klasser
job: Import Classes
description: Importer klasser fra Eventor eller fil
category: RaceClasses
---

# {{ $frontmatter.title }}

### Beskrivelse

Klasser kan importeres fra Eventor eller fra fil i formatet IOF XML 3.0.

Klasser vil også opprettes i forbindelse med import av påmeldinger,
men iom. at informasjonen om klassen ofter er manglefull når det gjøres på den måten så anbefales det alltid å importere klassene fra Eventor i tillegg.

::: warning Obs!
Ved import fra Eventor så mangler dessverre informasjonen om resultlistetype for klassen, så dette må sette opp manuelt i Time4o selv om informasjonen ligger i Eventor.
Resultlistetype settes kun første gangen en klasse importeres for å ikke overskrive manuelle endringer ved eventuelle senere importer.
:::



### Konfigurasjon

| Innstilling      | Beskrivelse                                                                                          |
|------------------|------------------------------------------------------------------------------------------------------|
| Løp            | Løpet det skal importeres klasser til                                                                |
| Kilde        | Velg om påmeldingene skal imporeres fra Eventor eller fil. Eventor benytter filformatet IOF XML 3.0. |
| Connection   | Hvis kilde er Eventor må connection velges.                                                          |

## Lenker

[NOF sin regler for klasseoppsett](https://www.orientering.no/storage/Preview?id=8e9e811f-c6f2-455a-950a-aaa47adcbd1f)  