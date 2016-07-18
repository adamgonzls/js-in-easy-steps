// extracting document info
// function init() {
// 	document.getElementById("panel");
// 	panel.innerHTML += "Linked From: " + document.referrer;
// 	panel.innerHTML += "<br>Title: " + document.title;
// 	panel.innerHTML += "<br>URL: " + document.URL;
// 	panel.innerHTML += "<br>Last Modified: " + document.lastModified;
// }
// document.addEventListener("DOMContentLoaded", init, false);

// addressing component arrays
// function init() {
// 	var panel = document.getElementById("panel");
// 	panel.innerHTML = "Document Components...";
// 	panel.innerHTML += "<br>No. Forms: " + document.forms.length;
// 	panel.innerHTML += "<br>No. Links: " + document.links.length;
// 	panel.innerHTML += "<br>No. Anchors: " + document.anchors.length;
// 	panel.innerHTML += "<br>No. Images: " + document.images.length;
// 	panel.innerHTML += "<br>First Image URL: " + document.images[0].src;
// }
// document.addEventListener("DOMContentLoaded", init, false);

// addressing components direct

// writing with javascript
function init() {
	var panel = document.getElementById("panel");
	panel.innerHTML += document.title;
	var pop = open("", "", "top=200,left=100,width=450,height=100");
	pop.document.write("<title>Popup Window</title>");
	pop.document.write("<img src='../images/debate.png'>");
	pop.document.write("Dynamic Popup Content");
	pop.document.close();
}
document.addEventListener("DOMContentLoaded", init, false);