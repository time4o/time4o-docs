# Identifikatorer

Ressurser som f.eks. personer, organisasjoner, klasser og påmeldinger har felter for identifikatortype og identifikator.
Dette er verdier som typisk settes ved import av data fra eksterne systemer som Eventor, og representerer ressursens ID i det eksterne systemet (f.eks. Eventor ID).

Ved import av data er identifikatoren nødvendig for å unngå duplikate data. Importrutinen bruker identifikatoren til å sjekke om en ressurs med samme ID er importert tidligere og kan deretter velge å enten overskrive tidligere importerte data eller å unnlate og gjøre noe.

Også ved eksport til eksterne systemer som Eventor er identifikatoren nødvendig for at det eksterne systemet skal kunne håndtere dataene korrekt.

::: warning Obs!
Identifikatorer kan legges til, endres og fjernes manuelt. Det må kun gjøres om man er helt sikker på konsekvensen av det! 
:::

### Identifikatortyper

Personer kan ha flere identifikatorer. Identifikatortype er derfor nødvendig for å angi hva slags type identifikator det er. Eksempelvis kan en person både ha en Eventor ID og en IOF ID.

Identifikatortype muliggjør import fra ulike eksterne systemer til samme arrangemengt/løp selv om de eksterne systemene har overlappende identifikatorer.

Her er oversikt over hvilke identifiktortyper enkelt systemer bruker:

| System          | Identifikatortype |
|-----------------|-------------------|
| Eventor Norge   | Norway            |
| Eventor Sverige | Sweden            |
| Eventor IOF     | ?                 | 


