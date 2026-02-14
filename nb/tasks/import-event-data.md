---
job: ImportEventData
title: Importer arrangementsdata
description: Importér personer, organisasjoner og brikker fra annet arrangement
category: RaceClasses
---

# {{ $frontmatter.title }} ({{ $frontmatter.job }})

### Beskrivelse

Denne oppgaven importerer personer, organisasjoner og brikker fra annet arrangement. I tillegg importeres identifiktortyper.

Brukeren må ha tilgang til arrangementet det skal importeres i fra.

Det kan importeres flere ganger og fra flere ulike arrangement.

Se under for hvordan oppgaven håndterer duplikater.

### Konfigurasjon

| Innstilling             | Beskrivelse                                                                                                                     |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| Arrangement             | Arrangement det skal importeres fra.                                                                                            |
| Importér personer       | Importér person og personidentifikatorer. Personen importeres ikke hvis det eksisterer en person med samme navn og fødselsdato. |
| Importér organisasjoner | Importér organisasjoner. Organisasjonen importeres ikke hvis det eksisterer en organisasjon med samme nan og organisasjonstype. |
| Importér brikker        | Importér brikker og brikketyper. Brikken importeres ikke hvis det eksisterer en brikke med samme brikkenummer og brikketype.    |
                                                    |