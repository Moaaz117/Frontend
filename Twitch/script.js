var icon = document.getElementById("icon");
			var spans = document.querySelectorAll(".container_left span");
			var onerilen_p = document.getElementById("onerilen");
			var container_left = document.getElementById("container_left");
			var divs = document.querySelectorAll(".kanal_oneri");
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