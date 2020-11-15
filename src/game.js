//Created by 19L Games
var jsoncode;
var webdata;

//Get the canvas and 2d graphics context
var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");


//controls key variables
var leftArrowDown = false;
var rightArrowDown = false;

//Load all the images for the game
var blanklevel = document.getElementById("blanklevel");
var level1 = document.getElementById("level1");
var playerred = document.getElementById("player-red");
var playerblue = document.getElementById("player-blue");
var down = document.getElementById("down");
var currentimg = blanklevel;


function setup() {
    //this is called when the game starts
 
    user = new player(50, 300, playerblue, 0.3333, 4);
	jsoncode = getRemote("https://www.jsonblob.com/api/bb972a1f-2738-11eb-990f-bf95cb2273ee");
    webdata = JSON.parse(jsoncode);
    if (webdata.version == "v3.0-beta.3") {
        console.log("You are running the latest version");
    } else {
        ood();
    }
     if (webdata.down == false) {
        console.log("Servers are online");
    } else {
        currentimg = down;
		user.visible = false;
    }
    window.addEventListener("keydown", key);
    window.addEventListener("keyup", keyup);
    window.setInterval(loop, 1000 / 60);
    document.getElementById("loading").style = "display:none"
}

function loop() {
    //this is the game's main loop
    clear(currentimg);
    user.update();
    user.draw();

}


function clear(img) {
    //this just clears the screen
    c.drawImage(img, 0, 0);

}
