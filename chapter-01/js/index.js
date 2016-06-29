// function init() {
// 	var str = "Text Content in JavaScript";
// 	var num = 100;
// 	var bln = true;
// 	var fcn = init;
// 	var obj = document.getElementById("panel");

// 	obj.innerHTML = str + " : " + typeof str;
// 	obj.innerHTML += "<br>" + num + " : " + typeof num;
// 	obj.innerHTML += "<br>" + bln + " : " + typeof bln;
// 	obj.innerHTML += "<br>init() :" + typeof fcn;
// 	obj.innerHTML += "<br>" + obj + " : " + typeof obj;
// }
// document.addEventListener("DOMContentLoaded", init, false);

//p23:
// function stringify( argA, argB, argC, argD ) {
// 	var str = argA + " " + argB + " " + argC + " " + argD + "<br>";
// 	return str;
// }

// function init() {
// 	document.getElementById("panel").innerHTML = 
// 		stringify("JavaScript", "In", "Easy", "Steps");
// 	document.getElementById("panel").innerHTML+=
// 		stringify("Written", "By", "Mike", "McGrath");
// }
// document.addEventListener("DOMContentLoaded", init, false);

//p24
var global = "This is Worldwide Global news<hr>";

function us( obj ) {
	var local = "***This is United States Local news***<hr>";
	obj.innerHTML += local; obj.innerHTML += global;
}

function eu( obj ) {
	var local = "---This is European Local news---<hr>";
	obj.innerHTML += local; obj.innerHTML += global;
}

function init() {
 	var obj = document.getElementById("panel");
 	obj.innerHTML = global;
 	us( obj );
 	eu( obj );
}
document.addEventListener("DOMContentLoaded", init, false);