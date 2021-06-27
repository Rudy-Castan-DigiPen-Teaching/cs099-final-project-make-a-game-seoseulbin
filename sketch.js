// Name       : Seulbin Seo
// Assignment : final_project_make_a_game
// Course     : CS099
// Spring 2021

let obstacle_images = [];
let obstacles = [];
let BULLETS = [];
let BULLETS2 = [];
let obstacle_index;
let score_amount = 0;
let player_timer = 60;
let hero_e1;
let hero_e2;
let hero_e3;
let CurrentScreen = 0;
let game_button_x;
let game_button_y;
let button_width;
let button_height;
let how_to_button_x;
let how_to_button_y;
let spaceship1_x;
let spaceship1_y;
let spaceship2_x;
let spaceship2_y;
let spaceship3_x;
let spaceship3_y;
let space_width;
let space_height;
let plus_time_x;
let plus_time_y;
let plus_hp_x;
let plus_hp_y;
let plus_bullet_capacity_x;
let plus_bullet_capacity_y;
let item_width;
let item_height;
let credits_button_x;
let credits_button_y;
let menu_button_X;
let menu_button_Y;
let menu_button_length;
let next_button_left_X;
let next_button_right_X;
let next_button_Y;
let next_button_width;
let next_button_height;
let background_image;
let back_to_menu;
let length;
let pos_X;
let pos_Y;
var hero;
var items;
var bullets;
var moon1;
let bullet_count = 30;
let bullet_amount = 20;
const bullet_size = 16;
const gravity = 2;
let frame_set = 60;
let spawn_timer = 0;
let move_x;
let move_y;
let bgm_1;
let bgm_2;

function preload() {
  heart_image = loadImage("images/life.png");
  clock_image = loadImage("images/clock.png");
  hero_e1 = loadImage("images/spaceship2.png");
  hero_e2 = loadImage("images/spaceship1.png");
  hero_e3 = loadImage("images/spaceship3.png");
  life_image = loadImage("images/life_emg.png");
  bullet_capacity_image = loadImage("images/bullet_capacity.png");
  obstacle_images.push(loadImage("images/obstacle1.png"));
  obstacle_images.push(loadImage("images/obstacle2.png"));
  obstacle_images.push(loadImage("images/obstacle3.png"));
  obstacle_images.push(loadImage("images/obstacle4.png"));
  obstacle_images.push(loadImage("images/obstacle5.png"));
  back_to_menu = loadImage("images/home.png");
  background_image = loadImage("images/background1.png");
  item_background = loadImage("images/item_background.png");
  number_of_collisions = loadImage("images/number of collisions.png");
  how_to_1 = loadImage("images/how_to_1.png");
  how_to_2 = loadImage("images/how_to_2.png");
  how_to_3 = loadImage("images/how_to_3.png");
  bgm_1 = loadSound("music/backgroundmusic.mp3");
  bgm_2 = loadSound("music/in_game.mp3");
  sound_1 = loadSound("sound/clickSound.wav");
  sound_2 = loadSound("sound/lifeSound.wav");
  sound_3 = loadSound("sound/gunSound.wav");
  sound_4 = loadSound("sound/itemChoiceSound.wav");
  sound_5 = loadSound("sound/nextButtonSound.wav");
  sound_6 = loadSound("sound/heroChoiceSound.wav");
}

function setup() {
  createCanvas(1400, 1000);
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);
  game_button_x = 340;
  game_button_y = (height * 2) / 3 + 170;
  button_width = 290;
  button_height = 110;
  space_width = 380;
  space_height = 380;
  how_to_button_x = game_button_x + button_width + 70;
  how_to_button_y = (height * 2) / 3 + 170;
  credits_button_x = how_to_button_x + button_width + 70;
  credits_button_y = (height * 2) / 3 + 170;
  spaceship1_x = width / 5;
  spaceship1_y = (height * 2) / 3 - 30;
  spaceship2_x = spaceship1_x + 420;
  spaceship2_y = spaceship1_y;
  spaceship3_x = spaceship2_x + 420;
  spaceship3_y = spaceship1_y;
  menu_button_X = width - 70;
  menu_button_Y = 70;
  menu_button_length = 90;
  next_button_left_X = 70;
  next_button_right_X = 420;
  next_button_Y = (height * 2) / 3;
  next_button_width = width / 3 + 30;
  next_button_height = height / 4;
  pos_X = width - 150;
  pos_Y = height - 130;
  length = 100;
  plus_time_x = width / 2 - 440;
  plus_time_y = height / 2 + 170;
  plus_hp_x = width / 2 - 20;
  plus_hp_y = plus_time_y;
  plus_bullet_capacity_x = height / 2 + 600;
  plus_bullet_capacity_y = plus_time_y;
  item_width = 450;
  item_height = 550;
  length = 170;
  moon1 = new MOON(700, 100);
  for (let i = 0; i < bullet_count; i++) {
    BULLETS.push({ x: random(width), y: random(height) });
  }
  bgm_1.loop();
}

