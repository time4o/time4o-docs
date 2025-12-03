# Fellestart

Time4o støtter fellestart og gafling. Det er også mulig å kombinere individuell start (med/uten brikketid) og fellestart i samme klasse.

## Starttider

Starttiden for fellesstarten settes på klassen i feltet ***Første start***. Hvis ***Første start*** ikke settes på klassenivå brukes(arves) ***Første start*** for løpet.

***Kilde starttid*** må settes til ***Startliste***. Dette settes også på klassenivå eller på løpsnivå. Brikken kan da nulles på forhånd. 

Det er ikke nødvendig å [opprette og tildele starttider](/nb/resources/event/starts) såfremt man ikke ønsker å tildele startnummer eller personlige gaflinger.
Ved startnummertildeling bør ***Starttype*** settes til ***Fellestart***. 
Da vil det opprettes ***Starter*** med startnummer og uten starttid slik at det fortsatt er ***Første start*** på klassen som gjelder som starttid for fellestarten. Hvis det opprettes starttider vil dette overstyre klassens starttid.  

#### Løpere utenom fellestarten

Hvis det er løpere som skal ha tellende resultat i klassen uten å starte i fellestarten,
så kan det løses ved enten å manuelt sette en starttid(start) på løperens påmeldingen, eller ved å sette ***Kilde starttid***
til ***Tidtaking (Brikketid)*** på påmeldingen. Sistnevnte alternativ gir deltageren fri start og brikketid.

::: info Tips!
Hvis det er få deltagere i fellestarten i forhold til deltagere utenom fellestarten kan dette settes opp motsatt, 
dvs. sette ***Kilde starttid*** til ***Tidtaking (Brikketid)*** på klassen og overstyre hver deltager med ***Kilde starttid*** til ***Startliste***
:::


## Gaflede løyper 

Gaflede løyper kan tildeles til hver enkelt deltager (personlig gafling), eller man kan legge alle løypene på klassene og la deltageren bli godkjent om én av løypene er fullført (valgfri gafling).

### Personlig gafling

Ønskes personlig gafling må det opprettes og tildeles ***Starter***. Gaflingsvarianten (løypa) legges på ***Starten***. Dette kan gjøres manuelt eller tildeles ved opprettelse av starter eller import av fil.

**Tildeling ved opprettelse av starter**

1. Legg til alle løyper/galingsvarianter på klassen
2. Sett ***Starttype*** settes til ***Fellestart*** på klassen
3. Sett eventuelt et antall ***Ledige starter***.
4. Kjør oppgave [Opprett starter](/nb/tasks/create-starts)
5. Sett ***Tildel løype*** til ***Tildel fra klasse***
6. Nå startene er opprettet kan de tildeles vi oppgaven [Tildel starter](/nb/tasks/assign-starts), eller eventuelt manuelt.

**Import**

[//]: # (TODO Doc import)
Gaflinger kan importeres fra Excel/csv-fil. Ta kontakt om du trenger dette! (Dokumentasjon kommer)


### Valgfri gafling

1. Legg till alle løyper/galingsvarianter på klassen
2. Sett [***Løypehåndtering***](/nb/resources/common/course-handling) til ***Én løype - valgfri*** på klassen

Deltageren vil godkjennes om én av løypene er fullført.

