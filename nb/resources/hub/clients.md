# Klienter

En klient er en organisasjon, typisk en orienteringsklubb, som har en kundeforhold med Time4o. 
Hvis du skal opprette et arrangement og tilhører en organisasjon som allerede er registrert som en klient, må du ta kontakt med klientens administator for å bli tildelt tilgang.

Hvis du ikke tilhører en eksisterende klient, kan du opprette en ny klient. Dette gjelder også om du skal opprette et arrangement som ikke krever betalt lisens.


### Opprette klient

1. Gå til ***Klienter*** og trykk + ikonet.
2. Fyll inn navn, slug, kontaktinfo, adresse og standardinnstillinger. Felter merket * er obligatoriske.
3. Stemplingssystem og målkode er ikke obligatorisk, men det som fylles inn vil foreslås ved opprettelse av nytt arrangement.

#### Legg inn API-nøkkel Eventor (opprett connection) {#connections}
1. Gå til klientoversikten og klikk på klienten (ikke blyanten)
2. Gå til ***Connections*** og trykk + ikonet. 
3. ***Connector*** skal være ***Eventor Norway*** og API-nøkkelen til Eventor angis i feltet ***Token***. Alle klubber har en egen API-nøkkel.


::: info Tips!
Ved **testing av Time4o** anbefales det å benytte [Eventor sin testserver](https://eventor-norway-test.orientering.se/) (OBS! Treg oppstart). Produksjonsserveren kopieres over til testserveren noen ganger i året, så brukerinnlogging, API-nøkkel etc. vil som regel være lik.

Opprett en egen connection mot Eventor sin testserver hvis du ønsker å bruke denne til testing.
:::

#### Innstillinger fakturering {#invoicing}

1. Gå til klientoversikten og klikk på klienten (ikke blyanten)
2. Gå til ***Fakturaer*** > ***Innstillinger*** 
   - Endre ***Neste fakturanummer*** om ønskelig
   - Huk av for ***Fakturerer fra eksternt system*** hvis faktura skal sendes fra eksternt system. Dette vil tilpasse standardfiltrene i fakturaoversikten, samt hindre at fakturamottager kan laste ned en Time4o-faktura fra faktura-nettsiden.
3. Gå til ***Kunder*** > ***Innstillinger*** og sett ***Neste kundenummer*** om Time4o skal tildele kundenummer automatisk. Dette trengs kun om kunder og fakturaer skal eksporteres og sendes fra eget økonomisystem, og Time4o skal bestemme kundenummer.
4. Gå til ***Fakturaer*** > ***Kontoer*** og legg inn kontonummer, IBAN og SWIFT på kontoen for bank.
    - Kontoen markert som ***Fakturakonto*** vises på fakturaene 
    - Kontoen markert som ***Standard innbetalinger*** foreslås som standard ved opprettelse av innbetalinger 
