/**
 * 1. get input
 * 2. update
 * 3. render
 */

export default class GameLoop {
  run(update: (dt: number, t: number) => void) {
    let dt = 0;
    let last = 0;

    const loop = (ellapsed: number) => {
      requestAnimationFrame(loop);
      const time = ellapsed / 1000;
      dt = time - last;
      last = time;
      update(dt, last);
    };

    requestAnimationFrame(loop);
  }
}

/** Test Game Loop */
const loop = new GameLoop();
let lastDelta = 0;
loop.run((dt, t) => {
  //   console.log(dt);
  if (dt - lastDelta > 0.016) {
    console.log(`
    dt: ${dt}
    lastDelta: ${lastDelta}
    dt - lastDelta: ${dt - lastDelta}
    `);
  }
  lastDelta = dt;
});
