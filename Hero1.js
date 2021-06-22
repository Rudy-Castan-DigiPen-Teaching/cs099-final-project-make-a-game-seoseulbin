// Name       : Seulbin Seo
// Assignment : final_project_make_a_game
// Course     : CS099
// Spring 2021

class HERO1 {
  constructor(hero1_x, hero1_y){
    this.x = hero1_x
    this.y = hero1_y
    this.width = 150
    this.height = 280
    this.direction_left = -3
    this.direction_right = 3

    this.hp = 3
  }

  update(){
    //위치이동
    if(keyIsPressed == true){
        if (keyCode == 37) {
            this.x += this.direction_left;
        }
        if (keyCode == 39) {
            this.x += this.direction_right;
        }
    }

    //범위설정
    if (this.x - this.width / 2 < 0) {
        this.x = this.width / 2;
    } else if (this.x + this.width / 2 > width) {
        this.x = width - this.width / 2;
    }
  }

  draw(){
      push()
      rectMode(CENTER)
      image(hero_e1, this.x, this.y, this.width, this.height)
      pop()
  }

  collideWithBullets(bullets_array) {
    for (let i = 0; i < bullets_array.length; ++1){
      if (
        bullets.size
        ) 
      {
        this.bullets.count++;
        bullets_array.splice(i, 1)
      }
    }
  }

  collideWithObstacles(obstacles_array) {
    for (let i = 0; i < obstacles_array.length; ++1){
      if (
        bullets.size
        ) 
      {
        this.hp--;
        obstacles_array.splice(i, 1)
      }
    }
  }
}
