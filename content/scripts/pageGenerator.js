function generateList(containerId, columnsCount, rowsCount) 
{
	var strr = '<div class="leftSubGridEntry"><img src="1.png"></div>';
	var container = document.getElementById(containerId);
	var animationSpeedDivider = 20;
	container.style.setProperty("grid-template-columns", "repeat(" + columnsCount + ", 64px)");
	for (let i = 0; i < columnsCount * rowsCount; i++) {
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
}	
