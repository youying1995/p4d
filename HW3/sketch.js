var x1
var x2
var y2
var r
var score
var Red
var Green
var Blue

x2=100
y2=330
score=0
Red=200
Green=120
Blue=80
var jump = false


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255,251,210);
  x1=15
  r=50
   // mushroom hit cloud BG change
  
  if (x2>20 && x2<100 && y2<=100)
  {
  background(187,48,86)
  }
  
  if (x2>160 && x2<240 && y2<=140)
  {
  background(255,96,0)
  }
  
  if (x2>330 && x2<400 && y2<=90)
  {
  background(88,40,140)
  }
  
  if (x2>480 && x2<560 && y2<=90)
  {
  background(255,212,5)
  }
 
  //fence
  push();
  for (i=0;i<20;i++)
  {
    noStroke();
    fill(172,104,52);
    rectMode(CENTER);
    rect(x1,300,10,60)
    x1=x1+30
    }
  rect(300,300,600,10);
  pop();
  
  //Glass
  push();
  fill(99,117,25);
  noStroke();
  rect(0,325,600,400);
  pop();
  
  //Clouds in different color
  push();
  clouds(187,48,86);//cloud red
  translate(130,60);
  clouds(255,96,0); //cloud orange
  translate(160,-90);
  clouds(88,40,140);// cloud purple
  translate(150,50);
  clouds(255,212,5);//cloud yellow
  pop();
  
  //Mushroom can move forward or backward or jump
  mushroom();
  if(keyIsPressed && key == 'd')// move forward
  {
  x2=x2+2;
  }
  
   if(keyIsPressed && key == 'a')// move backward
  {
  x2=x2-2;
  }
  
  if(keyIsPressed && key =='w') //jump
  {
    jump = true;
  }
  
  if(jump == true)
  {
 		y2 -= 10; 
  }
  
  if( y2 <=80 )
  {
    jump = false;
  }
  
  if( jump == false)
  {
    y2 = 330;
  }
  
 //ellipse folow the mouse
  push();
  noStroke();
  fill(Red,Green,Blue)
  ellipse(mouseX,mouseY,20,20)
  pop();
  
    // mouse pressed, ellipse change color and become larger
  if (mouseIsPressed) {
  push();
  noStroke();
  fill(random(0,255),random(0,255),random(0,255));
  ellipse(mouseX, mouseY, 50, 50);
  pop();
  }

  //score
  if (x2>20 && x2<100 && y2<=100 && jump==true) // hit pink cloud, score+1
  score=score+0.5
  else if (x2>160 && x2<240 && y2<=140 ) // hit orange cloud,Score+3
  score=score+0.5  
  else if (x2>330 && x2<400 && y2<=90 && jump==true)//hit purple,score+0.5
  score=score+0.5 
  else if (x2>480 && x2<560 && y2<=90 && jump==true)//hit yellow,score+5
  score=score+5  
  text("Score: " + score, 30, 30);
  
}
  //Clouds
  function clouds(red,green,blue)
  {
  push();
  noStroke();
  fill(red,green,blue);
  ellipse(40,80,40);
  ellipse(110,80,40);
  ellipse(75,65,40);
  rect(40,70,70,30);
  pop();
  }
  //Mushroom
  function mushroom()
  {
  push();//mushroom bottom
  noStroke();
  fill(243,223,149);
  ellipse(x2,y2,r,r);
  pop();
  
  push();//mushroom top
  noStroke();
  fill(255,113,88);
  arc(x2,y2-10,r+50,r+50,3.14,0,CHORD);
  pop();
    
  push();//dots 
  noStroke();
  fill(179,99,157);
  ellipse(x2-5,y2-20,10,12);
  ellipse(x2-20,y2-38,10,12);
  ellipse(x2+20,y2-30,9,9);
  ellipse(x2+35,y2-18,10,12);
  ellipse(x2-32,y2-22,8,10);
  ellipse(x2,y2-43,12,10);
  pop();
    
  push();//eyes
  fill(0);
  ellipse(x2-10,y2,5,8);
  ellipse(x2+10,y2,5,8);
  pop();
    
  push();//mouth
  noStroke();
  fill(255,144,90);
  arc(x2,y2+10,20,20,0,3.14,CHORD);
  pop();
  }
 
 
