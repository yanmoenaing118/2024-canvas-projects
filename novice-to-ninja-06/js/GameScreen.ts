import pop from "./pop/index";
const { Container } = pop;
import Player from "./entities/Player";
import Game from "./pop/Game";
import KeyControls from "./pop/controls/KeyControls";

class GameScreen extends Container {
  w: number;
  h: number;
  player: Player;
  constructor(public game: Game, public controls: KeyControls, startCb: any) {
    super();
    this.w = game.w;
    this.h = game.h;

    this.player = this.add(new Player(controls)) as Player;
    this.player.pos.x = this.w / 2 - 16;
  }

  update(dt: number, t: number) {
    super.update(dt, t);
    const { player, w, h } = this;

    // Check if hit ground
    if (player.pos.y > h / 2) {
      player.pos.y = h / 2;
      player.jumping = false;
    }

    // Screen wrap
    if (player.pos.x < -48) {
      player.pos.x = w;
    }
    if (player.pos.x > w) {
      player.pos.x = -48;
    }
  }
}

export default GameScreen;
