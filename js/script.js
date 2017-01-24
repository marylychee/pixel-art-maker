
var currentColor = "black";


// This creates the rows of pixels
var pixels = document.getElementById('pixels');

function createPixels() {

  pixels.className = "newDiv row";

  //creates multiple divs within the board, and sets the width, height and floats left

  for (var i = 0; i <= 3093; i++) {
      var innerDivs = document.createElement('div');
      Object.assign(innerDivs.style, {float: "left", width: "10px", height: "10px", background: "white", border: "1px solid #e7e7e7"});

      // appends divs to the parent board
      pixels.appendChild(innerDivs);
    }

  return pixels;

}

createPixels();


// // add color responsive

var pixel = pixels.children;

var isMouseDown = false;

window.addEventListener('mousedown', function () {
  isMouseDown = true;
})

window.addEventListener('mouseup', function () {
  isMouseDown = false;
})

function init () {

  for (var k = 0; k < pixel.length; k++) {
    pixel[k].addEventListener('mouseenter', function (){
      if (isMouseDown) {
        this.style.backgroundColor = currentColor;
        this.style.border = currentColor;
      }

    });
  }

}

init();





// This creates the palette circles
function createPalette() {

  var palette = document.getElementById('palette');

  palette.className = "newDiv";

  //creates multiple divs within the board, and sets the width, height and floats left
  for (var i = 0; i < 20; i++) {
    var innerDivs = document.createElement('div');
    Object.assign(innerDivs.style, {float: "left", width: "3%", paddingBottom: "3%", background: "white", border: "1px solid #e7e7e7"});

    // appends divs to the parent board
    palette.appendChild(innerDivs);

  }

  return palette;

}

createPalette();




// COLOUR PALLETE

//array for each for the colours
let colorPalette = [
  'rgb(210, 57, 57)',
  'rgb(251, 107, 134)',
  'rgb(255, 61, 114)',
  'rgb(205, 34, 145)',
  'rgb(189, 0, 255)',
  'rgb(125, 46, 238)',
  'rgb(0, 71, 255)',
  'rgb(0, 67, 196)',
  'rgb(36, 117, 224)',
  'rgb(60, 215, 255)',
  'rgb(0, 255, 201)',
  'rgb(44, 238, 167)',
  'rgb(176, 254, 76)',
  'rgb(255, 252, 0)',
  'rgb(255, 253, 101)',
  'rgb(255, 203, 18)',
  'rgb(255, 171, 60)',
  'rgb(255, 122, 0)',
  'rgb(255, 255, 255)',
  'rgb(38, 38, 38)'
];




// creates the array of palette circles

var paletteArr = document.getElementById("palette").children;
console.log(paletteArr);


function initColor() {

    for (let j = 0; j < paletteArr.length; j++) {
        Object.assign(paletteArr[j].style, { backgroundColor : colorPalette[j] });
        paletteArr[j].addEventListener('click', function () {
          //This is variable holding the rgb value
          currentColor = colorPalette[j];


          //this sets the brush to the current color
          let brushie = document.getElementById('brushie');
          brushie.style.fill = currentColor;

        });
    }
    return palette;

}
initColor();
