# Tidtaking

## Generelt

Et viktig prinsipp i Time4o er at tidtakingsdata skal lagres i sin opprinnelige form (rådata), og ikke skal kunne endres av systemet.
I mange tilfeller skal tidtakingsdata heller ikke kunne slettes, men må deaktiveres for å unnlates i tidtakingen slik at det er mulig å aktivere dataene igjen hvis de ble deaktivert ved en feil.

Hvis systemet er feilkonfigurert så skal det være enkelt og sikkert og rekonfiguere og produsere riktig resultater. 

## Stasjonsdata og tidtakingsdata

For å produsere stasjonsdata og tidtakingsdata må det [opprettes en stasjon](/nb/resources/event/stations).

Stasjonsdata kan ikke endres med noen unntak (f.eks. manuelle stasjonsdata).

Stasjonsdata "prosesseres" til tidtakingsdata basert på innstillinger. 
Tidtakingsdata er typisk sluttiden eller statusen til deltageren og er noe som kan endre seg om innstillingene endres og stasjonsdata prosesseres på nytt. 
Et eksempel på en innstilling er om løpet kjører brikketid eller ikke, noe som vil påvirke starttiden og sluttiden.

Tidtakingsdataene er det som danner grunnlaget for resultatlisten.

### Prosessering

Stasjonsdata prosesseres automatisk til tidtakingsdata én gang. Hvis prosesseringen skal gjentas må den startes manuelt ved å markere stasjonsdataene i tabellen og trykke knappen ***Prosessér*** eller ved å åpne stasjonsdataene og så lagre.

Dette er blant annet aktuelt hvis det er rettet feil i innstillinger eller oppsett.  

::: warning Obs!
Tidtakingsdata kan kun endres/oppdateres ved å prosessere stasjonsdata på nytt.
:::

### Overstyring 

Iom. at de fleste stasjonsdata ikke kan endres så må de overstyres i de tilfeller de ikke er som ønsket. 

Fordelen med denne måte å gjøre det på er at vi har full sporbarhet. Det er lett og se hvilke deltagere som er behandlet manuelt, og det er lett å reversere endringer som er gjort. De opprinnelige dataene fra avlesingen ligger uendret.

**Eksempel** 

En deltager mangler en post og får status ***MissingPunch*** ved avlesing (Status er en type tidtakingsdata!). Det viser seg at deltageren har en backuplapp som bekrefter at hen har vært på posten så vi ønsker å godkjenne deltageren.

Vi kan ikke endre stasjonsdataene som stammer fra avlesingen slik at vi får endret ***Status***, så vi må opprette nye stasjonsdata som overstyrer stasjonsdataene fra avlesingen.
I dette tilfellet oppretter vi manuelle stasjonsdata der ***Status*** er ***OK***. Iom. at stasjonen ***Manuell*** har innstillingen ***Overstyr andre data*** så vil denne statusen overstyre statusen fra avlesingen og deltageren blir godkjent.

::: info Tips!
Hvis du har markert stasjonsdata når du oppretter manuelle data, så vil de manuelle dataene automatisk legges mot samme påmelding som den du har markert. "Overstyr påmelding" er forhåndsutfylt.
:::


## Brikkeavlesing {#readout}

### Koble til stasjon

1. [Opprett en stasjon](/nb/resources/event/stations) 
2. Koble til stasjon (avleserenhet) via en USB-port
3. Gå til ***Tidtaking*** > ***Stasjonsdata***
4. Klikk USB-ikonet. Stasjonen som er satt opp skal vises i listen.
5. Klikk USB-ikonet ved stasjonsnavnet
6. Velg riktig stasjon i nettleser-dialogen og velg ***Koble til***. USB-ikonet blir grønt.
7. For enkelte stasjonstyper vil det dukke opp en dialog med stasjonsspesifikk valg.

::: warning Obs!
Hvis det gjøres en full "refresh" av nettsiden så vil stasjonen i de fleste tilfeller kobles til automatisk på nytt. 
Unntaket er om det er tilkoblet mer enn én stasjon på samme pc/mobile. I dette tilfellet må disse stegene gjøres på nytt.
:::

### Avlesing

Når stasjonen er koblet til så er det klart for å lese av brikker.

Gå til siden ***Tidtaking*** > ***Stasjonsdata*** og les av brikker. Ved avlesing opprettes det stasjonsdata som vises øverst i tabellen. 

Det første systemet gjør er å forsøke å identifisere stasjonsdatane, dvs. finne ut hvilken påmelding dataene tilhører.

***Datastatus*** viser enten ***OK*** eller en feilstatus. (Datastatus må ikke forveksles med diskkontrollen!) 
Datastatus gir feilmelding hvis f.eks. brikkenummeret er ukjent, eller det mangler målpost i løypeoppsettet.

Når datastatus er ***OK*** "prosesseres" stasjonsdata til tidtakingsdata som vil vises på linje to. 
Hvilke typer tidtakingsdata som opprettes er bestemt av innstillingene på løpsstasjonen.

Så lenge ingen av tidtakingsdatene er røde er alt i orden og deltageren er godkjent.

::: info Tips!
Alle stasjonsdata, uavhengig av stasjon, vises i stasjonsdata-tabellen. Hvis det hentes stasjonsdata fra flere stasjoner, som f.eks. mellomtider fra Emit sin server, så vil tabellen bli full av data som ikke er relevant for avlesingen.
Bruk derfor kolonnefilteret for kun å se stasjonsdata fra din avleser-stasjon.
:::

## Feilstatuser

Hvis datastatusen viser en feilmelding så må feilen rettes. Deretter må stasjonsdataene prosesseres på nytt.

### Overstyr påmelding

I tilfeller der stasjonsdata ikke finner påmeldingen (ukjent brikke ol.), men påmeldingen eksisterer, så er den kjappeste metoden følgende:

1. Vis aktuell stasjonsdata ved å klikke på tabellraden.
2. Huk av for ***Overstyr påmelding*** og søk opp riktig påmeldingen.
3. Lagre og OK

Stasjonsdataene er låst til påmeldingen og prosesseres på nytt.



## Oppgaver

<TaskList category="StationData" />