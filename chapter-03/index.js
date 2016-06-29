// branching with if

// function init() {
// 	var flag = true;
// 	if (flag)
// 	{
// 		document.getElementById("panel").innerHTML = "Power is On";
// 	}
// 	if (7 < 2)
// 	{
// 		document.getElementById("panel").innerHTML += "<br>Failure";
// 	}
// 	if (7 > 2) 
// 	{
// 		document.getElementById("panel").innerHTML += "<br>Success";
// 	}
// }
// document.addEventListener("DOMContentLoaded", init, false);


// Brancing alternatives
// function init() {
// 	var panel = document.getElementById("panel");
// 	var flag = false;
// 	var num = 8;

// 	if (flag) 
// 	{
// 		panel.innerHTML = "Power is On";
// 	}
// 	else 
// 	{
// 		panel.innerHTML = "Power is Off";
// 	}

// 	if (num === 5) 
// 	{
// 		panel.innerHTML += "<br>Number is five";
// 	}
// 	else if (num === 10)
// 	{
// 		panel.innerHTML += "<br>Number is ten";
// 	}
// 	else 
// 	{
// 		panel.innerHTML += "<br>Number is neither five or ten";
// 	}
// }
// document.addEventListener("DOMContentLoaded", init, false);

// Switching alternatives
// function init() {
// 	var panel = document.getElementById("panel");
// 	var day;
// 	switch (10 - 2) 
// 	{
// 		case 1 : day = "Monday"		; 	break;
// 		case 2 : day = "Tuesday"	; 	break;
// 		case 3 : day = "Wednesday" 	;	break;
// 		case 4 : day = "Thursday"	;	break;
// 		case 5 : day = "Friday"		;	break;
// 		case 6 : day = "Saturday"	;	break;
// 		case 7 : day = "Sunday"		;	break;
// 		default : day = "There are only 7 days per week!";
// 	}
// 	panel.innerHTML = "It's " + day;
// }
// document.addEventListener("DOMContentLoaded", init, false);

// Looping for
// function init() {
// 	var panel = document.getElementById("panel");
// 	var i;
// 	for (i = 1; i < 11; i++)
// 	{
// 		panel.innerHTML += "Iteration number " + i + "<br>";
// 	}
// }
// document.addEventListener("DOMContentLoaded", init, false);

// Looping while true
// function init() {
// 	var panel = document.getElementById("panel");
// 	var num = 70;
// 	while (num > 10) {
// 		panel.innerHTML += "Countdown value: " + num + "<br>";
// 		num -= 5;
// 	}
// }
// document.addEventListener("DOMContentLoaded", init, false);

// doing do-while loops
// function init() {
// 	var panel = document.getElementById("panel");
// 	var num = 2;
// 	do {
// 		num *= 2;
// 		panel.innerHTML += "Multiplied value: " + num + "<br>";
// 	}
// 	while (num < 1000);
// }
// document.addEventListener("DOMContentLoaded", init, false);

// Breaking out of loops
// function init() {
// 	var panel = document.getElementById("panel");
// 	var i, j;
// 	quitLoop:
// 	for (i = 1; i < 4; i++) 
// 	{
// 		panel.innerHTML += "<dt>Outer loop: " + i;
// 		for (j = 1; j < 4; j++) 
// 		{
// 			if (j === 3) {break;}
// 			panel.innerHTML += "<dd>Inner loop: " + j;
// 		}
// 	}
// }
// document.addEventListener("DOMContentLoaded", init, false);

// Returning Control
function init() {
	var panel = document.getElementById("panel");
	var i;
	for (i = 1; i < 11; i++)
	{
		if ( i === 2 || i === 7) {continue;}
		panel.innerHTML += "Loop iteration: " + i + "<br>";
	}
}
document.addEventListener("DOMContentLoaded", init, false);

