var id = "rightContainer";
function setRightPanelHeight() {
	rightPanel = document.getElementById(id);	
	console.info(innerHeigth, rightPanel.offsetTop);
	rightPanel.style.height = innerHeight - rightPanel.offsetTop + "px";
	
}
window.addEventListener('resize', setRightPanelHeight);
window.addEventListener('DOMContentLoaded', setRightPanelHeight);
