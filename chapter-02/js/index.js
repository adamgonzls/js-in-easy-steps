// function init() {
// 	var sum = 80 + 20;
// 	var sub = sum - 50;
// 	var mul = sum * 5;
// 	var div = sum / 4;
// 	var mod = sum % 2;
// 	var inc = ++sum;
// 	var dec = --sum;
// 	var str = "Sum: " + sum + "<br>Subtraction: " + sub ;
// 	str += "<br> Multiplication: " + mul ;
// 	str += "<br> Division: " + div + "<br>Modulus: " + mod ;
// 	str += "<br> Increment: " + inc ;
// 	str += "<br> Decrement: " + dec ;
// 	document.getElementById("panel").innerHTML = str;
// }
// document.addEventListener("DOMContentLoaded", init, false);

// function init() {
// 	var msg = "JavaScript" ; msg += " Code"; //concatenate
// 	var flt = 7.5; flt += 2.25;
// 	var intA = 8; intA -= 4;
// 	var intB = 24; intB *= intA;
// 	var intC = 24; intC /= intA;
// 	var intD = 24; intD %= intA;
// 	var str = "Add & assign string: " + msg;
// 	str += "<br>Add & assign float: " + flt;
// 	str += "<br>Subtract & assign: " + intA;
// 	str += "<br>Multiply & assign: " + intB;
// 	str += "<br>Divide & assign: " + intC;
// 	str += "<br>Modulus & assign: " + intD;
// 	document.getElementById("panel").innerHTML = str;
// }
// document.addEventListener("DOMContentLoaded", init, false);

// function init() {
// 	var strA = "JavaScript" === "JAVASCRIPT";
// 	var strB = "JavaScript" === "JavaScript";
// 	var flt = 7.5 === 7.5;
// 	var intA = 8 !== 8;
// 	var intB = 24 > 12;
// 	var intC = 24 < 12;
// 	var intD = 24 <= 24;
// 	var str = "String equality test 1: " + strA;
// 	str += "<br>String equality test 2: " + strB;
// 	str += "<br>Float equality test: " + flt;
// 	str += "<br>Integer inequality test: " + intA;
// 	str += "<br>Greater than test: " + intB;
// 	str += "<br>Less than test: " + intC;
// 	str += "<br>Less than or equal test: " + intD;
// 	document.getElementById("panel").innerHTML = str;
// }
// document.addEventListener("DOMContentLoaded", init, false);

// function init() {
// 	var yes = true, no = false;
// 	var blnA = yes && yes;
// 	var blnB = yes && no;
// 	var blnC = no || yes;
// 	var blnD = no || no;
// 	var tog = !yes;
// 	var str = "Are both values true?: " + blnA + "<br>";
// 	str += "Are both values true now?: " + blnB + "<br>";
// 	str += "Is either value true?: " + blnC + "<br>";
// 	str += "Is either value true now?: " + blnD + "<br>";
// 	str += "Initial value: " + yes + "<br>";
// 	str += "Toggled value: " + tog + "<br>";
// 	document.getElementById("panel").innerHTML = str;
// }
// document.addEventListener("DOMContentLoaded", init, false);

// function init() {
// 	var state = 7 > 5 ? "Greater" : "Smaller";
// 	var str = "7 is " + state + " than 5";
// 	state = 7 > 10 ? "Greater" : "Smaller";
// 		str += "<br>7 is " + state + " than 10";
// 	state = 7 === 8 ? "Equal" : "Not Equal";
// 		str += "<br>7 is " + state + " to 8";
// 	state = 7 % 2 === 0 ? "Even" : "Odd";
// 		str += "<br>7 is an " + state + " number";
// 	document.getElementById("panel").innerHTML = str;
// }
// document.addEventListener("DOMContentLoaded", init, false);

function init() {
	var sum = 2 * 9 + 12 / 3;
	var str = "18 + 4 = " + sum;
	sum = ((2 * 9) + 12) / 3;
	str += "<br> 30 / 3 = " + sum;
	sum = (2 * (9 + 12)) / 3;
	str += "<br> 42 / 3 = " + sum;
	sum = 2 * (9 + (12 / 3));
	str += "<br> 2 * 13 = " + sum;
	document.getElementById("panel").innerHTML = str;
}
document.addEventListener("DOMContentLoaded", init, false);
