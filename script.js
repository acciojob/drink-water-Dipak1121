//your JS code here. If required.
// let smallCups = document.querySelectorAll(".cup-small");
// let cup = document.querySelector(".cup");
// let remained = document.querySelector(".remained");
// let perc = document.querySelector(".percentage");
// let prev = null;
// for ( let i = 0; i < smallCups.length; i++ ){
// 	smallCups[i].addEventListener("click", onClick);
// }

// function onClick(event){
// 	if(prev == event.target){
// 		// console.log("Sme Cup");
// 		for ( let i = 0; i < smallCups.length; i++ ){
// 			smallCups[i].classList.remove("full");
// 		}
// 		prev = null;
// 	}
// 	else{
		
// 		if(event.target.classList.contains("full")){
// 			for( let j = 0; j < smallCups.length; j++ ){
// 				smallCups[j].classList.remove("full");
// 			}
// 		}
// 		let i = 0;
// 		while ( smallCups[i] != event.target && i < smallCups.length){
// 			smallCups[i].classList.add("full");
			
// 			i++;
// 		}
// 		event.target.classList.add("full");
// 		prev = event.target;
// 	}
// 	setCup();
// }

// function setCup(){
// 	let count  = 0;
// 	for ( let i = 0; i < smallCups.length; i++ ){
// 		if(smallCups[i].classList.contains("full")){
// 			count++;
// 		}
// 	}
	
// 	remained.innerText = `${2-(0.25*count)}L Reamined`;
// 	perc.innerText = `${12.5*count}%`;
// 	remained.style.flex = `${8-count}`;
// 	perc.style.flex = `${count}`;
// }

const smallCups = document.querySelectorAll('.cup-small');
const remained = document.getElementById('remained');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');

updateBigCup();

smallCups.forEach((cup, indx) => {
	cup.addEventListener("click", () => {
		// alert("clicked");
		heighLightCups(indx);
	});
});

function heighLightCups(indx){
	if(smallCups[indx].classList.contains("full") &&
	  !smallCups[indx].nextElementSibling.classList.contains("full"))
	{
		indx--;
	}

	smallCups.forEach((cup, indx2) => {
		if(indx2<=indx){
			cup.classList.add("full");
		}
		else{
			cup.classList.remove("full");
		}
	});
	updateBigCup();
}

function updateBigCup(){
	const fullCup = document.querySelectorAll('.cup-small.full').length;
	// alert(fullCup);
	const totalCup = smallCups.length;
	
	if(fullCup===0){
		percentage.style.visibility = "hidden";
		percentage.style.height = "0";
	}
	else{
		percentage.style.visibility = "visible";
		percentage.style.height = `${(fullCup/totalCup)*330}px`;
		percentage.innerText = `${(fullCup/totalCup)*100}%`;
	}

	if(totalCup === fullCup){
		remained.style.visibility = "hidden";
		remained.style.height = "0";
	}
	else{
		remained.style.visibility = "visible";
		remained.innerText = `${2-(250*fullCup)/1000}L`
	}
}