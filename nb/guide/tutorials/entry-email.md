# Send e-post til påmeldte

Time4o tilbyr muligheten for å sende ut påmeldingsbekreftelse til påmeldte personer i forkant av arrangementet.

Hvis Time4o sin direktepåmeldingsløsning tillater endringer, så innholder e-posten en link til en nettside der deltageren selv kan endre brikkenummer.

Først må e-postadressene registreres på personene i Time4o, og deretter kjøres en egen oppgave for å sende ut e-postene.
Den enkleste måten å registrere e-postadresser på er å importere de fra et Excel-ark.


### Steg 1 

#### Alternativ A: Hent e-postadresser fra Eventor

1. Logg inn i Eventor og last ned påmeldingsoversikten i Excel-format
2. Åpne excel-arket og gjør følgende:
    - Flytt fanen ***påmeldinger*** slik at den er først i Excel-arket. Importen kan kun hente den første fanen.
    - Endre kolonneoverskriften ***Person-id*** til ***PERSON IDENTIFIER:Norway***
    - Endre kolonneoverskriften ***E-post*** til ***PERSON EMAIL***
    - Øvrige kolonner kan ligge slik de er.
3. Lagre Excel-arket som Excel type **.xlsx** da excel-formatet som Eventor produserer, ikke støttes av Time4o.

::: warning OBS!
Merk at e-postadressene i påmeldingsoversikten er e-postadressene til Eventor-brukeren som har utført påmeldingen, og ikke nødvendigvis personen som er påmeldt. 
:::

#### Alternativ B: Opprett Excel-ark med e-postadresser

Det er også mulig å hente e-postadresser fra andre kilder. Excel-arket må bestå av to kolonner:
- PERSON IDENTIFIER eller PERSON NAME
- PERSON EMAIL


### Steg 2: Importer excel-arket
 
1. Gå til ***Påmelding*** og kjør oppgaven ***Importér påmeldinger*** med følgende innstillinger:
    - Kilde: ***Fil***
    - Filformat: ***Excel***
    - Fil: Velg excel-arket
    - Match etter: ***Personidentifikator*** (Eller ***Personnavn*** om det er brukt i Excel-arket i alternativ B)
    - Identifikatortype: ***Norway*** hvis excel-arket er hentet fra norsk Eventor


### Steg 3: Send e-poster 

Utsendelsen gjøres via oppgaven [send e-post til påmeldte](/nb/tasks/send-entry-email)

