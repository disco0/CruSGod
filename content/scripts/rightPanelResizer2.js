const root = document.documentElement;
var rightContainer;

function onStart() {
	rightContainer = document.getElementById("rightElement");
}

function resize() {
	var leftOffset = rightContainer.offsetLeft;
	var topOffset = rightContainer.offsetTop;	
	
	var style = window.getComputedStyle(rightContainer, null);
	var paddingH = parseInt(style.getPropertyValue("padding-left"), 10) + parseInt(style.getPropertyValue("padding-right"), 10);
	var paddingV = parseInt(style.getPropertyValue("padding-top"), 10) + parseInt(style.getPropertyValue("padding-bottom"), 10);
	var contentWidth = innerWidth - leftOffset - paddingH; //avaliable
	var contentHeight = innerHeight - topOffset - paddingV;
	
	
	var contentSize = Math.min(contentWidth, contentHeight);
	//var padding = parseInt(style.getPropertyValue("padding"), 10)
	if (topOffset > 0) 
	{
		rightContainer.style.setProperty("justify-content", "center");
		} else {
		rightContainer.style.setProperty("justify-content", "start");
	}
	
	root.style.setProperty("--rightContainerSize", contentSize + "px");
	console.info(paddingH, paddingV);
	
}

window.addEventListener('load', onStart);
window.addEventListener('load', resize);
window.addEventListener('resize', resize);
