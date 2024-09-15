var redborder = null;

function addElement(id) {
	chrome.storage.sync.get(["redborder"], function (response) {
		redborder = response["redborder"];

		const newDiv = document.createElement("div");
		newDiv.id = id;
		newDiv.style.width = "100px";
		newDiv.style.height = "100px";
		newDiv.style.background = "blue";
		newDiv.style.color = "white";
		newDiv.style.position = "absolute";
		newDiv.style.top = "0";
		newDiv.style.left = "0";
		newDiv.style.zIndex = "1000";
		if (redborder == true) {
			newDiv.style.border = "5px solid red";
		}
		newDiv.innerText = "Element";
		document.body.appendChild(newDiv);
	});
}

function removeElement(id) {
	var elem = document.getElementById(id);
	return elem.parentNode.removeChild(elem);
}

if (document.getElementById("starter")) {
	removeElement("starter");
} else {
	addElement("starter");
}