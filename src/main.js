import './main.css' 
import './modal.css'
import './mainForm.css'

console.log("webpack worck!");



var stateModal = {};


//stateModal.content = [];

//stateModal.listAdditional=0;
//stateModal.listAdditionalP=0;

//количество  прикрепленных файлов
stateModal.numFiles = 1;

stateModal. modalDiv = document.createElement("div");

stateModal.mainForm = document.getElementById("mainForm");

stateModal.photoIconsForm = document.getElementById("photoIconsForm");

stateModal.modalDiv.id = "addPhotoModal";

stateModal.modalDiv.style.display = "none";

document.body.appendChild(stateModal.modalDiv);
//кнопка добавить файл в форме
stateModal.attachFileBtn = document.getElementById("attachFileBtn");

stateModal.attachFileBtn.addEventListener("click", function(e){showModal(e);});

function showModal(e, content){
	e.preventDefault();
	
	if(content){
		
		stateModal.modalDiv.innerHTML = "<div class='headerModal'> <button id='closeModalBtn' class='closeBtn'>close</button> <p>ДОБАВИТЬ ФОТОГРАФИЮ</p></div>"+
		                                '<button id="comfirmPhotoBtn" class="comfirmPhotoBtn">ГОТОВО</button>';
		stateModal.modalDiv.appendChild(content);
		console.log("редактирование")
	}else{
		
		
	stateModal.modalDiv.innerHTML = "<div class='headerModal'> <button id='closeModalBtn' class='closeBtn'>close</button> <p>ДОБАВИТЬ ФОТОГРАФИЮ</p></div>"+
	                                '<button id="comfirmPhotoBtn" class="comfirmPhotoBtn">ГОТОВО</button>'+
                    "<div id='contentModal-"+stateModal.numFiles+"' class='contentModal'>"+
					     "<div class='form-group'>"+
                           '<label for="exampleInputFile-'+stateModal.numFiles+'">ВЫБЕРИТЕ ФАЙЛ</label>'+
                           ' <input type="file" name="exampleInputFile-'+stateModal.numFiles+'" id="exampleInputFile-'+stateModal.numFiles+'">'+
                          "</div>"+
					    
						
						  "<div class='form-group'>"+
                            '<label for="nomination-'+stateModal.numFiles+'">НОМИНАЦИЯ</label>'+
						     '<input type="radio" name="nomination-'+stateModal.numFiles+'" checked="checked" value="Шырокий угол">Шырокий угол'+
                             '<input type="radio" name="nomination-'+stateModal.numFiles+'" value="Марко">Марко'+
                          "</div>"+
						  
						  "<div class='form-group'>"+
                            '<label for="additional-'+stateModal.numFiles+'">ДОПОЛНИТЕЛЬНО</label>'+
							'<p class="additionalBtn"> Специальные премии </p>'+
						    '<div id="additional-'+stateModal.numFiles+'">'+
							
							'</div>'+
						  "</div>"+
						  
						  '<div class="form-group">'+
                             '<label for="nameWorck-'+stateModal.numFiles+'">НАЗВАНИЕ РАБОТЫ</label>'+
                             '<input type="text" class="form-control" name="nameWorck-'+stateModal.numFiles+'" id="nameWorck-'+stateModal.numFiles+'" placeholder="">'+
                          '</div>'+
						  
					       '<div class="form-group">'+
                             '<label for="descWorck-'+stateModal.numFiles+'">ОПИСАНИЕ РАБОТЫ</label>'+
                             '<input type="text" class="form-control" name="descWorck-'+stateModal.numFiles+'" id="descWorck-'+stateModal.numFiles+'" placeholder="">'+
                          '</div>'+
						  
					"</div>";  
						  
						
						  
						  
	}					
						
	stateModal.modalDiv.style.display = "block";
	
	stateModal.closeBtn=0; //кнопка закрытия формы
	
	stateModal.closeBtn = document.getElementById("closeModalBtn");
	stateModal.closeBtn.addEventListener("click", closeModalBtn );
	
	stateModal.comfirmPhotoBtn=0;

    stateModal.comfirmPhotoBtn = document.getElementById("comfirmPhotoBtn");
	stateModal.comfirmPhotoBtn.addEventListener("click", comfirmPhotoBtnModal );
	
	stateModal.listAdditional = document.getElementById('additional-'+stateModal.numFiles);
	stateModal.listAdditionalP = stateModal.listAdditional.previousElementSibling;
	
	stateModal.numClick = 0;
	stateModal.listAdditionalP.addEventListener("click", listAdditionalModal );
    
	
}

