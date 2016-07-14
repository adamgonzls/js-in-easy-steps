// introducting the dom
// function init() {
// 	var panel = document.getElementById('panel');
// 	var property;
// 	for (property in window) {
// 		if (property) {
// 			panel.innerHTML += property + ' , '; 
// 		}
// 	}
// }
// document.addEventListener('DOMContentLoaded', init, false);

// inspecting window properties
// function init() {
// 	var panel = document.getElementById('panel');
// 	var width, height, avWidth, avHeight, colors;
// 	width = window.screen.width;
// 	height = window.screen.height;
// 	avWidth = window.screen.availWidth;
// 	avHeight = window.screen.availHeight;
// 	switch( window.screen.colorDepth ) {
// 		case 8 : colors = "Low Color"; break;
// 		case 16 : colors = "High Color"; break;
// 		case 24 : colors = "True Color"; break;
// 		case 32 : colors = "Deep Color"; break;
// 		default : colors = "Unknown";
// 	}
// 	panel.innerHTML = 'Screen Resolution: ' + width + ' x ' + height + '<br>';
// 	panel.innerHTML += 'Available Screen Size: ' + avWidth + ' x ' + avHeight + '<br>';
// 	panel.innerHTML += 'Color Capability: ' + colors;
// 	window.defaultStatus = 'Screen Data by JavaScript';
// }
// document.addEventListener('DOMContentLoaded', init, false);

// displaying dialog messages
// function init() {
// 	var panel = document.getElementById( 'panel' );
// 	window.alert( "Here's a simple message." );
// 	panel.innerHTML = 'Confirm: ' + window.confirm('Go or Stop?');
// 	panel.innerHTML += '<br>Prompt: ' + window.prompt('Yes or No?', 'Yes');
// }
// document.addEventListener( 'DOMContentLoaded', init, false );

// scrolling and moving position
// function init() {
// 	var i, panel = document.getElementById('panel');
// 	for (i = 1; i < 501; i++) {
// 		panel.innerHTML += i + '<br>';
// 	}
// 	window.scrollBy(0, 500);
// 	window.moveTo(0, 0);
// }
// document.addEventListener('DOMContentLoaded', init, false);

// opening new windows
// function init() {
// 	var panel = document.getElementById('panel');
// 	panel.innerHTML = 'Regular information in the main window';
// 	var winObject = window.open('pop.html', 'windowName', "top=200,left=100,width=450,height=100,status=yes");
// }
// document.addEventListener('DOMContentLoaded', init, false);

// querying the browser
// function init() {
// 	var panel = document.getElementById("panel");
// 	panel.innerHTML += "Browser: " + navigator.appName;
// 	panel.innerHTML += "<br>Code Name: " + navigator.appCodeName;
// 	panel.innerHTML += "<br>Version: " + navigator.appVersion;
// 	panel.innerHTML += "<br>Platform: " + navigator.platform;
// 	if (document.addEventListener) {
// 		panel.innerHTML += "<br>This is a Modern DOM Browser"
// 	}
// }
// document.addEventListener("DOMContentLoaded", init, false);

// Discovering what is enabled
// function init() {
// 	var panel = document.getElementById( "panel" );
// 	if ( navigator.javaEnabled() ) {
// 		panel.innerHTML = "Java Support is Enabled";
// 	}
// 	if ( navigator.plugins.length !== 0 ) {
// 		panel.innerHTML += "<hr>Total Plugins: " + navigator.plugins.length;
// 		panel.innerHTML += "<br>Example: " + navigator.plugins[ 1 ].name;
// 		panel.innerHTML += " - " + navigator.plugins[ 1 ].description;
// 	}
// 	pluginArray = navigator.plugins;
// 	console.log(pluginArray);
// 	for ( i = 0; i < pluginArray.length; i++ ) {
// 		panel.innerHTML += "<br>Plugin: " + pluginArray[i].name;
// 		console.log(pluginArray[i].name)
// 	}
// 	if ( navigator.mimeTypes.length !== 0 ) {
// 		panel.innerHTML += "<hr>Total MIME Types: " + navigator.mimeTypes.length;
// 		panel.innerHTML += "<br>Example: " + navigator.mimeTypes[ 1 ].type;
// 		panel.innerHTML += " - " + navigator.mimeTypes[ 1 ].description;
// 	}

// }
// document.addEventListener("DOMContentLoaded", init, false);

// controlling location
// function init() {
// 	var panel = document.getElementById( "panel" );
// 	panel.innerHTML = "<a name='frag'>Fragment Anchor</a>";
// 	var jump = confirm( "Jump to fragment?" );
// 	if ( jump ) {
// 		location = location.href + "#frag";
// 	}
// 	panel.innerHTML += "<hr>Href: " + location.href;
// 	panel.innerHTML += "<br>Protocol: " + location.protocol;
// 	panel.innerHTML += "<br>Host: " + location.host;
// 	panel.innerHTML += "<br>Path: " + location.pathname;
// 	panel.innerHTML += "<br>Hash: " + location.hash;
// }
// document.addEventListener("DOMContentLoaded", init, false);

// traveling through history
function init() {
	var panel = document.getElementById( "panel" );
	panel.innerHTML += "<a href='index.html'>Home</a>";
	panel.innerHTML += "<br>History Length: " + history.length + "<br>";
	panel.innerHTML += "Current Location: " + location.pathname + "<br>";
	panel.innerHTML += "<button onclick='history.back()'>Back</button>";
	panel.innerHTML += "<button onclick='history.forward()'>Forward</button>";
}
document.addEventListener( "DOMContentLoaded", init, false);