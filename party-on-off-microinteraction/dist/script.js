const toggle = document.querySelector("#toggle");

const updateBackground = (event) => {
	document.body.classList.toggle("party-on");
};

toggle.addEventListener(
	"click",
	() => document.body.classList.toggle("party-on"),
	false
);