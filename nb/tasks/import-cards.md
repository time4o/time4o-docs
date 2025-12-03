---
job: Import Cards
title: Importer brikker
description: 
category: Cards
---

# {{ $frontmatter.title }}  ({{ $frontmatter.job }})

### Beskrivelse

Brikker (leiebrikker) kan importeres til brikkeregisteret fra fil eller fra en stasjon.

### Import fra fil

Filer av typen excel, csv eller lignende kan importeres. Første kolonne må inneholde brikkernummeret, og andre kolonne kan inneholde valgfri informasjon.

Kolonner kan være separert av kolon, semikolon eller tabulator.

### Import fra stasjon

Brikker kan leses inn via en stasjon og importeres til brikkeregisteret. 

[Opprett en stasjon](/nb/resources/event/stations) **uten** løpsstasjoner. 

Les av brikkene på stasjonen og importér deretter brikkene via denne oppgaven. Det er mulig å importere fra stasjonen flere ganger. 
Det som er importert tidligere blir ikke importert på nytt.


### Innstillinger

| Innstilling                    | Beskrivelse                                                                         |
|--------------------------------|-------------------------------------------------------------------------------------|
| Brikketype                     | Hvilken brikketype skal brikkene få                                                 |
| Leiebrikke                     | Marker brikkene som leiebrikker                                                     |
| Importér info                  | Importér info                                                                       |
| Info (import fra stasjon)      | Gi brikkene denne infoen                                                            |
| Overskriv eksisterende brikker | Info og leiebrikke-valget oppdateres for eksisterende brikker med samme brikketype. |
 



