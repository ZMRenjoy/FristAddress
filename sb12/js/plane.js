var canvasWidth = 400;
var canvasHeight = 600;

var heroWidth = 66;
var heroHeight = 82;
var heroSpeed = 20;
var heroIsDie = true;

var vancas = document.getElementById("canvas");
var context = canvas.getContext("2d");

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var heroClass = function(x, y, heroW, heroH, src) {
	this.x = x;
	this.y = y;
	this.heroW = heroW;
	this.heroH = heroH;
	this.src = src;
	this.move = function(direction) {
		canvas.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(this.img, 0, 0, heroWidth, heroHeight, this.x, this.y, heroWidth, heroHeight);
		switch (direction) {
			case "上":
				this.y = y - heroSpeed;
				if (y <= 0) {
					y = 0;
				}
				break;
			case "右":
				this.x = x + heroSpeed;
				if (x >= canvasWidth - heroWidth) {
					x = canvasWidth - heroWidth;
				}
			case "下":
				this.y = y + heroSpeed;
				if (y >= canvasHeight - heroHeight) {
					y = canvasHeight - heroHeight;
				}
			case "左":
				this.x = x - heroSpeed;
				if (x <= 0) {
					x = 0;
				}

			default:
				break;
		}
	};
	this.img = undefined;
	this.startX = undefined;
	this.animation = function(){
		
	}
	this.fire = function(){
		
	}
	this.die = function(){
		
	}
	this.draw = function(){
	 var img = new Image();
	 if(this.src){
	 	this.src = src;
	 }
	 this.img = img;
	 var startXPoint = heroIsDie ? (heroWidth * 4) : 0;
	 this.thisX = startXPoint;
	 
	 var imgW = this.heroW;
	 var imgH = this.heroH;
	 var imgX = this.x;
	 var imgY = this.y;
	 img.onload = function(){
	 	context.drawImage(img , startXPoint , 0 , heroWidth , heroHeight , imgX , imgY , imgW , imgH);
	 }
	 
	};

}
var heroX = canvasWidth / 2 - heroWidth / 2;
var heroY = canvasHeight - heroHeight;
var hero = heroClass(heroX , heroY , heroWidth , heroHeight , "img/herofly.png");
hero.draw();

document.onkeydown = function() {
	switch (event.keyCode) {
		case 37:
			//左
			hero.move("左");
			break;
		case 38:
			//上
			hero.move("上");
			break;
		case 39:
			//右
			hero.move("右");
			break;
		case 40:
			//下
			hero.move("下");
			break;
		default:
			break;
	}
}

