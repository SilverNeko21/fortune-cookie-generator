var fortunesList = ["U gonna deaded", "Dirty Bob will visit u soon", "U will have to use da bathroom soon", "U will continue to generate fortunes", "U will actually believe that these are real", "U will fiddle the riddle"]

var fortune ;


function generateFortuneCookie() {
	i = Math.floor((Math.random() * 6) + 0);
 	document.getElementById("fortune-cookie-text").innerHTML = fortunesList[i];
 	var List = document.createElement("LI");
 	var Listing = document.createTextNode(fortunesList[i]);
 	List.appendChild(Listing);
 	document.getElementById("previous-fortunes").appendChild(List);
}	
	
