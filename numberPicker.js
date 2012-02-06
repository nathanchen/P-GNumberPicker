/**
 * @author Nathan CHEN
 */

function setting() {
	var content = document.getElementById("main");
	while(content.lastChild) {
		content.removeChild(content.lastChild);
	}

	var newRow = document.createElement("tr");
	document.getElementById("main").innerHTML = document.getElementById("numberCeiling").value;
	content.appendChild(newRow);
	newRow = document.createElement("tr");
	var mainFrame = document.createElement("input");
	mainFrame.id = "pickerButton";
	mainFrame.type = "Button";
	mainFrame.value = "选一个数字";
	mainFrame.onclick = function() {
		numberPicker();
	};
	content.appendChild(mainFrame);
	content.appendChild(newRow);
}

function numberPicker() {
	alert("1");
}