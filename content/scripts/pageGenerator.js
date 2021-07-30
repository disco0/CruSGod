function createGrid(containerId, totalCount, columnsCount){
	var strr = '<div class="leftSubGridEntry"><img src="1.png"></div>';	
	var container = document.getElementById(containerId);
	var animationSpeedDivider = 20;
	var rowsCount = Math.ceil(totalCount / columnsCount);
	container.style.setProperty("grid-template-columns", "repeat(" + columnsCount + ", 64px)");
	for (var i = 0; i < totalCount; i++) {
		container.innerHTML += strr;
		let cell = container.lastElementChild;
		var delay;
		if (i < columnsCount) {
			delay = i;							
			} else {	
			delay = columnsCount + Math.trunc(i / columnsCount);
		}
		delay /= animationSpeedDivider + (0.5 - Math.random()) * 1;
		//delay /= animationSpeedDivider;
		cell.style.setProperty("--delay", delay + "s");
		container.style.setProperty("--max-delay", delay + "s");
	}}					
