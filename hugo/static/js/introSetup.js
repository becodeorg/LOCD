let button = document.getElementById('tourHandler');
button.onclick = tutorial;


function tutorial() {
       introJs().setOptions({
           steps:[
                {
                    name:"navbar",
                    element:document.querySelector('.nav'),
                    title:"The navigation menu",
                    intro:"Here you can find the navigation menu.",
                },
                {
                    name:"Instructions view",
                    element:document.querySelector('.instructions'),
                    title:"Instructions view",
                    intro:"This view will display you the content you should read carefully.",
                },
                {
                    name:"Instructions navigation",
                    element:document.querySelector('#instructionNavigation'),
                    title:"Instruction navigation",
                    intro:"The navigation for your projects, you can use this to go future exercises or go back to a previous challenge.",
                    position:'right'
                },
                {
                    name:"ResizerScreen",
                    element:document.querySelector('.resize'),
                    title:"Resizer",
                    intro:"If you want to make your screen bigger/smaller, use this icon to max/minimize your views.",
                    position:'left'
                },
                {
                    name:"Editor and results",
                    element:document.querySelector('.editor'),
                    title:"The editor & result viewport",
                    intro:"On the right side you will find both the editor and result viewport. Anything you write in the editor will be displayed in the result viewport.",
                    position:'left'
                },
                {
                    name:"editor",
                    element:document.querySelector('.editor__input'),
                    title:"This is the editor",
                    intro:"Feel free to write something in the editor. Feels like Notepad right?",
                    position:'left'
                },
                {
                    name:"The save button",
                    element:document.querySelector('#saveButton'),
                    title:"The save button",
                    intro:"When you are finished or want to make sure you keep your progress for next time, press the save button.",
                    position:'left'
                },
                {
                    name:"The reset button",
                    element:document.querySelector('#resetButton'),
                    title:"The reset button",
                    intro:"If you are lost and want to start over from scratch. Click the reset button.",
                    position:'left'
                },
                {
                    name:"Gutter",
                    element:document.querySelector(".gutter"),
                    title:"The dragbar",
                    intro:"Use the dragbar to make your viewport bigger/smaller.",
                    position:'left'
                }
           ]
       }).start()
    }