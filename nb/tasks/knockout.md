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

Hvis hverken kvalifiseringsgrense eller status settes vil alle deltagere "gå videre", noe som f.eks. kan være relevant
hvis
alle deltagere skal gå videre fra prolog til kvartfinaler.

Hvordan deltagerne skal fordeles, bestemmes av [fordelingsregelen](/nb/tasks/knockout#distribution-rules).

Når oppgaven kjøres så opprettes det nye påmeldinger for deltagerne i mål-klassene, og i de fleste tilfeller bør man
kopiere startnummerer og inkludere brikkene slik at det bli med videre.

::: info Tips!
Husk at det er mulig å lage så mange oppgaver som man vil slik at man kan gjøre klar oppgaver med alle fordelinger på
forhånd og så kjøre oppgavene under arrangementet etter hvert som klassene er klare.
:::

::: warning OBS!
Oppgaven lager en kobling mellom kildepåmeldingen og målpåmeldingen ved å legge kildepåmeldingens ID som identifikator på målpåmeldingen.

Dette gjør at oppgaven kan kjøres flere ganger uten å skape duplikater.

Ulempen er at man ikke kan bruke oppgaven til å fordele samme påmeldingen til ulike målklasser.
Den andre gangen oppgaven kjøres så vil en eksisterende målpåmelding flyttes til ny klasse i stedenfor at det opprettes enda en kopi. 

Det er svært sjelden dette er en problemstilling, men det kan være et tema om f.eks. alle i kvalifiseringen både skal løpe kvartfinaler og semifinaler.
:::

## NM Knockout 2026

[Se Google Regneark med oppsett for NM Knockout 2026](https://docs.google.com/spreadsheets/d/1e-EOacWF32KeCJrEHW1YJjQ5QFVljnw-KnG8qLGoj_s)

## Fordelingsregler {#distribution-rules}

Her er reglene Time4o støtter per i dag. Ta kontakt med Time4o support om du har behov for andre regler.

Tabellene viser deltagerens plassering i kildeklassen, samt ev. hvilken kildeklasse deltageren kommer fra (Hx).

#### Tre kvalifiseringsheat → seks kvartfinaler (WRE)

Tre kildeklasser skal fordeles utover seks målklasser etter følgende modell.

| Målklasse 1 | Målklasse 2 | Målklasse 3 | Målklasse 4 | Målklasse 5 | Målklasse 6 |
|:------------|:------------|:------------|:------------|:------------|:------------|
| 1 H3        | 2 H2        | 1 H1        | 2 H3        | 1 H2        | 2 H1        |
| 4 H1        | 3 H3        | 4 H2        | 3 H1        | 4 H3        | 3 H2        |
| 5 H2        | 6 H1        | 5 H3        | 6 H2        | 5 H1        | 6 H3        |
| 8 H3        | 7 H2        | 8 H1        | 7 H3        | 8 H2        | 7 H1        |
| 9 H1        | 10 H3       | 9 H2        | 10 H1       | 9 H3        | 10 H2       |
| 12 H2       | 11 H1       | 12 H3       | 11 H2       | 12 H1       | 11 H3       |

Se forøvrig punkt 12.24 i
IOF [sine konkurranseregler](https://onedrive.live.com/embed?cid=663580750d0c0bce&resid=663580750D0C0BCE!sd53a78e3a0e14f73883342d6bf780786&ithint=file%2cpdf&embed=1&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy82NjM1ODA3NTBkMGMwYmNlL0lRVGplRHJWNGFCelQ0Z3pRdGFfZUFlR0FSUlRKSU5FdXBnWHV6ZG9SaWpNR0Fj&em=2&wdHideHeaders=True&wdDownloadButton=False).

#### Ett kvalifiseringsheat → seks kvartfinaler (WRE)

Ét kildeklasse skal fordeles utover seks målklasser etter følgende modell.

| Målklasse 1 | Målklasse 2 | Målklasse 3 | Målklasse 4 | Målklasse 5 | Målklasse 6 |
|:------------|:------------|:------------|:------------|:------------|:------------|
| 1           | 6           | 2           | 5           | 3           | 4           |
| 12          | 7           | 11          | 8           | 10          | 9           |
| 13          | 18          | 14          | 17          | 15          | 16          |
| 24          | 19          | 23          | 20          | 22          | 21          |
| 25          | 30          | 26          | 29          | 27          | 28          |
| 36          | 31          | 35          | 32          | 34          | 33          |

Se forøvrig punkt 12.24 i
IOF [sine konkurranseregler](https://onedrive.live.com/embed?cid=663580750d0c0bce&resid=663580750D0C0BCE!sd53a78e3a0e14f73883342d6bf780786&ithint=file%2cpdf&embed=1&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy82NjM1ODA3NTBkMGMwYmNlL0lRVGplRHJWNGFCelQ0Z3pRdGFfZUFlR0FSUlRKSU5FdXBnWHV6ZG9SaWpNR0Fj&em=2&wdHideHeaders=True&wdDownloadButton=False).

#### Ett heat → mange heat (A)

Ét kildeklasse skal fordeles utover mange målklasser etter følgende modell.
Eksempelet inneholder 4 målklasser, men det er ingen øvre alle nedre grense på antall klasser man kan fordele til.

| Målklasse 1 | Målklasse 2 | Målklasse 3 | Målklasse 4 |
|-------------|-------------|-------------|-------------| 
| 1           | 2           | 3           | 4           |
| 8           | 7           | 6           | 5           |
| 9           | 10          | 11          | 12          |
| 16          | 15          | 14          | 13          |

osv..

Denne kan f.eks. benyttes når det er få deltagere og alle går direkte fra kvalifisering til semifinale (WRE-regler)

#### Ett heat → mange heat (B)

Ét kildeklasse skal fordeles utover mange målklasser etter følgende modell.
Eksempelet inneholder 4 målklasser, men det er ingen øvre alle nedre grense på antall klasser man kan fordele til.

| Målklasse 1 | Målklasse 2 | Målklasse 3 | Målklasse 4 |
|-------------|-------------|-------------|-------------| 
| 1           | 2           | 3           | 4           |
| 5           | 6           | 7           | 8           |
| 9           | 10          | 11          | 12          |

osv..

#### Mange heat → ett heat

Deltagerne fra alle valgte kildeklasser samles i en klasse. Som regel settes en kvalifiseringsgrense på kildeklassene.
Denne brukes typisk når kvalifiserte deltagere i semifinaler skal samles i finalen.

#### To og to heat → ett og ett heat

Denne brukes om antallet kildeklasser er partall og antall målklasser er halvparten av kildeklasser slik at to og to
kildeklasser skal slåes sammen til én og én målklasse.
Typisk eksempel er at kvalifiserte deltagere fra 6 kvarfinaler skal fordeles på 3 semifinaler, der kvartfinale 1 og 2
skal fordeles på seminfinale 1, kvartfinale 3 og 4 skal fordeles på semifinale 2 osv.

#### Tre heat → to heat

Denne brukes om det er nøyaktig 3 kildeklasser som skal fordeles på 2 målklasser.
Regelen støtter maks 4 deltagere fra hver kildeklasse + én ekstra i tilfelle to deltagere deler 4. plassen.

| Målklasse 1 | Målklasse 2 | 
|-------------|-------------| 
| 1 H1        | 1 H3        |
| 2 H1        | 2 H3        |
| 3 H1        | 3 H3        |
| 4 H1        | 4 H3        |
| 1 H2        | 2 H2        |
| 4 H2        | 3 H2        |

#### Åtte heat → tre heat

Denne brukes om det er nøyaktig 8 kildeklasser som skal fordeles på 3 målklasser.
Regelen støtter maks 3 deltagere fra hver kildeklasse + én ekstra i tilfelle to deltagere deler 3. plassen.

| Målklasse 1 | Målklasse 2 | Målklasse 2 |
|-------------|-------------|-------------| 
| 1 H1        | 1 H4        | 1 H7        |
| 2 H1        | 2 H4        | 2 H7        |          
| 3 H1        | 3 H4        | 3 H7        |         
| 1 H2        | 1 H5        | 1 H8        |       
| 2 H2        | 2 H5        | 2 H8        |     
| 3 H2        | 3 H5        | 3 H8        |  
| 1 H3        | 2 H3        | 1 H6        |
| 3 H3        | 2 H6        | 3 H6        |


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