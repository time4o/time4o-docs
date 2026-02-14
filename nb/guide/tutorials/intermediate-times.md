# Mellomtider

Time4o kan hente mellomtider, starttider og måltider fra [Emit sin meldingsserver](http://emittiming.cloudapp.net/).

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
2. Opprett ny stasjon med ***Stasjonsrolle*** ***Mellomtid*** og ***Stasjonstype*** ***Emit Server***
3. Velg passende ***navn*** (gjerne "Mellomtid 123") og ***connection***.
4. Sett ***Serienummer*** til serienummeret på Emit sin hardware (ETS)
5. ***Hent data nyere enn*** er automatisk foreslått til første start for løpet. Kun stemplinger etter dette tidspunktet vil bli hentet fra Emit-serveren. Endre tidspunktet om ønskelig. 
6. Lagre stasjonen
7. Hvis arrangementet har flere løp, sjekk at løpsstasjonen er koblet mot riktig løp.

## Henting av meldinger {#fetch-messages}

Oppgaven ***Emit Server*** henter meldinger fra [Emit sin meldingsserver](http://emittiming.cloudapp.net/).

[Les mer om oppgaven her](/nb/tasks/emit-server)

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