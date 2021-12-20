
let p = document.querySelector(".names-items");
let item = document.querySelectorAll(".item");
let backet = document.querySelector(".backet");

let dragged;

document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  dragged = event.target;
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  event.target.style.opacity = "";
}, false);

document.addEventListener("dragover", function(event) {
  event.preventDefault();
}, false);

document.addEventListener("drop", function(event) {
  event.preventDefault();
  if (event.target.className == "backet") {
    event.target.style.background = "";
    p.textContent+=" "+dragged.alt+" ";
  }
}, false);
let clear = document.querySelector(".clear");
clear.onclick = function(){
    p.textContent="";
}
