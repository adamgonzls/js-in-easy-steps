// calculating the circle values
// function init() {
// 	var panel = document.getElementById('panel');
// 	var rad = 4;
// 	var area = Math.PI * (rad * rad);
// 	var circ = 2 * (Math.PI * rad);
// 	panel.innerHTML = '<h1>Circle Radius: ' + rad + ' feet</h1>';
// 	panel.innerHTML += '<br><h1>Area: ' + area + ' square feet</h1>';
// 	panel.innerHTML += '<br><h1>Circumference ' + circ + ' feet</h1>';
// }
// document.addEventListener('DOMContentLoaded', init, false);

// comparing numbers
// function init() {
// 	var panel = document.getElementById('panel');
// 	var sq = Math.pow(5, 2);
// 	var cb = Math.pow(4, 3);
// 	panel.innerHTML = '<h1>Largest Positive: ' + Math.max(sq, cb) + '</h1>';
// 	panel.innerHTML += '<br><h1>Smallest Positive: ' + Math.min(sq, cb) + '</h1>';
// 	panel.innerHTML += '<br><h2>Largest Negative: ' + Math.max(-5, -4.75) + '</h2>';
// }
// document.addEventListener('DOMContentLoaded', init, false);

// rounding floating points
// function init() {
// 	var panel = document.getElementById('panel');
// 	panel.innerHTML = 'Ceiling: ' + Math.ceil(7.5) + '<br>Floor: ' + Math.floor(7.5) + '<br>Round: ' + Math.round(7.5) + '<br>Round: ' + Math.round(-7.5);
// 	panel.innerHTML += '<hr>Inprecision: ' + (81.66 * 15) + '<br>Corrected: ' + ((81.66 * 100) * 15)/100;
// 	panel.innerHTML += '<hr>Float: ' + Math.PI + '<br>Commuted: ' + (Math.round(Math.PI * 100)) / 100;
// }
// document.addEventListener('DOMContentLoaded', init, false);

// generating random numbers
// function init() {
// 	var panel = document.getElementById('panel');
// 	var i, rand, temp, str, nums = [];
	
// 	for (i = 1; i < 50; i++) {
// 		nums[i] = i;
// 	}

// 	for (i = 1; i < 50; i++) {
// 		rand = Math.ceil(Math.random() * 49);
// 		temp = nums[i];
// 		nums[i] = nums[rand];
// 		nums[rand] = temp;
// 	}
// 	str = 'Your Six Lucky Numbers:<br>';
// 	for (i = 1; i < 7; i++) {
// 		str += nums[i];
// 		if (i !== 6) {
// 			str += ' - ';
// 		}
// 	}
// 	panel.innerHTML = str;
// }
// document.addEventListener('DOMContentLoaded', init, false);

// uniting strings
// function init() {
// 	var panel = document.getElementById('panel');
// 	var s1 = 'JavaScript', s2 = 'in Easy', s3 = 'Steps';
// 	var picName = 'myPic', picFile = '../poolballs.png';
// 	panel.innerHTML = s1.toUpperCase();
// 	panel.innerHTML += '<br>' + s1.toLowerCase();
// 	panel.innerHTML += '<br>' + s1.concat(s2, s3);
// 	panel.innerHTML += '<br>' + s1 + ' has ' + s1.length + ' characters';
// 	panel.innerHTML += "<br><img id='myPic'>";
// 	document.images[picName].src = picFile;
// }
// document.addEventListener('DOMContentLoaded', init, false);

// splitting strings
// function init() {
// 	var panel = document.getElementById('panel');
// 	var dfn = 'JavaScript is the original dialect of the ECMAScript standard language whereas JScript is the dialect developed later by Microsoft.';
// 	panel.innerHTML = '<h1>' + dfn.slice(0, 26) + '</h1>';
// 	panel.innerHTML += dfn.slice(61, 70) + '<br>';
// 	panel.innerHTML += '<p>' + dfn.split(' ', 4) + '</p>' + '<br>';
// 	panel.innerHTML += dfn.substring(79, 94);
// 	panel.innerHTML += '<h2>' + dfn.substring(121, 130) + '</h2>';
// 	panel.innerHTML += '<h1>' + dfn.substr(61, 10) + '</h1>';
// }
// document.addEventListener('DOMContentLoaded', init, false);

// finding characters
// function init() {
// 	var panel = document.getElementById('panel');
// 	var str = 'JavaScript in easy Steps';
// 	panel.innerHTML = '<h1>' + str + '</h1>';
// 	panel.innerHTML += "'Script' search: " + str.search('Script');
// 	panel.innerHTML += "<br>'Script' match: " + str.match('Script');
// 	panel.innerHTML += "<br>IndexOf 's': " + str.indexOf('s');
// 	panel.innerHTML += "<br>lastIndexOf 's': " + str.lastIndexOf('s');
// 	panel.innerHTML += "<br>charAt 0: " + str.charAt(0);
// 	panel.innerHTML += "<br>charCodeAt 0: " + str.charCodeAt(0);
// 	panel.innerHTML += "<br>fromCharCode: " + String.fromCharCode(74, 97, 118, 97);
// 	panel.innerHTML += "<br>replace: " + str.replace("easy", "simple");
// }
// document.addEventListener('DOMContentLoaded', init, false);

// getting numbers from strings
// function init() {
// 	var panel = document.getElementById('panel');
// 	var num = '074.5 Input';
// 	panel.innerHTML += 'Not a number?: ' + isNaN(num);
// 	panel.innerHTML += '<br>This value is a ' + typeof num;
// 	panel.innerHTML += "<hr>Octal: " + parseInt(num, 8) + '<br>Decimal: ' + parseInt(num, 10) + "<br>Hexadecimal: " + parseInt(num, 16);
// 	panel.innerHTML += "<br>Float: " + parseFloat(num);
// }
// document.addEventListener('DOMContentLoaded', init, false);

// introducing the DOM
