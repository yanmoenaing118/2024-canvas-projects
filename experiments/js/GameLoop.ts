/**
 * 1. get input
 * 2. update
 * 3. render
 */

export default class GameLoop {
  run(update: (dt: number, t: number) => void) {
    let dt = 0;
    let last = 0;
    let FPS_TIME = 1 / 60;

    const loop = (ellapsed: number) => {
      requestAnimationFrame(loop);
      const time = ellapsed / 1000;
      dt = Math.min(FPS_TIME, time - last);
      last = time;
      update(dt, last);
    };

    requestAnimationFrame(loop);
  }
}
