const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [2048, 2048],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    let w = width * 0.1;
    let h = height * 0.1;
    let margin = width * 0.03;
    let ix = width * 0.17;
    let iy = height * 0.17;
    let space = width * 0.05;
    let x, y;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (w + margin) * i;
        y = iy + (h + margin) * j;
        context.beginPath();

        context.rect(x, y, w, h);
        context.stroke();

        if (Math.random() > 0.5) {
          context.fillStyle = "pink";

          context.beginPath();
          context.rect(x + space / 2, y + space / 2, w - space, h - space);
          context.fill();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
