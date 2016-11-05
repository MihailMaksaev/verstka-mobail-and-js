
var menuState = {}

export function getMenu(){
	
	
	
	menuState.label = document.getElementById("burger");
	menuState.menuModal = document.getElementsByClassName("other-links")[0];

	console.log(menuState.menuModal);
	menuState.label.addEventListener("click", clickOnBurger);
	
	menuState.num =1;
}


function clickOnBurger (){
	if(menuState.num % 2 != 0){
		
	menuState.label.style.backgroundImage = "url(../image/close.png)";
	
	menuState.label.style.backgroundPositionX = "-10px";
	
	menuState.menuModal.style.display = "block";
	
		
	}else{
		
	menuState.label.style.backgroundImage = "url(../image/burger-label-w.png)";
	
	menuState.label.style.backgroundPositionX = "0px";
	
	menuState.menuModal.style.display = "none";
	}
    menuState.num++;
	console.log("click1");
}