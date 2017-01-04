//[].forEach.call(document.getElementsByClassName('project-name'), function(e) {
//	elem = e;
//	console.log("element ", e, " found");
//	e.addEventListener('click', function (ev){
//		ev.preventDefault();
//		ev.stopPropagation();
//		console.log('click called');
//		 description = e.parentNode.getElementsByClassName('description')[0];
//		var className = description.className;
//		console.log('class name is', className);
//		var hidden = className.search('hidden') > -1;
//		className = hidden ? className.replace(' hidden', '') : (className + ' hidden');
//		console.log('class name is now', className);
//		description.className = className;
//	}, false);
//})
