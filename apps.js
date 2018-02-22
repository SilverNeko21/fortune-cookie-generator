var fortunesList = ["You're gonna die!", "Dirty Bob will visit you soon.", "You will have to use the bathroom soon.", "You will continue to generate fortunes.", "You will actually believe that these are real.", "You will fiddle the riddle!", "Burger King Foot Lettuce?", "You know I had to do it to em.", "You will visit jones barbecue and foot massage.","You will figure out the solution soon.", "Bob Ross will retuen.", "You will find a four leaf clover.", "Helter Skelter will rise again.", "You will find the secret dolphin hide out.", "The secret ingredient to my secret ingredient soup is your left toe.", "You will have a happy life.", "Donald Trump will be president for 8 years."];


function generateFortuneCookie() {
  if (fortunesList.length > 0) {
   	i = Math.floor((Math.random() * fortunesList.length));
 	  document.getElementById("fortune-cookie-text").innerHTML = fortunesList[i];

 	  var List = document.createElement("LI");
 	  var Listing = document.createTextNode(fortunesList[i]);
 	  List.appendChild(Listing);
 	  document.getElementById("previous-fortunes").appendChild(List);
	  var before = document.getElementById("previous-fortunes");
 	  before.insertBefore(List, before.childNodes[0]);
 	  fortunesList.splice(i , 1); 
  	
    while (fortunesList.length == 0){
	   fortunesList.splice(0,0,"You're gonna die!", "Dirty Bob will visit you soon.", "You will have to use the bathroom soon.", "You will continue to generate fortunes.", "You will actually believe that these are real.", "You will fiddle the riddle!", "Burger King Foot Lettuce?", "You know I had to do it to em.", "You will visit jones barbecue and foot massage.","You will figure out the solution soon.", "Bob Ross will retuen.", "You will find a four leaf clover.", "Helter Skelter will rise again.", "You will find the secret dolphin hide out.", "The secret ingredient to my secret ingredient soup is your left toe.", "You will have a happy life.", "Donald Trump will be president for 8 years.");
    }
  }
}	

function multiFortune() {
  if (fortunesList.length > 0) {
     document.getElementById("fortune-cookie-text").innerHTML = ""
     for(var j = 1; j <= 5; j++){

        i = Math.floor((Math.random() * fortunesList.length));
      document.getElementById("fortune-cookie-text").innerHTML += fortunesList[i] + "</br>";

        var List = document.createElement("LI");
        var Listing = document.createTextNode(fortunesList[i]);
       List.appendChild(Listing);
       document.getElementById("previous-fortunes").appendChild(List);
        var before = document.getElementById("previous-fortunes");
        before.insertBefore(List, before.childNodes[0]);
      fortunesList.splice(i , 1); 

      while (fortunesList.length == 0){
        fortunesList.splice(0,0,"You're gonna die!", "Dirty Bob will visit you soon.", "You will have to use the bathroom soon.", "You will continue to generate fortunes.", "You will actually believe that these are real.", "You will fiddle the riddle!", "Burger King Foot Lettuce?", "You know I had to do it to em.", "You will visit jones barbecue and foot massage.","You will figure out the solution soon.", "Bob Ross will retuen.", "You will find a four leaf clover.", "Helter Skelter will rise again.", "You will find the secret dolphin hide out.", "The secret ingredient to my secret ingredient soup is your left toe.");
      }
    }
  }
} 

//just practicing commets