//################## Minimize and maximize ReadMe ##################
let resizeButtons = () => {
  let maxIcon = document.getElementById("max");
  let minIcon = document.getElementById("min");
  let parent = document.getElementById("insertData");

  //handle if we user is looking at big screen/not styelsheet is a global variable in the index.html
  maxIcon.addEventListener("click", () => {
    maxIcon.style.display = "none";
    minIcon.style.display = "inline-block";
    sessionStorage.setItem("maxScreen", true);
    stylesheet.disabled = false;
  });

  minIcon.addEventListener("click", () => {
    maxIcon.style.display = "inline-block";
    minIcon.style.display = "none";
    sessionStorage.removeItem("maxScreen");
    stylesheet.disabled = true;
  });

  //when the user scrolls the min/max icon follows along.
  parent.addEventListener("scroll", function (e) {
    let y = parent.scrollTop;
    let topCo = y + 30;
    maxIcon.style.top = `${topCo}px`;
    minIcon.style.top = `${topCo}px`;
  });
};

// When in max screen, the user can use 2 buttons to navigate from the instructions to the editor
let viewportNavigation = () => {
  let editorView = document.querySelector(".editor");
  let instructionsView = document.querySelector(".instructions");

  document
    .getElementById("instructionsButton")
    .addEventListener("click", () => {
      instructionsView.classList.remove("instructions--max");
      editorView.classList.remove("editor--max");
    });

  document.getElementById("editorButton").addEventListener("click", () => {
    instructionsView.classList.add("instructions--max");
    editorView.classList.add("editor--max");
  });
};

//################## Dropdown code ##################
let setDropdown = () => {
  let dropdownBtn = document.querySelector(".dropdown__btn");

  dropdownBtn.addEventListener("click", showDropDown);

  function showDropDown() {
    document.getElementById("dropdownList").classList.toggle("show");
    let currentEl = document.querySelector(".current");
    currentEl.scrollIntoView(true);
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropdown__btn")) {
      let dropdown = document.getElementById("dropdownList");
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    }
  };
};

//################## Arrow navigation ##################

let setupArrowNav = () =>{
  // Find all links in the dropdown menu and create the previouse and next function out of it
  let links = document.querySelectorAll(".dropdown__list ul > li a");
  for (let i = 0; i < links.length; i++) {
    // added + "index.html" because in hugo they open the folder and read the file.
    if (
      JSON.stringify(links[i].href + "index.html").includes(
        window.location.pathname
      )
    ) {
      setNavArrow(links, i - 1, ".prev");
      setNavArrow(links, i + 1, ".next");
      links[i].classList.add("current");
      break;
    }
  }

  //Set the arrow navigation for all arrows on the screen.
  function setNavArrow(arr, index, query) {
    let arrowArr = document.querySelectorAll(query);
    if (!arr[index]) {
      // for each arrow element that doesn't have a link, we disable them.
      arrowArr.forEach((el) => {
        el.classList.add("disabled");
      });
    } else {
      // add the url to each element out there.
      arrowArr.forEach((el) => {
        el.href = arr[index];
      });
    }
  }
}


// burger menu toggle
let setupBurger = () =>{
  let burgerMenu = document.getElementById("menu__btn");
  const burgerNav = document.querySelector(".nav__menu--hamburger");
  
  burgerMenu.addEventListener("change", function () {
    if (this.checked) {
      burgerNav.classList.add("burger--active");
    } else {
      burgerNav.classList.remove("burger--active");
    }
  });
}


let init = () => {
  resizeButtons();
  viewportNavigation();
  setDropdown();
  setupArrowNav();
  setupBurger();
};

init();

// looping through the html,css and js viewtabs WIP
// let inputView = document.getElementById('inputTab').children;

// for(let i = 0; i < inputView.length; i++){
// 	let result = inputView[i];
// 	if (result.tagName !== "BUTTON"){
// 		console.log(result)
// 	}
// }
