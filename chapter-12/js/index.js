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

// providing application data
var request, xml;

function formatted(sum) {
	if (sum.toString().indexOf(".") < 0) {
		sum += ".00";
	}
	if (sum.toString().indexOf(".") === (sum.toString().length - 2)) {
		sum += "0";
	}
	return sum;
}

function totalize() {
	var i, sum = 0, row_number = 1, col_number = 0;
	var nums = xml.getElementsByTagName("num");
	for (i = 0; i < nums.length; i++) {
		sum += parseFloat(nums[i].firstChild.data);
		if ((i + 1) % 5 === 0) {
			document.getElementById("rt" + row_number).innerHTML = sum;
			sum = 0;
			row_number++;
		}
	}
	while (col_number !== 5) {
		for (i = 0; i < nums.length; i++) {
			if (i % 5 === 0) {
				sum += parseFloat(nums[i+col_number].firstChild.data);
			}
		}
		col_number++;
		document.getElementById("ct"+col_number).innerHTML = sum;
		sum = 0;
	}
	for (i = 0; i < nums.length; i++) {
		sum += parseFloat(nums[i].firstChild.data);
	}
	document.getElementById("gt").innerHTML = sum;
}


function populateCells() {
	var i, nums = xml.getElementsByTagName("num");
	for (i = 0; i < nums.length; i++) {
		document.getElementById("n" + i).innerHTML = nums[i].firstChild.data;
	}
	totalize();
}

function storeXML() {
	if ((request.readyState === 4) && (request.status === 200)) {
		xml = request.responseXML;
		populateCells();
	}
}

function update() {
	var row = document.getElementById("rownum").options.selectedIndex;
	var col = document.getElementById("colnum").options.selectedIndex;
	var new_value = document.getElementById("new_value").value;
	var panel = document.getElementById("title");
	if ( row === 0 ) {
		panel.innerHTML = "Select a row";
		return;
	}
	if (col === 0) {
		panel.innerHTML = "Select a column";
		return;
	}
	if (!new_value) {
		panel.innerHTML = "Enter a value";
		return;
	}
	if (isNaN(new_value)) {
		panel.innerHTML = "Enter number";
		return;
	}
	var target = (((row - 1) * 5) + col) - 1;
	xml.getElementsByTagName("num")[target].firstChild.data = formatted(new_value);
	populateCells();
	totalize();

	document.getElementById("rownum").options[0].selected = true;
	document.getElementById("colnum").options[0].selected = true;
	document.getElementById("new_value").value = "";
	document.getElementById("title").innerHTML = "Cell Editor";
}

function init() {
	if (XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else if (ActiveXObject) {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	} else {
		return false;
	}

	request.open("GET", "../db/ajax.xml", true);
	request.send(null);
	request.onreadystatechange = storeXML;
	document.getElementById("btn").onclick = update;
}
document.addEventListener("DOMContentLoaded", init, false);

// programming the application
