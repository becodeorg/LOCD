---
title: "Position - squares"
editor: true
layout: "single"
translationKey: "position-squares"
---

# Position properties

### Set up

```html
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Position - Exercise 3</title>
    <style>
   /* Put your styling here */
   body{
      height:3600px;
      padding:0;
      margin:0;
      font-family:sans-serif;
        }
   .parent{
      width:400px;
      height:400px;
      background-color:#eeee;
      border: 4px solid grey;
      margin:auto;
      margin-top:200px;
        }
    .tl,.tr,.bl,.br{
      font-size:10px;
      line-height:150px;
      text-align:center;
      width:150px;
      height:150px;
      background-color: #f26d7d;
        }        

    </style>
</head>
<body>
<!-- put your content here -->
<div class="parent">
   <div class="tl">top left</div>
   <div class="tr">top right</div>
   <div class="bl">bottom left</div>
   <div class="br">bottom right</div>
</div>
</body>
</html>
```

Now re-create this styling as good as possible:

*Don't forget to use display! (Sometimes even on parents...)*

{{< bigImage imageid="squares.png" alt="squares example" >}}