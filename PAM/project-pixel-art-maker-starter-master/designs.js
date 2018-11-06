var sizePic = document.getElementById("sizePicker");
const table = document.getElementById("pixelCanvas");


sizePic.addEventListener("submit", function makeGrid(event){
    event.preventDefault();
    var tWidth = document.getElementById("inputWidth").value;
    var tHeight = document.getElementById("inputHeight").value;
    var cell = document.createElement("td");
    var row = document.createElement("tr");
    var cell = document.createElement("td");
    table.innerHTML = "" 
        for (var x = 0 ; x < tHeight; x++){
            var row = document.createElement("tr");
            table.appendChild(row);

            for (var y =0 ; y < tWidth; y++){
                    var cell = document.createElement("td");
                    row.appendChild(cell);
                
                    row.children[y].addEventListener("click", function color(event) {
                            event.preventDefault();
                            var cColor = document.getElementById("colorPicker").value
                            if (this.style.backgroundColor){  
                                this.style.backgroundColor = null
                            }else{
                                this.style.backgroundColor = cColor
                            }
                    })
            }
        }
    
})