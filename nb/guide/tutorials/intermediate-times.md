# Mellomtider

Time4o kan hente mellomtider, starttider og måltider fra [Emit sin meldingsserver](http://emittiming.no/).

Her beskrives oppsettet for å hente mellomtider og vise det i [Time4o Center](https://center.time4o.com/). Oppsettet består av tre deler.


## Meldeposter

### Enkelt oppsett 

Hvis en post skal benyttes som meldepost i alle tilhørende løyper og klasser gjøres følgende:

1. Gå til postoversikten (***Løyper*** > ***Poster***)
2. Velg aktuell post og sett ***Mellomtid*** til ***Brukes i alle løyper***

Gjenta for alle meldeposter.

### Avansert oppsett

Hvis en post IKKE skal benyttes i alle tilhørende løyper og klasser så finnes det to måter å sett opp dette på. 
Hvilken metode du benytter avhenger av om posten skal benyttes i mange løyper med noen få unntak (Metode 1), eller kun i fåtall løyper (Metode 2).
Metodene kan brukes om hverandre i samme løp.

##### Metode 1

1. Følg ***Enkelt oppsett*** over
2. Gå til ***Løyper*** og velg løype som skal unntas
3. Velg aktuell post under ***Løypeposter*** og sett ***Mellomtid*** til ***Ekskluder***

##### Metode 2

1. Følg ***Enkelt oppsett*** over, men sett ***Mellomtid*** til ***Brukes i utvalgte løyper***
2. Gå til ***Løyper*** og velg løype som skal bruke meldeposten
3. Velg aktuell post under ***Løypeposter*** og sett ***Mellomtid*** til ***Inkluder***

## Stasjoner

Hver meldepost må settes opp som en egen stasjon.

1. Gå til stasjonsoversikten (***Tidtaking*** > ***Stasjoner***)
2. Opprett ny stasjon med ***Stasjonstype*** ***Emit Server***
3. Velg passende navn (gjerne "Meldepost 123") og connection.
4. Sett ***Serienummer*** til serienummeret på Emit sin hardware (ETS)
5. ***Hent data nyere enn*** er automatisk foreslått til første start for løpet. Kun stemplinger etter dette tidspunktet vil bli hentet fra Emit-serveren. Endre tidspunktet om ønskelig. 
6. Lagre stasjonen
7. Opprett ny løpstasjon under stasjonen.
8. Pass på at riktig løp er valgt og at ***Type*** er satt til ***Mellomtid***
9. Lagre løpstasjonen

## Henting av meldinger

Oppgaven [Emitserver](/nb/tasks/emit-server) henter meldinger fra Emit sin meldingsserver med et gitt intervall (5 sekunder er standard). 
Den starter som standard én time før løpets første start og slutter fem timer etter løpets første start, 
og henter som standard meldinger fra alle Emitserver-stasjoner som er satt opp.

Oppgaven må være aktiv for å kjøre. Oppgaven kan aktiveres direkte fra dashbordet til arrangementet.

### Endre tidsplan og stasjoner

I noen tilfeller ønsker man å tilpasse tidsplanen eller hvilke stasjoner det skal hentes meldinger fra.

1. Gå til oppgaven [Emitserver](/nb/tasks/emit-server) (Enten via dashbordet eller menyvalget ***Tidtaking*** > ***StasjonsData*** > ***Meny***) 
2. Klikk ***Gå til oppgavekjøring***
3. Velg stasjoner det skal hentes data fra og lagre.
4. Gå til fanen ***Tidsplaner*** og endre gjeldene [tidsplan](/nb/tasks#schedules)

::: warning OBS!
Enkelte arrangementer i Eventor står med første start 00:00. 
Da vil Emitserver-oppgaven starte 23:00 dagen før og slutte 05:00 på morgenen. Det kan derfor være lurt å dobbeltsjekke at tidsplanen er riktig! 
:::


## Kolonnetitler Time4o Center {#column-titles}

Under løpet finnes innstillingen ***Tittel mellomtid***. 
Her kan man bestemme hva kolonnetitlene skal være i resultatvisningen i [Time4o Center](https://center.time4o.com/).
Følgende valg finnes: 

#### Beskrivelse (anbefalt) 
Tittelen hentes fra feltet ***Beskrivelse*** på posten. Beskrivelsen kan overstyres pr. løype av feltet ***Beskrivelse*** på løypeposten.
Hvis beskrivelsen mangler begges steder så brukes lengde som tittel, og hvis lengde mangler så brukes postnummer.

#### Lengde
Tittelen hentes fra feltet ***Lengde*** på løypeposten. Hvis lengden mangler brukes postnummer.

#### Nummer
Tittelen blir postnummeret i løypa.

#### Postkode
Tittelen blir postkoden.

## Lenker

[Time4o Center](/nb/resources/hub/centers)   