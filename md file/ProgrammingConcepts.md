// Name       : Seulbin Seo       
// Assignment : final_project_make_a_game       
// Course     : CS099      
// Spring 2021      


Programming Document
=====================
# *Topics*
--------------
*1) Shapes*    
--------------
 *What : 2D (arc, ellipse, circle, line, quad, etc...), Attributes (rectMode, strokeJoin, strokeWeight, etc...), vertex(), etc..   
 *Why : It can use to make button design and game design.   
 *How : circle(x, y, diameter), rect(x, y, width of the rect, height of the rect)

 *In my Code :     
 ```java
    push();
    fill(176, 196, 222, 200);
    stroke(112, 128, 144);
    strokeWeight(20);
    strokeJoin(ROUND);
    rect(width / 2, height / 2, width - 100, height - 130);
    pop();

    push();
    stroke(0);
    strokeWeight(3);
    fill(255);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size, this.size);
    pop();
 ```

*2) Colors*    
--------------
 'What' : (red, orange, yellow, green, etc...), Setting(fill, noFill, stroke, noStroke, etc..)
 'Why' : Each scene of the game can represent a more lively and colorful design.    
 'How' : fill(), noFill(), stroke(), etc..    
  >in ()        
     >(gray, [alpha]), (R_v, G_v, B_v, [alpha]), (color)      

 *In my Code :     
 ```java
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
 ```  

*3) Variables*    
--------------
 *What : It's like memory space for data. There is a risk of error using var.      
 *Why : To declare a variable.         
 *How : let A; var = a; const a;      

 *In my Code :     
 ```java
    var hero;
    let pos_X;
    let pos_Y;
    const bullet_size = 16;
    const GRAVITY = 2;
 ```  

*4)Conditional Statements*    
--------------
 *What : if, else if, else, switch, case, etc..      
 *Why : Use to perform different actions depending on the conditions.          
 *How :      
 <pre>
 <code>
 if ( condition1 ) {
    statement1
    } else if ( condition2 ) {
    statement2
    } else {
    statement3
    }
 switch (condition) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
  ...
  default:
    statement3;
}
</code>
</pre>     
 
 *In my Code :     
 ```java
if (this.x - this.width / 2 < 0) {
      this.x = this.width / 2;
    } else if (this.x + this.width / 2 > width) {
      this.x = width - this.width / 2;
    }

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

 ```

*5) Loops*    
--------------
 *What : Loops is the iteration of what is in the brace.     
 for, while, break, etc.. or .loop()         
 *Why : They can simply repeat the same code, or they can act like adding a number to each iteration.      
 *How :      
 <pre>
 <code>  
for (let i = 0; i < 3; i++) {
  alert(i);
}
let i = 0;
while (i < 3) {
  alert( i );
  i++;
}
</code>
</pre>

 *In my Code :     
 ```java
 for (let i = 0; i < bullet_count; i++) {
    BULLETS.push({ x: random(width), y: random(height) });
  }
    //Obstacles
    for (let i = 0; i < obstacles.length; ++i) {
        obstacles[i].update();
        obstacles[i].draw();
        if (obstacles[i].hp <= 0) {
        obstacles.splice(i, 1);
        }
    }
    //plus_bullet_capacity
            {
            ...
                bgm_1.stop();
                bgm_2.loop();
                sound_4.play();
            
            }
 ```

 *6) Functions*    
--------------
 *What : Function is the most basic building block in a program and is a function that can be reused many times. It also performs one task or value calculation. Also, one function should only allow one thing to do.             
 *Why : The main reason is that reuse is possible. In addition, you can infer what the function name will do and how it will work. Finally, by using functions, unnecessary sources are reduced and readability is improved.      
 *How : Write the name of the function first, the parameter in () and the body in {}.        

 *In my Code :     
 ```java
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
 ```

 *7) Classes*    
--------------
 *What : Class is a type of function that defines variables and methods to generate specific objects. Class is more flexible than Json bringing in objects.          
 *Why : Class allows code to group into objects and to reuse code.       
 *How : 
 <pre>
 <code>
 class CLASS NAME {
     constructor(x, y){
         this.x = x
         this.y = y
     }
     update() {

     }
     draw() {}

 }   
 </code>
 </pre>

 *In my Code :     
 ```java
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

    class OBSTACLE {
    constructor(images_array) {
        this.obstacle_index = round(random(0, images_array.length - 1));

        this.position_x = random(0, width);
        this.position_y = 0;

        this.width = 70;
        this.height = 70;

        this.y_velocity = this.obstacle_index + 1;

        this.image = images_array[this.obstacle_index];

        this.hp = this.obstacle_index;
    }

    update() {
        this.position_y += this.y_velocity;
        if(obstacle_index == 0){
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

 ```

*8) Arrays*    
--------------
 *What : Array is used to store multiple values in a single variable sequentially.             
 *Why : This is because array values can have multiple data values at the same time, rather than one. So, array can store multiple data, not single data. It also stores associated data together in variables, making it easier to find data.            
 *How : It is used with push(), slice(start, end), splice(), map(), etc...       
 <pre>
 <code>
 var fruits = [ 'red', 'orange', 'yellow' ];
fruits[0];		//red

//*length*
 var fruits = [ 'red', 'orange', 'yellow' ];
console.log(fruits.length);	//3  
</code>
</pre>

 *In my Code :     
 ```java
 //1
let obstacle_images = [];
let obstacles = [];
   function preload(){
         obstacle_images.push(loadImage("images/obstacle1.png"));
  obstacle_images.push(loadImage("images/obstacle2.png"));
  obstacle_images.push(loadImage("images/obstacle3.png"));
  obstacle_images.push(loadImage("images/obstacle4.png"));
  obstacle_images.push(loadImage("images/obstacle5.png"));
   }
draw(){
      for (let i = 0; i < obstacles.length; ++i) {
    obstacles[i].update();
    obstacles[i].draw();
    if (obstacles[i].hp <= 0) {
      obstacles.splice(i, 1);
    }
  }
}
//2
let BULLETS2 = [];

  for (let i = 0; i < BULLETS2.length; ++i) {
    BULLETS2[i].update();
    BULLETS2[i].draw();
  }
//3
for (let i = 0; i < bullet_count; i++) {
    BULLETS.push({ x: random(width), y: random(height) });
  }


 ```    

