var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

var blanklevel = document.getElementById("blanklevel");
var level1 = document.getElementById("level1");
var currentimg = blanklevel;

function setup() {
	window.setInterval(loop,1000/60);
	document.getElementById("loading").style = "display:none"
}

function loop() {
	clear(currentimg);
	
}


function clear(img) {
	c.drawImage(img,0,0);
	
}
