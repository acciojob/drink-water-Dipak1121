//your JS code here. If required.
let smallCups = document.querySelectorAll(".cup-small");
for ( let i = 0; i < smallCups.length; i++ ){
	smallCups[i].addEventListener("click", onClick);
}

function onClick(event){
	event.target.classList.toggle("full");
}