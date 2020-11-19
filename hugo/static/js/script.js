let max = document.getElementById('max');
let min = document.getElementById('min');

let editorView = document.querySelector('.editor');
let input = document.querySelector('.editor__input');
let output = document.querySelector('.editor__output');
let main = document.querySelector('main');

let viewport = document.getElementById('viewport');
let insertView = document.querySelector('#insertData');

viewport.style.transition = "all 2s";;
viewport.style.gridTemplateColumns = "100vw 100vw";
// viewport.style.width = "120%";
max.style.display = "none";
min.style.display = "inline-block";

main.style.overflow = "hidden";
main.style.position = "relative";

editorView.classList.add("direct-row");
input.classList.add("sized");
output.classList.add("sized")
insertView.style.padding = "8rem 18rem"

max.addEventListener("click", ()=>{
    viewport.style.transition = "all 2s";;
    viewport.style.gridTemplateColumns = "100vw 100vw";
    // viewport.style.width = "120%";
    max.style.display = "none";
	min.style.display = "inline-block";
	
	main.style.overflow = "hidden";

    editorView.classList.add("direct-row");
    input.classList.add("sized");
    output.classList.add("sized")
})

min.addEventListener("click", ()=>{
    viewport.style.gridTemplateColumns = "minmax(33.333%, var(--sidebar-large-w)) auto";
    max.style.display = "inline-block";
	min.style.display = "none";
	
	main.style.overflow = null;

    editorView.classList.remove("direct-row");
    input.classList.remove("sized");
    output.classList.remove("sized");
})


let inputView = document.getElementById('inputTab').children;

for(let i = 0; i < inputView.length; i++){
    let result = inputView[i];
    // console.log(result);
}
// let currInput = document.getElementById(inputView);


