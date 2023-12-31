import GameLoop from "./GameLoop";
import Vec from "./Vec";

const w = 32 * 20;
const h = 32 * 14;
const canvas = document.getElementById("canvas") as HTMLCanvasElement;

canvas.style.border = "1px solid gray";

const dpi = window.devicePixelRatio;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
canvas.width = w * dpi;
canvas.height = h * dpi;
ctx.scale(dpi, dpi);
canvas.style.width = `${w}px`;
canvas.style.height = `${h}px`;

const loop = new GameLoop();

let x = 10;
let y = h / 2;
const radius = 10;
let vel = new Vec(100, 0);

loop.run((dt, t) => {
  ctx.clearRect(0, 0, w, h);

  x += vel.x * dt;

  if (x > w - radius || x < radius) {
    vel.x *= -1;
  }

  if(dt > 32) {
    console.log(dt, x);
  }

  ctx.save();
  ctx.fillStyle = "pink";

  ctx.translate(x, y);

  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();
});
