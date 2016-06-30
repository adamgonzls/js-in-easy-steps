// calculating the circle values
function init() {
	var panel = document.getElementById('panel');
	var rad = 4;
	var area = Math.PI * (rad * rad);
	var circ = 2 * (Math.PI * rad);
	panel.innerHTML = '<h1>Circle Radius: ' + rad + ' feet</h1>';
	panel.innerHTML += '<br><h1>Area: ' + area + ' square feet</h1>';
	panel.innerHTML += '<br><h1>Circumference ' + circ + ' feet</h1>';
}
document.addEventListener('DOMContentLoaded', init, false);