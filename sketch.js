// Name       : Seulbin Seo
// Assignment : final_project_make_a_game
// Course     : CS099
// Spring 2021


let obstacle_images = []
let obstacles = []
let obstacle_index;
let score_amount = 0;
let player_timer = 60
let hero_e1
let hero_e2
let hero_e3
let CurrentScreen = 0;
let Start_button_x;
let Start_button_y;
let button_width;
let button_height;
let story_button_x;
let story_button_y;
let spaceship1_x;
let spaceship1_y;
let spaceship2_x;
let spaceship2_y;
let spaceship3_x;
let spaceship3_y;
let space_width;
let space_height;
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
let pos_X;
let pos_Y;
let length;
var hero1;
var hero2;
var hero3;
var moon1;
const bullet_count = 50;
const bullet_size = 13;
const GRAVITY = 2;
const BULLETS = [];
let frame_set = 60;
let spawn_timer = 0;

function preload()
{
    heart_image = loadImage('life.png')
    life_image = loadImage('life_emg.png')
    clock_image = loadImage('clock.png')
    hero_e1 = loadImage('spaceship2.png')
    hero_e2 = loadImage('spaceship1.png')
    hero_e3 = loadImage('spaceship3.png')

    obstacle_images.push(loadImage("obstacle1.png"))
    obstacle_images.push(loadImage("obstacle2.png"))
    obstacle_images.push(loadImage("obstacle3.png"))
    obstacle_images.push(loadImage("obstacle4.png"))
    obstacle_images.push(loadImage("obstacle5.png"))

    back_to_menu = loadImage('home.png')
    background_image = loadImage('background1.png')
}


function setup()
{
    createCanvas( 1400, 1000 );
    Start_button_x = 250
    Start_button_y = height *2/3 -10
    button_width = 270
    button_height = 110
    space_width = 380
    space_height = 380
    story_button_x = Start_button_x + button_width +70
    story_button_y = height *2/3 -10
    credits_button_x = story_button_x + button_width +70
    credits_button_y = height *2/3 -10
    spaceship1_x = 90
    spaceship1_y = 390
    spaceship2_x = 510
    spaceship2_y = 390
    spaceship3_x = 930
    spaceship3_y = 390
    menu_button_X = width -120
    menu_button_Y = 30
    menu_button_length = 90
    next_button_left_X = 70
    next_button_right_X = 420
    next_button_Y = height * 2 / 3
    next_button_width = width / 3 + 30
    next_button_height = height / 4
    pos_X = width -100
    pos_Y = height -100
    length = 100
    hero1 = new HERO1(width/2, height - height / 4 - 30); 
    hero2 = new HERO2(width/2, height - height / 4 +15);
    hero3 = new HERO3(width/2, height - height / 4 - 30);
    moon1 = new MOON(700, 100);

    for (let i = 0; i < bullet_count; i++) {
    BULLETS.push({
      x: random(width),
      y: random(height)
    });
  }
}

