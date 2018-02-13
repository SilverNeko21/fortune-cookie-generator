var fortunesList = ["U gonna deaded", "Dirty Bob will visit u soon", "U will have to use da bathroom soon", "U will continue to generate fortunes", "U will actually believe that these are real", "U will fiddle the riddle"]

var fortune ;

function generateFortuneCookie() {
 	document.getElementById("fortune-cookie-text").innerHTML = Math.floor((Math.random() * 7) + 0);
}
	
