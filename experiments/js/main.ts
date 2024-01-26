import Ball from "./Ball";
import GameLoop from "./GameLoop";
import Vec from "./Vec";

export const w = 32 * 20;
export const h = 32 * 14;
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
// console.log(w, h);

let x = 10;
let y = h / 2;
const radius = 10;
let vel = new Vec(300, 0);
let air = new Vec(32, 0);

const balls: Ball[] = [];

const ball = new Ball();

for (let i = 0; i < 200; i++) {
  balls.push(new Ball());
}

loop.timeout(
  (dt, t) => {
    balls.forEach((ball) => ball.update(dt));
  },
  () => {
    ctx.clearRect(0, 0, w, h);

    //   vel.x -= air.x * dt;

    balls.forEach((ball) => {
      ball.render(ctx);
    });
  }
);

function fibonacciRecursive(n: number) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
}

// Example: Generate the first 10 Fibonacci numbers
