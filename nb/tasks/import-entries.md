---
job: Import Entries
title: Importer påmeldinger
description: Importer påmeldinger fra Eventor eller fil
category: Entries
---

# {{ $frontmatter.title }}

### Beskrivelse

Oppgaven importerer påmeldinger fra fil eller direkte fra Eventor. Henting fra Eventor kan automatiseres ved hjelp av en [tidsplan](/nb/tasks#schedules).

### Konfigurasjon

| Innstilling                       | Beskrivelse                                                                                         |
|-----------------------------------|-----------------------------------------------------------------------------------------------------|
| Løp                               | Løpet som påmeldingene skal importeres til                                                          |
| Kilde                             | Velg om påmeldingene skal imporeres fra Eventor eller fil. Eventor benytter filformatet IOF XML 3.0. |
| Connection                        | Hvis kilde er Eventor må connection velges.                                                         |
| Filformat                         | Hvis kilde er Fil må filformat velges                                                               |
| Fil                               | Hvis kilde er Fil må fil velges.                                                                    |
| Stemplingssystem                  | Kun importer brikker med dette stemplingssystemet                                                   |
| Match etter (ved filformat Excel) | Finn og eventuelt oppdater eksisterende påmeldinger ved hjelp av valgt felt                         |


## Formater

### IOFXML30 / Eventor

IOF XML 3.0 (EntryList)

Importen oppretter klasser, personer, organisasjoner, brikker, produkter og knytter dette sammen til en påmelding.

Importen bruker [identifikatorer](/nb/resources/common/identifiers)   for å matche påmeldinger fra importen mot eksisterende påmeldinger i Time4o.
Hvis en bruker har gjort endringer på en påmelding i Time4o så vil importen ikke overskrive denne påmeldingen, men gi en advarsel.

Påmeldinger i Time4o med samme [indentifikatortypen](/nb/resources/common/identifiers) som påmeldingene fra importen, vil settes til ***Avmeldt*** hvis de mangler i importen.
Importen må derfor inneholde en komplett oversikt over alle påmeldinger for den aktuelle indentifikatortypen.

### Excel/csv
          
Påmeldinger, personer, starter etc. kan importeres fra fil. Flere filtyper som .xlsx, .xls, .csv støttes. 

Kolonnetittelen forteller Time4o hva slags data kolonnen inneholder. 
Rekkefølgen på kolonnene er valgfri og fila kan også inneholde flere kolonner uten at det påvirker importen så lenge kolonnetittelen er ukjent for Time4o.

Kolonnetitlene må oppgis nøyaktig slik de er dokumentert her.

[Se eksempelfil](https://docs.google.com/spreadsheets/d/1yp9BSKvKSrEgeQ2qA35sr2R9eGYDd1mQ/edit?usp=sharing&ouid=115982326307907416767&rtpof=true&sd=true)

::: warning OBS
Husk at blanke verdier vil fjerne data fra Time4o. Hvis brikkenummer-kolonnen (CARD NO) er med i fila, med radene i fila ikke har brikkenummer, så vil eksisterende påmeldinger i Time4o miste brikkenummeret.
:::

#### Argumenter

Noen kolonner kan inneholde et ekstra argument.
Hvis f.eks. arrangementet har flere brikketyper må navnet på brikketype angis adskilt med kolon.

Eksempel: "CARD NO:emiTag"

#### Kolonner

Obligatoriske kolonner (minimum én)

| Kolonnetittel                     | Beskrivelse                                                                                                                                                                                                                                 |
|-----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ENTRY IDENTIFIER                  | En unik ID for påmeldingen. Ligger i feltet ***Identifikator*** ti påmeldingen. ***Identifikatortype*** kan angis som argument, alternativt benyttes standard brikketype. Påmelding opprettes om den ikke eksisterer.                       |
| PERSON IDENTIFIER                 | En unik ID for person som tilhører påmeldingen. ID'en ligger i feltet ***Identifikator*** til personen. ***Identifikatortype*** kan angis som argument, alternativt benyttes standard brikketype. Personen opprettes om den ikke eksisterer |
| PERSON FIRST NAME og PERSON LAST NAME                 | Fornavn og etternavn i hver sin kolonne. Personen opprettes om den ikke eksisterer.                                                                                                                                                         |
| PERSON NAME                 | Fullt navn (fornavn + etternavn) Kan kun brukes til å oppdatere eksisterende data.                                                                                                                                                          |

Valgfrie kolonner

| Kolonnetittel        | Beskrivelse                                                                                                                        |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------|
| PERSON SEX           | Personens kjønn. Mann kan oppgis som M, Male, Man, Men, Mann, Gutt. Kvinne kan oppgis som F, Female, Woman, Women, Kvinne, Jente   |
| PERSON BIRTHYEAR | Personens fødselsår. Format: 2025                                                                                                  |
| PERSON BIRTHDATE     | Personens fødselsdato. Format: 2025-12-31                                                                                          |
| PERSON SEEDING       | Personens seedingverdi (seedinggruppe)                                                                                             
| PERSON POINTS        | Personens poeng (typisk WRE-poeng)                                                                                                 
| PERSON BIB NO        | Personens startnummer. OBS! Kun til flerdagers eller andre særtilfeller. Bruk BIB NO i vanlige løp.                                
| CLASS NAME           | Klassenavn. Obligatorisk hvis det skal opprettes nye påmeldinger. Klassen opprettes om den ikke eksisterer.                        
| ORGANISATION NAME    | Navn på organisasjon (klubb). Organisasjonen opprettes om den ikke eksisterer.                                                     
| CARD NO              | Brikkenummer. Brikketype kan angis som argument, alternativt benyttes standard brikketype.                                         |
| BIB NO               | Startnummer. Oppretter start med angitte startnummer.                                                                              |
| START TIME           | Starttid. Oppretter start med angitte starttid. Format: 2025-12-31 23:59:59. Dato kan utelates og løpets dato blir i såfall brukt. |
| COURSE NAME          | Løypenavn. Oppretter start med angitte løype. Kun nødvendig ved individuell gafling.                                               |


Ta kontakt med Time4o support om du savner kolonner i importen.