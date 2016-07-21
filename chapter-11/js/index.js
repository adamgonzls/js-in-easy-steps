// swapping backgrounds
// function over() {
// 	obj.style.background = "yellow";
// }

// function down() {
// 	obj.style.background = "lime";
// }

// function up() {
// 	obj.style.background = "red";
// }

// function out() {
// 	obj.style.background = "green";
// }

// function init() {
// 	obj = document.getElementById("active");
// 	obj.style.width = "100px";
// 	obj.style.background = "aqua";
// 	obj.style.padding = "5px";
// 	obj.style.border = "2px solid black";
// 	obj.style.textAlign = "center";
// 	obj.onmouseover = over;
// 	obj.onmousedown = down;
// 	obj.onmouseup = up;
// 	obj.onmouseout = out;
// }
// document.addEventListener("DOMContentLoaded", init, false);

// toggling visibility
// function showPop() {
// 	pop.style.visibility = "visible";
// }

// function hidePop() {
// 	pop.style.visibility = "hidden";
// }

// function init() {
// 	pop = document.getElementById("popupLayer");
// 	pop.style.visibility = "hidden";
// 	var obj = document.getElementById("contentLayer");
// 	obj.onmouseover = showPop;
// 	obj.onmouseout = hidePop;
// }
// document.addEventListener("DOMContentLoaded", init, false);

// rotating image source
// var i, imgs, pic;

// function rotate() {
// 	//assign image url
// 	pic.src = imgs[i]; 
// 	//change the counter
// 	(i === (imgs.length - 1)) ? (i = 0) : (i++);
// 	setTimeout(rotate, 1000);
// }

// function init() {
// 	pic = document.getElementById("pic");
// 	imgs = ["../images/query.png", "../images/warn.png", "../images/stop.png", "../images/info.png"];

// 	var preload = new Array();
// 	for (i = 0; i < imgs.length; i++) {
// 		preload[i] = new Image();
// 		preload[i].src = imgs[i]
// 	}

// 	i = 0;
// 	rotate();
// }
// document.addEventListener("DOMContentLoaded", init, false);

// enlarging thumbnails
var box;

function zoomIn() {
	var filename = this.src.split("_thumb.png");
	box.style.background = "url(" + filename[0] + ".png)";
	
}

function zoomOut() {
	box.style.background = "inherit";
}

function init() {
	box = document.getElementById("zoomBox");
	var heli = document.getElementById("heli");
	heli.onmouseover = zoomIn;
	heli.onmouseout = zoomOut;

	var car = document.getElementById("car");
	car.onmouseover = zoomIn;
	car.onmouseout = zoomOut;
}
document.addEventListener("DOMContentLoaded", init, false);