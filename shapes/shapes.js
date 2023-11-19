const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d")

// Properties for canvas
canvas.width = 500;
canvas.height = 500;

// Properties for stroke thing
context.lineWidth = 5;
context.strokeStyle = "blue";

// SHAPES VIA LINES BELOW

// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(0, 150);
// context.lineTo(150, 150);
// context.lineTo(150, 0);
// context.lineTo(0, 0);
// context.stroke();

// context.beginPath();
// context.moveTo(400, 400);
// context.lineTo(400, 4);
// context.lineTo(195, 150);
// context.lineTo(403, 398);
// context.stroke();

//SHAPES VIA METHODS 
//colorful shapes
function randomInteger(min, max) {
 
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// let colors = ['violet', 'green', 'red', 'yellow']; 

setInterval(function(){
  // context.fillStyle = colors[randomInteger(1, colors.length)];
  context.fillStyle = `rgb(${randomInteger(0, 255)}, ${randomInteger(0, 255)}, ${randomInteger(0, 255)})`;
  context.beginPath();
  context.rect(10, 10, 200, 100);
  context.fill();
}, 1000)



// Function for checking a current position of cursor
// canvas.addEventListener('mousemove', function (event) {
    
//     const x = event.clientX; 
//     const y = event.clientY; 
  
//     console.log(`Coordinates: x=${x}, y=${y}`); 
//   });