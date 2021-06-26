// Name       : Seulbin Seo
// Assignment : final_project_make_a_game
// Course     : CS099
// Spring 2021

class HERO {
  constructor(type, hero_x, hero_y) {
    this.type = type;
    this.x = hero_x;
    this.y = hero_y;
    this.hp = 3;
    this.life_x = width - 360;
    this.life_y = height - 60;
    this.life_size = 70;

    this.width = 150;
    this.front_width = 50;
    this.height = 260;
    this.flight_height = 60;
    this.direction_left = -3;
    this.direction_right = 3;

    this.image;

    this.wasShoot = false;

    switch (this.type) {
      case 1:
        this.width = 150;
        this.front_width = 50;
        this.height = 260;
        this.flight_height = 60;
        this.direction_left = -3;
        this.direction_right = 3;
        this.image = hero_e1;
        break;
      case 2:
        this.width = 210;
        this.height = 200;
        this.direction_left = -5;
        this.direction_right = 5;
        this.image = hero_e2;
        break;
      case 3:
        this.width = 150;
        this.height = 280;
        this.direction_left = -7;
        this.direction_right = 7;
        this.image = hero_e3;
        break;
    }
  }

  update() {
    //move
    if (keyIsPressed == true && keyCode == 65) {
      this.x += this.direction_left;
    }
    if (keyIsPressed == true && keyCode == 68) {
      this.x += this.direction_right;
    }
    //shoot
    if (keyIsPressed == true && keyCode == 32) {
      if (this.wasShot == false) {
        print("Shoot!");
        BULLETS2.push(new BULLET(this.x, this.y));
        print(BULLETS2.length);
      }
      this.wasShot = true;
    } else {
      this.wasShot = false;
    }
    //range
    if (this.x - this.width / 2 < 0) {
      this.x = this.width / 2;
    } else if (this.x + this.width / 2 > width) {
      this.x = width - this.width / 2;
    }

    if (this.hp <= 0) {
      CurrentScreen = FINISH_SCREEN;
    }
  }

  draw() {
    //hero_image
    let image_width = this.width;
    let image_height = this.height;
    if (this.type == 2) {
      image_width -= 15;
      image_height -= 15;
    }
    image(this.image, this.x, this.y, image_width, image_height);

    //life_image
    push();
    for (let i = 0; i < this.hp; ++i) {
      image(
        heart_image,
        this.life_x + 75 * i,
        this.life_y,
        this.life_size,
        this.life_size
      );
    }
    pop();
  }

  collideWithBullets(bullets_array) {
    for (let i = 0; i < bullets_array.length; i++) {
      if (
        (bullets_array[i].x - bullet_size / 2 >=
          this.x - this.front_width / 2 &&
          bullets_array[i].x - bullet_size / 2 <=
            this.x + this.front_width / 2 &&
          bullets_array[i].y - bullet_size / 2 >=
            this.y - this.height / 2 + 70 &&
          bullets_array[i].y - bullet_size / 2 <=
            this.y + this.height / 2 + 70) ||
        (bullets_array[i].x - bullet_size / 2 >=
          this.x - this.front_width / 2 &&
          bullets_array[i].x - bullet_size / 2 <=
            this.x + this.front_width / 2 &&
          bullets_array[i].y + bullet_size / 2 >=
            this.y - this.height / 2 + 70 &&
          bullets_array[i].y + bullet_size / 2 <=
            this.y + this.height / 2 + 70) ||
        (bullets_array[i].x + bullet_size / 2 >=
          this.x - this.front_width / 2 &&
          bullets_array[i].x + bullet_size / 2 <=
            this.x + this.front_width / 2 &&
          bullets_array[i].y - bullet_size / 2 >=
            this.y - this.height / 2 + 70 &&
          bullets_array[i].y - bullet_size / 2 <=
            this.y + this.height / 2 + 70) ||
        (bullets_array[i].x + bullet_size / 2 >=
          this.x - this.front_width / 2 &&
          bullets_array[i].x + bullet_size / 2 <=
            this.x + this.front_width / 2 &&
          bullets_array[i].y + bullet_size / 2 >=
            this.y - this.height / 2 + 70 &&
          bullets_array[i].y + bullet_size / 2 <=
            this.y + this.height / 2 + 70) ||
        (bullets_array[i].x - bullet_size / 2 >= this.x - this.width / 2 &&
          bullets_array[i].x - bullet_size / 2 <= this.x + this.width / 2 &&
          bullets_array[i].y - bullet_size / 2 >=
            this.y - this.flight_height / 2 &&
          bullets_array[i].y - bullet_size / 2 <=
            this.y + this.flight_height / 2) ||
        (bullets_array[i].x - bullet_size / 2 >= this.x - this.width / 2 &&
          bullets_array[i].x - bullet_size / 2 <= this.x + this.width / 2 &&
          bullets_array[i].y + bullet_size / 2 >=
            this.y - this.flight_height / 2 &&
          bullets_array[i].y + bullet_size / 2 <=
            this.y + this.flight_height / 2) ||
        (bullets_array[i].x + bullet_size / 2 >= this.x - this.width / 2 &&
          bullets_array[i].x + bullet_size / 2 <= this.x + this.width / 2 &&
          bullets_array[i].y - bullet_size / 2 >=
            this.y - this.flight_height / 2 &&
          bullets_array[i].y - bullet_size / 2 <=
            this.y + this.flight_height / 2) ||
        (bullets_array[i].x + bullet_size / 2 >= this.x - this.width / 2 &&
          bullets_array[i].x + bullet_size / 2 <= this.x + this.width / 2 &&
          bullets_array[i].y + bullet_size / 2 >=
            this.y - this.flight_height / 2 &&
          bullets_array[i].y + bullet_size / 2 <=
            this.y + this.flight_height / 2)
      ) {
        bullets_array.splice(i, 1);
        bullet_amount++;
        if (bullet_amount > 50) {
          bullet_amount = 50;
        }

        if (bullet_amount < 0) {
          bullet_amount = 0;
        }
        return true;
      }
    }
    return false;
  }

