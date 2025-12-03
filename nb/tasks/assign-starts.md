---
job: Assign Starts
title: Tildel starter
description: 
category: Starts
---

# {{ $frontmatter.title }}  ({{ $frontmatter.job }})

### Beskrivelse

Denne oppgaven tildeler (trekker) [starter](/nb/resources/event/starts). Oppgavene finner ledige starter, dvs. starter som ikke er tildelt tidligere, og tildeler disse til påmeldinder uten start.
Oppgaven kan kjøres flere ganger, og typisk etter at etteranmeldinger er importert. 

Tildelingen skjer i tilfeldig rekkefølge. Hvis deltagere fram samme klubb ligger etter hverandre forsøker systemet å plassere deltagere fra andre klubber i mellom.

Det er mulig å tildele starter basert på seeding. Seedingfaktoren ligger på personen, men feltet kan også hentes fram i påmeldingstabellen og endres direkte der. 
Ved stafett ligger seeding-feltet på lagspåmeldingen.

Personer/lag med lik seeding blir trukket i tilfeldig rekkefølge. Ved seedinggrupper setter man derfor lik seedingfaktor på personer/lag i samme gruppe.



### Konfigurasjon

| Innstilling    | Beskrivelse                                                                                                                                                                                                                                                       |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Løp            | Løpet det skal tildeles starter for.                                                                                                                                                                                                                              |
| Klasse         | Klassene det skal tildeles starter for.                                                                                                                                                                                                                           |
| Ledige         | Skal ledige starttider være først eller sist.                                                                                                                                                                                                                     |
| Seeding        | Bruk den påmeldte sin seeding ved tildelingen. Seedingverdien ligger på personen eller laget (stafett) som er påmeldt. Velg om den høyeste eller lavest seedingverdi skal start sist.                                                                             |
| Tildel på nytt | Slett all starter fra påmeldinger i valgte klasser og tildel på nytt. OBS! Starter som er tildelt manuelt vil ikke slettes og må ev. fjernes manuelt før tildeling. Feltet ***kilde start*** kan hentes fram i påmeldingstabellen for lett å se hvem det gjelder. |
