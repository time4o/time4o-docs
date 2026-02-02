# Stemplingsfri målgang

Time4o støtter stemplingsfri målgang der tradisjonell Emit EKT-brikke brukes til poststemplinger og Emit emiTag til målgang, eller emiTag brukes både til poststemplinger og målgang.
Dette brukes typisk i hovedarrangement i Norge.

I Time4o får deltageren en midlertidig status ***Fullført*** ved passering av målstreken, og deretter ***OK*** eller ***Mangler stemplinger*** ved avlesing (stemplingssjekk).
Dette gjør at man har god kontroll på at deltageren både har blitt registrert på mållinja, og har lest av brikken.

## Oppsett

### Brikketyper

Det må opprettes én brikketype for hver brikke.

[Les mer om brikketyper](/nb/resources/event/cards)

::: info Merk!
Det er mulig å opprette flere brikketyper om man f.eks. ønsker to emiTager pr løper. Kontakt Time4o for informasjon om hvordan dette settes opp.
:::

### Løyper

Løypene i berørte klasser må settes opp **uten målpost**. I Time4o er målposten en del av disksjekken,
så hvis målposten er med vil alle løpere blir diskvalifiserte ved avlesing av EKT-brikken iom. at EKT-brikken ikke stempler i mål.

Ved import av løyper vil målposten alltid opprettes. Målposten må derfor unntas fra disksjekk da den ikke vil ligge i Emit-brikken. 


### Stasjoner

Det må opprettes to stasjoner/løpsstasjoner:

1. Stasjon for målpassering. Dette er som regel en Emit ETS, men melding fra Emit Server kan også benyttes om man ikke ønsker å koble ETS til en PC via kabel. Å bruke Emit Server vil gi en forsinkelse i å sette måltiden.

   Innstillinger løpsstasjon:
   - ***Type***: ***Måltid*** og ***Status***
   - ***Prioritet***: Lavere prioritet (høyere tall) enn stasjon for avlesing (f.eks. 12)
   - ***Prioritet data***: ***Bruk første data***
   - ***Brikketype***: Brikketypen som representerer emiTag-en.
   - ***Lås status***: ***Fullført***
   - ***Ingen prosessering ført start***: Velg denne for å unngå at deltagere som passerer mållinja før egen start får måltid.

2. Stasjon for avlesing av EKT-brikke for disksjekk. Dette er typisk en Emit EScan2 eller MTR4.

   Innstillinger løpsstasjon:
   - ***Type***: ***Strekktider*** og ***Status***
   - ***Prioritet***: Høyere prioritet (lavere tall) en stasjon for målpassering (f.eks. 10)
   - ***Prioritet data***: ***Bruk siste data***
   - ***Brikketype***: Brikketypen som representerer EKT-brikken.
   - ***Lås status***: Fylles ikke ut!


Både stasjonen for målpassering og avlesing kobles til pc på vanlig måte. Det er i teorien mulig å koble begge stasjoner til én pc, men i de aller fleste tilfeller brukes én til hver stasjon.  
Husk å stille klokkene! Dette gjøres ved et tastetrykk i Time4o, og skal kun gjøres FØR løpet (ikke under!).

Det er i utgangspunktet valgfritt hvilken kode målstasjonen har da Time4o ikke bruker denne til noe,
men bruk kodene 90 (enkel sløyfe) eller 248 (dobbel sløyfe) som ETS-en forlanger.

## Tidtaking

Tidtakingen skjer på vanlig måte. Det er anbefalt å ha en dedikert person som overvåker at deltagere blir registrert ved målpassering.

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









