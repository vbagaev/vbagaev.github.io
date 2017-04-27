document.addEventListener("DOMContentLoaded", function(){
	var elements = document.querySelectorAll(".scale__item-block");
		console.dir(elements);
		for (var i = 0; i < elements.length; i++) {
			elements[i].style.width = elements[i].dataset.weight + '%';
		}
});
