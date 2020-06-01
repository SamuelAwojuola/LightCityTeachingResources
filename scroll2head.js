var theaders = document.querySelectorAll("h1");

for (i=0; i < theaders.length; i++) {
	theaders[i].addEventListener('click', tfunction)
};

function tfunction() {
	this.scrollIntoView({
		behavior: "smooth"
	})
};