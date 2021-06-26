// Name       : Seulbin Seo
// Assignment : final_project_make_a_game
// Course     : CS099
// Spring 2021

class ITEM {
  constructor(type, item_x, item_y) {
    this.type = type;
    this.x = item_x;
    this.y = item_y;
    this.size = 120;
    switch (this.type) {
      case 1:
        player_timer = 120;
        break;
      case 2:
        hero.hp = 5;
        break;
      case 3:
        bullet_amount = 50;
        break;
    }
  }

  update() {}

  draw() {
    switch (this.type) {
      case 1:
        image(clock_image, this.x, this.y, this.size, this.size);
        break;
      case 2:
        image(life_image, this.x, this.y, this.size, this.size);
        break;
      case 3:
        image(bullet_capacity_image, this.x, this.y, this.size, this.size);
        break;
    }
  }
}