function draw()
{
    background( 3, 70, 143, 170);

    switch (CurrentScreen){
        case MAIN_MENU:
            push()
            fill(0)
            strokeWeight(10)
            stroke(0)
            textStyle(BOLD)
            textSize(220)
            text("POP GAME", 120, height/2)
            pop()
            push()
            fill(255)
            stroke(0)
            strokeWeight(20)
            strokeJoin(ROUND)
            rect(Start_button_x, Start_button_y, button_width, button_height)
            rect(story_button_x, story_button_y, button_width, button_height)
            rect(credits_button_x, credits_button_y, button_width, button_height)
            pop()
            push()
            fill(0)
            textStyle(BOLD)
            textSize(60)
            text("Start", Start_button_x + button_width / 4, Start_button_y + 70)
            text("Story", story_button_x + button_width / 4, story_button_y + 70)
            text("Option", credits_button_x + button_width / 7, credits_button_y + 70)
            pop()
            break;

        case START_SCREEN_1_0:


          push()
          fill(176,196,222, 200)
          stroke(112,128,144)
          strokeWeight(20)
          strokeJoin(ROUND)
          rect(50, 50, width -100, height -100)
          pop()
          push()
          fill(0)
          strokeWeight(8)
          stroke(0)
          textStyle(BOLDITALIC)
          textSize(120)
          text("Choose your HERO !", 120, 250)
          pop()
          push()
          strokeWeight(20)
          strokeJoin(ROUND)
          push()
          fill(255,182,193, 200)
          stroke(219,112,147)
          rect(spaceship1_x, spaceship1_y, space_width, space_height)
          line(spaceship1_x + 25, spaceship1_y +90, spaceship1_x + space_width -30, spaceship1_y +90)
          translate(spaceship1_x + space_width/2 +70, spaceship1_y + space_height/4)
          rotate(1)
          image(hero_e1, 0, 0, 150, 280)
          pop()
          push()
          fill(211, 200)
          stroke(128)
          rect(spaceship2_x, spaceship2_y, space_width, space_height)
          line(spaceship2_x + 25, spaceship2_y +90, spaceship2_x + space_width -30, spaceship2_y +90)
          image(hero_e2, spaceship2_x + space_width/4, spaceship2_y + space_height/3, 210, 200)
          pop()
          push()
          fill(175,238,238, 200)
          stroke(70,130,180)
          rect(spaceship3_x, spaceship3_y, space_width, space_height)
          line(spaceship3_x + 25, spaceship3_y +90, spaceship3_x + space_width -30, spaceship3_y +90)
          translate( spaceship3_x + space_width/2 +70, spaceship3_y + space_height/4)
          rotate(1)
          image(hero_e3, 0, 0, 150, 280)
          pop()
          pop()
          push()
          fill(0)
          textStyle(BOLD)
          textSize(50)
          strokeWeight(3.5)
          stroke(0)
          text("SPACESHIP1", spaceship1_x + button_width / 6, spaceship1_y + 70)
          text("SPACESHIP2", spaceship2_x + button_width / 6, spaceship2_y + 70)
          text("SPACESHIP3", spaceship3_x + button_width / 6, spaceship3_y + 70)
          pop()
         
          image(back_to_menu, menu_button_X, menu_button_Y, menu_button_length, menu_button_length)
          break;

        case START_SCREEN_1_1:

          spawn_timer += 1 / frame_set;
          if(spawn_timer >= 1.5)
          {
            obstacles.push(new OBSTACLE(obstacle_images));
            spawn_timer = 0;
          }

          image(back_to_menu, menu_button_X, menu_button_Y, menu_button_length, menu_button_length)

          // 총알
          for (let i = 0; i < BULLETS.length; i++) {
            const bullet = BULLETS[i];
        
            circle(bullet.x, bullet.y, bullet_size);
        
            if (bullet.y > height + bullet_size) bullet.y = -bullet_size;
            else bullet.y += GRAVITY;
          }


          //시간표
          moon1.draw()
          push();
          textStyle(BOLD); 
          textSize(50);
          textAlign(CENTER);
          text(score_amount, width/2, 100);
          pop();

          push();
          textStyle(BOLD); 
          textSize(37);
          textAlign(CENTER);
          text("T " +": " + round(player_timer), width/2, 180);
          pop();

          //player timer
          player_timer -= 1 / frame_set;
          if(player_timer <= 0)
          {
            CurrentScreen = FINISH_SCREEN
          }

          //장애물

          for(let i = 0; i < obstacles.length; ++i) {
            if(obstacles[i].position_y > height) {
              score_amount += obstacles[i].obstacle_index + 1;
              obstacles.splice(i,1);
            }
            obstacles[i].update();
            obstacles[i].draw();
          }

          // 선택지
          hero1.update()
          hero1.draw()

          //테두리
          push()
          noFill()
          stroke(0)
          strokeWeight(30)
          rect(0, 0, width, height)
          pop()

          break;

        case START_SCREEN_1_2:

          spawn_timer += 1 / frame_set;
          if(spawn_timer >= 1.5)
          {
            obstacles.push(new OBSTACLE(obstacle_images));
            spawn_timer = 0;
          }

          image(back_to_menu, menu_button_X, menu_button_Y, menu_button_length, menu_button_length)

          // 총알
          for (let i = 0; i < BULLETS.length; i++) {
            const bullet = BULLETS[i];
        
            circle(bullet.x, bullet.y, bullet_size);
        
            if (bullet.y > height + bullet_size) bullet.y = -bullet_size;
            else bullet.y += GRAVITY;
          }

          //시간표
          moon1.draw()
          push();
          textStyle(BOLD);
          textSize(50);
          textAlign(CENTER);
          text(score, width/2, 100);
          pop();

          //장애물
          for(let i = 0; i < obstacles.length; ++i) {
            if(obstacles[i].position_y > height) {
              score += obstacles[i].obstacle_index + 1;
              obstacles.splice(i,1);
            }
            obstacles[i].update();
            obstacles[i].draw();
          }

          // 선택지
          hero2.update()
          hero2.draw()


          //테두리
          push()
          noFill()
          stroke(0)
          strokeWeight(30)
          rect(0, 0, width, height)
          pop()

          break;

        case START_SCREEN_1_3:

          spawn_timer += 1 / frame_set;
          if(spawn_timer >= 1.5)
          {
            obstacles.push(new OBSTACLE(obstacle_images));
            spawn_timer = 0;
          }

          image(back_to_menu, menu_button_X, menu_button_Y, menu_button_length, menu_button_length)

          // 총알
          for (let i = 0; i < BULLETS.length; i++) {
            const bullet = BULLETS[i];
        
            circle(bullet.x, bullet.y, bullet_size);
        
            if (bullet.y > height + bullet_size) bullet.y = -bullet_size;
            else bullet.y += GRAVITY;
          }

          //시간표
          moon1.draw()
          push();
          textStyle(BOLD);
          textSize(50);
          textAlign(CENTER);
          text(score, width/2, 100);
          pop();


          //장애물
          for(let i = 0; i < obstacles.length; ++i) {
            if(obstacles[i].position_y > height) {
              score += obstacles[i].obstacle_index + 1;
              obstacles.splice(i,1);
            }
            obstacles[i].update();
            obstacles[i].draw();
          }


          // 선택지
          hero3.update()
          hero3.draw()

          //테두리
          push()
          noFill()
          stroke(0)
          strokeWeight(30)
          rect(0, 0, width, height)
          pop()

          break;
        
        case STORY_SCREEN_2_0:
            image(background_image, -500, 0, width *2, height *2)
            background( 3, 70, 143, 170);
            image(back_to_menu, menu_button_X, menu_button_Y, menu_button_length, menu_button_length)
            break;

        case OPTIONS_SCREEN_3_0:
            image(background_image, -500, 0, width *2, height *2)
            background( 3, 70, 143, 170);
            image(back_to_menu, menu_button_X, menu_button_Y, menu_button_length, menu_button_length)
           
            break;

        case FINISH_SCREEN:
          background (0)
          push();
          stroke(255)
          strokeWeight(13)
          textStyle(BOLD);
          textSize(300);
          textAlign(CENTER);
          text("FINISH", width/2, height/2 -50);
          text(score_amount, width/2, height *2/3 +50);
          pop();
          break;
6
        }
}


