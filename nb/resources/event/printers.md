# Printere

Time4o har støtte for termiske skrivere for utskrift av blant annet strekktidlapp, stasjonsdata og QR-kode til direktepåmeldingen.

I tillegg til tid og strekktider, kan strekktidlappen inneholde QR-kode som linker til liveresultater, samt valgfri topp og bunntekst om du som arrangør ønsker å få med annen informasjon.


## Printerstøtte

Time4o støtter en lang rekke modeller. Når du legger til ny skriver i Time4o kan du velge hvilken modell du har.
At modellen ligger i lista betyr at modellen i prinsipp skal fungere, men det er ingen garanti. Time4o har av naturlig årsaker, ikke fått testet alle modellene.

Hvis modellen du har ikke er i lista kan du forsøke å velge en annen modell. 
Forskjellen på de ulike modellen dreier seg i hovedsak hvilken oppløsning, hvilke fonter og fontstørrelser skriveren støtter, og om den kutter papiret automatisk, så ved å velge en modell med samme egenskaper som din kan det fungere.

Det som er viktig for at skriveren skal fungere i Time4o per i dag er at det er mulig å opprette en virtuel COM-port for skriveren. Her følger litt info for de ulike pdodusentene.

- Epson

    Installer programmet [Epson TM Virtual Port Driver](https://ftp.epson.com/drivers/pos/TMVirtualPortDriver870c.exe)

    Modeller som er testet at fungerer: Epson TM-T20III

- Star

    [How to Assign a Virtual Port to a TSP100 Series Printer](https://starmicronics.com/help-center/knowledge-base/assigning-a-virtual-port-to-the-tsp100-series-printers/)

  Det kan dessverre være knotete å få lagt til den virtuelle porten for printere fra Star. [Ta gjerne kontakt](https://time4o.com/#contact) hvis du har funnet ut noe smart i denne sammenheng.




OBS! Det finnes også en annen metode for å koble til skrivere, og det kommer støtte for denne metoden senere.


## Utskriftstyper

- Resultat og strekktider
  
    Skriver blant annet ut starttid, måltid, sluttid, strekktider, nåværende plassering, samt evenutelt QR-kode til liveresultater eller lignende (bestemmer av arrangør).

- Stasjonsdata

    Skriver ut stasjonsdata, dvs. typisk en avlesing med alle stemplinger og annen informasjon fra brikken eller stasjonen.

- QR-kode til direktepåmelding

    Via QR-knappen på dashbordet til arrangementet kan QR-koden for direktepåmelding skrives ut slik at deltagere kan skanne denne for melde seg på.


## Automatisk utskrift

For å skrive ut strekktidlappen automatisk må avlesingsstasjonen kobles mot skriveren. Dette gjøres på stasjonen ved å legge til skriveren der.

Når brikken leses av vil skriveren automatisk skrive ut resultat og strekktider. Unntaket er om brikken er ukjent, da vil stasjonsdata skrives ut, dvs. alle stemplinger samt brikkeinfo med mer.


Det er mulig å koble flere avlesingsstasjoner mot samme skriver,  eller én avlesingsstasjon mot flere skrivere.
Det er også mulig å sette opp en egen stasjon (PC + avleser) som kun har som oppgave å skrive ut strekktidslapper etter avlesing.
I prinsipp kan hvilken som helst stasjon kobles mot en skriver.

## Manuell utskrift

Både i stasjonsdata-tabellen og påmeldingstabellen finnes det et menyvalg for å skrive ut stasjondata eller resultat (strekktidlapp).
I stasjonsdata-tabellen og menyen til påmeldingen er det også et valg for å skrive ut strekktidlapp.

Det er mulig å skrive ut flere strekktidlapper i samme operasjon ved å velge flere påmeldinger, men merk at skriveren kan begrense hvor mange den tar i mot og kutte utskriften før den er ferdig.

## QR-kode

Arrangør kan selv bestemme hvilken nettside QR-koden skal peke til. 
Time4o Center, LiveRes og Eventor er predefinerte valg. Hvis LiveRes velges vil QR-koden peke til deltagerens klasse i LiveRes.

::: warning OBS!
Ikke alle printermodeller støtter QR-koder
:::

## Opprette printer {#create}

1. Gå til printeroversikten (***Tidtaking*** > ***Printere***)
2. Velg ***type*** (modell). Hvis din modell ikke er i lista kan du prøve en annen.
3. Skriv inn valgfritt navn eller behold det som foreslåes.




## Koble til printer (USB) {#connect}

Dette kan kun gjøres fra støttede nettlesere. Se [systemkravene](/nb/guide/requirements) for mer info.

1. Koble printer fysisk til en USB-port
2. Gå til ***Tidtaking > Stasjonsdata***
3. Klikk knappen ***Koble til*** for å vise tilgjengelige printere.
4. Klikk på ønsket printer i listen. Nettleseren viser en dialog med valg av COM-port. (Hvis dialogen ikke vises, så bruker du antalig en nettleser uten støtte.)
5. Velg riktig COM-port i nettleser-dialogen og velg ***Koble til***. Menyvalget blir grønt.


::: warning Obs!
Hvis det gjøres en full "refresh" av nettsiden så vil printeren i de fleste tilfeller kobles til automatisk på nytt.
Unntaket er om det er tilkoblet mer enn én printer på samme pc/mobil. I dette tilfellet må printerne kobles til på nytt.
:::

### Koble fra printer {#disconnect}

1. Klikk på knappen ***Koble til*** og velg ønsket printer fra listen.
2. I dialogen kan du velge ***Koble fra*** hvis du vil bryte tilkoblingen uten å dra kabelen.


## Felter printer

Kommer...

| Felt | Beskrivelse |
|------|-------------|

