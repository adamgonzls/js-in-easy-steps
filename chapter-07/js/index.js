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
function init() {
	var panel = document.getElementById('panel');
	panel.innerHTML = 'Regular information in the main window';
	var winObject = window.open('pop.html', 'windowName', "top=200,left=100,width=450,height=100,status=yes");
}
document.addEventListener('DOMContentLoaded', init, false);