---
title: "properties"
editor: true
layout: "single"
translationKey: properties
---

# Basic properties

We know how to call our elements in css, we have used some basic properties, but there are way many more properties available to you, Picasso!
In this section you will learn to use a few more interesting properties through short exercises.

It is important to take your time with these exercises. Try to understand what is happening. Why is this color changing? Why is the size different? etc..

## Exercises

```html
<html>
<head>
    <meta charset="utf-8" />
    <style>

    /* *****Don't change the following !!******* */

    body{
        background-color: rgb(255, 255, 255);
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        margin:0;

    }
    .box{    
      border-radius:10px;
      background-image: linear-gradient(to right bottom,#FF8803, #E6316E);


      height:100px;
      width:100px;
      margin:10px;

      line-height:100px;
      font-size:50px;
      transition: all .4s ease-in-out;
    }

    .box:hover{
        height:110px;
        width:115px;
    }

    .container{
      text-align:center;
      background-image: linear-gradient(to right,#001628, #302f57);
      color:white;
      height:100%;
      margin-bottom:200px;
      align-items: center;
      padding:0 50px;
      box-shadow: inset 2px 5px 20px #000000;
      border-radius: 10px;
      margin:0 15%;
    }

    body:last-child{
        margin-bottom: 100px;
    }

    h2{
      font-size:30px;
      margin:150px 15% 40px;
    }

    header{
        height: 350px;
        background-image: linear-gradient(to right bottom,#FF8803, #E6316E);
    }

    .header__container{
        height:300px;  
        display: flex;
        align-items: center;
        color:white;
        background-color:#001628;
        border-bottom-right-radius: 200px;
    }

    header p{
        line-height: 50px;
        margin: auto 15%;
        color: white;
        display: inline;
        padding-bottom: 5px;
        border-bottom: solid 1px white;
    }

    h1{
        margin:0 15%;
        font-size: 50px;    
    }

    .content > *:not(h3){
        margin-bottom:100px;
    }

    p:first-child{
        margin-top: 100px;
    }
    /* *****Don't change above this!!******* */

    /* You can write your css here!*/


    </style>
</head>
<body>
    <!--DO NOT CHANGE THE HTML OR CLASS NAMES ONLY WRITE IN CSS-->
    <header>
        <div class="header__container">
            <h1>Learning the basics</h1>
        </div>
        <p>We all love basic things! - Don't overthink it.🧠</p>
    </header>


    <div class="content">
        <p class="me">Give me a red color and align me to the center</p>
        <p>Give me a blue background</p>

        <p class="margin-left">Give me a bigger margin to the left.</p>

        <p class="font10">Give me a font size of 10px, <span>Give me a font size of 20px.</span></p>

        <h3>Don't change me! But give the 'lorem' a line height of 10px,letter space of 4px</h3>
        <p class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo tempora, dolores iure rem quos neque harum omnis unde. Nam pariatur quidem nostrum nisi harum voluptatem tempore impedit fugiat minus?
        Esse quo debitis nam commodi architecto praesentium, ullam laborum quasi odit. Quis recusandae et magni possimus mollitia at. Distinctio, esse? Consectetur quam enim consequatur delectus quod in est repellendus a.

        Tempora, labore autem? Ipsum, exercitationem officiis velit iste quasi facilis id deleniti. Officiis temporibus est repellat numquam omnis quam quia non sint! Esse velit dolore impedit deleniti reiciendis unde hic.
        Commodi iure eius sunt minima quod repellendus sed magni explicabo architecto sit a temporibus, assumenda debitis accusantium omnis non soluta natus laboriosam. Optio ad assumenda sunt, dolores consequatur perspiciatis nihil.</p>


        <ul>
          <li>Give me a underline</li>
          <li>Remove my bulletpoint</li>
          <li>Make me uppercase only</li>
          <li>Give me a border of 2px, not solid but dotted.</li>
          <li>Give me a border of 4px to the right and solid.</li>
        </ul>


        <div class="image">
          Make this text, bold. Give it a color of white. Give it a big font size. And add the image in this project to the background.
          Give it a width and height of 200px.
        </div>

        <h3>Give this button a background color, give 5px padding to the top 10px to the bottom and 15px to the left and right.</h4>
        <h3>After this, give the button round corners, except from the bottom right corner.</h3>
        <h3>After this, when we hover over the button, the background color should change.</h3>
        <a href='#'>Button</a>


        <h3>Make a circle shape around the image. Tip: border-radius, and overflow. Give it a width and height of 150px. When we hover over it, the image scales. But the circle shouldn't get bigger. </h3>

        <div class="profile">
            <img src="resources/chiefhopper.jpg" class="profile__image"></div>
        </div>


        <h3>Remove the underline,bullet points, give each li a different background color. give each li a different (random) margin values on hover change the font-sizes. All font colors should be white.</h3>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Store</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">contact</a></li>
        </ul>

    </div>
</body>
</html>
```