function draw() {
  background(35, 25, 90);
  switch (CurrentScreen) {
    case MAIN_MENU:
      main_menu();
      break;
    case GAME_SCREEN_1_0:
      game_screen_1_0();
      break;
    case GAME_SCREEN_1_0_1:
      game_screen_1_0_1();
      break;
    case GAME_SCREEN_1_1:
      game_screen_1_1();
      break;
    case HOW_TO_SCREEN_2_0:
      how_to_screen_2_0();
      break;
    case HOW_TO_SCREEN_2_1:
      how_to_screen_2_1();
      break;
    case HOW_TO_SCREEN_2_2:
      how_to_screen_2_2();
      break;
    case CREDIT_SCREEN_3_0:
      credit_screen_3_0();
      break;
    case FINISH_SCREEN:
      finish_screen();
      break;
  }
  switch (CurrentScreen) {
    case HOW_TO_SCREEN_2_0:
    case HOW_TO_SCREEN_2_1:
      push();
      fill(0);
      stroke("gold");
      strokeWeight(13);
      circle(width - 150, height - 150, length);
      pop();
      push();
      fill(255);
      textSize(70);
      stroke(255);
      strokeWeight(2);
      text("next", width - 150, height - 130);
      pop();
      break;
  }
}

function mousePressed() {
  switch (CurrentScreen) {
    case MAIN_MENU:
      //game
      {
        const mouse_is_within_x_range =
          mouseX >= game_button_x - button_width / 2 &&
          mouseX < game_button_x + button_width / 2;
        const mouse_is_within_y_range =
          mouseY >= game_button_y - button_height / 2 &&
          mouseY < game_button_y + button_height / 2;
        if (mouse_is_within_x_range && mouse_is_within_y_range) {
          CurrentScreen = GAME_SCREEN_1_0;
          sound_1.play();
        }
      }
      //how_to
      {
        const mouse_is_within_x_range =
          mouseX >= how_to_button_x - button_width / 2 &&
          mouseX < how_to_button_x + button_width / 2;
        const mouse_is_within_y_range =
          mouseY >= how_to_button_y - button_height / 2 &&
          mouseY < how_to_button_y + button_height / 2;
        if (mouse_is_within_x_range && mouse_is_within_y_range) {
          CurrentScreen = HOW_TO_SCREEN_2_0;
          sound_1.play();
        }
      }
      //credits
      {
        const mouse_is_within_x_range =
          mouseX >= credits_button_x - button_width / 2 &&
          mouseX < credits_button_x + button_width / 2;
        const mouse_is_within_y_range =
          mouseY >= credits_button_y - button_height / 2 &&
          mouseY < credits_button_y + button_height / 2;
        if (mouse_is_within_x_range && mouse_is_within_y_range) {
          CurrentScreen = CREDIT_SCREEN_3_0;
          sound_1.play();
        }
      }
      break;
    case GAME_SCREEN_1_0:
      {
        menu_button_clicked();
        //spaceship1
        {
          const mouse_is_within_x_range =
            mouseX >= spaceship1_x - space_width / 2 &&
            mouseX < spaceship1_x + space_width / 2;
          const mouse_is_within_y_range =
            mouseY >= spaceship1_y - space_height / 2 &&
            mouseY < spaceship1_y + space_height / 2;
          if (mouse_is_within_x_range && mouse_is_within_y_range) {
            hero = new HERO(1, width / 2, height - 150);
            CurrentScreen = GAME_SCREEN_1_0_1;
            sound_6.play();
          }
        }
        //spaceship2
        {
          const mouse_is_within_x_range =
            mouseX >= spaceship2_x - space_width / 2 &&
            mouseX < spaceship2_x + space_width / 2;
          const mouse_is_within_y_range =
            mouseY >= spaceship2_y - space_height / 2 &&
            mouseY < spaceship2_y + space_height / 2;
          if (mouse_is_within_x_range && mouse_is_within_y_range) {
            hero = new HERO(2, width / 2, height - 150);
            CurrentScreen = GAME_SCREEN_1_0_1;
            sound_6.play();
          }
        }
        //spaceship3
        {
          const mouse_is_within_x_range =
            mouseX >= spaceship3_x - space_width / 2 &&
            mouseX < spaceship3_x + space_width / 2;
          const mouse_is_within_y_range =
            mouseY >= spaceship3_y - space_height / 2 &&
            mouseY < spaceship3_y + space_height / 2;
          if (mouse_is_within_x_range && mouse_is_within_y_range) {
            hero = new HERO(3, width / 2, height - 150);
            CurrentScreen = GAME_SCREEN_1_0_1;
            sound_6.play();
          }
        }
      }
      break;

    case GAME_SCREEN_1_0:
      menu_button_clicked();
      break;
    case GAME_SCREEN_1_0_1:
      {
        menu_button_clicked();
        //plus_time
        {
          const mouse_is_within_x_range =
            mouseX >= plus_time_x - item_width / 2 &&
            mouseX < plus_time_x + item_width / 2;
          const mouse_is_within_y_range =
            mouseY >= plus_time_y - item_height / 2 &&
            mouseY < plus_time_y + item_height / 2;
          if (mouse_is_within_x_range && mouse_is_within_y_range) {
            items = new ITEM(1, width - 80, 180);
            CurrentScreen = GAME_SCREEN_1_1;
            bgm_1.stop();
            bgm_2.loop();
            sound_4.play();
          }
        }
        //plus_hp
        {
          const mouse_is_within_x_range =
            mouseX >= plus_hp_x - item_width / 2 &&
            mouseX < plus_hp_x + item_width / 2;
          const mouse_is_within_y_range =
            mouseY >= plus_hp_y - item_height / 2 &&
            mouseY < plus_hp_y + item_height / 2;
          if (mouse_is_within_x_range && mouse_is_within_y_range) {
            items = new ITEM(2, width - 80, 180);
            CurrentScreen = GAME_SCREEN_1_1;
            bgm_1.stop();
            bgm_2.loop();
            sound_4.play();
          }
        }
        //plus_bullet_capacity
        {
          const mouse_is_within_x_range =
            mouseX >= plus_bullet_capacity_x - item_width / 2 &&
            mouseX < plus_bullet_capacity_x + item_width / 2;
          const mouse_is_within_y_range =
            mouseY >= plus_bullet_capacity_y - item_height / 2 &&
            mouseY < plus_bullet_capacity_y + item_height / 2;
          if (mouse_is_within_x_range && mouse_is_within_y_range) {
            items = new ITEM(3, width - 90, 180);
            CurrentScreen = GAME_SCREEN_1_1;
            bgm_1.stop();
            bgm_2.loop();
            sound_4.play();
          }
        }
      }
      break;
    case GAME_SCREEN_1_1:
      menu_button_clicked();
      break;
    case HOW_TO_SCREEN_2_0:
      menu_button_clicked();
      if (
        sqrt(
          (mouseX - pos_X) * (mouseX - pos_X) +
            (mouseY - pos_Y) * (mouseY - pos_Y)
        ) <=
        length / 2
      ) {
        sound_5.play();
        CurrentScreen = HOW_TO_SCREEN_2_1;
      }
      break;
    case HOW_TO_SCREEN_2_1:
      menu_button_clicked();
      if (
        sqrt(
          (mouseX - pos_X) * (mouseX - pos_X) +
            (mouseY - pos_Y) * (mouseY - pos_Y)
        ) <=
        length / 2
      ) {
        sound_5.play();
        CurrentScreen = HOW_TO_SCREEN_2_2;
      }
      break;
    case HOW_TO_SCREEN_2_2:
      menu_button_clicked();
      break;
    case CREDIT_SCREEN_3_0:
      menu_button_clicked();
      break;
  }
}

