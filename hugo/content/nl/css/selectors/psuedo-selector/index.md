---
title: "Psuedo-class Selector"
editor: true
layout: "single"
translationKey: psuedo-class-selector
---

# Exercise: Pseudo-class selector

**Instructions**

Add the necessary style so that when the mouse hover on the word below, it changes color. 

- by default: text is yellow 

- when hovering on it: text is red (state: `:hover`)

- when clicking on it: text is blue (state: `:active`)

- after clicking on it: text is green (state: `:visited`)

Here is an illustration of the result to achieve:

![hover animation](hover-animated.gif)

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Exercise 2 - Psuedo-class selectors</title>
    </head>
    <body>
        <h2>Links States</h2>
        <p>
            <a href="#">Link</a>
        </p>
    </body>
</html>
```