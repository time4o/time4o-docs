---
job: SendEntryEmail
title: Send e-post til påmeldte
description: 
category: Entries
---

# {{ $frontmatter.title }}  ({{ $frontmatter.job }})

### Beskrivelse

Denne oppgaven sender ut en påmeldingsbekreftelse til alle påmeldte. E-posten sendes til e-postadressen som ligger på påmeldingens person. 
Hvis flere personer har samme e-postadresse vil påmeldingene samles i én e-post slik at det kun sendes én e-post til hver unike e-postadresse.

E-posten inneholder informasjon om hvem som er påmeldt, klasse, brikkenummer og starttid.

Hvis Time4o sin direktepåmeldingsløsning tillater endringer, så innholder e-posten også en link til en nettside der deltageren selv kan endre brikkenummer.

::: warning OBS!
Hvis oppgaven kjøres flere ganger vil det sendes ut flere e-poster til samme person. 
Oppgaven holder pr. i dag ikke styr på hvem som har allerede har mottatt e-posten.

Husk også at de som melder seg på via Time4o sin direktepåmeldingsløsning automatisk får tilsendt påmeldingsbekreftelse ved påmelding.
:::

::: warning OBS!!
Ta kontakt med Time4o om du ønsker å sende ut e-posten til flere enn 500 påmeldinger.
:::


### Innstillinger

| Innstilling | Beskrivelse                                                                            |
|-------------|----------------------------------------------------------------------------------------|
| Løp         | E-posten sendes til påmeldinger i valgte løp                                           |
| Klasse      | E-posten sendes til påmeldinger i valgte klasse(r)                                     |
| Send test   | Send **kun** en test-epost. Oppgaven sender en tilfeldig påmelding i valge løp/klasse. |
| E-post      | E-postadressen som testen skal sendes til.                                             |
| Info        | Tekst som vises i toppen av e-posten som sendes ut. [Markdown](https://en.wikipedia.org/wiki/Markdown) støttes.              |
 



