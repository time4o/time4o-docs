# Påmeldinger

En påmelding er den mest sentrale ressursen og består som regel av en person, en organisasjon (klubb), en klasse og en eller flere brikker.
Én påmelding kan få tildelt startnummer og starttid.

Stasjonsdata fra tidtakingen knyttes også mot en påmeldingen ved hjelp av brikkenummer, startnummer eller en direkte kobling.

Stasjonsdata og påmelding gir grunnlaget for et resultat.

I påmeldingsoversikten vises to statuser for påmeldingen.
1. ***Påmeldingstatus***: 
   - ***Påmeldt***: Deltageren skal delta
   - ***Avmeldt***: Deltageren er avmeldt og vil ikke få tildelt starttid og startnummer, kobles mot stasjonsdata ved avlesing, eller vises i resultatlisten. Deltageren vil derimot faktureres hvis den har fakturalinjer.  
   - ***Utenfor konkurranse***: I prinsipp lik status ***Avmeldt***, men vil få tid og status ved avlesing. Brukes typisk til **prøveløpere**. 
   
2. ***Status***:   Denne statusen kommer fra stasjonsdata og er relatert til om løperen er godkjent eller ikke. 

## Opprette påmelding  {#create}

Påmelding kan [importeres](/nb/tasks/import-entries) (IOF XML 3.0) eller opprettes manuelt. 
Det er mulig å søke i Eventor sitt register for rask påmelding av deltagere.

### Manuell opprettelse {#manual}

1. Gå til "Påmeldinger" og velg "Ny"
2. Søk etter person eller trykk + for å opprette ny person.
   - Her søkes det både i arrangementets personregistrer og Eventor sitt personregister.
3. Søk etter organisasjon (valgfritt) eller trykk + for å opprette ny organisasjon. 
   - Her søkes det både i arrangementets organisasjonsregistrer og Eventor sitt organisasjonsregistrer.
4. Velg klasse.
   - Klasser som deltageren ikke er kvalifisert for basert på kjønn og alder er markert med rødt.
5. Velg start (valgfritt).
   - Oversikten viser starter som er opprettet på klassen. Kun ledige starter kan velges.  
6. Fyll inn brikkenummer.
   - Hvis det utfylte brikkenummeret ikke finnes i brikkeregisteret så opprettes brikken ved lagring av påmeldingen.
   - Huk av for ***Leiebrikke*** hvis brikken er leiebrikke.
7. Velg produkter (valgfritt) som typisk er startavgifter. 
   - Time4o velger automatisk produkter basert på klasse, personen fødselsdato og påmeldingstidspunkt. Ved lagring opprettes det fakturalinjer basert på produktene som er valgt.
8. Det er vanligvis ikke nødvendig å fylle inn noe under ***Tidtaking*** eller ***Identifikator***.
9. Lagre påmeldingen.

Se forøvrig feltbeskrivelsen under.

::: info Tips!
Hvis du oppretter en ny person ved å trykke +, og så "Lagrer og lukker" den nye personen, så vil den nye personen automatisk velges i påmeldingen som er under opprettelse.
:::


## Felter 

### Påmelding

| Felt                      | Beskrivelse                                                                                                                                                                                                                                   |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Påmeldingsstatus          | Angir om påmeldingen er aktiv eller ikke og skal brukes i tidtakingen.                                                                                                                                                                        |
| Løp                       | Løpet påmeldingen tilhører. Vises kun ved flerdagers.                                                                                                                                                                                         |
| Person                    | Påmeldt person                                                                                                                                                                                                                                |
| Organisasjon              | Organisasjonen som personen representerer i løpet                                                                                                                                                                                             |
| Klasse                    | Klassen som påmelding gjelder for. Listen er filtrert etter personens kjønn og alder. <br/>Velg "Vis alle klasser" for å vise ufiltrert liste med alle klasser.<br/>Hvis antall trykte kart er angitt for løypa vil antall ledige kart vises. |
| Start                     | Startnummer og starttid for påmeldingen.                                                                                                                                                                                                      |


### Brikker

| Felt                   | Beskrivelse                                                                        |
|------------------------|------------------------------------------------------------------------------------|
| Vis ledige leiebrikker | Vise leiebrikker som er ledige.                                                    |
| Brikker                | Brikkenummeret som løperen løper med. Ved flere brikketyper så vises flere felter. |

### Fakturalinjer

| Felt                      | Beskrivelse                                                                                                                                                                                                                                   |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Produkter             | Kun synlig ved opprettelse av ny påmelding for hurtig registrering av fakturalinjer.<br/>Fakturalinjer foreslås automatisk basert på valgt klasse, personens alder og tidspunkt for påmeldingen.                                              |

### Tidtaking

| Felt                      | Beskrivelse                                                                                                                                                                                    |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Kilde starttid         | Angi om påmeldingen skal hente starttid fra stasjonsdata (brikketid) eller påmeldingens starttid når sluttiden skal beregnes. Brukes kun om man ønsker å overstyre innstillingen på klassen.   |
| Kilde starttid mellomtid | Angi om påmeldingen skal hente starttid fra stasjonsdata (brikketid) eller påmeldingens starttid når mellomtider skal beregnes. Brukes kun om man ønsker å overstyre innstillingen på klassen. |

### Identifikator
| Felt                      | Beskrivelse                                                                                                                                                                                                                                   |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Identifikatortype/Identifikator | [Identifikatorer](/nb/resources/common/identifiers)                                                                                                                                                                                           | 
         

## Relasjoner

Kommer...


## Oppgaver

<TaskList category="Entries" />


## Tips

### Hvordan vise deltagere "i skogen"

Vis påmeldinger uten status ved å sette kolonnefilteret til "Vis tomme" i påmeldingsoversikten, samt velg statusene ***Sjekket*** og ***Startet*** hvis de er i bruk i løpet. 