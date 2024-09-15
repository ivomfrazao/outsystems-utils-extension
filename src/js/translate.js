// Search for data and translate it to current use language
document
	.querySelectorAll("[data-i18n]")
	.forEach((item) => {
		let translation = chrome.i18n.getMessage(item.getAttribute("data-i18n"));
		if (item.value === "i18n") {
			item.value = translation;
		} else {
			item.innerText = translation;
		}
	});