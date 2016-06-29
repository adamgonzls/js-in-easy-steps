// creating an object
// function accelerate() { 
// 	return "<br>Vroom!";
// }

// function Car( make, model, color )
// {
// 	this.make = make;
// 	this.model = model;
// 	this.color = color;
// 	this.accelerate = accelerate;
// }

// function init() {
// 	var panel = document.getElementById( "panel" );
// 	var myCar = new Car( "Dodge", "Viper", "Red" );
// 	panel.innerHTML = myCar.color + " " + myCar.make + " " + myCar.model;
// 	panel.innerHTML += myCar.accelerate();
// }
// document.addEventListener( "DOMContentLoaded", init, false);

// extending an object
// function Car( make, model, color ) {
// 	this.make = make;
// 	this.model = model;
// 	this.color = color;
// }

// function init() {
// 	var panel = document.getElementById( "panel" );
// 	var myCar = new Car( "Ford", "Focus", "Blue" );
// 	Car.prototype.doors = 4;
// 	for ( property in myCar ) {
// 		if ( myCar[property] !== "" ) {
// 			panel.innerHTML += ( property + ": " + myCar[ property ] + "<br>" );
// 		}
// 	}
// 	panel.innerHTML += "<hr>";
// 	myCar.make = "Dodge";
// 	myCar.model = "Challenger";
// 	myCar.color = "Orange";
// 	myCar.doors = 2;
// 	for (property in myCar) {
// 		if (myCar[property] !== "") {
// 			panel.innerHTML += (property + ": " + myCar[property] + "<br>");
// 		}
// 	}
// 	panel.innerHTML += "<hr>";
// }
// document.addEventListener( "DOMContentLoaded", init, false );

// creating an array object
// function init() {
// 	var panel = document.getElementById('panel');
// 	var summer = ['June', 'July', 'August'];
// 	for (month in summer) {
// 		if (summer[month] !== '') {
// 			panel.innerHTML += (month + ': ' + summer[month] + "<br>");
// 		}
// 	}
// 	panel.innerHTML += "Vacation month: " + summer[2];
// }
// document.addEventListener('DOMContentLoaded', init, false);

// looping through elements
// function init() {
// 	var panel = document.getElementById('panel');
// 	var i, arr = [];
// 	panel.innerHTML = 'Fill Elements...';
// 	for (i = 1; i < 11; i++) {
// 		arr[i] = (i % 2 === 0) ? true : false;
// 		panel.innerHTML += "<br> Element " + i + ' : ' + arr[i];
// 	}
// 	panel.innerHTML += '<hr>Read Elements...<br>True: ';
// 	for (i = 1; i < arr.length; i++) {
// 		if (arr[i]) {panel.innerHTML += i + ' ';}
// 	}
// 	panel.innerHTML += '<br>False: ';
// 	for (i = 1; i < arr.length; i++ ) {
// 		if (!arr[i]) {panel.innerHTML += i + ' ';}
// 	}
// }
// document.addEventListener('DOMContentLoaded', init, false);

// adding array elements
// function init() {
// 	var panel = document.getElementById('panel');
// 	var i;
// 	var week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
// 	var weekend = ['Sat', 'Sun'];
// 	panel.innerHTML = 'Weekdays: ' + week;
// 	panel.innerHTML += '<hr> Weekend days: ' + weekend;
// 	for (i = 0; i < weekend.length; i++) {
// 		week[week.length] = weekend[i];
// 	}
// 	panel.innerHTML += '<hr>Increased with weekend days: ' + week;
// 	week.length -= 2;
// 	panel.innerHTML += '<hr>Reduced back to weekdays: ' + week;

// }
// document.addEventListener('DOMContentLoaded', init, false);

// joining and slicing arrays
// function init() {
// 	var panel = document.getElementById('panel');
// 	var seasons = ['Spring', 'Summer', 'Fall', 'Winter'];
// 	panel.innerHTML = 'Elements: ' + seasons;
// 	panel.innerHTML += '<br>Joined: ' + seasons.join(' and ');
// 	panel.innerHTML += '<hr>Popped: ' + seasons.pop();
// 	panel.innerHTML += '<br>Elements: ' + seasons;
// 	panel.innerHTML += '<hr>Pushed: ' + seasons.push('Winter');
// 	panel.innerHTML += '<br>Elements: ' + seasons;
// 	panel.innerHTML += '<hr>Sliced: ' + seasons.slice(1, 3);
// 	panel.innerHTML += '<br>Spliced: ' + seasons.splice(2, 1, 'Autumn');
// 	panel.innerHTML += '<br>Elements: ' + seasons;d
// }
// document.addEventListener('DOMContentLoaded', init, false);

// sorting array elements
// function sortNums(x, y) {
// 	return (x - y);
// }
// function init() {
// 	var panel = document.getElementById('panel');
// 	var hues = ['Red', 'RED', 'red', 'Green', 'Blue'];
// 	var nums = [1, 20, 3, 45, 44, 0.5];
// 	panel.innerHTML = 'Colors: ' + hues;
// 	panel.innerHTML += '<br>Dictionary sort: ' + hues.sort();
// 	panel.innerHTML += '<hr>Numbers: ' + nums;
// 	panel.innerHTML += '<br>Dictionary sort: ' + nums.sort();
// 	panel.innerHTML += '<br>Numerical sort: ' + nums.sort( sortNums);
// 	panel.innerHTML += '<br>Reversed: ' + nums.reverse();
// }
// document.addEventListener('DOMContentLoaded', init, false);

// Catching exceptions
function init() {
	var panel = document.getElementById('panel');
	// var day = 0;
	try {
		if (day > 31)
		{ throw new RangeError(" 'day' cannot exceed 31");}
		if (day < 1) 
		{ throw 'GetReal';}
	}
	catch(err)
	{
		panel.innerHTML = (err === 'GetReal') ?
		("Oops! The 'day' variable has an invalid value of " + day):
		(err.name + 'exception has occurred: ' + err.message);
	}
	finally
	{
		panel.innerHTML += '<br>The script has ignored that variable and is continuing...';
	}
}
document.addEventListener('DOMContentLoaded', init, false);






