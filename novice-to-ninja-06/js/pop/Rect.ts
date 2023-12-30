import { Vec } from "./Types";

class Rect {
  pos: Vec;
  style: { [key: string]: string };

  constructor(public w: number, public h: number, style = { fill: "#333" }) {
    this.pos = { x: 0, y: 0 };
    this.w = w;
    this.h = h;
    this.style = style;
  }
}

export default Rect;
