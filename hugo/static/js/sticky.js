let maxIcon = document.getElementById("max");
let minIcon = document.getElementById("min");
let parent = document.getElementById("insertData");


parent.addEventListener('scroll', function(e) {
	let y = parent.scrollTop;
	let topCo = y + 30;
	maxIcon.style.top = `${topCo}px`;
	minIcon.style.top = `${topCo}px`;
	console.log(icon.style.top)
})

