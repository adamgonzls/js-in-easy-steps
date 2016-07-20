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
// function init() {
// 	var panel = document.getElementById("panel");
// 	var item1 = document.getElementById("item1");
// 	var elems = document.getElementsByTagName("li");
// 	var item2 = elems[4];
// 	panel.innerHTML += "Total No. List Items: " + elems.length;
// 	panel.innerHTML += 
// 	"<br>Specific Item One: " + item1.innerHTML + 
// 	"<br>Specific Item Two: " + item2.innerHTML;
// }
// document.addEventListener("DOMContentLoaded", init, false);

// setting and retrieving cookies
// function init() {
// 	document.getElementById("panel");
// 	var user = escape("Mike McGrath,000456");
// 	var expiry = new Date();
// 	expiry.setTime(expiry.getTime() + (7 * 24 * 60 * 60 * 1000));
// 	document.cookie = "myData=" + user + ";" + "expires=" + expiry.toGMTString() + ";";
	
// 	if (document.cookie) {
// 		var cookieString = unescape(document.cookie);
// 		var list = cookieString.split("=");
// 		if (list[0] === "myData") {
// 			var data = list[1].split(",");
// 			var userName = data[0];
// 			var userAcct = data[1];
// 		}
// 	}

// 	panel.innerHTML += "Cookie String: " + cookieString;
// 	panel.innerHTML += "<br>Split List: " + list;
// 	panel.innerHTML += "<br>User Name: " + userName;
// 	panel.innerHTML += "<User Account: " + userAcct;

// }
// document.addEventListener("DOMContentLoaded", init, false);

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
