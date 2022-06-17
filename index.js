console.log("Js is running");
let start=document.getElementById("strt");
let gamescr=document.getElementById("game");
let R=document.getElementById("ref");
let rock=document.getElementById("rockbtn");
let paper=document.getElementById("paperbtn");
let sci=document.getElementById("scibtn");
let U=document.getElementById("user");
let scissors=document.getElementById("Thand");



start.onclick = function() {begin()};
R.onclick = function(){refresh()};
rock.onclick = function() {one()};
paper.onclick = function() {two()};
sci.onclick = function() {three()};

function begin(){
    gamescr.scrollIntoView();
    // document.getElementById("Scard").style.animation="slide 3s ease-in-out";
}

function refresh(){
    window.location.reload();
    // U.style.width="20rem";
}

function one(){
    U.src="pics/—Pngtree—clenched fist cartoon ilustration_7770799.png";
}
function two(){
    U.src="pics/pngwing.com-removebg-preview.png";
    // U.style.width="18rem";
}
function three(){
    U.src="pics/pngwing.com.png";
    U.style.width="15rem";
    // scissors.style.width="1rem";
}


