// getting the date
// function isDst(d) {
// 	var dst = 60;

// 	if( (d.getMonth() < 3 ) && (d.getDate() < 10) ) { dst = 0 ; }
	  
// 	// After November 2 switch off DST.
// 	if( (d.getMonth() > 9 ) && (d.getDate() > 2) ) { dst = 0 ; }

// 	return dst ;
// }

// function init() {
// 	var panel = document.getElementById('panel');
// 	var now = new Date();
// 	var offset = now.getTimezoneOffset();
// 	var dst = isDst(now); //call a function to adjust offset
// 	switch (offset) {
// 		case (300 - dst): offset = 'East Coast'; break;
// 		case (360 - dst): offset = 'Central'; break;
// 		case (420 - dst): offset = 'Mountain'; break;
// 		case (480 - dst): offset = 'Pacific'; break;
// 		default: offset = 'all';
// 	}
// 	panel.innerHTML = 'System Time: ' + now.toString();
// 	panel.innerHTML = '<br>UTC (GMT) Time: ' + now.toUTCString() + '<hr>Welcome to ' +offset+ ' visitors'; 
// }
// document.addEventListener('DOMContentLoaded', init, false);

// extracting date components
// function init() {
// 	var headline = document.getElementById('main-header');
// 	var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// 	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// 	var now = new Date();
// 	var yy = now.getFullYear();
// 	var mm = now.getMonth();
// 	var dd = now.getDate();
// 	var dy = now.getDay();
// 	mm = months[mm];
// 	dy = days[dy];
// 	var str = dy + ', ' + mm + ' ' + dd + ', ' + yy;
// 	headline.innerHTML += 'US Date String: ' + str;
// 	str = dy + ', ' + dd + ' ' + mm + ', ' + yy;
// 	headline.innerHTML += '<br>UK Date String: ' + str;
// }
// document.addEventListener('DOMContentLoaded', init, false);

// extracting time components
// function init() {
// 	var headline = document.getElementById('main-header');
// 	var now = new Date();
// 	var hh = now.getHours();
// 	var mn = now.getMinutes();
// 	var ss = now.getSeconds();
// 	var ms = now.getMilliseconds();
// 	if (mn < 10) {
// 		mn = '0' + mn;
// 	}
// 	if (ss < 10) {
// 		ss = '0' + ss;
// 	}
// 	var tim = hh + ':' + mn + ':' + ss + ':' + ' and ' + ms + ' milliseconds';
// 	headline.innerHTML += "It's now: " + tim;
// 	var hi = 'Good morning.';
// 	if (hh > 11) {
// 		hi = 'Good Afternoon.';
// 	}
// 	if (hh > 17) {
// 		hi = 'Good Evening.';
// 	}
// 	headline.innerHTML += '<br><h2>' + hi + '</h2>';
// 	var suffix = (hh > 11) ? 'PM' : 'AM';
// 	if (hh > 12) {
// 		hh -= 12;
// 	}
// 	headline.innerHTML += '<br><h2>Time is: ' + hh + ':' + mn + suffix + '</h2>';
// }
// document.addEventListener('DOMContentLoaded', init, false);

// setting the date and time
function init() {
	var headline = document.getElementById('main-header');
	var hol = new Date(2014, 6, 4);
	headline.innerHTML = 'Object: ' + hol;
	hol.setFullYear(2016);
	hol.setMonth(7);
	hol.setDate(28);
	hol.setHours(22);
	hol.setMinutes(34);
	hol.setSeconds(0);
	hol.setMilliseconds(0);
	headline.innerHTML += '<br>String: ' + hol.toString();
	headline.innerHTML += '<br>UTC: ' + hol.toUTCString();
	headline.innerHTML += '<br>Locale: ' + hol.toLocaleString();
	headline.innerHTML += '<br>Date: ' + hol.toDateString();
	headline.innerHTML += '<br>Time: ' + hol.toTimeString();
}
document.addEventListener('DOMContentLoaded', init, false);