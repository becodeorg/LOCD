let max = document.getElementById('max');
let min = document.getElementById('min');

let editorView = document.querySelector('.editor');
let instructionsView = document.querySelector('.instructions');

let input = document.querySelector('.editor__input');
let output = document.querySelector('.editor__output');
let main = document.querySelector('main');

let viewport = document.getElementById('viewport');
let insertView = document.querySelector('#insertData');

max.addEventListener("click", ()=>{
	max.style.display = "none";
	min.style.display = "inline-block";
	stylesheet.disabled = false;
	sessionStorage.setItem('maxScreen', true);
})


min.addEventListener("click", ()=>{
	max.style.display = "inline-block";
	min.style.display = "none";

	sessionStorage.removeItem('maxScreen');
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



//Navigation code

let btn = document.querySelector('.dropdown__btn');

btn.addEventListener('click',myFunction)

function myFunction() {
	document.getElementById("dropdownList").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
	if (!event.target.matches('.dropdown__btn')) {
	  var dropdowns = document.getElementsByClassName("dropdown__list");
	  var i;
	  for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		
		if (openDropdown.classList.contains('show')) {
		  openDropdown.classList.remove('show');
		}
	  }
	}
  }

//################## Arrow navigation ###################

  let links = document.querySelectorAll(".dropdown__list ul > li a");

	for(let i=0; i<links.length; i++){
		// added + "index.html" because on the server they open the folder and read the file.
		if(JSON.stringify(links[i].href+"index.html").includes(window.location.pathname)){
			console.log(links[i].href , window.location.pathname)
			setNavArrow(links,i-1,".prev")
			setNavArrow(links,i+1,".next")
			links[i].classList.add("current")
			break;
		}
	}


	function setNavArrow(arr,index,query){
		let arrowArr = document.querySelectorAll(query);
		if(!arr[index]){
			arrowArr.forEach(el=>{
				el.classList.add("disabled");
			})
		}else{
			arrowArr.forEach(el=>{
				el.href = arr[index];
			})
		}
	}