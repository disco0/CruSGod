var id = "rightContainer";
function setRightPanelHeight() {
	rightPanel = document.getElementById(id);	
	rightPanel.style.height = innerHeight - rightPanel.offsetTop + "px";
}
window.addEventListener('resize', setRightPanelHeight);
window.addEventListener('DOMContentLoaded', setRightPanelHeight);