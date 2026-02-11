# Jukselappen

Her kan du finne løsninger på de vanligste feilsituasjonene i forbindelse med tidtakingen.

Ta gjerne [kontakt med Time4o](https://time4o.com/#contact) om du har forslag til flere løsninger som burde være her.

## Tidtaking {#timing}


### Stasjonsdata finner ikke påmelding

Dette kan skyldes ukjent brikke, flere påmeldinger har samme brikke etc.

1. Klikk på den blå knappen ***overstyr påmelding*** i påmeldingskolonnen i stasjonsdata-tabellen.
2. Søk opp riktig påmelding i feltet ***påmelding*** og lagre.

Stasjonsdata er nå låst mot påmeldingen og stasjonsdata prosesseres på nytt.

### Stasjonsdata ligger på feil påmelding

1. Velg ***overstyr påmelding*** via menyen i tilknytning til påmelding i stasjonsdata-tabellen (knapp med 3 prikker).
2. Søk opp riktig påmelding i feltet ***påmelding*** og lagre.

### Overstyr status på deltager

Hvis deltagere skal settes til **OK**, **Brutt**, **Ikke startet** osv. kan dette gjøres på flere måter:
- Åpne påmeldingen og sette status under ***overstyr resultat***
- Direkte i stasjondata-tabellen via treprikksmenyen i tilknytning til påmeldingen. 
- Gå til ***påmeldinger***, marker påmelding(er) og velg ***overstyr status*** fra menyen.

### Endre klasse

1. Åpne påmeldingen og endre klasse.
2. Hvis det er intervallstart og ikke brikketid må det settes riktig startid på løperen.
3. Hvis løperen har kommet i mål må deltagerens stasjonsdata prosesseres på nytt for blant annet ny disksjekk. Se stasjonsdata-fanen til påmeldingen.


### Endre tid på deltager

Åpne påmeldingen og sette riktig tid under ***overstyr resultat***

### Løpet eller klassen har feil i innstillingene 

Eksempel: Klassen står med brikketid og skal bruke startlistetid (Innstillingen ***kilde starttid***)

Korriger innstillingen på løpet eller klassen og prosesser stasjonsdata for berørte klasser på nytt. 



### Kranglete avlesinger

- Ved bruk av emiTag og flere avlesere (ECU1, eScan2) i nærheten av hverandre, så må alle avlesere settes på ulik kode for å unngå at avlesinger slår inn på andre avlesere.
- Husk at emiTag må vente opptil 10 sekunder fra registrering på mål til den kan leses av!

## Mellomtider

Kommer...


## Løyper {#courses}

### Død post

Gå til ***Løyper*** > ***Poster*** og sett den aktuelle posten til ***Unnta fra stemplingsjekk***. Dette vil da gjelde for alle berørte løyper. Prosesser berørte avlesinger på nytt slik at de som mangler posten blir godkjent.  

### Endre postkode / sett målkode
 
Gå til ***Løyper*** > ***Poster*** og endre kode på den aktuelle posten. Alle løyper vil få den nye koden.

### Legg til ekstra post med annen kode (jokerpost)

1. Gå til ***Løyper*** > ***Poster*** og opprette ny post
2. Sett koden på ekstraposten og velg den andre posten i feltet ***alias til***.

Strekktider vil vise koden på hovedposten selv om løperen har stemplet på alias-posten.



