function $(id) { return document.getElementById(id); }

function saveOptions() {
	chrome.storage.sync.get(["options"])
	chrome.storage.sync.set({ this.id.checked });
}

function readOptions() {
	chrome.storage.sync.get(["options"], (options) => {
		if (!options) {
			options = {
				"servicecenter_solution_option": {
					"isBoolean": true,
					"value": true
				},
				"lifetime_deployment_option": {
					"isBoolean": true,
					"value": true
				},
				"allow_close_option": {
					"isBoolean": true,
					"value": true
				}
			}
		}
		Object.entries(options).forEach((option, value) => {
			if (!!value.isBoolean) {
				$(option).checked = value.value;
			}
		})
	});

	// Detect click / change to save the page and test it.
	document.querySelectorAll("input")
		.forEach((item) => {
			item.addEventListener("change", saveOptions)
		})
}

document.addEventListener("DOMContentLoaded", readOptions);