# Brikker 

I Time4o ligger brikkene i et eget brikkeregister som er felles for alle løp i arrangementet. En brikke kan tilhøre personer og påmeldinger. 
Det er brikken som tilhører påmeldingen som brukes i tidtakingen. 

At en brikke tilhører en person innebærer at brikken automatisk blir valgt hvis det opprettes en påmelding for personen, 
noe som er nyttig i arrangementer med flere løp der man ønsker et register med personer og brikker på tvers av løpene. Ved import av påmeldinger knyttes en brikke både mot person og påmelding.

Samme brikke kan brukes i flere påmeldinger. Det vil i så fall gi en advarsel ved avlesing av brikken, og tidtaker må manuelt koble stasjonsdata mot riktig påmelding.


### Leiebrikker

Leiebrikker kan importeres på forhånd og tildeles til deltagere manuelt eller via oppgaven [Assign Cards](/nb/tasks/assign-cards).

### Info-felt

En brikke består av et info-felt som kan inneholde valgfri informasjon. Det benyttes helst i forbindele med leiebrikker da denne teksten vises når når leiebrikken lese av.
Typisk kan det brukes til å ha kontrol på hvem som eier leiebrikken hvis både har egne leiebrikker, samt har leid brikker fra Emit eller EQTiming.


## Brikketyper

Time4o støtter ubegrenset antall brikker pr. person og påmelding.
For å kunne knytte flere brikker mot en påmelding må det opprettes flere brikketyper.

Som standard bruker klassene alle brikketyper som er opprettet. På klassen kan man angi hvilke brikketyper klassen benytter hvis ulike klasser har ulike brikketyper.
I et arrangement med flere brikketyper er det ikke et krav at klasser som kun benytter én brikketype settes opp tilsvarende,
men det er en fordel i forhold til blant annet Time4o sin selvbetjeningsløsningen (under utvikling).  

::: info Tips!
Når klassoppsettet importeres (XML/Eventor) vil brikketyper settes opp automatisk i forhold til oppsettet XML/Eventor.
::: 


## Felter

### Brikke

| Felt         | Beskrivelse                                                                               |
|--------------|-------------------------------------------------------------------------------------------|
| Brikkenummer | Brikkens brikkenummer.                                                                    |
| Brikketype   | Brikkens brikketype. Benyttes i hovedsak hvis hvis deltageren løper med mer enn én brikke. | 
| Info         | Kan benyttes fritt. Tekst vises ved avlesing om brikken er leiebrikke.                    |          
| Leiebrikke   | Brikken er en leiebrikke.                                                                 |          


### Brikketype

| Felt             | Beskrivelse                                                                                    |
|------------------|------------------------------------------------------------------------------------------------|
| Navn             | Navn på brikketype.                                                                            |
| Stemplingssystem | Stemplingssystemet brikketypene bruker. Valgene gjenspeiler hva som er tilgjengelig i Eventor. | 
| Standard         | Bruk denne brikketypen som standard når nye brikker legges til.                                |          
                                                                     

## Oppgaver

<TaskList category="Cards" />

