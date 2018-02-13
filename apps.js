var fortunesList = ["You're gonna die!", "Dirty Bob will visit you soon.", "You will have to use the bathroom soon.", "You will continue to generate fortunes.", "You will actually believe that these are real.", "You will fiddle the riddle!", "Burger King Foot Lettuce?", "You know I had to do it to em."]

var fortune ;

function generateFortuneCookie() {
	i = Math.floor((Math.random() * 8));
 	document.getElementById("fortune-cookie-text").innerHTML = fortunesList[i];
 	
 	var List = document.createElement("LI");
 	var Listing = document.createTextNode(fortunesList[i]);
 	List.appendChild(Listing);
 	document.getElementById("previous-fortunes").appendChild(List);
 	var before = document.getElementById("previous-fortunes");
 	before.insertBefore(List, before.childNodes[0]);
}	
	
