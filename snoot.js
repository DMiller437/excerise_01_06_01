 /*
      Exercise 01_06_01

      Snoot Javascript
      Author: Dylan Jones-Miller
      Date:   08.06.18

      Filename: snoot.js


*/


"use strict";

// function to remove select defaults 
function removeSelectDefaults() {
    var emptyBoxes = document.getElementsByTagName("select");
    alert("select lists: " + emptyBoxes.length);
}

//page load event handlers
if (window.addEventListener) {
    window.addEventListener("load", removeSelectDefaults, false);
} else if(window.attachEvent){
    window.attachEvent("onload", removeSelectDefaults);
}
