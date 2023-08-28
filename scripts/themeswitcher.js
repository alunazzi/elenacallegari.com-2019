// NAVBAR ANIMATION
$(document).ready(function(){

	// Select the button
	const btn = document.querySelector("#btn-switch");
	// Select the stylesheet <link>
	const theme = document.querySelector("#theme-link");
	const lgnavbar = document.querySelector("#logo-navbar");
	const themeswitcherbtn = document.querySelector("#img-themeswitcher");
	const lgfooter = document.querySelector("#logo-footer");

	// Listen for a click on the button
	btn.addEventListener("click", function() {
	  // If the current URL contains "ligh-theme.css"
	  if (theme.getAttribute("href") == "css/style.css") {
	    // ... then switch it to "dark-theme.css"
	    theme.href = "css/styledark.css";
	    lgnavbar.src = "img/logo_dark.png";
		themeswitcherbtn.src = "img/moon.png";
		lgfooter.src = "img/logo_dark.png";
	  // Otherwise...
	  } else {
	    // ... switch it to "light-theme.css"
	    theme.href = "css/style.css";
	    lgnavbar.src = "img/logo_bright.png";
		themeswitcherbtn.src = "img/sun.png";
		lgfooter.src = "img/logo_bright.png";
	  }
	});
});