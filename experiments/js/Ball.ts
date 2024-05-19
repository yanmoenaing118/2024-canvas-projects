import Vec from "./Vec";
import { h, w } from "./main";

export default class Ball {
  vel: Vec;
  pos: Vec;
  constructor() {
    this.vel = new Vec(Math.random() * 1000, Math.random() * 1000);

    this.pos = new Vec(600 * Math.random(), 300 * Math.random());
  }
  update(dt: number) {
    this.pos.x += this.vel.x * dt;
    this.pos.y += this.vel.y * dt;

    if (this.pos.x > w - 5 || this.pos.x < 5) {
      this.vel.x *= -1;
      console.log('time take to reach ', this.vel)
    }
    if(this.pos.y > h - 10 || this.pos.y < 5) {
        this.vel.y *= -1;
    }
  }
  render(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.fillStyle = "rgba(0,0,0,0.3)";

    ctx.translate(this.pos.x, this.pos.y);

    ctx.beginPath();
    ctx.arc(0, 0, 1, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();
  }
}
