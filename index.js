console.log("Js is running");
let start=document.getElementById("strt");
let gamescr=document.getElementById("game");



start.onclick = function() {begin()};
function begin(){
    gamescr.scrollIntoView();
}