# Klasser

Klasser må oppretts for hvert løp. I flerdagersløp vil typisk identifikatoren benyttes for å sammenstille klasser på tvers av løpene.

En klasse har mange innstillinger der en del av disse kan arve verdien sin fra løpet. Den mest brukte innstillingen settes på løpsnivå og unntakene på klassenivå.

## Opprette klasser

Klasser kan [importeres fra Eventor eller fil (IOF XML 3.0)](/nb/tasks/import-classes) eller opprettes manuelt.


## Felter 

### Klasse

| Felt                            | Beskrivelse                                                                    |
|---------------------------------|--------------------------------------------------------------------------------|
| Løp                             | Løpet klassen tilhører                                                         |
| Navn                            | Klassens navn                                                                  |          
| Minumumsalder                   | Nedre aldersgrense for å delta i klassen. Blank verdi betyr ingen nedre grense |          
| Maksimumsalder                  | Øvre aldersgrense for å delta i klassen. Blank verdi betyr ingen øvre grense   |          
| Kjønn                           | Hvilke kjønn kan delta i klassen                                               |          
| Identifikatortype/Identifikator | [Identifikatorer](/nb/resources/common/identifiers)                            |

### Løype

| Felt                            | Beskrivelse                                             |
|---------------------------------|---------------------------------------------------------|
| Løypehåndtering                 | [Løypehåndtering](/nb/resources/common/course-handling) |


### Start

Feltene benyttes i forbindelse med opprettelse av starter (startnummer og starttider).

| Felt             | Beskrivelse                                                                                                                     |
|------------------|---------------------------------------------------------------------------------------------------------------------------------|
| Første start (1)    | Angir først starttid for klassen. Benyttes som starttid ved fellesstart.                                                        |
| Starttype (1)       | Brukes i forbindelse med opprettelse av starter. Ved ***fristart*** og ***fellesstart*** så vil ***starten*** ikke få starttid. |
| Startintervall (1)  | Vises hvis starttype er ***intervall***. Angir startintervall i sekunder.                                                       |
| Startnummerserier (1) | Angi starten på startnummerserie. Hvis flere klasser arver fra løpet så vil klassen dele serien.                                | 
| Neste startnummer | Angir neste startnummer som skal brukes ved opprettelse av starter.                                                             | 
| Ledige starter   | Angir hvor mange ekstra starter som skal opprettes utover antall påmeldinger som ligger inne.                                   | 
| Rekkefølge trekking | Angir rekkefølgen på klasser som har starttider etter hverandre, typisk klasser med samme løype.                                | 


### Tidtaking


| Felt                       | Beskrivelse                                                                                                                                                                                |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Brikketyper                | Hvis arrangementet benytter flere brikker og brikketyper så angis det her hvilke brikketyper klassen skal benytte. En påmelding vil vise brikkenummer-felter basert på denne innstillingen |
| Kilde starttid (1)         | Angi om klassen skal hente starttid fra stasjonsdata (brikketid) eller påmeldingens starttid når sluttiden skal beregnes.                                                                  |
| Kilde starttid mellomtid (1) | Angi om klassen skal hente starttid fra stasjonsdata (brikketid) eller påmeldingens starttid når mellomtider skal beregnes.                                                                |


### Resultat

| Felt              | Beskrivelse                                                                                                                                        |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Resultatenhet     | Skal tid eller poeng benyttes som sluttresultat                                                                                                   |
| Resultatlistetype | Angir om resultatlisten skal sorteres og om tiden vises i resultatlister, resultateksporter og Center. Benyttes ikke av den interne resultatsiden. |


(1) Hvis feltet er tomt arves innstillingen fra løpet.          


## Oppgaver

<TaskList category="RaceClasses" />
