# Poengløp

Time4o støtter ulike konsepter som benytter poeng som resultatet, blant annet NOFs [Team Orienteering Challenge (TOC)](https://www.orientering.no/next/p/79920/barne--og-ungdomsidrett) og Oppsals Råtasskonkurranse.

Disse konseptene består som regel av poster som gir poeng, men også av ulike aktiviteter underveis som også gir poeng.

Prinsippet i Time4o er at hver type aktivitet defineres som en løype med regler for poengberegning. Alle løypene legges under den aktuelle klassen.

Ved brikkeavlesing sjekkes stemplingene mot alle løypene som ligger under klassen, og det beregnes poeng etter gjeldene reglene, samt summeres opp totale poeng.


## Hvordan sette opp et poengløp

1. [Kom i gang](/nb/guide/get-started) og opprett arrangementet
2. Hvis konkurransen skal bestå av lag så skal løpet ha konkurransetypen ***Stafett***, i motsatt fall ***Individuelt***.

::: warning Lag i Eventor
Hvis Eventor benyttes til å ta i mot påmeldinger, og det er lag som konkurrerer, så kan arrangementet settes opp som en stafett med to etapper i Eventor,
der 1. etappe tillater én løper og 2. etappe tillater resten av løperne (f.eks. 4 hvis man tillater opptil 5 løpere totalt). Eventor støtter ikke stafett med én etappe.

Det anbefales å ha Eventor åpent for lagendringer helt fram til start, slik at lagene kan håndtere dette selv.

Gjør en siste import av påmeldinger rett etter fristen for lagendringer har gått ut. Dette kan også gjøres av en tidsplan.
:::

3. [Opprett løyper](/nb/resources/event/courses_controls)
   - Sett ønsket poengberegning for løypene. [Beskrivelse av poengberegninger](/nb/resources/common/point-calculations). Husk at det skal opprettes én løype per poengberegning!
4. [Opprett klasse](/nb/resources/event/classes)
   - Sett ***løypehåndtering*** til ***alle løyper - valgfri rekkefølge***
   - Sett ***resultatenhet*** til ***poeng***
   - Ved fellesstart:
      - Sett ***første start*** til tidspunktet for fellestarten
      - Sett ***kilde starttid*** til ***startliste***
   - Sett ***resultatlistetype*** til ***usortert*** hvis resultatene skal være urangerte 
5. [Opprett påmeldinger](/nb/resources/event/entries)
6. Opprett oppgave for resultater
   - [Opprett egendefinert oppgave](/nb/tasks#create) med jobb [Point Results](/nb/tasks/point-results)
7. [Opprett stasjon for avlesing](/nb/resources/event/stations)
   - Løpsstasjonen må minimum ha tidtakingsdata-typene ***Poeng*** og ***Status***. Enkelte poengberegninger kan trenge flere typer.
8. [Tidtaking](/nb/guide/timing)
9. Resultater
   - [Kjør oppgaven](/nb/tasks#kjør-oppgave) som ble opprettet i punkt 7. Last ned excel-arket og puliser det på ønsket sted.
   - Oppgaven kan [tidsstyres](/nb/tasks#schedules), dvs. at excel-arket opprettes automatisk med ønsket tidsintervall.
   - Sist genererte excel-ark kan [deles](/nb/tasks#delinger) ved hjelp av en delingslink. Linken kan publiseres på arrangementets hjemmeside eller i Center. På denne måten kan man publisere resultatene automatisk. 

::: warning Resultater
Pr. nå vises resultatene i et Excel-ark, men resultatene vil i framtiden kunne vises "live" i [Time4o Center](https://center.time4o.com)
::: 