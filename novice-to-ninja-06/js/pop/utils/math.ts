function angle(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const angle = Math.atan2(dy, dx);

  return angle;
}

function clamp(x, min, max) {
  return Math.max(min, Math.min(x, max));
}

function distance (a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;

  return Math.sqrt(dx * dx + dy * dy);
}

function rand(min, max = min) {
  return Math.floor(randf(min, max));
}

function randf(min, max = null) {
  if (max == null) {
    max = min || 1;
    min = 0;
  }
  return Math.random() * (max - min) + min;
}

function randOneFrom(items: any) {
  return items[rand(items.length)];
}

function randOneIn(max = 2) {
  return rand(0, max) === 0;
}

export default {
  angle,
  clamp,
  distance,
  rand,
  randf,
  randOneFrom,
  randOneIn
};
