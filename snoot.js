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
    
//if it's feb. and 2020 twentyNine
if (selectedMonth === "2" && deliveryYear.options[deliveryYear.selectedIndex].value === "2020") {
    deliveryDay.appendChild(twentyNine.cloneNode(true));
}
//else if its 30 day month thirty
else if (selectedMonth === "4" || selectedMonth === "6" || selectedMonth === "9" || selectedMonth === "11"){
    deliveryDay.appendChild(thirty.cloneNode(true));
}
//else if thirty-one day month thirtyOne
else if (selectedMonth === "1" || selectedMonth === "3" || selectedMonth === "5" || selectedMonth === "7" || selectedMonth=== "8" || selectedMonth === "10" || selectedMonth === "12"){
   deliveryDay.appendChild(thirtyOne.cloneNode(true)); 
 }
}




//function to set up the page on a load event
function setUpPage() {
    removeSelectDefaults();
    setUpDays();
//    updateDays();
    createEventListeners();
    
}

//function to create event listeners
function createEventListeners() {
    var deliveryMonth = document.getElementById("delivMo")
   if (window.addEventListener) {
    deliveryMonth.addEventListener("change", updateDays, false);
   } 
    else if(window.attachEvent){
    deliveryMonth.attachEvent("onchange", updateDays);
   } 
    var deliveryYear = document.getElementById("delivYr")
   if (window.addEventListener) {
    deliveryYear.addEventListener("change", updateDays, false);
   } 
    else if(window.attachEvent){
    deliveryYear.attachEvent("onchange", updateDays);
   } 
}
//page load event handlers
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if(window.attachEvent){
    window.attachEvent("onload", setUpPage);
}
