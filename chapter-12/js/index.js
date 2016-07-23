// sending an http request
// var panel, request;

// function doRequest() {
// 	request = new XMLHttpRequest();
// 	request.open("GET", "../db/data.txt", true);
// 	request.send(null);
// 	request.onreadystatechange = showStatus;
// }

// function showStatus() {
// 	if (request.readyState === 4) {
// 		if (request.status === 200) {
// 			panel.innerHTML += "<br>Request Succeeded";
// 		}
// 	}
// }

// function init() {
// 	panel = document.getElementById("panel");
// 	var btn = document.getElementById("btn");
// 	btn.onclick = doRequest;
// }
// document.addEventListener("DOMContentLoaded", init, false);

// using response text
// var panel, request;

// function doRequest() {
// 	if (XMLHttpRequest) {
// 		request = new XMLHttpRequest();
// 	} else if (ActiveXObject) {
// 		request = new ActiveXObject("Microsoft.XMLHTTP");
// 	} else {
// 		return false;
// 	}

// 	request.open("GET", "../db/data.txt", true);
// 	request.send(null);
// 	request.onreadystatechange = showText;

// 	function showText() {
// 		if (request.readyState === 4) {
// 			if (request.status === 200) {
// 				panel.innerHTML += "<br>" + request.responseText;
// 			}
// 		}
// 	}
// }

// function init() {
// 	panel = document.getElementById("panel");
// 	var btn = document.getElementById("btn");
// 	btn.onclick = doRequest;
// }
// document.addEventListener("DOMContentLoaded", init, false);

// using xml response data
// var panel, request;

// function doRequest() {
// 	request = new XMLHttpRequest();
// 	request.open("GET", "../db/data.xml", true);
// 	request.send(null);
// 	request.onreadystatechange = showXML;
// }

// function showXML() {
// 	if ((request.readyState === 4) && (request.status === 200)) {
// 		var i, names = request.responseXML.getElementsByTagName("name");
// 		for (i = 0; i < names.length; i++) {
// 			panel.innerHTML += "<br>" + names[i].firstChild.data;
// 		}
// 	}
// }

// function init() {
// 	panel = document.getElementById("panel");
// 	document.getElementById("btn").onclick = doRequest;
// }
// document.addEventListener("DOMContentLoaded", init, false);

// creating a web application
