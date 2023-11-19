const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d")

// Properties for canvas
canvas.width = 500;
canvas.height = 500;


let current = 0;

context.fillStyle = 'black';
context.beginPath();
context.rect(0, 0, 150, 300);
context.fill();

function circle(color, x, y, fill = false) {
    context.beginPath();
    context.arc(x, y, 45, 0, Math.PI * 2, true);
    if (fill) {
        context.fillStyle = color;
        context.fill();
    } else {
        context.lineWidth = 5;
        context.strokeStyle = color;
        context.fillStyle = 'black';
        context.fill();
        context.stroke();
    }

}

function generate() {
    circle("red", 70, 50, current == 0);
    circle("yellow", 70, 150, current == 1);
    circle("green", 70, 250, current == 2);
    current++;
    if(current > 2) {
        current = 0;
    }

}
setInterval(() => {
    generate()
}, 1000);

