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
function clickResponse() {
	this.innerHTML += "Click detected<hr>";
}

function dblclickResponse() {
	this.innerHTML += "Doubleclick detected<br>";
}

function mousedownResponse() {
	this.innerHTML += "Mouse button down<br>";
}

function mouseupResponse() {
	this.innerHTML += "Mouse button up<br>";
}


function init() {
	var panel = document.getElementById("panel");
	panel.innerHTML = "Click here &gt;<br>";
	panel.onclick = clickResponse;
	panel.ondblclick = dblclickResponse;
	panel.onmouseup = mouseupResponse;
	panel.onmousedown = mousedownResponse;
}
document.addEventListener("DOMContentLoaded", init, false);