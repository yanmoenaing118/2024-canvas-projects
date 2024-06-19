const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

ctx.fillStyle = "pink";
ctx.fillRect(100,100,200,200);
ctx.strokeRect(100,100,200,200);

ctx.fillStyle = "rgba(0,0,0,0.6)";
ctx.beginPath();
ctx.arc(100,100, 50, 0, Math.PI * 0.6, false);
// ctx.fill();
ctx.stroke();
