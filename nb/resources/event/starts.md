# Starter

En ***start*** er i praksis en starttid, men iom. den som oftest består av et startnummer og også kan bestå av en løype (ved individuell gafling) så kalles den kun for en ***start***.
I Time4o er startene egne objekter, og ved trekking av startlisten så kobles en start mot en påmelding. 

I mange tidtakingssystemer håndteres ledige starttider som fiktive påmeldinger eller deltagere med en status ***ledig***. 
I Time4o er en ledig starttid en start som ikke er knyttet mot en påmelding.  

At startene er egne objekter gjør at man kan sjonglere med startene, og samtidig ha kontroll på hvilke starter som er opptatte og hvilke som er ledige.
En start kun kan tildeles én påmelding, såfremt den ikke er definert som en ***multistart***.

Har man indivuelle gaflinger så vil dessuten løypa alltid følge startnummeret noe som er en stor fordel om kartene merkes med startnummer.   

::: warning OBS!
I klasser med fristart er det **ikke nødvendig å opprette starter** såfremt ikke deltageren skal bære et startnummer!
Legg inn antall trykte kart på løypene for å ha kontroll på hvor mange påmeldinger klassene med fristart kan ha.
:::

## Trekking

Trekking av starter består av to steg: opprettelse av starter og tildeling av starter. Fordelen med å gjøre det i to steg er flere. 
Etter opprettelse og før trekking kan starter tildeles manuelt til deltagere, f.eks. om noen har ønsker som sen eller tidlig start. 
Deretter tildeles starter til resten av deltagerne.

Etter import av f.eks. etteranmeldte så er det dessuten enkelt å tildele ledige starter til de nye påmeldingene.


### Opprette starter

En start kan opprettes manuelt, men i de fleste tilfeller benyttes oppgaven [Opprett starter](/nb/tasks/create-starts).


### Tildele starter

En start kan velges manuelt i en påmelding, men i de fleste tilfeller benyttes oppgaven [Tildel starter](/nb/tasks/assign-starts) som i praksis er å trekke starttider.

Oppgaven kan [tidsstyres](/nb/tasks#schedules). Hvis man i tillegg tidsstyrer importen av påmeldinger fra Eventor kan denne oppgaven kjøres automatisk like etterpå.
Tilslutt tidsstyres oppgaven som eksporterer starttidene til Eventor, og på denne måten kan hele prosessen med å behandle etteranmeldinger automatiseres.

## World Ranking Events (WRE){#wre}

I WRE-løp skal startliste seedes etter deltagerens [WRE-ranking](https://ranking.orienteering.org/).

Time4o har støtte for å gjøre dette så smidig som mulig når Eventor er benyttet som påmeldingssystem.

Først må IOF ID-er importeres for påmeldte som har registrert det i Eventor-profilen sin, og deretter importeres WRE-poengene.
Begge importene kan fint utføres flere ganger.

Før importene bør det utføres en import av påmeldinger fra Eventor slik at alle påmeldinger er i Time4o.

::: warning OBS!
Hvis arrangementet har flere WRE-løp, og de består av både sprint og lang/mellom så bør løpene opprettes som ulike arrangementer i Time4o iom. at poengene lagres på personen, og det er ulik ranking i sprint og lang/mellom.
:::

### Steg 1: Importer IOF ID-er

1. Logg inn i Eventor og last ned påmeldingsoversikten i Excel-format
2. Åpne excel-arket og gjør følgende:
   - Flytt fanen ***påmeldinger*** slik at den er først i Excel-arket. Importen kan kun hente den første fanen.
   - Endre kolonneoverskriften ***Person-id*** til ***PERSON IDENTIFIER:Norway***
   - Endre kolonneoverskriften ***IOF-person-id*** til ***PERSON IDENTIFIER:IOF***
   - Øvrige kolonner kan ligge slik de er
3. Lagre Excel-arket som Excel type **.xlsx** da excel-formatet som Eventor produserer, ikke støttes av Time4o
4. Gå til ***Påmelding*** og kjør oppgaven ***Importér påmeldinger*** med følgende innstillinger:
   - Kilde: ***Fil***
   - Filformat: ***Excel***
   - Fil: Velg excel-arket
   - Match etter: ***Personidentifikator***
   - Identifikatortype: ***Norway***

Vi har nå importert IOF ID-er på personene i Time4o.

### Steg 2: Importer WRE-poeng

1. Gå til [WRE-rankingen](https://ranking.orienteering.org/Ranking) hos IOF
2. Last ned ønsket ranking i csv-format
   - Husk både menn og kvinner.
   - **Husk at det er ulik ranking for sprint og lang/mellom!**
3. Åpne csv-fila og gjør følgende:
   - Endre kolonneoverskriften ***IOF ID*** til ***PERSON IDENTIFIER:IOF***
   - Endre kolonneoverskriften ***WRE points" til ***PERSON POINTS***
   - Øvrige kolonner kan ligge slik de er
4. Lagre fila (la den være i csv-format) 
5. Gå til ***Påmelding*** og kjør oppgaven ***Importér påmeldinger*** med følgende innstillinger:
   - Kilde: ***Fil***
   - Filformat: ***Excel***
   - Fil: Velg csv-fila
   - Match etter: ***Personidentifikator***
   - Identifikatortype: ***IOF*** (OBS!)

Denne importen vil ta ca 2 minutter.

Vi har nå importert WRE-poeng på personene i Time4o og kan trekke startlista basert på poengene.
Det er også mulig å bruke poengene til plassere deltagerne i en seeding-gruppe og deretter trekke basert på seeding.  


## Felter 


| Felt        | Beskrivelse                                                                                      |
|-------------|--------------------------------------------------------------------------------------------------|
| Løp         | Løpet starten tilhører.                                                                          |
| Klasse      | Klassen som starten tilhører. Klasse må angis for at starten skal være tilgjengelig for klassen. |
| Startnummer | Startnummer                                                                                      |
| Starttid    | Starttid. Dato må oppgis og som standard forslås løpets dato.                                    |
| Løype       | Benyttes ved individuell gafling. Hvis løype ikke angis benyttes løypa på klassen.               |



## Oppgaver

<TaskList category="Starts" />

