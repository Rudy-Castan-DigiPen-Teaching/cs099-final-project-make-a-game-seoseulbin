// Name       : Seulbin Seo
// Assignment : final_project_make_a_game
// Course     : CS099
// Spring 2021

class OBSTACLE {
  constructor(images_array) {
    this.obstacle_index = round(random(-0.49, images_array.length - 0.51));

    this.position_x = random(0, width);
    this.position_y = 0;

    this.width = 70;
    this.height = 70;

    this.y_velocity = this.obstacle_index + 1;

    this.image = images_array[this.obstacle_index];
    this.hp = this.obstacle_index + 1;
  }

  update() {
    this.position_y += this.y_velocity;
    if (obstacle_index == 0) {
    }
  }

  draw() {
    push();
    imageMode(CENTER);
    image(
      this.image,
      this.position_x,
      this.position_y,
      this.width,
      this.height
    );
    pop();
  }
}
