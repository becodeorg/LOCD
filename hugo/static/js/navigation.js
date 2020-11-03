

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