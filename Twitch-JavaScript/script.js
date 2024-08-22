var icon = document.getElementById("icon");
var spans = document.querySelectorAll(".container_left span");
var onerilen_p = document.getElementById("onerilen");
var container_left = document.getElementById("container_left");
var divs = document.querySelectorAll(".kanal_oneri");
var img_1 = document.getElementById("img-1");
var img_2 = document.getElementById("img-2");
var img_3 = document.getElementById("img-3");
let sayac = 1;
document.getElementById("left_icon").addEventListener("click",leftClick);
document.getElementById("right_icon").addEventListener("click", function () {
	rightClick();
});
img_1.addEventListener("click",leftClick);
img_3.addEventListener("click",rightClick);
function leftClick() {
	if (sayac == 1) {
		sayac = 8;
	}
	sayac--;
	img_3.src = img_2.src;
	img_2.src = img_1.src;
	img_1.src = `pictures/video${sayac}.jpg`;
}
function rightClick() {
	if (sayac == 8) {
		sayac = 1;
	}
	sayac++;
	img_1.src = img_2.src;
	img_2.src = img_3.src;
	img_3.src = `pictures/video${sayac}.jpg`;
}
function checkScreenSize() {
	if (window.innerWidth < 1305) {
		icon.className = "fa-solid fa-arrow-right";
		document.getElementById("iconButton").style.marginLeft = "15px";
		document.getElementById("container_left").style.width = "60px";
		spans.forEach(function (span) {
			span.style.display = "none";
		});
		onerilen_p.style.display = "none";
		container_left.style.paddingTop = "35px";
		divs.forEach(function (div) {
			div.style.width = "60px";
		});
		document.getElementById("container_right").style.marginLeft = "70px";
	}
	else {
		icon.className = "fa-solid fa-arrow-left";
		onerilen_p.style.display = "flex";
		container_left.style.paddingTop = "0px";
		document.getElementById("iconButton").style.marginLeft = "200px";
		document.getElementById("container_left").style.width = "240.5px";
		document.getElementById("container_right").style.marginLeft = "250px";
		spans.forEach(function (span) {
			span.style.display = "flex";
		});
		divs.forEach(function (div) {
			div.style.width = "240.5px";
		});
	}
}
window.addEventListener('resize', checkScreenSize);
window.addEventListener('load', checkScreenSize);


document.getElementById("iconButton").addEventListener("click", function () {

	if (icon.classList.contains("fa-arrow-left")) {
		icon.className = "fa-solid fa-arrow-right";
		document.getElementById("iconButton").style.marginLeft = "15px";
		document.getElementById("container_left").style.width = "60px";
		spans.forEach(function (span) {
			span.style.display = "none";
		});
		onerilen_p.style.display = "none";
		container_left.style.paddingTop = "35px";


		divs.forEach(function (div) {
			div.style.width = "60px";
		});
		document.getElementById("container_right").style.marginLeft = "70px";

	} else {
		icon.className = "fa-solid fa-arrow-left";
		onerilen_p.style.display = "flex";
		container_left.style.paddingTop = "0px";
		document.getElementById("iconButton").style.marginLeft = "200px";
		document.getElementById("container_left").style.width = "240.5px";
		document.getElementById("container_right").style.marginLeft = "250px";
		spans.forEach(function (span) {
			span.style.display = "flex";
		});
		divs.forEach(function (div) {
			div.style.width = "240.5px";
		});
	}
});