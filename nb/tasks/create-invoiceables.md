---
job: Create Invoiceables
title: Opprett fakturalinjer
description: 
category: Economy
---

# {{ $frontmatter.title }}  ({{ $frontmatter.job }})

## Beskrivelse

Denne oppgaven kan opprette og oppdatere mange fakturalinjer av gangen, f.eks. for brikkeleie.


## Handlinger

Oppgaven støtter fire ulike handlinger.

### Opprett for alle påmeldinger

Opprett en fakturalinje for alle påmeldinger med valgte produkt. Kan f.eks. brukes i NM til å fakturere alle deltagere for reisefordeling.

### Opprett for påmeldinger med leiebrikke

Benyttes for å opprette fakturalinjer for brikkeleie.

Først må det opprettes et produkt med ønsket navn og pris, og så velges dette produktet før oppgaven kjøres.
Alle påmeldinger som har én eller flere leiebrikker vil få en fakturalinje med dette produktet.  

### Opprett for påmeldinger uten brikke

Benyttes for å opprette fakturalinjer for brikkeleie før leiebrikker er tildelt.

Først må det opprettes et produkt med ønsket navn og pris, og så velges dette produktet før oppgaven kjøres.
Alle påmeldinger som mangler brikke vil få en fakturalinje med dette produktet.

### Opprett manglende basert på klassens produkter

Sjekker alle påmeldinger og fakturalinjer mot produktene og reglene som ligger klassen. Hvis påmeldingen mangler fakturalinjer så opprettes de.
Den sletter derimot ingenting så hvis det finnes ekstra fakturalinjer på en påmelding så blir disse liggende. 

Hvilke produkter som blir brukt styres etter personens alder og påmeldingsstidspunkt.
Påmeldingstidspunkt hentes fra feltet ***Eksternt påmeldingstidspunkt*** som er påmeldingstidspunktet i ekstern påmeldingssystem (Eventor). Hvis dette feltet er blank, noe det vil være ved f.eks. direktepåmelding, så benyttes tidspunktet i feltet ***Opprettet*** på påmeldingen. 

Hvis man ønske å opprette alt forfra fordi det er feil i oppsettet, kan man slette alle fakturalinjer, 
korrigere oppsettet og deretter kjøre denne handlingen for opprettes alle fakturalinjer på nytt.
Merk at dette kan slette manuelle endringer som er gjort på fakturalinjene til påmeldingene.


### Oppdater pris for ufakturerte linker

Går igjennom påmeldingenes fakturalinjer og sjekke om prisen avviker fra prisen som ligger på produktet. 
Hvis det er avvik så oppdateres prisen på fakturalinjen.



## Konfigurasjon

| Innstilling  | Beskrivelse                                             |
|--------------|---------------------------------------------------------|
| Løp          | Løpet det skal opprettes fakturalinjer for.             |
| Klasse       | Klassene det skal opprettes fakturalinjer for.          |
| Handling     | Hvilken handling skal utføres for valgte løp og klasser |


