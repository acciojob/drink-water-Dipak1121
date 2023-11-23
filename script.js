//your JS code here. If required.
let smallCups = document.querySelectorAll(".cup-small");
let cup = document.querySelector(".cup");
let remained = document.querySelector(".remained");
let perc = document.querySelector(".percentage");
let prev = null;
for ( let i = 0; i < smallCups.length; i++ ){
	smallCups[i].addEventListener("click", onClick);
}

function onClick(event){
	if(prev == event.target){
		// console.log("Sme Cup");
		for ( let i = 0; i < smallCups.length; i++ ){
			smallCups[i].classList.remove("full");
		}
		prev = null;
	}
	else{
		
		if(event.target.classList.contains("full")){
			for( let j = 0; j < smallCups.length; j++ ){
				smallCups[j].classList.remove("full");
			}
		}
		let i = 0;
		while ( smallCups[i] != event.target && i < smallCups.length){
			smallCups[i].classList.add("full");
			
			i++;
		}
		event.target.classList.add("full");
		prev = event.target;
	}
	setCup();
}

function setCup(){
	let count  = 0;
	for ( let i = 0; i < smallCups.length; i++ ){
		if(smallCups[i].classList.contains("full")){
			count++;
		}
	}
	
	remained.innerText = `${2-(0.25*count)}L Reamined`;
	perc.innerText = `${12.5*count}%`;
	remained.style.flex = `${8-count}`;
	perc.style.flex = `${count}`;
}