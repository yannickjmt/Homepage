//element.addEventListener(event, function, useCapture);
"use strict";


document.addEventListener("DOMContentLoaded", function(){
  
  // Modify z-index property of main content div
  // 
  const radios = document.getElementsByName("tab-group-1");
  var previousDiv;
  for (let radio of radios) {
    if (radio.checked) previousDiv = document.getElementsByClassName(radio.id)[0];
    radio.onchange = function() {
      previousDiv.style.zIndex = "-1";
      const selectedDiv = document.getElementsByClassName(this.id)[0];
      selectedDiv.style.zIndex = "1";
      previousDiv = selectedDiv;
    }
  }
});