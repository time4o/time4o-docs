# Arrangement

Arrangementer administreres i Time4o Hub. Et arrangement kan bestå av flere løp, og kan dekke både flerdagersløp og karuseller som går over lengre tid.

## Opprette arrangement

1. Opprett nytt arrangement fra arrangementsoversikten
2. Velg ***Klient***, dvs. organisasjonen som eier arrangemententet og har lisensen. I de fleste tilfeller er det kun én klient tilgjengelig.
3. Huk av for ***Bruk arrangement fra Eventor*** hvis arrangementet ligger i Eventor.
4. Velg ***Connection***. Hvis ingen er tilgjengelig må en [connection opprettes](/nb/resources/hub/clients#connections).
5. Når connection er valgt vises klubbens kommende løp, samt løp fra de siste 6 månedene. Det kan ta noen sekunder før lista er klar. Velg det aktuelle løpet.
6. Angi arrangementets ***Navn***, ***Startdato*** og ***Første start***. Dette fylles inn automatisk om løpet hentes fra Eventor.

#### Innstillinger
7. Angi ***Språk***, ***Tidssone*** og ***Valuta***. Dette hentes fra klienten, men kan overstyres. Tidssone er viktig for å vise korrekte tidspunkter, men kan også endres i etterkant. (Kontakt gjerne support om du har angitt feil tidssone og må endre etter at løpet er i gang.)

#### Hurtigoppsett

Følgende innstillinger kan tilpasses etter at arrangementet er opprettet, men det anbefales å bruke muligheten her til å komme raskt i gang.

8. Angi ***Stemplingssystem*** og ***Avlesing*** der du velger avlesingsenheten du benytter.
9. [Time4o Center](https://center.time4o.com) er tjenesten som blant annet viser LIVE resultater. 
   - Fjern markeringen av ***Opprett Center*** hvis du ikke ønsker LIVE resultater. Center kan opprettes senere. 
   - Hvis du ønsker å vente med å publiseres påmeldinger, starttider etc. fjerne du markeringen ***Aktivér Center synk***.
10. Importer løypefil (IOF XML 3.0) om ønskelig. Kan gjerne gjøres senere.
11. Hvis arrangementet er hentet fra Eventor kan klasser og påmeldinger importeres samtidig som arrangementet opprettes.


12. Lagre arrangementet. Det tar ca 10 sekunder å opprette et nytt arrangement. Når den spinnende sirkelen forsvinner er alt klart! Klikk på raden for å åpen arrangementet.


## Tilganger

Brukere må gis direkte tilgang til arrangementet. Pr. nå vil en bruker ikke ha tilgang selv om den har tilgang til klienten som eier arrangementet

### Roller

Brukerne kan per nå tildeles to roller:

#### Arrangementsadministrator

Full tilgang

#### Arrangementsbruker

Kan ikke gi brukertilganger eller endre innstillingene som ligger i hub-en (navn, dato, tidssone, valuta, språk).
Utover det full tilgang til selve arrangementet.

NB! Det er mulig å definere roller med spesifikke tilganger i arrangementet. Ta kontakt med support hvis du har ønsker til andre roller.  




## Felter

| Felt         | Beskrivelse                                                                                                                                                                                          |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Navn         | Arrangementets navn.                                                                                                                                                                                 |
| Klient       | Klienten som eier arrangementet. Kun klienter som brukeren har tilgang til vil kunne velges.                                                                                                         |
| Tidssone     | Tidssonen der arrangementet arrangeres. Påvirker diverse tidsstempler og arrangementets løpende klokke. Det er lurt å sette denne riktig fra start av, selv om det er mulig å endre den i etterkant. |
| Startdato    | Benyttes i kalenderoversikter etc.                                                                                                                                                                   |
| Første start | Første start i arrangementet. Ikke vesentlig i forhold til tidtakingen, deltagere kan starte tidligere.                                                                                              |
| Språk        | Arrangementets språk. Benyttes blant annet i utskrifter. Språkdrakten i systemet forøvrig styres av brukerens språkvalg.                                                                             |
| Valuta       | Valuta som benyttes i forbindelse med faktureringen.                                                                                                                                                 |
