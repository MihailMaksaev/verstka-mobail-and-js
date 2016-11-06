

//console.log("webpack worck!");



var stateModal = {};


//stateModal.content = [];

//stateModal.listAdditional=0;
//stateModal.listAdditionalP=0;

//количество  прикрепленных файлов

export function getForm (){
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

document.getElementById("photoFormSubmit").addEventListener('click', function(e){
	e.preventDefault();
	var formData = new FormData(document.forms.photoForm);
	console.dir(formData.getAll('nomination-1'));
	
});
	
	
}
 

function showModal(e, content){
	e.preventDefault();
	
	if(content){
		content.style.display = "block";
		stateModal.modalDiv.innerHTML = "<div class='headerModal'> <div id='closeModalBtn' class='closeBtn'>x</div> <p>ДОБАВИТЬ ФОТОГРАФИЮ</p></div>"+
		                                '<button id="comfirmPhotoBtn" class="comfirmPhotoBtn">ГОТОВО</button>';
		stateModal.modalDiv.appendChild(content);
		console.log("редактирование")
	}else{
		
		
	stateModal.modalDiv.innerHTML = "<div class='headerModal'> <div id='closeModalBtn' class='closeBtn'>X</div> <h3>ДОБАВИТЬ ФОТОГРАФИЮ</h3></div>"+
	                                '<button id="comfirmPhotoBtn" class="comfirmPhotoBtn">ГОТОВО</button>'+
                    "<div id='contentModal-"+stateModal.numFiles+"' class='contentModal'>"+
					     "<div class='form-group2'>"+
                           '<label for="exampleInputFile-'+stateModal.numFiles+'">ВЫБЕРИТЕ ФАЙЛ</label>'+
                           ' <div class="fileInpImg">файл не выбран</div><input type="file" name="exampleInputFile-'+stateModal.numFiles+'" id="exampleInputFile-'+stateModal.numFiles+'">'+
						   '<label class="imageInputFile" for="exampleInputFile-'+stateModal.numFiles+'"></label>'+
                          "</div>"+
					    
						
						  "<div class='form-group2'>"+
                            '<label for="nomination-'+stateModal.numFiles+'">НОМИНАЦИЯ</label>'+
						     '<input type="radio" id="nomination1-'+stateModal.numFiles+'" name="nomination-'+stateModal.numFiles+'" checked="checked" value="Шырокий угол"><label class="radioLabel" for="nomination1-'+stateModal.numFiles+'">Шырокий угол</label>'+
                             '<input type="radio" id="nomination2-'+stateModal.numFiles+'" name="nomination-'+stateModal.numFiles+'" value="Марко"><label class="radioLabel" for="nomination2-'+stateModal.numFiles+'">Марко</label>'+
                          "</div>"+
						  
						  "<div class='form-group2'>"+
                            '<label for="additional-'+stateModal.numFiles+'">ДОПОЛНИТЕЛЬНО</label>'+
							'<p class="additionalBtn"> Специальные премии  <span><b> &#x2228;</b> </span> </p>'+
						    '<div class="additionalList" id="additional-'+stateModal.numFiles+'">'+
							
							'</div>'+
						  "</div>"+
						  
						  '<div class="form-group2">'+
                             '<label for="nameWorck-'+stateModal.numFiles+'">НАЗВАНИЕ РАБОТЫ</label>'+
                             '<input type="text" class="form-control" name="nameWorck-'+stateModal.numFiles+'" id="nameWorck-'+stateModal.numFiles+'" placeholder="">'+
                          '</div>'+
						  
					       '<div class="form-group2">'+
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
    
	stateModal.file =document.querySelector("input[name='exampleInputFile-"+stateModal.numFiles+"']");
	stateModal.file.addEventListener("change", changeFileFn );
}

function closeModalBtn(e){
		
		stateModal.modalDiv.style.display = "none";
		
		stateModal.closeBtn.removeEventListener("click", closeModalBtn);
		//closeBtn.removeEventListener("click", comfirmPhotoBtnModal);
		//closeBtn.removeEventListener("click", comfirmPhotoBtnModal);
		stateModal.comfirmPhotoBtn.removeEventListener("click", comfirmPhotoBtnModal);
		stateModal.listAdditionalP.removeEventListener("click", listAdditionalModal);
		stateModal.file.removeEventListener("change", changeFileFn );
	}
	
function comfirmPhotoBtnModal(e){
	
	
	
	var content = document.getElementById("contentModal-"+stateModal.numFiles);
	
	if(addIcon(content)){
		
		content.style.display = "none";
		
		stateModal.mainForm.insertBefore(content, null);
		
		stateModal.modalDiv.style.display = "none";
		
	stateModal.comfirmPhotoBtn.removeEventListener("click", comfirmPhotoBtnModal);
	stateModal.closeBtn.removeEventListener("click", closeModalBtn);
	stateModal.listAdditionalP.removeEventListener("click", listAdditionalModal);
	stateModal.file.removeEventListener("change", changeFileFn );
	
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

	
	div.innerHTML = '<div><div class="deletePhoto" data-remove-id="contentModal-'+stateModal.numFiles+'" id="deletePhoto-'+stateModal.numFiles+'">x</div>'+
	                '<p>редактировать</p>'+
					'<div><span><b>Номинация</b></span><br>\"'+nomination+ '\"</div></div>';
	
	var img = document.createElement("img");
	
	div.appendChild(img);
	
	
	
	var file = content.querySelector("input[name='exampleInputFile-"+stateModal.numFiles+"']").files[0];
	if(!file)return false;
		
	
    var reader = new FileReader();
    reader.onload = (function(aImg, aDiv) { return function(e) { 
	
	                   aImg.src = e.target.result; 
					  // document.getElementsByClassName("fileInpImg")[0].innerHTML = e.target.result;
					   
					   //console.dir(aImg); console.dir(aDiv) 
					  
					 }; })(img, div);
    reader.readAsDataURL(file);
	
	
	//console.dir(imgSrc);
	
	
	
	
	//document.getElementById('deletePhoto-'+stateModal.numFiles).addEventListener('click', removePhotoIcon);
	div.querySelector(".deletePhoto").addEventListener('click', removePhotoIcon);
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
			
			stateModal.listAdditional.innerHTML =   '<input type="checkbox" id="additional1-'+stateModal.numFiles+'" name="additional1-'+stateModal.numFiles+'" value="Подледный дайвинг"><label for="additional1-'+stateModal.numFiles+'" class="listLabel">Подледный дайвинг</label>'+
							             '<input type="checkbox" id="additional2-'+stateModal.numFiles+'" name="additional2-'+stateModal.numFiles+'" value="Человек в кадре"><label for="additional2-'+stateModal.numFiles+'"  class="listLabel">Человек в кадре</label>'+		
					                     '<input type="checkbox" id="additional3-'+stateModal.numFiles+'" name="additional3-'+stateModal.numFiles+'" value="Затонувшие обьекты"><label for="additional3-'+stateModal.numFiles+'" class="listLabel">Затонувшие обьекты</label>';
			
            stateModal.listAdditional.className = 'additionalList';			
										 
		}else{
			
			stateModal.listAdditional.className = 'additionalListChecked additionalList';
			
			for(var i=0; i<stateModal.listAdditional.childNodes.length; i++){
				
				if(stateModal.listAdditional.childNodes[i].name){
					
					
					if(stateModal.listAdditional.childNodes[i].checked != true){
						stateModal.listAdditional.removeChild(stateModal.listAdditional.childNodes[i]);
						stateModal.listAdditional.removeChild(stateModal.listAdditional.childNodes[i]);
						i--;
					}else{
						var onRemove = stateModal.listAdditional.childNodes[i];
						var onRemoveL = stateModal.listAdditional.childNodes[i+1];
						
						onRemoveL.addEventListener("click",  deleteCheck.bind(null, onRemoveL, onRemove));
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
	var editContentId = editIcon.querySelector('.deletePhoto').getAttribute('data-remove-id');
	var editContent = document.getElementById(editContentId);
	editIcon.remove();
	
	var num =parseFloat( editContentId.split("-")[1] );
	stateModal.oldNum = stateModal.numFiles;
	stateModal.numFiles = num;
	//console.log(num);
	showModal(e, editContent);
	
}

function changeFileFn(e){

	document.getElementsByClassName("fileInpImg")[0].innerHTML = stateModal.file.files[0].name;

}

function deleteCheck(label, box, e){
	
	label.remove();
	box.remove();
}