function mousePressed() {
    switch (CurrentScreen) {
      case MAIN_MENU:
      //start
      {
        const mouse_is_within_x_range = mouseX >= Start_button_x && mouseX < Start_button_x + button_width
        const mouse_is_within_y_range = mouseY >= Start_button_y && mouseY < Start_button_y + button_height
        if (mouse_is_within_x_range && mouse_is_within_y_range) {
          CurrentScreen = START_SCREEN_1_0;
        }
      }
      //story
      {
        const mouse_is_within_x_range = mouseX >= story_button_x && mouseX < story_button_x + button_width
        const mouse_is_within_y_range = mouseY >= story_button_y && mouseY < story_button_y + button_height
        if (mouse_is_within_x_range && mouse_is_within_y_range) {
          CurrentScreen = STORY_SCREEN_2_0;
        }
      }
      //credits
      {
        const mouse_is_within_x_range = mouseX >= credits_button_x && mouseX < credits_button_x + button_width
        const mouse_is_within_y_range = mouseY >= credits_button_y && mouseY < credits_button_y + button_height
        if (mouse_is_within_x_range && mouse_is_within_y_range) {
          CurrentScreen = OPTIONS_SCREEN_3_0;
        }
      }
      break;
    case START_SCREEN_1_0: {
      menu_button_clicked()
      //spaceship1
      {
        const mouse_is_within_x_range = mouseX >= spaceship1_x && mouseX < spaceship1_x + space_width
        const mouse_is_within_y_range = mouseY >= spaceship1_y && mouseY < spaceship1_y + space_height
        if (mouse_is_within_x_range && mouse_is_within_y_range) {
          CurrentScreen = START_SCREEN_1_1;
        }
      }
      //spaceship2
      {
        const mouse_is_within_x_range = mouseX >= spaceship2_x && mouseX < spaceship2_x + space_width
        const mouse_is_within_y_range = mouseY >= spaceship2_y && mouseY < spaceship2_y + space_height
        if (mouse_is_within_x_range && mouse_is_within_y_range) {
          CurrentScreen = START_SCREEN_1_2;
        }
      }
      //spaceship3
      {
        const mouse_is_within_x_range = mouseX >= spaceship3_x && mouseX < spaceship3_x + space_width
        const mouse_is_within_y_range = mouseY >= spaceship3_y && mouseY < spaceship3_y + space_height
        if (mouse_is_within_x_range && mouse_is_within_y_range) {
          CurrentScreen = START_SCREEN_1_3;
        }
      }
      }
    break;

  
     /*case STORY_SCREEN_2_0:
      menu_button_clicked()
      if(sqrt((mouseX - pos_X) * (mouseX - pos_X) + (mouseY - pos_Y) * (mouseY - pos_Y)) <= length /2){
          CurrentScreen = STORY_SCREEN_2_1
      }
      break;
    case STORY_SCREEN_2_1:
      menu_button_clicked()
      if(sqrt((mouseX - pos_X) * (mouseX - pos_X) + (mouseY - pos_Y) * (mouseY - pos_Y)) <= length /2){
          CurrentScreen = STORY_SCREEN_2_2
      }
      break;
    case STORY_SCREEN_2_2:
      menu_button_clicked()
      if(sqrt((mouseX - pos_X) * (mouseX - pos_X) + (mouseY - pos_Y) * (mouseY - pos_Y)) <= length /2){
          CurrentScreen = STORY_SCREEN_2_3
      }
      break;
    case STORY_SCREEN_2_3:
      menu_button_clicked()
      if(sqrt((mouseX - pos_X) * (mouseX - pos_X) + (mouseY - pos_Y) * (mouseY - pos_Y)) <= length /2){
          CurrentScreen = MAIN_MENU
      }
      break;*/

    case START_SCREEN_1_0:
      menu_button_clicked()
      break;
    case START_SCREEN_1_1:
      menu_button_clicked()
      break;
    case START_SCREEN_1_2:
      menu_button_clicked()
      break;
    case START_SCREEN_1_3:
      menu_button_clicked()
      break;
    case STORY_SCREEN_2_0:
      menu_button_clicked()
      break;
    case OPTIONS_SCREEN_3_0: 
      menu_button_clicked()
      break;
    }
  }

function menu_button_clicked() {
    const mouse_is_within_x_range = mouseX >= menu_button_X && mouseX < menu_button_X + menu_button_length
    const mouse_is_within_y_range = mouseY >= menu_button_Y && mouseY < menu_button_Y + menu_button_length
    if (mouse_is_within_x_range && mouse_is_within_y_range) {
      CurrentScreen = MAIN_MENU
    }
  }
