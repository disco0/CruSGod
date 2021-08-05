//Writes mouse position to CSS variables var(--mouse-x) and var(--mouse-y)
{
	const root = document.documentElement;
	var offsetX = 16;
	var offsetY = 8;
	document.addEventListener('mousemove', evt => {
		let x = (evt.clientX + offsetX) / innerWidth;
		let y = (evt.clientY + offsetY) / innerHeight;
		root.style.setProperty('--mouse-x', x);
		root.style.setProperty('--mouse-y', y);
	});
}

//Creates grid in containerId with totalCount elements and columnsCount rows
function createGrid(containerId, totalCount, columnsCount) {
	totalCount=parseInt(totalCount);
	columnsCount=parseInt(columnsCount);	
  
	var cellClass = "leftSubGridEntry";
	var cellImgSrc = "content/img/1.png";
	var animationSpeedDivider = 20;
	var randomStrength = 1;
  
	var strr = `<div class="${cellClass}"><img src="${cellImgSrc}"></div>`;	
	var container = document.getElementById(containerId);	
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
		delay /= animationSpeedDivider + ((0.5 - Math.random()) * randomStrength);
		//delay /= animationSpeedDivider; //Without random
		cell.style.setProperty("--delay", delay + "s");
		container.style.setProperty("--max-delay", delay + "s");
	}	
}	

//Grid images randomizer
function randomizeGrid(){
	Array.from(document.querySelectorAll('.leftSubGridEntry > img')).forEach(el => 
	{
		var positions = ['0%', '33%', '66%', '100%'];
		var position = positions[Math.floor(Math.random() * positions.length)]
		el.style.objectPosition = position + ' top';
		console.info(el.objectPosition);		
	});
}

