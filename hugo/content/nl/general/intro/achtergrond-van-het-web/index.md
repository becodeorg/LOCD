---
title: "Achtergrond van het web"
editor: false
layout: "single"
translationKey: "background-of-the-web"
---
# Het internet

## Geboorte van het internet

**Tim Berners-Lee**, een Britse wetenschapper, heeft het World Wide Web (WWW) uitgevonden in **1989**, toen hij werkte bij **CERN**. Het web werd oorspronkelijk bedacht en ontwikkeld om te voldoen aan de vraag naar geautomatiseerde informatie-uitwisseling tussen wetenschappers in universiteiten en instituten over de hele wereld.

Op 30 april 1993 heeft CERN de World Wide Web-software in het publieke domein gebracht. Later stelde CERN een release beschikbaar met een open licentie, een meer betrouwbare manier om de verspreiding te maximaliseren. Dankzij deze beslissingen kon het web tot bloei komen.

## Interface van het internet

Met de totstandkoming van het web ontstond ook de behoefte aan een manier om de toegankelijk gemaakte bestanden en bronnen te raadplegen. Sir Tim Berners-Lee creëerde daarom een specifieke software, de **WorldWideWeb browser** genoemd.

### WorldWideWeb

{{< addImage imageid="worldwideweb-browser.jpeg" alt="first browser" >}}
*Screen capture of the first browser developed by Sir Tim Berners-Lee*

Het concept van **hypertext** is tientallen jaren voor het World Wide Web ontstaan. Maar bijna alle hypertekstsystemen werkten op lokale bestanden. Tim Berners-Lee wilde een systeem maken dat over netwerken heen zou werken, zodat mensen van een bestand op de ene machine naar een ander bestand op een andere machine konden linken.

WorldWideWeb was niet alleen een programma om door bestanden te bladeren. Het was een browser en een editor. De inleidende tekst luidt:

> HyperMedia Browser/Editor, Een oefening in wereldwijde beschikbaarheid van informatie door Tim Berners-Lee

In zijn kern is WorldWideWeb een tekstverwerker... maar met hyperlinks. En net zoals je een tekstverwerker puur kunt gebruiken om documenten te lezen, komt het echte plezier pas als je je eigen documenten schrijft. Vooral als je hyperlinks in de mix gooit ! 

Er was één groot nadeel aan de WorldWideWeb browser: hij kon alleen op een NeXT computer worden gebruikt... Bijna niemand had een NeXT machine.

### Line Mode browser

Om het Web breder toegankelijk te maken, werd een tweede browserproject ontwikkeld bij CERN: de Line Mode browser. De Line Mode browser werd voor het eerst uitgebracht in 1991 en was compatibel met de meeste unix / linux systemen. Daarmee werd het Web onmiddellijk naar algemeen gebruikte, veel minder krachtige apparaten gebracht, zoals de "line mode" terminals die werden gebruikt om toegang te krijgen tot minicomputers, die toen nog gangbaar waren.

{{< addImage imageid="linemode-browser.png" alt="first browser" >}}
*Screen capture van de lijnmodus browser*

## Language of the Internet

### HyperText Markup Language

HTML (**H**yper**t**ext **M**arkup **L**anguage) is de code die wordt gebruikt om een webpagina en de inhoud ervan te structureren. De inhoud kan bijvoorbeeld worden gestructureerd in een aantal alinea's, een lijst met opsommingstekens, of met behulp van afbeeldingen en gegevenstabellen. 

HTML bestaat uit een **reeks elementen**, die je gebruikt om verschillende delen van de inhoud te omsluiten, of te verpakken, zodat de inhoud er op een bepaalde manier uitziet, of op een bepaalde manier werkt. De omsluitende tags kunnen een woord of afbeelding naar een andere plaats laten verwijzen, woorden cursief maken, het lettertype groter of kleiner maken, enzovoort.

```html
<p>Dit is een paragraaf, want het is ingesloten in een "p" html-tag.</p>
<p>Dit is nog een alinea, ook ingesloten in een "p" html-tag.</p>
```