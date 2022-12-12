# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Mischa van Dijken

  #### Je startniveau:
  blauw

  #### Je focus:
  Surface laag
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  link naar de website die je gaat namaken óf de naam/omschrijving van je eigen ontwerp
https://www.dunkin.nl/  

  #### Screenshot(s) van de eerste pagina (small screen): 
  hier de naam van de pagina  
  <img src="readme-images/Hoofdpagina.png" width="375px" alt="Dunkin Donuts hoofdpagina">

  #### Screenshot(s) van de tweede pagina (small screen):
  DD BLOGS 
  <img src="readme-images/DDBLOGS.png" width="375px" alt="Blogs van Dunkin Donuts">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 1e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  - Bestellen kan bijna niet
  - Bij de producten wordt de naam niet opgenoemd
  - Veel headers wat het verwarrend maakt
  - Dunkin Donuts' gebruikt felle kleuren wat helpt.

  #### Screenreader
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Minder headers kunnen ervoor zorgen dat de screenreader niet allemaal niet nodige informatie voorleest.


  #### Muis en Toetsenbord 
  Het tabben ging goed maar je kan er niet echt mee bestellen dus voor het grote geheel is het echt heel slecht.

  Dunkin Donuts kan ervoor zorgen dat er meer juiste informatie wordt voorgelezen.


  #### Motoriek (shocks, elastiekjes)
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier gaat veel goed omdat Dunkin Donuts veel grote knoppen gebruikt.


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Dunkin Donuts gebruikt felle kleuren wat erg helpt.


</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 2e werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/Custom-1.png" width="375px" alt="Dunkin Donuts homepage">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/Custom-2.png" width="375px" alt="Dunkin Donuts blogs pagina">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/Custom-3.png" width="375px" alt="Menu breakdown">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
  Ik vond het lastig om nog niet teveel met de styling bezig te zijn maar de HTML zelf coderen ging goed.
  <img src="readme-images/eersteversie.png" width="375px" alt="Eerste versie website">
  Verder is dit voor nu helemaal simpele code en kan ik nu al vele beter maar ben ik ziek.
  <img src="readme-images/eersteversie-code.png" width="375px" alt="Eerste versie html">

  ### Agenda voor meeting
  samen met je groepje opstellen

  Besproken: Er waren nog niet echt heel veel vragen het was meer een check om te kijken waar iedereen was.


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Ik heb tehoren gekregen dat de HTML van de pagina die ik had voor nu oke was maar dat ik wel echt verder moest. Ik ben alleen ziek.

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
  Ik vond het lastig om een begin te maken aan de css want je weet niet zo snel waar je moet beginnen. Maar het is me uiteindelijk wel gelukt.

  ### Agenda voor meeting
  samen met je groepje opstellen

  Besproken: Hoe ik een img kan coveren zodat niet alles geshowed wordt.
  Z-index, Github duurt lang met uploaden, Header pas laten zien wanneer er gescrolld wordt, margin-left & auto om alles in het midden te krijgen en Twee aparte p's in één li.
  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Mijn deel: Div met een breedte en een hoogte en een hidden overflow.

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 8e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):
  
  - H1 is weg in het lijst met headers als er display:none op zit.
  - Door de felle kleuren valt veel gelukkig wel op voor slechtziende mensen. 
  - Bij de Color #0779p bril was het nog het minst goed omdat het contrast met deze kleuren dan veel minder groot is.


  #### Screenreader
  Hier korte omschrijving (met indien nodig afbeeldingen)
  Dit ging goed voor de content die ik heb uitgewerkt. Dit is alleen niet het hele bestel gebeuren wat lastiger is om goed inclusive te ontwerpen. Verder was er wel een h1 die niet voorgelezen werd terwijl dit natuurlijk wel heel handig is.

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)
  Ik heb code gevonden hoe dit opgelost kan worden. https://medium.com/web-dev-survey-from-kyoto/the-visually-hidden-technique-303f8e2bd409.


  #### Muis en Toetsenbord 
  Hier korte omschrijving (met indien nodig afbeeldingen)
  Ik had hier helaas niog geen focus states dus kon ik het niet helemaal testen.

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)
  Ik heb wel gekeken welke kleuren goed zouden passen om het goed te laten lijken. Een goed contrast is hier cruciaal.

  #### Motoriek (shocks, elastiekjes)
  Hier korte omschrijving (met indien nodig afbeeldingen)
  Dit ging goed omdat er grote knoppen in beeld zijn.

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)

  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  Hier korte omschrijving (met indien nodig afbeeldingen)
  Ik gebruik felle kleuren met een contrast dat te onderscheiden is dus dit ging redelijk goed.

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)

  Er kan altijd nog een extra site gemaakt worden met een nog hoger contrast zodal alles nog beter te zien is.

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  Ik heb hierbij besproken hoe ik een deel van mijn grid in het midden zet, of ik het pijltje van de dropdown nog groter en meer naar links kon krijgen, hoe de focus state werkt bij een select en input en ik heb besproken hoe er een aan- en uitknop kan zijn voor muziek.

  <img src="readme-images/Inhetmidden.png" width="375px" alt="Buttontekst die in het midden moest.">


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Het pijltje veranderen gaat heel moeilijk en kon ik naar mijn mening beter laten zodat ik de code wel begreep.
  - De aan en uit knop moet met Javascript in een if loop waarbij de state veranderd na een click event.
  - Je kan als je klikt niet de focus state nergeren dus ik moet het maar zo goed mogelijk stylen.
  - Ik heb align-self: center; gebruikt om de tekst in het midden te krijgen van de button. 

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/header.png" width="375px" alt="uitkomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  Ik heb geleerd hoe je een werkend hamburger menu maakt met ook een sluit buttne natuurlijk.
  <img src="readme-images/Hamburgermenu.png" width="375px" alt="Hamburgermenu">

  Ik heb geleerd hoe je een foto kan draaien en shadow kan geven.
  <img src="readme-images/Dunkin-rondje.png" width="375px" alt="Dunking Donuts rond logo">

  Ik heb geleerd hoe je een image vast kan laten plakken aan de bovenkant of onderkant.
  <img src="readme-images/order-now.png" width="375px" alt="order now">

  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  Het is me niet gelukt om tijdens het klikke de focus border weg te krijgen en mooier te krijgen in de nav.
  <img src="readme-images/nav-normaal.png" width="375px" alt="Nav foto">

  Het is me niet gelukt om de pijltjes mooier en meer naar links te krijgen. Dit bevatte heel veel code die ik gewoon weg niet begreep dus heb ik het ook niet toegepast.
  <img src="readme-images/betere-pijltjes" width="375px" alt="dropdown foto">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

  1. https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration
  2. https://www.dafont.com/dunkin.font
  3. https://freesvg.org/musical-note-vector-sign
  4. https://stackoverflow.com/questions/3397113/how-to-remove-focus-border-outline-around-text-input-boxes-chrome
  5. https://codepen.io/Thogronen/pen/BaVPMVR

</details>