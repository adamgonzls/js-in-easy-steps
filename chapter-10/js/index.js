// assigning values
// function init() {
// 	var panel = document.getElementById("panel");
// 	panel.innerHTML += "Send Book Data";
	
// 	var form = document.getElementById("book");
// 	form.action = "../echo.pl";
// 	form.method = "POST";

// 	var title = document.getElementById("title");
// 	title.size = "30";
// 	title.name = "Book Title";
// 	title.value = "JavaScript in Easy Steps";

// 	var author = document.getElementById("author");
// 	author.size = "30";
// 	author.name = "By Author";
// 	author.value = "Mike McGrath";

// }
// document.addEventListener("DOMContentLoaded", init, false);

// reacting to form changes
// var panel, field, saved;

// function update() {
// 	panel.innerHTML = saved + " changed to " + field.value + "<br>";
// 	saved = field.value;
// }

// function wipe() {
// 	panel.innerHTML = "<br>";
// }

// function init() {
// 	panel = document.getElementById("panel");
// 	field = document.getElementById("txt");
// 	saved = field.value;
// 	var form = document.getElementById("lang");
// 	form.onreset = wipe;
// 	field.onchange = update;
// 	wipe();
// }
// document.addEventListener("DOMContentLoaded", init, false);

// submitting valid forms
function validate() {
	if (this.elements["Name"].value === "") {
		alert("Please enter your name"); 
		return false;
	}

	if ((this.elements["Email"].value.indexOf("@") === -1)
	 || (this.elements["Email"].value.indexOf(".") === -1)) {
		alert("Please enter a valid email address"); 
		return false;
	}
}

function init() {
	var panel = document.getElementById("panel");
	panel.innerHTML = "Please enter your name and email address";

	var form = document.getElementById("contact");
	form.onsubmit = validate;
}
document.addEventListener("DOMContentLoaded", init, false);