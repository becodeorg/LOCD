let max = document.getElementById('max');
let min = document.getElementById('min');

let editorView = document.querySelector('.editor');
let input = document.querySelector('.editor__input');
let output = document.querySelector('.editor__output');

let viewport = document.getElementById('viewport');

max.addEventListener("click", ()=>{
    viewport.style.transition = "all 2s";;
    viewport.style.gridTemplateColumns = "100vw 100vw";
    // viewport.style.width = "120%";
    max.style.display = "none";
    min.style.display = "inline-block";

    editorView.classList.add("direct-row");
    input.classList.add("sized");
    output.classList.add("sized")



})

min.addEventListener("click", ()=>{
    viewport.style.gridTemplateColumns = "minmax(33.333%, var(--sidebar-large-w)) auto";
    max.style.display = "inline-block";
    min.style.display = "none";

    editorView.classList.remove("direct-row");
    input.classList.remove("sized");
    output.classList.remove("sized");
})


let inputView = document.getElementById('inputTab').children;

for(let i = 0; i < inputView.length; i++){
    let result = inputView[i];
    console.log(result);
}
// let currInput = document.getElementById(inputView);


