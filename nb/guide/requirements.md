# Systemkrav

Time4o kan i kjøres i alle moderne nettlesere, men for å kunne lese av brikker med eScan2, MTR4, ECU1 osv. eller koble til en termisk skriver, må nettleseren støtte "Web Serial Api" eller "WebUSB API"

- [Nettlesere med støtte for Web Serial API](https://caniuse.com/web-serial)
- [Nettlesere med støtte for WebUSB API](https://caniuse.com/webusb)

Både Microsoft Windows, Apple MacOS og Linux er testet med hell.

I linux må du legge til brukeren din i dialout-gruppa med følgende kommando:

```sudo usermod -a -G dialout dittbrukernavn```

Merk at maskiner med streng sikkerhet kan blokkere tilgangen til tilkoblet avlesingsutstyr. Dette gjelder typisk jobb-maskiner.

::: info Anbefaling
Time4o anbefaler  [Google Chrome](https://www.google.com/chrome) som er nettleseren som i hovedsak benyttes i forbindelse med utvikling og testing.
:::

## Mobiler og nettbrett

Flertallet av mobiltelefoner og nettbrett med operativsystemet Android og nettleseren [Chrome Android](https://play.google.com/store/apps/details?id=com.android.chrome) kan lese av brikker ved å koble til avleseren til USB-porten ved hjelp av et USB-C til USB-A OTG-adapter. 

Foreløpig støtter ikke mobilene enheter å skrive ut på termisk skriver, men det kommer!