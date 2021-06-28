var id = "rightContainer";
function setRightPanelHeight() {
	rightPanel = document.getElementById(id);
	var style = window.getComputedStyle(rightPanel, null);
	var padding = parseInt(style.getPropertyValue("padding-bottom"), 10);
	padding += parseInt(style.getPropertyValue("padding-top"), 10);
	rightPanel.style.height = innerHeight - rightPanel.offsetTop - padding + "px";
	
}
window.addEventListener('resize', setRightPanelHeight);
window.addEventListener('load', setRightPanelHeight);
