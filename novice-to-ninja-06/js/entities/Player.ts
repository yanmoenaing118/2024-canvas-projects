import KeyControls from "../pop/controls/KeyControls";
import pop from "../pop/index";
const { Texture, TileSprite } = pop;

const texture = new Texture("res/images/bravedigger-tiles.png");

class Player extends TileSprite {
  speed: number;
  jumping: boolean;
  vel: number;
  constructor(public controls: KeyControls) {
    super(texture, 48, 48);
    this.controls = controls;
    this.speed = 210;
    this.jumping = true;
    this.vel = 0;
  }

  update(dt: number, t: number) {
    const { pos, controls, speed } = this;

    const { x } = controls;
    const xo = x * dt * speed;
    let yo = 0;

    if (!this.jumping && controls.action) {
      this.vel = -10;
      this.jumping = true;
    }

    if (this.jumping) {
      this.vel += 32 * dt;
      yo += this.vel;
    }

    if (x && !this.jumping) {
      this.frame.x = ((t / 0.1) | 0) % 2;
    }
    pos.x += xo;
    pos.y += yo;
  }
}

export default Player;
