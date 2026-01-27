# Runder (mellomtider + måltid)

Time4o støtter å bruke samme ETS til både mellomtider og målgang.

Dette kan spesielt være interessant i løp og skirenn med flere runder der målstreken passeres flere ganger.
Ved hjelp av løypeoppsettet vil Time4o skjønne om en passeringstid er en mellomtid eller en måltid.

::: warning OBS!
Pr. nå må tidene fra ETS hentes via Emit Server, og ikke via direkte USB-tilkobling
:::

## Oppsett

### Løyper

Klassene må ha en løype som beskriver antall runder ved hjelp av løypeposter.
Hvis ETS-en har kode 90 og løpet består av tre runder så må det opprettes to løypeposter med posttype ***Post*** og kode 90, 
samt én løypepost med posttype ***Måltid*** og kode 90.
Start-post er ikke nødvendig.

I tillegg må post 90 ha satt innstillingen ***Mellomtid*** til ***Bruk i alle løyper***.
Dette settes kun på posten (ikke løypepostene!) under ***Løyper*** -> ***Poster***. 



### Stasjoner

Det må opprettes én stasjon med to løpsstasjoner. Det er kritisk at oppskriften følges til punkt og prikke.

1. Opprette stasjon med stasjonrolle ***Mellomtid*** og stasjonstype ***Emit server***

2. Åpne løpsstasjonen som er opprettet og sett følgende innstillinger:
   - Pass på at ***Type*** KUN er ***Mellomtid***
   - ***Ingen prosessering før start*** skal være aktivert
   - ***Sett type tidtakingsdata iht. løype*** skal være aktivert


3. Legg til en ny løpsstasjon under samme stasjon med følgende innstillinger:
   - ***Type*** skal være ***Måltid*** og ***Status***
   - ***Lås status*** skal være ***OK***
   - ***Ingen prosessering før start*** skal være aktivert
   - ***Sett type tidtakingsdata iht. løype*** skal være aktivert



[//]: # (## Tidtaking)

[//]: # (## Feilsituasjoner)










