import Sprite from "./Sprite";
import { Vec } from "./Types";

class Container {
  pos: Vec;
  children: Sprite[] | any[];
  constructor() {
    this.pos = { x: 0, y: 0 };
    this.children = [];
  }

  add(child: Sprite) {
    this.children.push(child);
    return child;
  }

  remove(child: Sprite) {
    this.children = this.children.filter(c => c !== child);
    return child;
  }

  map(f: any) {
    return this.children.map(f);
  }

  update(dt: number, t: number) {
    this.children = this.children.filter(child => {
      if (child.update) {
        child.update(dt, t, this);
      }
      return child.dead ? false : true;
    });
  }
}

export default Container;