function menu_button_clicked() {
  const mouse_is_within_x_range =
    mouseX >= menu_button_X - menu_button_length / 2 &&
    mouseX < menu_button_X + menu_button_length / 2;
  const mouse_is_within_y_range =
    mouseY >= menu_button_Y - menu_button_length / 2 &&
    mouseY < menu_button_Y + menu_button_length / 2;
  if (mouse_is_within_x_range && mouse_is_within_y_range) {
    CurrentScreen = MAIN_MENU;
    sound_1.play();
    bgm_2.stop();
    bgm_1.stop();
    bgm_1.loop();
  }
}

function main_menu() {
  push();
  translate(250, 270);
  rotate(0.3);
  image(hero_e1, 0, 0, 170, 320);
  pop();
  push();
  translate(width - 200, 320);
  rotate(PI - 10);
  image(hero_e3, 0, 0, 100, 200);
  pop();
  push();
  fill(255, 215, 0, 170);
  stroke(0);
  strokeWeight(3);
  triangle(width / 2, height / 4 - 100, 0, height, width, height);
  pop();
  push();
  image(hero_e2, width / 2, height / 4 - 90, 330, 280);
  pop();
  push();
  fill(0);
  strokeWeight(15);
  stroke(255);
  textStyle(BOLD);
  textSize(220);
  text("POP GAME", width / 2, height / 2 + 130);
  pop();
  push();
  fill(255);
  stroke(0);
  strokeWeight(20);
  strokeJoin(ROUND);
  rect(game_button_x, game_button_y, button_width, button_height);
  rect(how_to_button_x, how_to_button_y, button_width, button_height);
  rect(credits_button_x, credits_button_y, button_width, button_height);
  pop();
  push();
  fill(0);
  textStyle(BOLD);
  textSize(60);
  text("Game", game_button_x, game_button_y + 20);
  text("How to", how_to_button_x, how_to_button_y + 20);
  text("Credit", credits_button_x, credits_button_y + 20);
  pop();
}

