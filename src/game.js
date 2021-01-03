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

    jsoncode = getRemote("https://www.19lgames.tk/games/squarejump/webdata.json");
    webdata = JSON.parse(jsoncode);
    if (webdata.version == "v3.0-beta.5") {
        console.log("%c You are running the latest version", "background: #90ee90");
    } else {
        ood();
        console.warn("You are running an out of date version. Download the latest version from: https://www.github.com/19L-Games/SquareJump/tags");
    }
    if (webdata.down == false) {
        console.log('%c Servers are online', 'background: #90ee90');
    } else {
        currentimg = down;
        user.visible = false;
        console.error("Servers are down");
    }

    window.addEventListener("keydown", key);
    window.addEventListener("keyup", keyup);
    window.setInterval(loop, 1000 / 60);
    document.getElementById("loading").style = "display:none"
    document.getElementById("news").innerHTML = webdata.news;
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
