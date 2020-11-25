let max = document.getElementById('max');
let min = document.getElementById('min');

let editorView = document.querySelector('.editor');
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

	// let head = document.querySelector("head");

	// let link = document.createElement('link');
	// link.rel = 'stylesheet';
	// link.type = 'text/css';
	// link.href = root+'/css/max-screen.css';
	// link.id = 'maxViewer';
	// link.media = "(min-width: 1000px)";
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
	viewport.classList.remove("viewport--editor")
})

document.getElementById("editorButton").addEventListener("click",()=>{
	viewport.classList.add("viewport--editor")
})