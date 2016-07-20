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
// var panel;

// function keydownResponse() {
// 	panel.innerHTML += "<br>Key Pressed: ";
// }

// function keyupResponse() {
// 	panel.innerHTML += "<br>Key Released";
// }

// function keypressResponse(e) {
// 	var keynum = (window.event) ? event.keyCode : e.which;
// 	panel.innerHTML += String.fromCharCode(keynum);
// }

// function init() {
// 	panel = document.getElementById("panel");
// 	panel.innerHTML = "Press a key...<br>";
// 	document.onkeydown = keydownResponse;
// 	document.onkeyup = keyupResponse;
// 	document.onkeypress = keypressResponse;
// }
// document.addEventListener("DOMContentLoaded", init, false);

// var panel, flag;

// function mousemoveResponse(e) {
// 	var x, y;

// 	if (window.event) {
// 		x = event.x;
// 		y = event.y;
// 	} else if (e) {
// 		x = e.pageX;
// 		y = e.pageY;
// 	}

// 	if (flag) {
// 		panel.innerHTML = "Mouse is at X: " + x + ", Y: " + y;
// 	}
// }

// function mouseoverResponse() {
// 	flag = false;
// 	panel.innerHTML = "Mouse is over";
// }

// function mouseoutResponse() {
// 	flag = true;
// }

// function init() {
// 	panel = document.getElementById("panel");
// 	flag = true;
// 	panel.innerHTML = "Move the mouse...";
// 	document.onmousemove = mousemoveResponse;
// 	panel.onmouseover = mouseoverResponse;
// 	panel.onmouseout = mouseoutResponse;
// }
// document.addEventListener("DOMContentLoaded", init, false);

// indentifying focus
function focusResponse() {
	this.value = "In Focus";
}

function blurResponse() {
	this.value = "Lost Focus";
}

function init() {
	var panel = document.getElementById("panel");
	panel.innerHTML += "<input type='text' id='txt1'>";
	panel.innerHTML += "<input type='text' id='txt2'>";
	
	var field1 = document.getElementById("txt1");
	field1.onfocus = focusResponse;
	field1.onblur = blurResponse;

	var field2 = document.getElementById("txt2");
	field2.onfocus = focusResponse;
	field2.onblur = blurResponse;

	field1.focus();

}
document.addEventListener("DOMContentLoaded", init, false);