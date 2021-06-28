{
	const root = document.documentElement;
	var rightContainer;
	var leftContatiner;
	function onStart() {
		rightContainer = document.getElementById("rightContainer");
		leftContatiner = document.getElementById("leftContatiner");
	}

	function resize() {
		
		if (topOffset == 0) { 
			
		}
		else {
			
		}
		/*
		var leftOffset = rightContainer.offsetLeft;
		var topOffset = rightContainer.offsetTop;	

		var style = window.getComputedStyle(rightContainer, null);
		var paddingH = parseInt(style.getPropertyValue("padding-left"), 10) + parseInt(style.getPropertyValue("padding-right"), 10);
		var paddingV = parseInt(style.getPropertyValue("padding-top"), 10) + parseInt(style.getPropertyValue("padding-bottom"), 10);
		var contentWidth = innerWidth - leftOffset - paddingH; //avaliable
		var contentHeight = innerHeight - topOffset - paddingV;

		var leftHeight = leftContatiner.clientHeight;
		
		var contentSize = Math.min(contentWidth, contentHeight, leftHeight);
		//var padding = parseInt(style.getPropertyValue("padding"), 10)
		if (topOffset > 0) 
		{
			rightContainer.style.setProperty("justify-content", "center");
			} else {
			rightContainer.style.setProperty("justify-content", "start");
		}

		root.style.setProperty("--rightContainerSize", contentSize + "px");
		console.info(paddingH, paddingV);
*/
	}

	window.addEventListener('load', onStart);
	window.addEventListener('load', resize);
	window.addEventListener('resize', resize);
}
