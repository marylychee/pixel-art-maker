// current color of the brush
var currentColor = "black";

// This creates the rows of pixels

function createPixels() {
    let pixels = document.getElementById('pixels');
    pixels.className = "newDiv row";
    //creates multiple divs within the board, and sets the width, height and floats left
    for (let i = 0; i <= 3093; i++) {
        let innerDivs = document.createElement('div');
        innerDivs.classList.add("pixel-squares");
        // appends divs to the parent board
        pixels.appendChild(innerDivs);
    }
    return pixels;
}

createPixels();

// add color responsive
function init() {
  let pixel = document.getElementById('pixels').children;
  let painting = false;

  window.addEventListener('mousedown', function() {
    painting = true;

  })
  window.addEventListener('mouseup', function() {
      painting = false;
  })

  for (var k = 0; k < pixel.length; k++) {
      pixel[k].addEventListener('mouseover', function() {
          if (painting) {
              this.style.backgroundColor = currentColor;
              this.style.border = currentColor;
          }
      });
      pixel[k].addEventListener('mousedown', function(e) {
        e.style.backgroundColor = currentColor;
        e.style.border = currentColor;
        e.preventDefault();
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
        innerDivs.classList.add("palette-circles");
        // appends divs to the parent board
        palette.appendChild(innerDivs);
    }
    return palette;
}

createPalette();


// COLOUR PALLETE
// creates the array of palette circles and thier colors
function initColor() {
  let paletteArr = document.getElementById("palette").children;

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

  for (let j = 0; j < paletteArr.length; j++) {
      Object.assign(paletteArr[j].style, {
          backgroundColor: colorPalette[j]
      });
      paletteArr[j].addEventListener('click', function() {
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


//Corrections to ammend still Hamid's advice...

// Paint on click  - done
// Get rid of white space - done
// Drag and Drop css - done
// Fastdrag Paint function - follow up on this.
// Reduce use of global variables and use let and const instead
// Style elements inside css, alot easier to read.
