var _this;
function saveCard() {
	var card_details = document.getElementById('task').value;
	if(card_details !== undefined && card_details !== ""){
		var	parent = document.getElementById('backlogs_items'),
		    node = document.createElement('div'),
		    text_node = document.createTextNode(card_details);
		node.appendChild(text_node);
		node.setAttribute("class","items");
		node.setAttribute("onclick","myFunction(event)");
		parent.appendChild(node);
		document.getElementById('task').value='';
	}
}
function toggleCard() {
	_toggle(['text_area','add_card']);
}
function myFunction(event) {
	_this = event.target;
	document.getElementById('item_todo').textContent = event.target.textContent;
	_toggle(['lightbox']);
}
function _close() {
	_toggle(['lightbox']);
}
function markDone() {
	var appendElt = _this.cloneNode(true);
	appendElt.removeAttribute("onclick");
	document.getElementById('done_items').appendChild(appendElt);
	deleteIt();
}
function deleteIt() {
	_this.parentNode.removeChild(_this);
	_toggle(['lightbox']);
}
function priotrizeIt(){
	var appendElt = _this.cloneNode(true);
	_this.parentNode.insertBefore(appendElt,_this.parentNode.firstChild);
	deleteIt();
}
function _toggle(eltIds) {
	eltIds.forEach(function(eltId) {
		var elt = document.getElementById(eltId);
		var eltVisibility = (elt.offsetWidth > 0) && (elt.offsetHeight > 0);
		if(eltVisibility) {
			elt.style.display = 'none';
		} else {
			elt.style.display = 'block';
		} 
	})
}
