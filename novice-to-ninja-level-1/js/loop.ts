export default function run(cb: (dt: number, time: number) => void) {
  let lastTime = 0;

  function loop(time: number) {
    const dt = time - lastTime;
    lastTime = time;

    cb(dt * 0.001, lastTime * 0.001); // to second

    requestAnimationFrame((t) => loop(t));
  }

  function firstFrame(time: number) {
    lastTime = time;
    loop(time);
  }
  requestAnimationFrame(firstFrame);
}

