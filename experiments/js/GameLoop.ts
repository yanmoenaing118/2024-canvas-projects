/**
 * 1. get input
 * 2. update
 * 3. render
 */

function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hi");
      resolve(true);
    }, 5000);
  });
}

let STEP = 1 / 60; // 60FPS
let MULTIPLIER = 5;
let MAX_FRAME = STEP * MULTIPLIER;

export default class GameLoop {
  run(update: (dt: number, t: number) => void, render: () => void) {
    let dt = 0;
    let last = 0;

    const loop = async (ellapsed: number) => {
      requestAnimationFrame(loop);
      const time = ellapsed / 1000;
      dt += Math.min(MAX_FRAME, time - last);
      last = time;
      while( dt >= STEP ) {
        update(STEP,time);
        dt -= STEP;
      }
      render();
    };

    requestAnimationFrame(loop);
  }
}
