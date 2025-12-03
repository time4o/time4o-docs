# Systemkrav

Time4o kan i kjøres i alle moderne nettlesere, men for å kunne lese av brikker med MTR4, ECU1 osv. må nettleseren støtte "Web Serial Api" eller "WebUSB API"

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

Enkelt mobiltelefoner og nettbrett med operativsystemet Android og nettleseren [Chrome Android](https://play.google.com/store/apps/details?id=com.android.chrome) kan lese av brikker ved å koble til avlesere til USB-porten. Dessverre gjelder dette et begrenset antall modeller da mange modeller forhindrer Chrome fra bruke USB driveren.

[Se sak hos Chromium](https://issues.chromium.org/issues/40137537)

Send gjerne en e-post til post@time4o.com hvis du har en modell som støtter eller ikke støtter avlesere.

### Modeller bekreftet med støtte
- Xiaomi Mi A2
- Lenovo Tab P11

### Modeller bekreftet uten støtte
- Sony Xperia 1 II XQ-AT51 
- Google Pixel 8a
- Google Pixel 9 Pro XL

::: warning OBS!
Merk at støtten i teorien kan endre seg ved progamvareoppdateringer, så denne oversikten er ingen garanti for at din enhet fungerer.
:::