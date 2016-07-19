// reacting to window events
// function errorhandler(msg, url, ln) {
// 	alert("Error: " + msg + "\nIn File: " + url + "\nAt Line: " + ln);
// 	return true;
// }
// onerror = errorhandler;

// function init() {
// 	var panel = document.getElementById("panel");
// 	panel.innerHTML += "Handling an error...";
// 	document.getElementById("btn").value = "myButton";
// }
// document.addEventListener("DOMContentLoaded", init, false);

// responding to button clicks
// function clickResponse() {
// 	this.innerHTML += "Click detected<hr>";
// }

// function dblclickResponse() {
// 	this.innerHTML += "Doubleclick detected<br>";
// }

// function mousedownResponse() {
// 	this.innerHTML += "Mouse button down<br>";
// }

// function mouseupResponse() {
// 	this.innerHTML += "Mouse button up<br>";
// }


// function init() {
// 	var panel = document.getElementById("panel");
// 	panel.innerHTML = "Click here &gt;<br>";
// 	panel.onclick = clickResponse;
// 	panel.ondblclick = dblclickResponse;
// 	panel.onmouseup = mouseupResponse;
// 	panel.onmousedown = mousedownResponse;
// }
// document.addEventListener("DOMContentLoaded", init, false);

// acknowledging key strokes
var panel;

function keydownResponse() {
	panel.innerHTML += "<br>Key Pressed: ";
}

function keyupResponse() {
	panel.innerHTML += "<br>Key Released";
}

function keypressResponse(e) {
	var keynum = (window.event) ? event.keyCode : e.which;
	panel.innerHTML += String.fromCharCode(keynum);
}

function init() {
	panel = document.getElementById("panel");
	panel.innerHTML = "Press a key...<br>";
	document.onkeydown = keydownResponse;
	document.onkeyup = keyupResponse;
	document.onkeypress = keypressResponse;
}
document.addEventListener("DOMContentLoaded", init, false);