function game_screen_1_0() {
  push();
  fill(176, 196, 222, 200);
  stroke(112, 128, 144);
  strokeWeight(20);
  strokeJoin(ROUND);
  rect(width / 2, height / 2, width - 100, height - 130);
  pop();
  push();
  fill(0);
  strokeWeight(8);
  stroke(0);
  textStyle(BOLDITALIC);
  textSize(120);
  text("Choose your HERO !", width / 2, 280);
  pop();
  push();
  strokeWeight(20);
  strokeJoin(ROUND);
  push();
  fill(255, 182, 193, 200);
  stroke(219, 112, 147);
  rect(spaceship1_x, spaceship1_y, space_width, space_height);
  line(
    spaceship1_x - 150,
    spaceship1_y - 90,
    spaceship1_x + 150,
    spaceship1_y - 90
  );
  pop();
  push();
  translate(spaceship1_x, spaceship1_y + 50);
  rotate(1);
  image(hero_e1, 0, 0, 150, 280);
  pop();
  push();
  fill(211, 200);
  stroke(128);
  rect(spaceship2_x, spaceship2_y, space_width, space_height);
  line(
    spaceship2_x - 150,
    spaceship2_y - 90,
    spaceship2_x + 150,
    spaceship2_y - 90
  );
  image(hero_e2, spaceship2_x, spaceship2_y + 50, 210, 200);
  pop();
  push();
  fill(175, 238, 238, 200);
  stroke(70, 130, 180);
  rect(spaceship3_x, spaceship3_y, space_width, space_height);
  line(
    spaceship3_x - 150,
    spaceship3_y - 90,
    spaceship3_x + 150,
    spaceship3_y - 90
  );
  translate(spaceship3_x, spaceship3_y + 50);
  rotate(1);
  image(hero_e3, 0, 0, 150, 280);
  pop();
  pop();
  push();
  fill(0);
  textStyle(BOLD);
  textSize(50);
  strokeWeight(3.5);
  stroke(0);
  text("SPACESHIP1", spaceship1_x, spaceship1_y - 120);
  text("SPACESHIP2", spaceship2_x, spaceship2_y - 120);
  text("SPACESHIP3", spaceship3_x, spaceship3_y - 120);
  pop();
  image(
    back_to_menu,
    menu_button_X,
    menu_button_Y,
    menu_button_length,
    menu_button_length
  );
}

