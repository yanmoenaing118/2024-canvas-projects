import Sprite from "./Sprite";
import AnimManager from "./AnimManager";
import Texture from "./Texture";
import { Frame } from "./Types";

class TileSprite extends Sprite {
  tileW: number;
  tileH: number;
  frame: Frame;
  anims: AnimManager;
  constructor(public texture: Texture, w: number, h: number) {
    super(texture);
    this.tileW = w;
    this.tileH = h;
    this.frame = { x: 0, y: 0 };
    this.anims = new AnimManager(this);
  }

  update(dt: number, t: number) {
    this.anims.update(dt);
  }

  get w() {
    return this.tileW * Math.abs(this.scale.x);
  }

  get h() {
    return this.tileH * Math.abs(this.scale.y);
  }
}

export default TileSprite;
