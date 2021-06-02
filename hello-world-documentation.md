> Please, if you make any changes to the tool - change the documentation accordingly to the changes. 👷🔨

# Code documentation

_Hello world!_ was created in the mindset of using the tool completely offline - Useable and maintainable anywhere in the world.

This means it brings certain limitations with it, but nothing is impossible. The coach or contributors also have to be able to add their own content to list of exercise.

That being said, let's dive into what we use inside this project, and where to find all it's logic.



## Content

- [Tools used in Hello world!](#Tools-used-in-Hello-world!)
   - [Hugo](#Hugo)
   - [CodeMirror](#CodeMirror)
   - [Intro.js](#Intro.js)
 - Folder structures

## Tools used in Hello world!

### Hugo

<img src="./resources/hugo-static-site-generator.jpg" width="800px">

We wanted it to be easy for low/high skilled people to add exercises that they collected. This would mean the process has to be as easy and straightforward as possible (more about this later..). 

All the contributor has to do is create a README file, that contains the instructions/content of the exercise. If the exercise needs an HTML/CSS starters file, they can easily put it next to the README.

Knowing this, we had chosen **Hugo** as our _static site generator_. Hugo generates pages, by looking at the README files and template files.
This way we easily could put the exercises next to each other and Hugo would do the rest.
There are some limitations to this tool, knowing that originally made for blogs - we had to "hack" our way around some certain obstacles.

You can find the Hugo documentation [here](https://gohugo.io/).

### CodeMirror

![](./resources/Baboon.svg.png)

For our Editor we are using CodeMirror, an easy to setup JavaScript library that will turn text-area in pleasant code editors that are fully customize able!
If you want to dive into the documentation, you can find it [here](https://codemirror.net/)

### Intro.js

In this project there is a little `"Joy-ride"` which navigates the user through the application in case they are lost. For more info look [here](https://introjs.com/docs).



## Folder structures

Hello world is located inside the "Hugo" folder. As you can see there are multiple folders that play an important role. We will cover each folder and the important files in this section.

### Content

Inside the content folder you will find all lectures/exercises, as you can see there are language folders. Each folder will contain the same material, but translated. For now, lets focus on the English folder ('gb').

It is important that each subject, chapter and exercise has its own folder.

Take this for instance:

- gb
  - html
    - basics-of-html
      - boldcusive
        - index.md 
        - style.css
        - exercise.html

You can see that there are 3 files inside the `boldcursive` exercise. 

Let's loop over the main files that could be located inside the exercise folder.

- **index.md** &#8594; Instructions/lecture written in markdown
- **image files** &#8594; Images that are used **Only** inside the Readme
- **style.css** &#8594; The styling that will be used inside the css editor
- **exercise.html** &#8594; The html that will be used inside the html editor
- **script.js** &#8594; The JavaScript that will be used inside the JS editor.
- **Resources folder** &#8594; This folder will contain all resources the junior will use inside their exercises.

> The subject,chapter and exercise folders naming is important, you will see more about this in the "Data" chapter.



#### Front-matter

Hugo uses Front-matter variables that you declare and later use in your HTML (We'll see more about this later.)
Front-matters can be found inside the `index.md`, there are 4 important ones that we HAVE to declare.

- Title &#8594; Instructions/lecture written in markdown
- Editor
- Layout
- translationKey