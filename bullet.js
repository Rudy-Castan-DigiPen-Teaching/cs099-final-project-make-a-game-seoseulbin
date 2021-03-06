// Name       : Seulbin Seo
// Assignment : final_project_make_a_game
// Course     : CS099
// Spring 2021

class BULLET {
  constructor(bullet_x, bullet_y) {
    this.x = bullet_x;
    this.y = bullet_y;
    this.size = 16;
    this.hp = 1;
  }

  update() {
    this.y -= gravity;
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
