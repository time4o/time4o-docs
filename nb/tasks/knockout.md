---
job: Knockout
title: Knock-out sprint
description: Fordel deltagere til heat i knockout
category: Entries
---

# {{ $frontmatter.title }} ({{ $frontmatter.job }})

### Beskrivelse

Denne oppgave fordeler deltagere til klasser (heat) i en knock-out sprint, eller lignende konsepter.

Under **kilde** velger man klasse(r) som deltagerne skal hentes fra og under **mål** velger man klassen(e)e de skal
fordeles til.

For å bestemme antallet deltagere som skal "gå videre" så oppgir man antallet i feltet
***kvalifiseringsgrense*** på klassen og huker av for ***bruk klassens kvalifiseringsgrense*** i oppgaven.
Det er også mulig å si at kun deltagere med bestemte statuser (f.eks. OK) skal gå videre.

Hvis hverken kvalifiseringsgrense eller status settes vil alle deltagere "gå videre", noe som f.eks. kan være relevant hvis
alle deltagere skal gå videre fra prolog til kvartfinaler.

Hvordan deltagerne skal fordeles, bestemmes av [fordelingsregelen](/nb/tasks/knockout#distribution-rules).

Når oppgaven kjøres så opprettes det nye påmeldinger for deltagerne i mål-klassene, og i de fleste tilfeller bør man
kopiere startnummerer og inkludere brikkene slik at det bli med videre.

::: info Tips!
Husk at det er mulig å lage så mange oppgaver som man vil slik at man kan gjøre klar oppgaver med alle fordelinger på forhånd og så kjøre oppgavene under arrangementet etter hvert som klassene er klare.
:::

## NM Knockout 2026

[Se Google Regneark med oppsett for NM Knockout 2026](https://docs.google.com/spreadsheets/d/1e-EOacWF32KeCJrEHW1YJjQ5QFVljnw-KnG8qLGoj_s)



## Fordelingsregler {#distribution-rules}

Her er reglene Time4o støtter per i dag. Ta kontakt med Time4o support om du har behov for andre regler.

#### En til mange

Ét kildeklasse skal fordeles utover mange målklasser etter følgende modell.
Eksempelet inneholder 4 målklasser, men det er ingen øvre alle nedre grense på antall klasser man kan fordele til.
Tallet er plasseringen i kildeklassen.

| Målklasse 1 | Målklasse 2 | Målklasse 3 | Målklasse 4 |
|-------------|-------------|-------------|-------------| 
| 1           | 2           | 3           | 4           |
| 8           | 7           | 6           | 5           |
| 9           | 10          | 11          | 12          |
| 16          | 15          | 14          | 13          |

osv..

#### Mange til en

Deltagerne fra alle valgte kildeklasser samles i en klasse. Som regel settes en kvalifiseringsgrense på kildeklassene.
Denne brukes typisk når kvalifiserte deltagere i semifinaler skal samles i finalen.

#### To og to til en og en

Denne brukes om antallet kildeklasser er partall og antall målklasser er halvparten av kildeklasser slik at to og to
kildeklasser skal slåes sammen til én og én målklasse.
Typisk eksempel er at kvalifiserte deltagere fra 6 kvarfinaler skal fordeles på 3 semifinaler, der kvartfinale 1 og 2
skal fordeles på seminfinale 1, kvartfinale 3 og 4 skal fordeles på semifinale 2 osv.

#### Tre til to

Denne brukes om det er nøyaktig 3 kildeklasser som skal fordeles på 2 målklasser.
Regelen støtter maks 4 deltagere fra hver kildeklasse + én ekstra i tilfelle to deltagere deler 4. plassen.

| Kildeklasse | Plassering | Målklasse | 
|-------------|------------|-----------| 
| 1           | 1          | 1         |
|             | 2          | 1         |
|             | 3          | 1         |
|             | 4          | 1         |
| 2           | 1          | 1         |
|             | 2          | 2         |
|             | 3          | 2         |
|             | 4          | 1         |
| 3           | 1          | 2         |
|             | 2          | 2         |
|             | 3          | 2         |
|             | 4          | 2         |

#### Åtte til tre

Denne brukes om det er nøyaktig 8 kildeklasser som skal fordeles på 3 målklasser.
Regelen støtter maks 3 deltagere fra hver kildeklasse + én ekstra i tilfelle to deltagere deler 3. plassen.

| Kildeklasse | Plassering | Målklasse | 
|-------------|------------|-----------| 
| 1           | 1          | 1         |
|             | 2          | 1         |
|             | 3          | 1         |
| 2           | 1          | 1         |
|             | 2          | 1         |
|             | 3          | 1         |
| 3           | 1          | 1         |
|             | 2          | 2         |
|             | 3          | 1         |
| 4           | 1          | 2         |
|             | 2          | 2         |
|             | 3          | 2         |
| 5           | 1          | 2         |
|             | 2          | 2         |
|             | 3          | 2         |
| 6           | 1          | 3         |
|             | 2          | 2         |
|             | 3          | 3         |
| 7           | 1          | 3         |
|             | 2          | 3         |
|             | 3          | 3         |
| 8           | 1          | 3         |
|             | 2          | 3         |
|             | 3          | 3         |

## Konfigurasjon

#### Kilde

| Innstilling                       | Beskrivelse                                                                                        |
|-----------------------------------|----------------------------------------------------------------------------------------------------|
| Løp/klasse                        | Klassene det skal fordeles deltagere fra.                                                          |
| Bruk klassens kvalifiseringsgrens | Kun fordel kvalifiserte deltagere basert på klassens kvalifiseringsgrense (innstilling på klassen) |
| Status                            | Kun fordel deltagere med følgende status(er)                                                       |

#### Mål

| Innstilling | Beskrivelse                               |
|-------------|-------------------------------------------|
| Løp/klasse  | Klassene det skal fordeles deltagere til. |


#### Innstillinger

| Innstilling                     | Beskrivelse                                                                                               |
|---------------------------------|-----------------------------------------------------------------------------------------------------------|
| Fordelingsregel                 | Fordelingsregelen som skal benyttes                                                                       |
| Kopier startnummer              | Kopier starten og startnummeret deltageren hadde i kildeklasse over til ny påmelding i målklassen.        |
| Inkluder brikker                | Bruke brikken(e) fra påmeldingen i kildeklasse på påmeldingen i målklassen                                |
| Sett seeding basert på resultat | Deltageren får en seeding basert på resultatet sitt i kildeklassen. Merk at seeding settes på personnivå. |