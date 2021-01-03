//Created by 19L Games
class player {
    constructor(x, y, img, gravity, speed) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.gravity = gravity;
        this.vy = 0;
        this.speed = speed;
        this.visible = true;
    }
    draw() {
        if (this.visible) {
            c.drawImage(this.img, this.x, this.y);
        }
    }
    update() {
        if (this.y < 318) {
            this.y += this.vy;
            this.vy += this.gravity;
        } else {
            this.vy = 0;
        }

        if (leftArrowDown && this.x > 0) {
            this.x -= this.speed;
        }
        if (rightArrowDown && this.x < 455) {
            this.x += this.speed;
        }
    }
    jump() {
        if (this.y > 310) {
            this.y -= 10;
            this.vy = -8;
        }

    }
}

function key(e) {
    if (e.code == 'ArrowLeft') {
        leftArrowDown = true;
    }
    if (e.code == 'ArrowRight') {
        rightArrowDown = true;
    }
    if (e.code == 'ArrowUp') {
        user.jump();
    }

}

function keyup(e) {
    if (e.code == 'ArrowLeft') {
        leftArrowDown = false;
    }
    if (e.code == 'ArrowRight') {
        rightArrowDown = false;
    }

}

function getRemote(remote_url) {
    return $.ajax({
        type: "GET",
        url: remote_url,
        async: false
    }).responseText;
}

function ood() {
    document.getElementById("ood").style = "display:block";
    document.getElementById("oodl").style = "display:initial";
}
