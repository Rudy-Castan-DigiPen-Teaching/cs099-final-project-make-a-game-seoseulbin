class BULLET {
  constructor(bullet_x, bullet_y) {
    this.x = bullet_x;
    this.y = bullet_y;
    this.size = 16;
    this.hp = 1;
  }

  update() {
    this.y -= GRAVITY;
  }

  draw() {
    push();
    stroke(0);
    strokeWeight(3);
    fill(255);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size, this.size);
    pop();
  }
}
