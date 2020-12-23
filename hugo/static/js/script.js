let max = document.getElementById('max');
let min = document.getElementById('min');

let editorView = document.querySelector('.editor');
let instructionsView = document.querySelector('.instructions');

let input = document.querySelector('.editor__input');
let output = document.querySelector('.editor__output');
let main = document.querySelector('main');

let viewport = document.getElementById('viewport');
let insertView = document.querySelector('#insertData');

let stylesheet = document.getElementById("maxViewer");

stylesheet.disabled = true;


max.addEventListener("click", ()=>{
	max.style.display = "none";
	min.style.display = "inline-block";
	stylesheet.disabled = false;
})


min.addEventListener("click", ()=>{
	max.style.display = "inline-block";
	min.style.display = "none";

	stylesheet.disabled = true;
})

let inputView = document.getElementById('inputTab').children;


for(let i = 0; i < inputView.length; i++){
	let result = inputView[i];
	console.log(result)
}




let maxIcon = document.getElementById("max");
let minIcon = document.getElementById("min");
let parent = document.getElementById("insertData");


parent.addEventListener('scroll', function(e) {
	let y = parent.scrollTop;
	let topCo = y + 30;
	maxIcon.style.top = `${topCo}px`;
	minIcon.style.top = `${topCo}px`;
})

document.getElementById("instructionsButton").addEventListener("click",()=>{
	instructionsView.classList.remove("instructions--max")
	editorView.classList.remove("editor--max")
})

document.getElementById("editorButton").addEventListener("click",()=>{
	instructionsView.classList.add("instructions--max")
	editorView.classList.add("editor--max")
})