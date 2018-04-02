var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body =document.getElementById("gradient");
var direction = document.getElementById("direction");
var option ="to right";
var i;
for( i =0; i< direction.lenght; i++){}

function setColor(){
  body.style.background= "linear-gradient("+option+","+color1.value+" ,"+color2.value+")";

  css.textContent = body.style.background+";";
}

function setdirection(event){
	
	option = event.target.value;
	
	body.style.background= "linear-gradient("+option+","+color1.value+","+color2.value+" )";
	css.textContent = body.style.background+";";
}


color1.addEventListener("input",setColor)

color2.addEventListener("input",setColor)

direction.addEventListener("change", setdirection)