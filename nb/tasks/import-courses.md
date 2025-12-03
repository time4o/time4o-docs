---
job: Import Courses
title: Importer løyper
description: 
category: Courses
---

# {{ $frontmatter.title }}  ({{ $frontmatter.job }})

### Beskrivelse

Oppgaven importerer løypedata fra fil i formatet IOF XML 3.0 (CourseData) og oppretter [løyper, poster og løypeposter](/nb/resources/event/courses_controls).
Fila eksporteres fra løypeleggerprogrammet.

Løyper kan importeres flere ganger, og løypene i Time4o blir da oppdatert med nye løypeposter. 
Løyper som er fjernet i løypefila etter forrige import blir derimot ikke fjernet i Time4o og må slettes manuelt.

Importen består i hovedsak av følgende steg:

1. Opprette alle unike poster i postregisteret.
   - Hvis posten allerede eksisterer i posteregisteret så blir den ikke overskrevet.
   - Eksisterende poster som mangler i importfila blir ikke slettet. 
2. Opprette løypene og knytte disse mot postene i steg 1 via løypeposter
   - Hvis løypa eksisterer fra før så overskrives lengde og stigning, og løypepostene oppdateres slik at de stemmer med importfila.
     Er det fjernet poster i løypa siden sist import så fjernes også disse løypepostene fra Time4o.  
3. Koble løypene mot klassene hvis informasjonen ligger i fila. 
   - I fila er i såfall klassenavnet oppgitt, og det må matches mot klassenavnet i Time4o. 
   - Før å øke sjansen for å finne igjen klassen så unnlates mellomrom, bindestrek og understrek i navnematchingen.   

Se forøvrig oppgave-loggen for en detaljert oversikt over alle stegene og hva som har blitt importert. 

### Startkode og målkode

Løyper i Time4o må som oftest ha en startpost og en målpost. 
I løypeleggerprogrammene er det ofte ikke mulig å sette koden på startposten og målposten, og derfor må disse kodene oppgis ved import.

I enkelte løypefiler er det angitt hvilke poster som er startposter og målposter. I motsatt fall gjør importen en gjetning. 
Poster med kode som starter på "S" antas å være startposter. Poster med kode som starter på "F" eller "M" antas å være målposter.



### Konfigurasjon

| Innstilling                           | Beskrivelse                                                                              |
|---------------------------------------|------------------------------------------------------------------------------------------|
| Fil                                   | Fila som skal importeres.                                                                |
| Løp                                   | Løpet løypene skal importeres til.                                                       |
| Startkode                             | Koden på startposten. I de aller fleste tilfeller 0.                                     |
| Målkode                               | Koden på målposten.                                                                      |
| Importer postkoordinater (GPS) | Velg dette om postenes GPS-koordinater skal importeres. Benyttes foreløpig ikke til noe. |


