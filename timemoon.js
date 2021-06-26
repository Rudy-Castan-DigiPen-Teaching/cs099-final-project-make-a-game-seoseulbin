// Name       : Seulbin Seo
// Assignment : final_project_make_a_game
// Course     : CS099
// Spring 2021

class MOON {
  constructor(moon_x, moon_y) {
    this.x = moon_x;
    this.y = moon_y;
    this.diameter = 250;
  }
  update() {}

  draw() {
    push();
    stroke("gold");
    strokeWeight(7);
    fill(230, 190, 138);
    ellipse(this.x, this.y, this.diameter, (this.diameter * 9) / 10);
    pop();
  }
}