function game_screen_1_0_1() {
  push();
  fill(176, 196, 222, 200);
  stroke(112, 128, 144);
  strokeWeight(20);
  strokeJoin(ROUND);
  rect(width / 2, height / 2, width - 100, height - 130);
  pop();
  push();
  fill(0);
  strokeWeight(8);
  stroke(0);
  textStyle(BOLDITALIC);
  textSize(120);
  text("Choose your ITEM !", width / 2, 280);
  pop();
  push();
  image(item_background, plus_time_x, plus_time_y, item_width, item_height);
  image(item_background, plus_hp_x, plus_hp_y, item_width, item_height);
  image(
    item_background,
    plus_bullet_capacity_x,
    plus_bullet_capacity_y,
    item_width,
    item_height
  );
  image(clock_image, width / 2 - 420, height / 2 + 220, 220, 250);
  image(life_image, width / 2, height / 2 + 220, 200, 200);
  image(bullet_capacity_image, width / 2 + 420, height / 2 + 220, 200, 180);
  pop();
  image(
    back_to_menu,
    menu_button_X,
    menu_button_Y,
    menu_button_length,
    menu_button_length
  );
}

function game_screen_1_1() {
  image(
    back_to_menu,
    menu_button_X,
    menu_button_Y,
    menu_button_length,
    menu_button_length
  );
  spawn_timer += 1 / frame_set;
  if (spawn_timer >= 0.7) {
    obstacles.push(new OBSTACLE(obstacle_images));
    spawn_timer = 0;
  }
  //bullet up to down
  for (let i = 0; i < BULLETS.length; i++) {
    const bullet = BULLETS[i];
    circle(bullet.x, bullet.y, bullet_size);
    if (bullet.y > height + bullet_size) {
      bullet.y = -bullet_size;
    } else {
      bullet.y += gravity;
    }
  }
  //InTheMoon
  moon1.draw();
  push();
  textStyle(BOLD);
  textSize(50);
  textAlign(CENTER);
  text(score_amount, width / 2 + 15, 75);
  pop();
  push();
  fill("red");
  textStyle(BOLD);
  textSize(37);
  textAlign(CENTER);
  text(round(player_timer), width / 2 + 15, 180);
  pop();
  push();
  textStyle(BOLD);
  textSize(35);
  textAlign(CENTER);
  text(bullet_amount + " /50", width / 2 + 39, 125);
  pop();
  //text
  push();
  textStyle(BOLD);
  textSize(22);
  textAlign(CENTER);
  text(" Score : ", width / 2 - 65, 70);
  text(" Bullet : ", width / 2 - 65, 120);
  text(" Time : ", width / 2 - 55, 170);
  pop();
  //player timer
  player_timer -= 1 / frame_set;
  if (player_timer <= 0) {
    CurrentScreen = FINISH_SCREEN;
  }
  //Obstacles
  for (let i = 0; i < obstacles.length; ++i) {
    obstacles[i].update();
    obstacles[i].draw();
    if (obstacles[i].hp <= 0) {
      obstacles.splice(i, 1);
    }
  }
  //bullets
  for (let i = 0; i < BULLETS2.length; ++i) {
    BULLETS2[i].update();
    BULLETS2[i].draw();
  }
  bulletsCollideWithObstacles();
  //Hero
  hero.update();
  hero.draw();
  hero.collideWithBullets(BULLETS);
  hero.collideWithObstacles(obstacles);
  //item
  items.update();
  items.draw();
  //edge
  push();
  noFill();
  stroke(0);
  strokeWeight(30);
  rect(width / 2, height / 2, width, height);
  pop();
}

function how_to_screen_2_0() {
  image(background_image, width / 2, height / 2, width * 1.6, height * 1.6);
  background(3, 70, 143, 200);
  push();
  fill(255, 239, 213);
  rect(width / 2 - 70, height / 2, width - 170, height - 100);
  pop();
  image(how_to_1, width / 2 + 40, height / 2 - 20, width - 50, height - 100);
  image(
    back_to_menu,
    menu_button_X,
    menu_button_Y,
    menu_button_length,
    menu_button_length
  );
}

function how_to_screen_2_1() {
  image(background_image, width / 2, height / 2, width * 1.6, height * 1.6);
  background(3, 70, 143, 200);
  push();
  fill(255, 239, 213);
  rect(width / 2 - 45, height / 2, width - 150, height - 100);
  pop();
  image(how_to_2, width / 2 - 40, height / 2, width - 180, height - 250);
  image(
    back_to_menu,
    menu_button_X,
    menu_button_Y,
    menu_button_length,
    menu_button_length
  );
}

