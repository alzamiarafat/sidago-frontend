const HERO_BG_BASE = [7, 8, 7];

const FALLBACK = {
  left: HERO_BG_BASE,
  mid: [4, 5, 4],
  right: [0, 0, 0],
};

function parseCssColor(value) {
  const match = value?.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!match) return null;
  return [Number(match[1]), Number(match[2]), Number(match[3])];
}

function rgbToCss([r, g, b]) {
  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}

function toneForBackground(r, g, b, base = HERO_BG_BASE, mix = 0.32) {
  return [
    r * mix + base[0] * (1 - mix),
    g * mix + base[1] * (1 - mix),
    b * mix + base[2] * (1 - mix),
  ];
}

function averageRegion(data, width, height, xStart, xEnd, fallback) {
  let r = 0;
  let g = 0;
  let b = 0;
  let count = 0;

  const startX = Math.floor(width * xStart);
  const endX = Math.ceil(width * xEnd);

  for (let y = 0; y < height; y += 1) {
    for (let x = startX; x < endX; x += 1) {
      const i = (y * width + x) * 4;
      const alpha = data[i + 3];
      if (alpha < 20) continue;

      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      count += 1;
    }
  }

  if (!count) {
    return fallback;
  }

  return toneForBackground(r / count, g / count, b / count);
}

export function sampleVideoBackgroundColors(video, canvas) {
  const context = canvas.getContext("2d", { willReadFrequently: true });
  const width = 48;
  const height = 27;

  canvas.width = width;
  canvas.height = height;

  try {
    context.drawImage(video, 0, 0, width, height);
  } catch {
    return null;
  }

  const { data } = context.getImageData(0, 0, width, height);

  return {
    left: averageRegion(data, width, height, 0, 0.34, FALLBACK.left),
    mid: averageRegion(data, width, height, 0.34, 0.68, FALLBACK.mid),
    right: averageRegion(data, width, height, 0.68, 1, FALLBACK.right),
  };
}

export function colorsToCss(colors) {
  return {
    left: rgbToCss(colors.left),
    mid: rgbToCss(colors.mid),
    right: rgbToCss(colors.right),
  };
}

export function lerpColor(current, target, amount = 0.18) {
  if (!current) return target;
  return current.map((value, index) => value + (target[index] - value) * amount);
}

export function cssColorToRgb(value) {
  return parseCssColor(value);
}
