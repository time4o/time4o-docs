# Stasjoner

Alle inndata (input) i forbindelse med tidtakingen kommer fra stasjoner. En stasjon kan for eksempel være en Emit MTR, en ETS som sender meldinger via Emit sin server eller en "manuell" stasjon med mulighet for å sette en tid.

[Les mer om stasjonstyper](/nb/guide/station-types)

### Løpsstasjoner {#race-station}

En stasjon må kobles mot en løp via en løpsstasjon for at Time4o skal skjønne hvilket løp avlesingen gjelder for i de tilfeller arrangementet består av flere løp. 
En stasjon kan bestå av flere aktive løpsstasjoner og dermed håndtere avlesinger mot flere parallelle løp (f.eks. om individuelt og stafett går samtidig)

Ved f.eks. en brikkeavlesing så sjekker Time4o hvilke løp som ligger på stasjonens løpsstasjoner.
Deretter leter Time4o blant påmeldingene i disse løpene for å finne påmeldingen som dataene skal knyttes mot. Dette gjøres ved hjelp av brikkenummeret eller startnummeret på stasjonsdataene.

Det er også mulig å knytte en løpsstasjon mot spesifikke klasser i helt spesielle tilfeller.
Man kan også opprette flere løpsstasjoner mot samme løp, men med ulike tidtakingstyper med ulik prioritet, 
noe som f.eks. kan være nyttig om man ønsker å hente backup-måltid fra avleser i tilfelle ETS ikke fikk registrering måltiden.
Dette er oppsett for erfarne brukere :-)  


#### Brikketype

I tilfeller der løperne løper med flere brikker kan det angis hvilke brikketype denne stasjonen håndterer. 
Dette er kun nødvendig om det er fare for at de ulike brikkene har overlappende brikkenummer. 

#### Andre innstillinger

Øvrige instillinger på løpsstasjonen brukes når stasjonsdataene skal prosesseres, dvs. produsere tidtakingsdata.


#### Infoskjerm

Hvis stasjonen i tillegg til å produsere tidtakingsdata, skal levere meldinger til en [infoskjerm](/nb/resources/event/info-screens) (f.eks. brikkesjekk) så settes dette opp på løpsstasjonen.


## Opprette stasjon {#create}

For å produsere [stasjonsdata og tidtakingsdata](/nb/guide/timing) må det opprettes en stasjon og en løpsstasjon.
I de fleste løp kan dette gjøres automatisk når arrangementet opprettes.

1. Gå til stasjonsoversikten (***Tidtaking*** > ***Stasjoner***)
2. Opprett ny stasjon med ønsket ***stasjonsrolle***
2. Velg ønsket [stasjonstype](/nb/guide/station-types) (tilkoblet via USB)
3. Skriv inn valgfritt navn eller behold det som foreslåes.
4. Lagre stasjonen. Løpsstasjoner opprettes automatisk.
5. Hvis arrangementet har flere løp, sjekk at løpsstasjonen er koblet mot riktig løp.


## Koble til stasjon (USB) {#connect}

Dette kan kun gjøres fra støttede nettlesere. Se [systemkravene](/nb/guide/requirements) for mer info.

1. Koble stasjon fysisk til en USB-port
2. Gå til ***Tidtaking > Stasjonsdata***
3. Klikk knappen ***Koble til*** for å vise tilgjengelige stasjoner.
4. Klikk på ønsket stasjon i listen. Nettleseren viser en dialog med valg av COM-port. (Hvis dialogen ikke vises, så bruker du antalig en nettleser uten støtte.)
5. Velg riktig COM-port i nettleser-dialogen og velg ***Koble til***. Menyvalget blir grønt.
6. For enkelte stasjonstyper vil det dukke opp en dialog med stasjonsspesifikk valg som f.eks. å stille klokken eller endre kode på stasjonen.

::: info Merk!
Når stasjonen kobles til, vil Time4o automatisk sette enkelte innstillinger som f.eks. riktig protokoll. Klokke og kode må derimot settes av brukeren i dialogen som vises.
:::

::: warning Obs!
Hvis det gjøres en full "refresh" av nettsiden så vil stasjonen i de fleste tilfeller kobles til automatisk på nytt.
Unntaket er om det er tilkoblet mer enn én stasjon på samme pc/mobil. I dette tilfellet må disse stasjonene kobles til på nytt.
:::

## Koble fra stasjon eller endre innstillinger  {#disconnect}

1. Klikk på knappen ***Koble til*** og velg ønsket stasjon fra listen.
2. I dialogen kan du velge ***Koble fra*** hvis du vil bryte tilkoblingen uten å dra kabelen, eller du kan endre innstillinger i selve stasjonen som f.eks. å stille klokke eller sette ny kode.


## Felter

### Stasjon

| Felt          | Beskrivelse                                                                                        |
|---------------|----------------------------------------------------------------------------------------------------|
| Stasjonsrolle | Stasjonsrolle som i prinsipp kun brukes for å sette riktige standardinnstillinger på løpsstasjonen |
| Stasjonstype  | Stasjonstype                                                                                       |
| Navn          | Valgfritt navn på stasjonen                                                                        |

### Løpsstasjon


| Felt | Beskrivelse                                                                                                                                                        |
|--|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Aktiv | Løpsstasjonen er aktiv og skal brukes. Ved f.eks. et flerdagersarrangement kan løpsstasjonene klargjøres for alle løp, men kun aktiveres den dagen de skal brukes. |

##### Løp

| Felt | Beskrivelse                                                   |
|--|---------------------------------------------------------------|
| Løp | Tidtakingsdata skal knyttes mot påmeldinger i dette løpet.    |
| Klasser | Tidtakingsdata skal knyttes mot påmeldinger i disse klassene. |

##### Tidtakingsdata

| Felt                   | Beskrivelse                                                                                                                                                                      |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Type                   | Hvilke typer tidtakingsdata skal produseres (status, starttid, måltid osv.)                                                                                                      |
| Prioritet løpsstasjon  | Hvordan skal påmeldingens tidtakingsdata fra denne løpsstasjonen prioriteres i forhold til samme type tidtakingsdata fra andre løpsstasjoner. Lavere tall betyr bedre prioritet. |
| Prioritet data         | Hvilken tidtakingsdata skal benyttes om påmeldingen har flere av samme type tidtakingsdata fra samme løpsstasjon (Typisk flere avlesinger av samme brikke på samme stasjon)      |
| Sett data til inaktive | Sett data inaktive slik at de ikke brukes i tidtakingen, men kan aktiveres manuelt om ønskelig.                                                                                  |

##### Andre innstillinger

| Felt                            | Beskrivelse                                                                                                                                                   |
|---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Brikketype                      | Kun koble data mot brikker med denne brikketypen.                                                                                                             |
| Lås status | Stasjonen skal alltid gi påmelding denne statusen. Brukes f.eks. til startsjekk der deltageren får status ***Startet***                                       |

##### Andre innstillinger

| Felt         | Beskrivelse                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| Infoskjermer | Send melding til valgte inforskjermer                                                 |
| Beskrivelse  | Kun et fritekst felt for å skille ulike løpsstasjoner fra hverandre i tabellvisningen |

