
var menuState = {}

export function getMenu(){
	
	
	
	menuState.label = document.getElementById("burger");
	menuState.menuModal = document.getElementsByClassName("other-links")[0];

	console.log(menuState.menuModal);
	menuState.label.addEventListener("click", clickOnBurger);
	
	menuState.num =1;
	menuState.buttonsInBurger =false;
}


function clickOnBurger (){
	if(menuState.num % 2 != 0){
		
	menuState.label.style.backgroundImage = "url(../image/close.png)";
	
	menuState.label.style.backgroundPositionX = "-10px";
	
	menuState.menuModal.style.display = "block";
	
	if( document.documentElement.clientWidth < 400 && !menuState.buttonsInBurger){
		
		menuState.buttonsInBurger =true;		
		menuState.buttons = document.getElementsByClassName('buttons-centre')[0];
		menuState.buttons.className = "buttons-centre buttons-centreMobail";
		menuState.menuModal.appendChild(menuState.buttons);
		
	}
	
		
	}else{
		
		if( menuState.buttonsInBurger){ 
		
		       menuState.buttonsInBurger =false;		
		      // var buttons = document.getElementsByClassName('buttons-centre')[0];
		      // delete buttons.style.display;
			  menuState.buttons.className = "buttons-centre";
			   var list = document.getElementById("diven-photo-menu")
		       list.insertBefore(menuState.buttons, list.children[1]);
		
		}
		
		
	menuState.label.style.backgroundImage = "url(../image/burger-label-w.png)";
	
	menuState.label.style.backgroundPositionX = "0px";
	
	menuState.menuModal.style.display = "none";
	}
    menuState.num++;
	//console.log("click1");
}