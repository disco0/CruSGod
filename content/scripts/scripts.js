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

//Will be executed after document load
document.addEventListener("DOMContentLoaded", function(){
	{ //Buttons logic
		let gridsContainer = document.getElementById('leftBottom');
		let labelsContainer = document.getElementById('leftTopButtonsContainer');
		
		//Too lazy to make a class
		let checkboxes = gridsContainer.getElementsByTagName('input');
		let labels = labelsContainer.getElementsByTagName('label');
		let labelsEnabledImg = [];
		let labelsDisabledImg = [];
		
		Array.from(labels).forEach(el => {
			labelsEnabledImg.push(el.getElementsByClassName('enabled')[0]);
			labelsDisabledImg.push(el.getElementsByClassName('disabled')[0]);
		});
		/*
			Когда все выключены: все лабели Енаблед
			Когда один включен: все кроме этого дисаблед, чекбоксы тоже дисаблед
		*/
		function toggleButtonMode(index, isEnabled){
			labelsEnabledImg[index].hidden = !isEnabled;
			labelsDisabledImg[index].hidden = isEnabled;
			checkboxes[index].disabled = !isEnabled;
		}
		
		function disableAllExcept(index){
			index = parseInt(index);
			for (let i = 0; i < checkboxes.length; i++) {
				if (index != i) 
				{
					toggleButtonMode(i, false);
				}
			}
		}		
		function enableAll() {
			for (let i = 0; i < checkboxes.length; i++) 
			{
				toggleButtonMode(i, true);
			}
		}
		
		for (let i = 0; i < checkboxes.length; i++) {
			checkboxes[i].addEventListener('change', function()
				{						
					if (checkboxes[i].checked)
					{
						disableAllExcept(i);
					}
					else {
						let delay = parseFloat(checkboxes[i].nextElementSibling.style.getPropertyValue("--max-delay"));
						delay *= 1000;
						setTimeout(enableAll, delay);
					}
				});
		}
	}
	
});

//Creates grid in containerId with totalCount elements and columnsCount rows
function createGrid(containerId, totalCount, columnsCount) {
	totalCount=parseInt(totalCount);
	columnsCount=parseInt(columnsCount);	
  
	var cellClass = "leftSubGridEntry";
	var cellImgSrc = "content/img/Disabled_Button.png";
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

//Randomizes offset in horizontally tiled images, src: image source, imagesCount: how much images in file
function randomizeAllImagesWithSrc(src, imagesCount){
	var positions = [];
	for (var i = 0; i < imagesCount; i++) {	
		positions.push(Number.parseFloat(100 / 3 * i).toFixed(2) + '%');
	}
	console.log(positions);
	Array.from(document.getElementsByTagName("img")).forEach(el => 
		{		
			imagesCount = parseInt(imagesCount);
			if (el.attributes.src.value == src) 
			{			
				var position = positions[Math.floor(Math.random() * positions.length)]
				el.style.objectPosition = position + ' top';		
			}
		});		
}


