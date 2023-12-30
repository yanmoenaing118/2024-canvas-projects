import Texture from "./Texture";
import { Vec } from "./Types";

class Sprite {
  texture: Texture;
  pos: Vec;
  anchor: Vec;
  scale: Vec;
  pivot: Vec;
  rotation: number;
  constructor(texture: Texture) {
    this.texture = texture;
    this.pos = { x: 0, y: 0 };
    this.anchor = { x: 0, y: 0 };
    this.scale = { x: 1, y: 1 };
    this.pivot = { x: 0, y: 0 };
    this.rotation = 0;
  }
}

export default Sprite;
