let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];


let colorContainerEl = document.getElementById("colorContainer");
function buttonElement(){
    let noOfColors = bgColorsArray.length;
    let randomColors = Math.ceil(Math.random()*noOfColors);

    if(noOfColors === randomColors){
        randomColors= noOfColors-1;
       
    }
    let result = bgColorsArray[randomColors];
    colorContainerEl.style.backgroundColor = result;

}