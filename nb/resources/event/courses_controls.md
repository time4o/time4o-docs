# Løyper og poster

Løyper består av løypeposter som knytter poster til løyper. Alle poster er egne objekter som deles av løypene.

Hvis man endrer en post sin postkode så vil endringen gjenspeile seg i alle løyper som benytter posten.

En og samme klasse kan ha flere løyper. I klasseoppsettet defineres det hvordan løypene skal håndteres.

Både startpost og målpost er en del av stemplingssjekken såfremt de ikke unntas.

::: info
I Time4o kan en løype starte på hvilken som helst kode. Det trenger med andre ord ikke være 0-bukken som setter starttiden til deltageren.
:::


## Opprette løyper

Det er tre måter å opprette løyper på:

1. [Importere fil](/nb/tasks/import-courses) (IOF XML 3.0) fra løypeleggerprogrammet (OCAD, Condes, PurplePen).
2. Opprette manuelt (se beskrivelse under)
3. Opprette løyper basert på avleste stemplinger (beskrivelse kommer)

### Manuell opprettelse
1. Opprett ny løype
2. Opprett løypeposter
   - I de fleste tilfeller skal løypa starte med en 0-post. Da skal "Posttype" være "Start", "Nummer" være tomt og i "Post" skriver man 0. Hvis en post med kode 0 ikke finnes fra før så blir den automatisk opprettet. Dette gjelder forøvrig alle postkoder som legges inn.
   - Neste løypepost har "Posttype" "Post"
   - Bruk gjerne hurtigtasten "Alt + a" for lagre løypeposten og starte på ny post.
   - Løypepostene nummerers automatisk
   - Tilslutt registreres målposten hvis det benyttes målstempling.


## Felter

### Løyper

| Felt                   | Beskrivelse                                                                                                           |
|------------------------|-----------------------------------------------------------------------------------------------------------------------|
| Løp                    | Løpet løypa tilhører                                                                                                  |
| Navn                   | Løypens navn                                                                                                          |
| Lengde                 | Løypens lengde i meter                                                                                                |
| Stigning               | Løypens stigning (meter)                                                                                              |
| Startbås               | Kan benyttes til starttrekking                                                                                        |
| Poengberegning / Poeng | Se [poengberegninger](/nb/resources/common/point-calculations). Benyttes i [poengløp](/nb/guide/tutorials/point-race) |
| Antall kart            | Antall produserte kart. Muliggjør info om antall ledige kart etc.                                                     |

### Løypeposter

| Felt         | Beskrivelse                                                                                                                                 |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| Posttype     | Startpost, vanlig post eller målpost.                                                                                                       |
| Nummer       | Postnummer (gjelder kun vanlige poster)                                                                                                     |
| Post         | Post (postkode)                                                                                                                             |
| Strekklengde | Lengden til denne posten fra forige post (meter)                                                                                            |
| Lengde       | Lengden til denne posten fra start (meter). <br/>Ved import av løyper beregnes dette feltet automatisk såfremt filen innholde strekklengde. |
| Beskrivelse  | Valgfri beskrivelse av posten. Kan f.eks. benyttes til mellomtidsposter                                                                     |
| Mellomtid    | Regel for bruk av posten som mellomtidspost                                                                                                 |
| Poeng        | Benyttes i [poengløp](/nb/guide/tutorials/point-race)                                                                                       |
| Unnta fra stemplingsjekk | Posten er ikke med i stemplingsjekken for den aktuelle løypa. Posten inkluderes i strekktider.                                              |

### Poster

| Felt                     | Beskrivelse                                                                                                                      |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| Løp                      | Løpet løypa tilhører                                                                                                             |
| Postkode                 | Koden på posten                                                                                                                  |
| Beskrivelse              | Valgfri beskrivelse av posten. Kan f.eks. benyttes til mellomtidsposter                                                          |         
| Mellomtid                | Regel for bruk av posten som mellomtidspost                                                                                      |                      
| Alias til                | Posten er et alias for en annen post. Benyttes typisk der man må bruke to ulike postkoder på samme post i løype. Også kalt jokerpost. |                      
| Unnta fra stemplingsjekk | Posten er ikke med i stemplingsjekken for alle løyper som har posten. Posten inkluderes i strekktider.                           |                      


## Linker

[Se jukselappen for feilsituasjoner og løsninger](/nb/guide/cheat-sheet#courses)


## Oppgaver

<TaskList :category="['Courses', 'Controls']" />

 