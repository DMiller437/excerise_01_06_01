 /*
      Exercise 01_06_01

      Snoot Javascript
      Author: Dylan Jones-Miller
      Date:   08.06.18

      Filename: snoot.js


*/


"use strict";

var twentyNine = document.createDocumentFragment();
var thirty = document.createDocumentFragment();
var thirtyOne = document.createDocumentFragment();


// function to remove select defaults 
function removeSelectDefaults() {
    var emptyBoxes = document.getElementsByTagName("select");
    for (var i = 0; i <emptyBoxes.length; i++) {
        emptyBoxes[i].selectedIndex = -1;
    }
}

//function to set up docuemnt fragments for days of the month
function setUpDays() {
    var dates = document.getElementById("delivDy").getElementsByTagName("option");
    twentyNine.appendChild(dates[28].cloneNode(true));
    thirty.appendChild(dates[28].cloneNode(true));
    thirty.appendChild(dates[29].cloneNode(true));
    thirtyOne.appendChild(dates[28].cloneNode(true));
    thirtyOne.appendChild(dates[29].cloneNode(true));
    thirtyOne.appendChild(dates[30].cloneNode(true));
    
}

//function to set up the list of days based on the selected month
function updateDays() {
    var deliveryDay = document.getElementById("delivDy");
    var dates = deliveryDay.getElementsByTagName("option");
    var deliveryMonth = document.getElementById("delivMo");
    var deliveryYear = document.getElementById("delivYr");
    var selectedMonth = deliveryMonth.options[deliveryMonth.selectedIndex].value;
    while(dates[28]) {
        deliveryDay.removeChild(dates[28]);
    }
    if (deliveryYear.selectedIndex === -1) {
        deliveryDay.selectedIndex = 0;
    }
    
}

//function to set up the page on a load event
function setUpPage() {
    removeSelectDefaults();
//    setUpDays();
//    updateDays();
    
}

//page load event handlers
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if(window.attachEvent){
    window.attachEvent("onload", setUpPage);
}
