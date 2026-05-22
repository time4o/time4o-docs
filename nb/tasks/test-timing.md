---
title: Test tidtaking
job: Test Timing
description:
category: StationData
---

# {{ $frontmatter.title }}  ({{ $frontmatter.job }})

### Beskrivelse

Denne oppgaven kan generere resultater og strekktider i forbindelse med testing av Time4o.


### Gunnleggende oppsett

1. Opprette et arrangement med klasser og påmeldte. Gjerne bruk et eksisterende arrangement i Eventor. Så lenge du ikke laster opp startlister eller resultater så går det fint. 
   Man kan også opprette et arrangement på Eventor sin testserver.
2. Opprett en stasjon av typen ***Emit USB Reader Protokoll 250 (gammel)*** med standard innstillinger
3. Opprette løyper manuelt eller via import. Sett gjerne en relevant løypelengde. Simulatoren tar utgangspunkt i løypelenden for å generere noenlunde realistiske tider.
4. Tildel løypene til klassene som skal testes. Klassene må en løype for at testen skal fungere.

### Generere resultater

1. [Opprett oppgaven](/nb/tasks#create) (egendefinert oppgave)
2. Sett ønskede innstillinger (se oversikt under)
3. Gå til ***Tidtaking > Stasjonsdata*** og kjør oppgaven

Oppgaven kan styres av en tidsplan for å automatisk generere resultater over tid. 
Sett da gjerne et lavt antall resultater per kjøring, samt et passende intervall på tidsplanen.

Oppgaven genererer resultater helt til alle påmeldinger har et resultat.

### Innstillinger

| Innstilling                     | Beskrivelse                                                                                                                        |
|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| Løp/klasse                      | Klassene det skal genereres resultater for.                                                                                        |
| Stasjon                         | Resultater legger seg på stasjonen som velges her. Den må være av typen ***Emit USB Reader Protokoll 250 (gammel)***               |
| Antall resultater per kjøring   | Antall resultater oppgaven skal generere per kjøring                                                                               |
| Sjansen for manglende stempling | Hvor stor sjanse er det for at resultatet skal mangle stemplinger og dermed ikke bli godkjent. Angi 0 hvis alle skal være godkjent |





