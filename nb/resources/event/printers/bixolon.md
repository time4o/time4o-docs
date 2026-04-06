# Hvordan installere termiske skrivere fra Bixolon

Denne framgangsmåten er bekreftet å fungere for Bixolon SRP-350plusIII. 
Mest sannsynlig fungerer den også for andre Bixolon-modeller.

### Last ned Virtual Port Driver

- Gå til https://www.bixolon.com/support.php?kind=download og søk på skrivertype.
- Last ned Virtual Port Driver "Software BXLVCOM4USB Driver V2.7.0", og pakk ut et sted på datamaskinen
- Kjør installasjonsprogrammet (.exe fil på toppnivå i mappen)


### Oppsett/konfigurasjon

- Programmet installeres som default i "C:\BIXOLON\Virtual COM for USB"
 Åpne mappen med installasjonen og kjør "VCOM4USB_Configuration"-programmet
- Velg printeren som skal brukes, trykk "assign" og velg COM-port.
- "Test print" bør nå fungere om oppsettet er korrekt

### Bruk
- Etter konfigurasjon som beskrevet over må antageligvis Chrome restartes før COM-porten er tilgjengelig for Time4o
- Porten får et navn på formen Bixolon Virtual Serial Port For USB (COMxx)
- Bruk skrivertype "Bixolon SRP-350III" i Time4o