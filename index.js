const canvas = document.getElementById("drawingCanvas")
const ctx = canvas.getContext("2d");

let drawing = false;
canvas.addEventListener("mousedown", () => {
    drawing = true;
});

canvas.addEventListener("mouseup", () => {
    drawing = false;
    ctx.beginPath(); // reset path
});

canvas.addEventListener("mousemove", draw);

function draw(e) {
    if(!drawing) return;
    ctx.lineWidth = 10;
    ctx.lineCap = "circle";
    ctx.strokeStyle = "green";

    ctx. lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

}