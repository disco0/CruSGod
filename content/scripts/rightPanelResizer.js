var id = "rightContainer";
function setRightPanelHeight() {
	rightPanel = document.getElementById(id);	
	console.info(innerHeight, rightPanel.offsetTop);
	rightPanel.style.height = innerHeight - rightPanel.offsetTop + "px";
	
}
window.addEventListener('resize', setRightPanelHeight);
window.addEventListener('load', setRightPanelHeight);