  collideWithObstacles(obstacles_array) {
    for (let i = 0; i < obstacles_array.length; i++) {
      if (
        (obstacles_array[i].position_x - obstacles_array[i].width / 2 >=
          this.x - this.front_width / 2 &&
          obstacles_array[i].position_x - obstacles_array[i].width / 2 <=
            this.x + this.front_width / 2 &&
          obstacles_array[i].position_y - obstacles_array[i].height / 2 >=
            this.y - this.height / 2 + 70 &&
          obstacles_array[i].position_y - obstacles_array[i].height / 2 <=
            this.y + this.height / 2 + 70) ||
        (obstacles_array[i].position_x - obstacles_array[i].width / 2 >=
          this.x - this.front_width / 2 &&
          obstacles_array[i].position_x - obstacles_array[i].width / 2 <=
            this.x + this.front_width / 2 &&
          obstacles_array[i].position_y + obstacles_array[i].height / 2 >=
            this.y - this.height / 2 + 70 &&
          obstacles_array[i].position_y + obstacles_array[i].height / 2 <=
            this.y + this.height / 2 + 70) ||
        (obstacles_array[i].position_x + obstacles_array[i].width / 2 >=
          this.x - this.front_width / 2 &&
          obstacles_array[i].position_x + obstacles_array[i].width / 2 <=
            this.x + this.front_width / 2 &&
          obstacles_array[i].position_y - obstacles_array[i].height / 2 >=
            this.y - this.height / 2 + 70 &&
          obstacles_array[i].position_y - obstacles_array[i].height / 2 <=
            this.y + this.height / 2 + 70) ||
        (obstacles_array[i].position_x + obstacles_array[i].width / 2 >=
          this.x - this.front_width / 2 &&
          obstacles_array[i].position_x + obstacles_array[i].width / 2 <=
            this.x + this.front_width / 2 &&
          obstacles_array[i].position_y + obstacles_array[i].height / 2 >=
            this.y - this.height / 2 + 70 &&
          obstacles_array[i].position_y + obstacles_array[i].height / 2 <=
            this.y + this.height / 2 + 70) ||
        (obstacles_array[i].position_x - obstacles_array[i].width / 2 >=
          this.x - this.width / 2 &&
          obstacles_array[i].position_x - obstacles_array[i].width / 2 <=
            this.x + this.width / 2 &&
          obstacles_array[i].position_y - obstacles_array[i].height / 2 >=
            this.y - this.flight_height / 2 &&
          obstacles_array[i].position_y - obstacles_array[i].height / 2 <=
            this.y + this.flight_height / 2) ||
        (obstacles_array[i].position_x - obstacles_array[i].width / 2 >=
          this.x - this.width / 2 &&
          obstacles_array[i].position_x - obstacles_array[i].width / 2 <=
            this.x + this.width / 2 &&
          obstacles_array[i].position_y + obstacles_array[i].height / 2 >=
            this.y - this.flight_height / 2 &&
          obstacles_array[i].position_y + obstacles_array[i].height / 2 <=
            this.y + this.flight_height / 2) ||
        (obstacles_array[i].position_x + obstacles_array[i].width / 2 >=
          this.x - this.width / 2 &&
          obstacles_array[i].position_x + obstacles_array[i].width / 2 <=
            this.x + this.width / 2 &&
          obstacles_array[i].position_y - obstacles_array[i].height / 2 >=
            this.y - this.flight_height / 2 &&
          obstacles_array[i].position_y - obstacles_array[i].height / 2 <=
            this.y + this.flight_height / 2) ||
        (obstacles_array[i].position_x + obstacles_array[i].width / 2 >=
          this.x - this.width / 2 &&
          obstacles_array[i].position_x + obstacles_array[i].width / 2 <=
            this.x + this.width / 2 &&
          obstacles_array[i].position_y + obstacles_array[i].height / 2 >=
            this.y - this.flight_height / 2 &&
          obstacles_array[i].position_y + obstacles_array[i].height / 2 <=
            this.y + this.flight_height / 2)
      ) {
        this.hp--;
        obstacles_array.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}
