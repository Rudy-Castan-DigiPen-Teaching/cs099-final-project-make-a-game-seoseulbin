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
  +in ()+    
     (gray, [alpha]), (R_v, G_v, B_v, [alpha]), (color)   
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
 *What   
 *Why    
 *How   
 *In my Code :     
 ```java

 ```   

*4)Conditional Statements*    
--------------
 *What   
 *Why    
 *How   
 *In my Code :     
 ```java

 ```   

 *5) Loops*    
--------------
 *What   
 *Why    
 *How   
 *In my Code :     
 ```java

 ```  

 *6) Functions*    
--------------
 *What   
 *Why    
 *How   
 *In my Code :     
 ```java

 ```  

 *7) Classes*    
--------------
 *What   
 *Why    
 *How   
 *In my Code :     
 ```java

 ``` 

  *8) Arrays*    
--------------
 *What   
 *Why    
 *How   
 *In my Code :     
 ```java

 ```     
