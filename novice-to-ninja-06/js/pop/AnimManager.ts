import { Frame } from "./Types";

class Anim {
  frame: Frame;
  curFrame: number;
  curTime: number;
  constructor(public frames: Frame, public rate: number) {
    this.frames = frames;
    this.rate = rate;
    this.reset();
  }

  reset() {
    this.frame = this.frames[0];
    this.curFrame = 0;
    this.curTime = 0;
  }

  update(dt: number) {
    const { rate, frames } = this;
    if ((this.curTime += dt) > rate) {
      this.curFrame++;
      this.frame = frames[this.curFrame % frames.length];
      this.curTime -= rate;
    }
  }
}

class AnimManager {
  anims: { [key: string]: Anim };
  running: boolean;
  frameSource: Frame;
  current: string;
  constructor(e: any = { x: 0, y: 0 }) {
    this.anims = {};
    this.running = false;
    this.frameSource = e.frame || e;
    this.current = null;
  }

  add(name: string, frames: Frame, speed: number) {
    this.anims[name] = new Anim(frames, speed);
    return this.anims[name];
  }

  update(dt: number) {
    const { current, anims, frameSource } = this;
    if (!current) {
      return;
    }
    const anim = anims[current];
    anim.update(dt);

    // Sync the tileSprite frame
    frameSource.x = anim.frame.x;
    frameSource.y = anim.frame.y;
  }

  play(anim: string) {
    const { current, anims } = this;
    if (anim === current) {
      return;
    }
    this.current = anim;
    anims[anim].reset();
  }

  stop() {
    this.current = null;
  }
}

export default AnimManager;
