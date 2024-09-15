importScripts("constants.js");

chrome.action.onClicked.addListener(function (tab) {
	if (tab.url.match(/^http/i) || tab.url.match(/^file/i)) {
		if ((new URL(tab.url)).origin != browserstore && tab.url != browsernewtab) {
			chrome.scripting.executeScript({
				target: { tabId: tab.id },
				files: ["js/run.js"]
			});
		}
	}
});