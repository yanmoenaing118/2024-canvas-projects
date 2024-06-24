import run from "./loop";

const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const tileSize = 32;

const src = "/assets/ams.png";
const img = new Image();
img.src = src;

const update = (dt: number, time: number) => {};

const render = (dt: number) => {
  ctx.clearRect(0, 0, width, height);
};

run((dt, time) => {
  update(dt, time);
  render(dt);
});
