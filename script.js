//your JS code here. If required.
function getDOMLevel(element) {
	let level = 0;
	while(element){
		level++;
		element = element.parentElement;
	}
	return level;
}
const targetElement = document.getElement('level');
const domlevel = getDOMLevel(targetElement);
alert('The level of the element is: ${domlevel}');
