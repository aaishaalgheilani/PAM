const sizePic = document.getElementById("sizePicker");
const table = document.getElementById("pixelCanvas");

function makeGrid() {
	//this funciton makes a grid by creating rows based on the height value and creats cells for every row based on the width value
	var tWidth = document.getElementById("inputWidth").value;
	var tHeight = document.getElementById("inputHeight").value;
	for (var x = 0; x < tHeight; x++) {
		var row = document.createElement("tr");
		table.appendChild(row);
		for (var y = 0; y < tWidth; y++) {
			var cell = document.createElement("td");
			row.appendChild(cell);
		}
	}
}

function color(cell) {
//this function is used to color cells based on the value of the colorPicker 
//and also clears previouslly colored cell
	var cColor = document.getElementById("colorPicker").value;
	if (cell.target.style.backgroundColor) {
		cell.target.style.backgroundColor = null;
	} else {
		cell.target.style.backgroundColor = cColor;
	}
}

sizePic.addEventListener("submit", function(event) {
// event listener for cilciking on the submit button it runs makegrid function
	event.preventDefault(); //prevent refreshing the page after pressng submit
	table.innerHTML = "";  //clears the  previouse grid 
	makeGrid();           // this function is called upone clicking  submit
});

table.addEventListener("click", color, false);
// event listener that react to cilciking on data cells and color them using color function