function closeModalBtn(e){
		
		stateModal.modalDiv.style.display = "none";
		
		stateModal.closeBtn.removeEventListener("click", closeModalBtn);
		//closeBtn.removeEventListener("click", comfirmPhotoBtnModal);
		//closeBtn.removeEventListener("click", comfirmPhotoBtnModal);
		stateModal.comfirmPhotoBtn.removeEventListener("click", comfirmPhotoBtnModal);
		stateModal.listAdditionalP.removeEventListener("click", listAdditionalModal);
	}
	
function comfirmPhotoBtnModal(e){
	
	
	
	var content = document.getElementById("contentModal-"+stateModal.numFiles);
	
	if(addIcon(content)){
		
		stateModal.mainForm.insertBefore(content, null);
		
		stateModal.modalDiv.style.display = "none";
		
	stateModal.comfirmPhotoBtn.removeEventListener("click", comfirmPhotoBtnModal);
	stateModal.closeBtn.removeEventListener("click", closeModalBtn);
	stateModal.listAdditionalP.removeEventListener("click", listAdditionalModal);
	if(stateModal.oldNum>stateModal.numFiles)stateModal.numFiles = stateModal.oldNum;
	stateModal.numFiles++;
		
	}else{
		
		alert("введены не все поля");
	}
	
	
	

	//console.log("remove");
}	


function addIcon (content){
	
	var div = document.createElement("div");
	
	div.id = "icon-"+stateModal.numFiles;
	
	div.className ="divForIconsImage";
	
	var nomination = content.querySelector("input[name='nomination-"+stateModal.numFiles+"']").value;

	
	div.innerHTML = '<div><button class="deletePhoto" data-remove-id="contentModal-'+stateModal.numFiles+'" id="deletePhoto-'+stateModal.numFiles+'">x</button>'+
	                '<p>редактировать</p>'+
					'<div><span>Номинация</span><br>\"'+nomination+ '\"</div></div>';
	
	var img = document.createElement("img");
	
	div.appendChild(img);
	
	
	
	var file = content.querySelector("input[name='exampleInputFile-"+stateModal.numFiles+"']").files[0];
	if(!file)return false;
		
	
    var reader = new FileReader();
    reader.onload = (function(aImg, aDiv) { return function(e) { 
	
	                   aImg.src = e.target.result; 
					   
					   
					   //console.dir(aImg); console.dir(aDiv) 
					  
					 }; })(img, div);
    reader.readAsDataURL(file);
	
	
	//console.dir(imgSrc);
	
	
	
	
	//document.getElementById('deletePhoto-'+stateModal.numFiles).addEventListener('click', removePhotoIcon);
	div.querySelector("button").addEventListener('click', removePhotoIcon);
	div.querySelector("p").addEventListener('click', editPhotoIcon);
	
	
	/*if(stateModal.fantomDiv){
		
	stateModal.fantomDiv = document.createElement("div");
	stateModal.fantomDiv.style.height = "200px";
	stateModal.photoIconsForm.appendChild(stateModal.fantomDiv);
	}*/
	
	stateModal.photoIconsForm.appendChild(div);
	return true;
}



function listAdditionalModal (e){
	
		if(stateModal.numClick%2 == 0 ){
			
			stateModal.listAdditional.innerHTML =   '<input type="checkbox" name="additional1-'+stateModal.numFiles+'" value="Подледный дайвинг">Подледный дайвинг<Br>'+
							             '<input type="checkbox" name="additional2-'+stateModal.numFiles+'" value="Человек в кадре">Человек в кадре<Br>'+		
					                     '<input type="checkbox" name="additional3-'+stateModal.numFiles+'" value="Затонувшие обьекты">Затонувшие обьекты<Br>';
										 
										 
		}else{
			
			for(var i=0; i<stateModal.listAdditional.childNodes.length; i++){
				
				if(stateModal.listAdditional.childNodes[i].name){
					
					
					if(stateModal.listAdditional.childNodes[i].checked != true){
						stateModal.listAdditional.removeChild(stateModal.listAdditional.childNodes[i]);
						stateModal.listAdditional.removeChild(stateModal.listAdditional.childNodes[i]);
					}
				}
				
			}
			
		}
		stateModal.numClick++;
	
	
	
}

function removePhotoIcon(e){
	e.preventDefault();
	var remId = e.target.getAttribute('data-remove-id');
	
	var removeCont = document.getElementById(remId).remove();
	e.target.closest('.divForIconsImage').remove();
	
}

function editPhotoIcon(e){
	e.preventDefault();
	var editIcon = e.target.closest('.divForIconsImage');
	var editContentId = editIcon.querySelector('button').getAttribute('data-remove-id');
	var editContent = document.getElementById(editContentId);
	editIcon.remove();
	
	var num =parseFloat( editContentId.split("-")[1] );
	stateModal.oldNum = stateModal.numFiles;
	stateModal.numFiles = num;
	//console.log(num);
	showModal(e, editContent);
	
}



