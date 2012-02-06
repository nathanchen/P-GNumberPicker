/**
 * @author Nathan CHEN
 */

var arr = [];
var used = [];
function setting() {
	var content = document.getElementById("main");
	while(content.lastChild) {
		content.removeChild(content.lastChild);
	}

	var newRow = document.createElement("tr");
	var ceiling = document.getElementById("numberCeiling").value;
	
	var clear = document.getElementById("clear");
	while(clear.lastChild) {
		clear.removeChild(clear.lastChild);
	}
	var value = parseInt(ceiling) || -1;
	if(value != -1)
	{
		document.getElementById("main").innerHTML = ceiling;
		content.appendChild(newRow);
		newRow = document.createElement("tr");
		var mainFrame = document.createElement("input");
		mainFrame.id = "pickerButton";
		mainFrame.type = "Button";
		mainFrame.value = "选一个数字";
		arr = new Array(parseInt(ceiling));
		for( i = 1; i < arr.length + 1; i++) {
			arr[i - 1] = i;
		}
		used = new Array();
		mainFrame.onclick = function() {
			numberPicker(ceiling);
		};
		content.appendChild(mainFrame);
		content.appendChild(newRow);
	}
	else
	{
		alert("\"将数字上线设置为\" 一栏中必须填写数字");
	}
}

function numberPicker(ceiling) {
	if(arr.length > 0) 
	{
		var flag = true;
		while(flag) 
		{
			var number = Math.ceil(Math.random() * ceiling);
			if(used.length > 0) 
			{
				var isUsed = locateNumber(number, used);
				//alert("isUsed " + isUsed);
				if(isUsed == -1)
				{
					flag = false;
				}
			} 
			else
			{
				flag = false;
			}
		}
		//alert("arr " + arr.length);
		alert("number " + number);
		var slice = locateNumber(number, arr);
		//alert("slice " + slice);
		used.push(number);
		arr.splice(slice, 1);
	} 
	else 
	{
		document.writeln(used.valueOf());
		alert("No more number left");
	}
}

function locateNumber(num, array) {
	//alert("array " + array.length);
	var result = -1;
	for( i = 0; i < array.length; i++) {
		if(array[i] == num) {
			result = i;
			return result;
		}
	}
	return result;
}