const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");
const settings = {
  dimensions: [2048, 2048],
  animate: true,
};

const sketch = ({ context, width, height }) => {
  const agents = [];
  for (let i = 0; i < 8000; i++) {
    const x = random.range(0, width);
    const y = random.range(0, height);
    agents.push(new Agent(x, y));
  }
  return ({ context, width, height }) => {
    context.fillStyle = "skyblue";
    context.fillRect(0, 0, width, height);
    agents.forEach((agent) => {
      agent.update();
      agent.draw(context);
    });
  };
};

canvasSketch(sketch, settings);
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
class Agent {
  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(random.range(-1, 1), random.range(-1, 1));
    this.radius = random.range(4, 30);
  }

  draw(context) {
    context.lineWidth = 4;
    context.fillStyle = "rgba(0,0,200,0.2)";
    context.save();
    context.translate(this.pos.x, this.pos.y);
    context.beginPath();
    context.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
    context.fill();
    context.restore();
  }

  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }
}
