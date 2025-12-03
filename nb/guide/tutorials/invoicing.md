# Fakturering

### Generelt

Time4o har som mål om å gjøre faktureringen av arrangement så smidig som mulig.
Hver klient har en sentral faktureringsløsning som ligger på utsiden av arrangementene slik at man kan følge opp fakturaer for alle arrangementer på ett sted.

Det er mulig å fakturere direkte fra Time4o via [e-post](/nb/guide/tutorials/invoicing#sending-invoices) eller [eksportere fakturaene](/nb/guide/tutorials/invoicing#export) til eget økonomisystem.

Det er støtte for samlefakturering av arrangementer, registrering av innbetalinger, samt mulighet for å velge person eller organisasjon som fakturamottager.

Når fakturaer sendes ut følger det med en link til en nettside der mottager kan laste ned faktura og et detaljert fakturagrunnlag.
Fakturagrunnlaget kan være praktisk når kontingentene skal viderefaktureres til medlemmene.

Time4o følger modellen i IOF XML3.0 formatet.

::: warning Fakturering fra Eventor
Det anbefales å sende fakturaer direkte fra Time4o eller fra eget økonomisystem, og Time4o støtter derfor ikke fakturering via Eventor. Ta kontakt om du trenger denne muligheten.
:::



## Produkter

Startkontingenter og andre avgifter opprettes som produkter med regler for tidspunkt og alder de skal gjelde for.
Produktene kan knyttes mot klassene de skal gjelde for.

### Eventor

Ved import av klasser fra Eventor settes produktene opp automatisk. Merk:
- Ordinær påmeldingskontingent bør være gyldig helt til etteranmeldingsfristen.
- Etteranmeldingskontingent bør spesifisere som ***tillegget***, gjeldende fra minuttet etter ordinær frist.

::: warning Obs!
Det anbefales å se over ***gyldig til tidspunkt*** på produktene etter import, spesielt hvis arrangementet har mer enn én ordinær påmeldingsfrist og etteranmeldingsfrist.

***Gyldig til tidspunkt*** tilsvarer påmeldingsfristene i Eventor og må fjernes eller forskyves om automatikken i Time4o med å velge riktig produkter skal fungere ved manuelle påmeldinger tett opptil arrangementet.
Time4o forsøker å fjerne dette tidspunktet, men det kan være tilfeller der dette ikke fungerer som ønsket.
:::

Hvis noe ble galt, så lønner det seg å rette det i Eventor og importere på nytt.
Da blir det riktig for neste arrangement som kopierer Eventor-oppsettet fra dette.

Gå deretter til Arrangement og Oppgaver-fanen. Velg "Importér klasser" og kjør oppgaven.

## Fakturalinjer

Når påmeldinger [opprettes manuelt](/nb/resources/event/entries#manual) kan man velge hvilke produkter som skal gjelde for påmeldingen.
Hvis det er knyttet produkter mot den aktuelle klassen vil Time4o automatisk velge blant disse produkter.

Når en ny påmelding lagres opprettes det fakturalinjer basert på produktene som er valgt.

Påmeldinger som importeres får opprettet fakturalinjer hvis denne informasjonen ligger i importfila.

Oppgaven [Opprette fakturalinjer](/nb/tasks/create-invoiceables) kan opprette og oppdatere mange fakturalinjer av gangen.
Denne er praktisk hvis hvis det gjort feil i oppsettet og fakturalinjer må genereres på nytt.

Kan også brukes i NM til å fakturere alle deltagere for reisefordeling.

### Brikkeleie

Brikkeleie faktureres ved å opprette fakturalinjer etter arrangementet.
Se oppgaven [Opprette fakturalinjer](/nb/tasks/create-invoiceables) 



## Fakturaer

Når arrangementet skal faktureres så må det opprettes fakturaer basert på fakturalinjene som ligger på hver påmelding.

Informasjon om avsender som kontonummer, adresse og kontaktinformasjon legges inn på klienten som eier arrangementet.

Hvis du bruker Eventor så bør [organisasjoner importeres](/nb/tasks/import-organisations) for å oppdatere organisasjonenes (kundens) kontaktinformasjon før fakturaene opprettes.

### Opprette fakturaer
Før du fakturerer første gangen bør du sjekke at [innstillingene på klienten](/nb/resources/hub/clients#invoicing) er som ønsket.

1. Gå til ***Økonomi*** > ***Fakturalinjer***
    - Alternativt gå til ***Påmeldinger***, velg en påmelding og fanen ***Fakturalinjer***
2. Kolonnen ***Faktura*** viser om fakturalinjene er fakturert. Bruk filter for å kun vise ufaktureret linjer.
3. Trykk ikonet for ***Opprett fakturaer***.
4. Velg om alle linjer i tabellen skal faktureres eller kun valgte.
5. Velg om kunden skal være påmeldingens organisasjon eller person. Sistnevnte er aktuelt om klubbløse løpere skal delta.
6. Velg om fakturalinjene skal legges til en eksisterende ulåst faktura hvis det finnes, eller om det uansett skal oppretts ny faktura.
7. Hvis ***Opprett ny faktura*** er valgt så vil det være mulig å opprette enn innbetaling som markerer fakturaen som betalt. Det er aktuelt ved direktepåmelding på arena der deltager betaler ved påmelding.


::: info Info
En fakturalinje kan kun legges på en faktura én gang. Hvis du forsøker å opprette faktura for en fakturalinje som allerede tilhører en faktura, så vil linja hoppes over.
:::

Fakturaene opprettes i Time4o Hub under klienten som eier arrangementet.
I tillegg opprettes organisasjonene som kunder såfremt ikke organisasjonen ligger der fra før. Organisasjonens [identifikator](/nb/resources/common/identifiers) benyttes for å matche mot eksisterende kunder.

Faktura- og kunderegisteret ligger altså et sentralt sted og inneholder fakturaer fra alle arrangementer.

En faktura er ulåst fram til den aktivt låses.
Hvis en organisasjon har en ulåst faktura så vil fakturalinjene som faktureres fra et arrangement, legges på denne fakturaen.
I motsatt tilfelle vil en ny faktura opprettes. På denne måten kan flere arrangementer faktureres på samme faktura.

::: warning Obs!
Hvis kundetype er satt til ***Organisasjon*** så opprettes ikke fakturaer for påmeldinger uten organisasjon 
:::

### Registrere innbetalinger

For å markere enn faktura som betalt må det opprettes en innbetaling mot fakturaen.

1. Marker én eller flere fakturaer og trykk ikonet for ***Opprett innbetaling***
2. Velg dato, konto og eventuelt en beskrivelse (valgfritt)
3. Hvis én faktura er markert kan det settes et valgfritt beløp, altså fakturaen kan markeres som delbetalt. Hvis flere fakturaer er valgt vil det opprettes innbetalinger tilsvarende fakturabeløpet.



### Slette faktura eller fakturalinje

En faktura eller tilhørende fakturalinje kan slettes. Hvis dette gjøre så brytes koblingen mot fakturalinjen i arrangementet, 
og fakturalinjen i arrangementet kan faktureres på nytt om ønskelig.

Fakturalinjer i arrangementet kan derimot ikke slettes i arrangementet om den er knyttet mot en faktura. 
Den må i såfall først slettes fra fakturaen. 


### Faktura- og forfallsdato

Faktura- og forfallsdato bestemmes når fakturaen låses. 
Dette kan gjøres for flere fakturaer i én operasjon ved å markere ønskede fakturaer.

### Sende fakturaer {#sending-invoices}

Hvis kunden har en e-postadresse kan fakturaen sendes på e-post.
Marker fakturaer som skal sendes og velg ***Send fakturaer*** fra menyen.

Innholdet i e-posten kan bestemmes ved utsending. 
Følgende koder kan brukes for å flette inn informasjon.

| Kode             | Beskrivelse                          |
|------------------|--------------------------------------|
| *{CustomerName}* | Kundenavn                            |
| *{InvoiceNumber}*    | Fakturanummer                        |
| *{InvoiceDueDate}*   | Fakturaens forfallsdato              |
| *{InvoiceAmount}*  | Fakturaens totalbeløp                |
| *{InvoiceLink}*  | Link til fakturagrunnlag |

::: warning Obs!
Kun låste fakturaer sendes ut!
:::

### Laste ned fakturaer

Fakturaer kan lastes ned som pdf-er, enten som én pdf med alle fakturaer eller én pdf pr faktura samlet i en zip-fil.


## Eksport til eget økonomisystem {#export}

Pr. nå støttes Tripletex og Unimicro. Ta kontakt om du ønsker støtte for ditt økonomisystem.

Det lønne seg å [aktivere valget ***Fakturerer fra eksternt system***.](/nb/resources/hub/clients#invoicing)

Kunder og fakturaer kan eksporteres i formater tilpasset eksterne økonomisystem slik at faktureringen kan skje der.
Det krever et engangsoppsett for [Kunder](/nb/resources/hub/customers), pluss vedlikehold for nye kunder.

Fordelen med det er man kan faktuere med KID, få enklere betalingsoppfølging og bokføring.

Marker fakturaene du ønsker å eksportere og gå til radhandlingen ***Eksporter fakturaer***. 

Legg inn avdeling, prosjekt og/eller produkt om du ønsker at det skal være med i eksportfila.
Standard-verdier kan legges inn under Innstillinger.

### Tripletex

Bruk ordreimport (ikke fakturaimport).

Bruk IDer fra Tripletex:

- Kundenummer
  - Må være registrert for enhver Kunde (se over) i eksporten
- Avdeling (valgfritt)
- Prosjekt (valgfritt)
- Produkt (valgfritt)
  - Uten produktnummer så brukes beskrivelsen, som er avgiftsnavn, klasse, navn og løpsresultat.
