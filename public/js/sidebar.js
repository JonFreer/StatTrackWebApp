var subSide = [2,3,4,2]
function sidebarHandle(sideID){//Todo can make more efficient
if (localStorage.getItem("toggle"+sideID) === null) {
	localStorage.setItem("toggle"+sideID, "true");
	for (i=0; i < subSide[sideID]; i++){
		document.getElementById('Side'+sideID+"-"+i).style.height = '36px';
	}
}else{
   if(localStorage.getItem("toggle"+sideID) == "true"){
	   	localStorage.setItem("toggle"+sideID, "false");
	for (i=0; i < subSide[sideID]; i++){
		document.getElementById('Side'+sideID+"-"+i).style.height = '0px';
	}
   }else{
	   	localStorage.setItem("toggle"+sideID, "true");
	for (i=0; i < subSide[sideID]; i++){
		document.getElementById('Side'+sideID+"-"+i).style.height = '36px';
	}
   }
}

}