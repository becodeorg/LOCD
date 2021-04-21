---
title: "Hello world"
editor: true
layout: "single"
---

# exercise 1 - Hello world

Take a look at the index.html file. At the moment the file is empty. Add all the necesary tags for the base layout of an html document: a doctype, an `<html>` element and a `<head>` and `<body>` element. Be careful though, you can't just place these elements wherever you like. They have a function and should be placed in a specific order.
Read the documentation if you're not sure how to use these html elements.

Finally add a `<p>` element with the text 'hello world' to your document. The text should be displayed in the browser.



## Starting content

```html 
<p>Hello world!</p>
```
||
{{< wrap >}}
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Exercise 3 - Canary Islands</title>
    </head>
    <body>
        <h1>Welcome to the Canary Islands</h1>
        <p>
        Scented pine forests, haunting volcanoes, lunar-like landscapes, secret sandy coves, miles of Sahara-style dunes, beach-hugging resorts – the beautiful, unique Canary Islands wear many tantalising hats.
        </p>
        <h2>Otherworldly Landscapes</h2>
        <p>Marvel at the <strong>pine-forested peaks</strong> of Gran Canaria’s mountainous interior, the tumbling <strong>waterfalls</strong> of La Palma or the <strong>subtropical greenery</strong> of La Gomera’s Parque Nacional de Garajonay. Then contrast all this lushness with the extraordinary <strong>bare flatland</strong>s flanking Tenerife’s El Teide, the surreal party of colours glittering across Lanzarote’s <strong>lava fields</strong>, the gentle flower-filled hillsides of El Hierro, and Fuerteventura’s endless <strong>cacti-sprinkled plains</strong>. The Canary Islands' near-perfect temperatures mean that, year-round, you can soak up fantastical, varied landscapes otherwise only found by crossing continents.</p>

        <h2>The Great Outdoors</h2>
        <p>It's this very diversity that makes outdoor pursuits such an easily accessible and key pleasure of the Canaries. Hike the many footpaths criss-crossing the islands, from meandering coastal trails to challenging mountain treks to tranquil forest walks; go diving or snorkelling in blissfully warm waters inhabited by more than 350 species of fish (and the odd shipwreck); or pump up the adrenaline by riding the wind and the waves – kitesurfing, windsurfing, surfing and paragliding are all big here. Then slow things down with horse rides, boat trips, kayaking and paddle-boarding jaunts or beachfront yoga.</p>

        <h2>Art & Architecture</h2>
        
        <p>
        Contrary to many expectations, the Canary Islands are immensely rich in both original art and architecture – sometimes you just need to know where to look. The spectacular surrealist canvases of world-acclaimed painter Óscar Domínguez grace his Tenerife homeland; the enormous abstract sculptures of Martín Chirino are impossible to miss on Gran Canaria; and César Manrique's inspired 'interventions' pop up all over Lanzarote (and beyond). Everywhere, seek out the emblematic wooden balconies, leafy internal patios and cheerily painted facades that typify vernacular Canarian architecture, and pop into charming palm-shaded churches, many of which date back several centuries.</p>
    </body>
</html>
||
{{ wrap }}
.h2{
    color:red;
}

.test{}

