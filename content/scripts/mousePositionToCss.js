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
