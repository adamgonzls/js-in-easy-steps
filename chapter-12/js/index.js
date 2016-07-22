// sending an http request
var panel, request;

function doRequest() {
	request = new XMLHttpRequest();
	request.open("GET", "../db/data.txt", true);
	request.send(null);
	request.onreadystatechange = showStatus;
}

function showStatus() {
	if (request.readyState === 4) {
		if (request.status === 200) {
			panel.innerHTML += "<br>Request Succeeded";
		}
	}
}

function init() {
	panel = document.getElementById("panel");
	var btn = document.getElementById("btn");
	btn.onclick = doRequest;
}
document.addEventListener("DOMContentLoaded", init, false);

// 