---
job: CopyEntries
title: Kopier påmeldinger
description: Kopier påmeldinger fra en klasse til en annen, eller annen informasjon fra påmelding til påmelding
category: Entries
---

# {{ $frontmatter.title }} ({{ $frontmatter.job }})

### Beskrivelse

Denne oppgave kopierer påmeldinger fra en (eller flere) klasser til en annen klasse.

I stafett kan oppgaven f.eks. brukes til å lage en egen resultatliste uten mikslag.

Oppgaven kan også brukes til kun å kopiere starter, brikker og resultat fra påmeldinger i en klasse til eksisterende
påmeldinger i annen klasse der påmeldingen er knyttet mot samme person.
Pass i såfall på at ***kopier påmelding*** ikke er valgt.

## Konfigurasjon

#### Kilde

| Innstilling       | Beskrivelse                                   |
|-------------------|-----------------------------------------------|
| Løp/klasse        | Klassen(e) det skal kopieres påmeldinger fra. |
| Ekskluder mikslag | Ikke kopier mikslag                           |

#### Mål

| Innstilling | Beskrivelse                            |
|-------------|----------------------------------------|
| Løp/klasse  | Klassen påmeldingene skal kopieres til |

#### Innstillinger

| Innstilling         | Beskrivelse                                                                                             |
|---------------------|---------------------------------------------------------------------------------------------------------|
| Kopier påmelding    | Kopier påmelding                                                                                        |
| Kopier start        | Kopier påmeldingens start til ny påmelding. (!OBS Nytt startnummer er gammelt startnummer x 1000)       |
| Inkluder brikker    | Bruk brikker i ny påmelding                                                                             |
| Kopier resultat     | Kopier resultat                                                                                         |
| Stasjon             | Hvilken stasjon skal resultatet kopieres til (***Overstyring result*** anbefales i de fleste tilfeller) |
| Types               | Hvilke tidtakingstyper skal kopieres. (***Status*** og ***tid*** er anbefalt.)                          |
| Kopier stasjonsdata | Kopier stasjonsdata                                                                                     |
| Stasjoner           | For hvilke stasjoner skal stasjonsdata kopieres                                                         |