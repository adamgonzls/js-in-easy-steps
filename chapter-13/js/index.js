// dragging objects
// function init() {
// 	var bin = document.getElementById("bin");
// 	var gfx = document.getElementsByTagName("img");
// 	var msg = document.getElementById("msg");

// 	for (var i = 0; i < gfx.length; i++) {
// 		gfx[i].ondragstart = function(event) {
// 			event.dataTransfer.setData("Text", this.id);
// 		};
// 	}

// 	bin.ondragover = function(event) {
// 		return false;
// 	};

// 	bin.ondrop = function(event) {
// 		var did = event.dataTransfer.getData("Text");
// 		var tag = document.getElementById(did);

// 		if (did === "bin") {
// 			return false;
// 		} else {
// 			msg.innerHTML += "<li>" + did;
// 		}

// 		tag.parentNode.removeChild(tag);
// 		return false;
// 	}
// }
// document.addEventListener("DOMContentLoaded", init, false);

// storing information
// function init() {

// 	function storeName() {
// 		var username = document.getElementById("username").value;
// 		if (username === "null" || username === "") return false;
// 		localStorage.setItem("user", username);
// 		document.getElementById("username").value = "";
// 		document.getElementById("leg").innerHTML = "\"" + localStorage.getItem("user") + "\" is Stored";
// 	}

// 	function recallName() {
// 		if (localStorage.getItem("user") === null ) return false;
// 		document.getElementById("username").value = "";
// 		document.getElementById("leg").innerHTML = "Stored Name is \"" + localStorage.getItem("user") + "\"";
// 	}

// 	function removeName() {
// 		if (localStorage.getItem("user") === null) return false;
// 		document.getElementById("leg").innerHTML = "\"" + localStorage.getItem("user") + "\" is Removed";
// 		localStorage.removeItem("user");
// 		document.getElementById("username").value = "";
// 	}


// 	document.getElementById("store").onclick = storeName;
// 	document.getElementById("recall").onclick = recallName;
// 	document.getElementById("remove").onclick = removeName;
// }
// document.addEventListener("DOMContentLoaded", init, false);

// interacting with vectors
// var svgDoc, svgTxt, svgBtn, htmTxt;

// function init() {
// 	svgDoc = document.getElementById("svgDoc").getSVGDocument();
// 	svgTxt = svgDoc.getElementById("svgTxt");
// 	svgBtn = svgDoc.getElementById("svgBtn");
// 	htmTxt = document.getElementById("htmTxt");

// 	svgDoc.getElementById("svgBtn").onclick = send2htm;
// 	document.getElementById("htmBtn").onclick = send2svg;
// }
// window.onload = init;

// function send2svg() {
// 	svgTxt.lastChild.replaceWholeText(htmTxt.value);
// 	htmTxt.value = "";
// }

// function send2htm() {
// 	htmTxt.value = svgTxt.lastChild.wholeText;
// 	svgTxt.lastChild.replaceWholeText("SVG Text");
// }

// locating users
// function init() {
// 	if (navigator.geolocation) {
// 		document.getElementById("msg").innerHTML = "Geolocation service is trying to find you...";
// 		navigator.geolocation.getCurrentPostion(success, fail);
// 	} else {
// 		document.getElementById("msg").innerHTML = "Your browser does not support Geolocation service";
// 	}
// }

// function fail(position) {
// 	document.getElementById("msg").innerHTML = "Geolocation service cannot find you at this time.";
// }

// function success(position) {
// 	var lat = position.coords.latitude;
// 	var lng = position.coords.longitude;
// 	document.getElementById("msg").innerHTML = "Found you at...<br>Latitude: " + lat + ", Longitude: " + lng;
// 	var latlng = new google.maps.LatLng(lat, lng);
// 	var options = {zoom: 18, center: latlng, mapTypeId: google.maps.MapTypeId.ROADMAP};
// 	var map = new google.maps.Map(document.getElementById("map"), options);
// 	var marker = new google.maps.Marker({position: latlng, map: map, title: "You are here"});
// }

// painting on canvas
// var ctx, cw, ch, x, y, dx, dy;

// function init() {
// 	var canvas = document.getElementById("canvas");
// 	if (canvas.getContext) {
// 		ctx = canvas.getContext("2d");
// 		ctx.fillStyle = "red";
// 		x = 5, y = 44, dx = 5, dy = 5;
// 		cw = canvas.width;
// 		ch = canvas.height;
// 	}

// 	setInterval(position, 25);
// }
// document.addEventListener("DOMContentLoaded", init, false);

// function position() {
// 	paint();
// 	if ((x + dx > cw) || (x + dx < 0)) dx = -dx;
// 	if ((y + dy > ch) || (y + dy < 0)) dy = -dy;
// 	x += dx;
// 	y += dy;
// }

// function paint() {
// 	ctx.clearRect(0, 0, cw, ch);
// 	ctx.beginPath();
// 	ctx.arc(x, y, 30, 0, Math.PI * 2, true);
// 	ctx.fill();
// }

// swapping pixels
function init() {
	var canvas = document.getElementById("canvas");
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");
		var img = document.getElementById("blue_flag");
		ctx.drawImage(img, 0, 0);

		var pixels = ctx.getImageData(0, 0, img.width, img.height);
		for (var i = 3; i < pixels.data.length; i += 4) {
			if (pixels.data[i - 2] !== 255) {
				pixels.data[i - 1] = 0;
				pixels.data[i - 3] = 255;
			}
		}
	ctx.putImageData(pixels, 0, 0);
	}
}
document.addEventListener("DOMContentLoaded", init, false);