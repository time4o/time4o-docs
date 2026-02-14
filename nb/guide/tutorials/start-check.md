# Startsjekk

Time4o støtter startsjekk for å sette starttid og status ***Startet*** på deltagerne. 

Startsjekk er gjerne en ETS Mini eller annen ETS som fanger stemplinger på 0-enheten på start og sender det inn til Time4o via [Emit sin meldingsserver](http://emittiming.cloudapp.net/).

## Stasjoner

1. Gå til stasjonsoversikten (***Tidtaking*** > ***Stasjoner***)
2. Opprett ny stasjon med ***Stasjonsrolle*** ***Startsjekk*** og ***Stasjonstype*** ***Emit Server***
3. Velg passende ***Navn*** og ***Connection***.
4. Sett ***Serienummer*** til serienummeret på Emit sin hardware (ETS)
5. ***Hent data nyere enn*** er automatisk foreslått til første start for løpet. Kun stemplinger etter dette tidspunktet vil bli hentet fra Emit-serveren. Endre tidspunktet om ønskelig.
6. Lagre stasjonen
7. Hvis arrangementet har flere løp, sjekk at løpsstasjonen er koblet mot riktig løp.


## Henting av meldinger {#fetch-messages}

Oppgaven ***Emit Server*** henter meldinger fra [Emit sin meldingsserver](http://emittiming.cloudapp.net/).

[Les mer om oppgaven her](/nb/tasks/emit-server)  