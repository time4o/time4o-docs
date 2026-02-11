# Stemplingsfri målgang

Time4o støtter stemplingsfri målgang der tradisjonell Emit EKT-brikke brukes til poststemplinger og Emit emiTag til målgang, eller emiTag brukes både til poststemplinger og målgang.
Dette brukes typisk i hovedarrangement i Norge.

I Time4o får deltageren en midlertidig status ***Fullført*** ved passering av målstreken, og deretter ***OK*** eller ***Mangler stemplinger*** ved avlesing (stemplingssjekk).
Dette gjør at man har god kontroll på at deltageren både har blitt registrert på mållinja, og har lest av brikken.

## Oppsett

### Brikketyper

Ved flere brikker må det opprettes én brikketype for hver brikke. Dette gjelder også hvis deltagere bruker to emiTag, der den ene er for backup.

[Les mer om brikketyper](/nb/resources/event/cards)

Ta gjerne kontakt med Time4o for råd om hvordan backup-brikke kan settes opp.

### Løyper og poster

Hvis EKT-brikke brukes til poststempling og emiTag til målgang så målposten unntas fra stemplingsjekk da EKT-brikken ikke har noen målstempling. 

::: warning OBS!
Hvis emiTag brukes til både poststempling og mållinje med dobbel loop(!), så skal koden på målposten i løypeoppsettet være 65534.
Ved dobbel loop vil brikken ha stempling både på kode 248 og 65534, og 65534 er altså den riktige.   
:::

### Stasjoner

Det må opprettes to stasjoner:

1. [Opprette stasjon](/nb/resources/event/stations#create) med stasjonrolle ***Mållinje*** og ønsket stasjonstype.
2. [Opprette stasjon](/nb/resources/event/stations#create) med stasjonrolle ***Avlesing (kun stemplingsjekk)*** og ønsket stasjonstype.

Løpsstasjonene settes opp automatisk med riktig innstillinger.


Både stasjonen for målpassering og avlesing [kobles til](/nb/resources/event/stations#connect) på vanlig måte. Det er i teorien mulig å koble begge stasjoner til én pc, men i de aller fleste tilfeller brukes én til hver stasjon.  
Husk å stille klokkene! Dette gjøres ved et tastetrykk i Time4o, og bør kun gjøres FØR løpet.

For Time4o sin del er det i utgangspunktet valgfritt hvilken kode målstasjonen har, 
men bruk kode 248 for dobbel sløyfe, alternativt kode 90 for enkel sløyfe som ETS-en forlanger for at sløyfene skal fungere.

## Tidtaking

[Tidtakingen](/nb/guide/timing) skjer på vanlig måte. Det er anbefalt å ha en dedikert person som overvåker at deltagere blir registrert ved målpassering.

En backupløsning vil også være nødvendig (kamera, manuell registrering med trykknapp el.)

::: info Tips!
Stasjonsdata-tabellen viser som standard data fra alle stasjoner i arrangementet.
Bruk stasjons-filteret (kolonnefilteret) for å kun vise data for den stasjonen som er relevant for brukeren.
:::

## Feilsituasjoner

#### Deltageren registreres i mål, men glemmer å lese av EKT-brikken

Deltageren får status ***Fullført*** ved målpassering. Dette er en midlertidig status som tidtaker må følge opp.
Time4o sitt dashbord viser hvor mange deltagere som har denne statusen (rødmarkert) til en hver tid. Ingen skal ha status ***Fullført*** når arrangementet er ferdig.

Hvis avlesning mangler, må brikken hentes inn og leses av.


#### Deltageren registreres IKKE i mål, men leser av EKT-brikken

Iom. at stasjonen for avlesing ikke produserer måltid, vil løperen ikke få noe tid selv om brikken leses av og disksjekken er OK. Dette er noe som naturligvis vil fanges opp.

Hvis dette skjer må man benytte backupløsningen for å finne måltiden og så sette denne manuelt (manuelle stasjonsdata).









