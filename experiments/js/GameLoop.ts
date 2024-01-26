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

const STEP = 1 / 16;
const MAX_FRAME = STEP * 2;

// console.log(MAX_FRAME);

export default class GameLoop {
  run(update: (dt: number, t: number) => void, render: () => void) {
    const init = (ellapsed: number) => {
      let dt = 0;
      let last = 0;
      // console.log('ellapsed ', ellapsed)
      const loopy = (ms: number) => {
        requestAnimationFrame(loopy);

        const t = ms / 1000; // Let's work in seconds
        dt += Math.min(t - last, MAX_FRAME);
        // console.log(t - last);
        last = t;

        while (dt >= STEP) {
          update(STEP, t);
          dt -= STEP;
        }
        render();
      };
      requestAnimationFrame(loopy);
    };

    requestAnimationFrame(init);
  }

  timeout(update: (dt: number, t: number) => void, render: () => void) {

    let dt = 0;
    let last = 0;

    const loop = ()=> {

      const t = Date.now();
      dt = t - last;
      // console.log(dt, t)
      last = t;


      update(16 / 1000, Date.now())
      render();
      setTimeout(() => {
        loop();
      }, 1/60 * 1000);
    }
    loop();
  }
}
