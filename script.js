let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 30);
    let col = color(random(255), random(255), random(255), 50);
    circles.push(new Circle(x, y, r, col));
  }
}

function draw() {
  background(0);
  for (let circle of circles) {
    circle.move();
    circle.display();
  }
}

class Circle {
  constructor(x, y, r, col) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.col = col;
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x > width + this.r) {
      this.x = -this.r;
    } else if (this.x < -this.r) {
      this.x = width + this.r;
    }

    if (this.y > height + this.r) {
      this.y = -this.r;
    } else if (this.y < -this.r) {
      this.y = height + this.r;
    }
  }

  display() {
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