function how_to_screen_2_2() {
  image(background_image, width / 2, height / 2, width * 1.6, height * 1.6);
  background(3, 70, 143, 200);
  push();
  fill(255, 239, 213);
  rect(width / 2, height / 2, width, height - 100);
  pop();
  image(how_to_3, width / 2, height / 2, width - 50, height - 100);
  image(
    back_to_menu,
    menu_button_X,
    menu_button_Y,
    menu_button_length,
    menu_button_length
  );
  image(number_of_collisions, 380, height - 120, width / 2, height / 5);
}

function credit_screen_3_0() {
  image(background_image, width / 2, height / 2, width * 1.6, height * 1.6);
  background(3, 70, 143, 170);
  push();
  fill(255);
  strokeWeight(10);
  stroke(0);
  textStyle(BOLD);
  textSize(120);
  text("made by Seulbin Seo", width / 2, height / 2);
  pop();
  image(
    back_to_menu,
    menu_button_X,
    menu_button_Y,
    menu_button_length,
    menu_button_length
  );
}

function finish_screen() {
  background(0);
  push();
  stroke(255);
  fill(0);
  strokeWeight(13);
  textStyle(BOLD);
  textSize(300);
  textAlign(CENTER);
  text("FINISH", width / 2, height / 2 - 50);
  text(score_amount, width / 2, (height * 2) / 3 + 50);
  pop();
}

function bulletsCollideWithObstacles() {
  for (let i1 = 0; i1 < BULLETS2.length; ++i1) {
    for (let i2 = 0; i2 < obstacles.length; ++i2) {
      if (
        (obstacles[i2].position_x + obstacles[i2].width / 2 >=
          BULLETS2[i1].x - BULLETS2[i1].size / 2 &&
          obstacles[i2].position_x - obstacles[i2].width / 2 <=
            BULLETS2[i1].x + BULLETS2[i1].size / 2 &&
          obstacles[i2].position_y - obstacles[i2].height / 2 >=
            BULLETS2[i1].y - BULLETS2[i1].size / 2 &&
          obstacles[i2].position_y - obstacles[i2].height / 2 <=
            BULLETS2[i1].y + BULLETS2[i1].size / 2) ||
        (obstacles[i2].position_x - obstacles[i2].width / 2 >=
          BULLETS2[i1].x - BULLETS2[i1].size / 2 &&
          obstacles[i2].position_x - obstacles[i2].width / 2 <=
            BULLETS2[i1].x + BULLETS2[i1].size / 2 &&
          obstacles[i2].position_y + obstacles[i2].height / 2 >=
            BULLETS2[i1].y - BULLETS2[i1].size / 2 &&
          obstacles[i2].position_y + obstacles[i2].height / 2 <=
            BULLETS2[i1].y + BULLETS2[i1].size / 2) ||
        (obstacles[i2].position_x + obstacles[i2].width / 2 >=
          BULLETS2[i1].x - BULLETS2[i1].size / 2 &&
          obstacles[i2].position_x + obstacles[i2].width / 2 <=
            BULLETS2[i1].x + BULLETS2[i1].size / 2 &&
          obstacles[i2].position_y - obstacles[i2].height / 2 >=
            BULLETS2[i1].y - BULLETS2[i1].size / 2 &&
          obstacles[i2].position_y - obstacles[i2].height / 2 <=
            BULLETS2[i1].y + BULLETS2[i1].size / 2) ||
        (obstacles[i2].position_x + obstacles[i2].width / 2 >=
          BULLETS2[i1].x - BULLETS2[i1].size / 2 &&
          obstacles[i2].position_x + obstacles[i2].width / 2 <=
            BULLETS2[i1].x + BULLETS2[i1].size / 2 &&
          obstacles[i2].position_y + obstacles[i2].height / 2 >=
            BULLETS2[i1].y - BULLETS2[i1].size / 2 &&
          obstacles[i2].position_y + obstacles[i2].height / 2 <=
            BULLETS2[i1].y + BULLETS2[i1].size / 2)
      ) {
        obstacles[i2].hp--;
        if (obstacles[i2].hp <= 0) {
          score_amount += 10 + obstacles[i2].obstacle_index + 1;
          obstacles.splice(i2, 1);
        }
        BULLETS2.splice(i1, 1);
        return true;
      }
    }
  }
}
