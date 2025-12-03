---
job: Center Entry Data
title: "Center: Synk påmeldingsdata"
description: 
category: Center
---

# {{ $frontmatter.title }}  ({{ $frontmatter.job }})

### Beskrivelse

Denne oppgaven synkroniserer påmeldingsdata til Center, dvs. personer, resultater og mellomtider.

Synkroniseringen skjer automatisk når en påmelding endres, men oppgaven kan også kjøres manuelt for å tvinge gjennom en synkronisering.

Oppgaven må være aktiv for at synkroniseringen skal skje, og oppgaven kan aktiviseres direkte fra dashbordet til arrangementet. 

### Konfigurasjon

| Innstilling      | Beskrivelse                                                                     |
|------------------|---------------------------------------------------------------------------------|
| Full synk   | Synk alle påmeldingsdata på nytt, og ikke bare de som er endret siden sist synk |

