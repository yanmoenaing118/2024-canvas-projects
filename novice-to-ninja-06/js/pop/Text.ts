import { Style, Vec } from "./Types";

class Text {
  pos: Vec;
  text: string;
  style: Style;
  constructor(text = "", style = {}) {
    this.pos = { x: 0, y: 0 };
    this.text = text;
    this.style = style;
  }
}

export default Text;
