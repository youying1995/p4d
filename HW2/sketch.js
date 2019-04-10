function setup() 
{
  createCanvas(600, 400);
}
var R
var G
var B
var R2
var G2
var B2
R=255
G=244
B=250

R2=100
G2=28
B2=65

function draw() {
  //background//
  R=R+0.3
  G=G-0.8
  B=B-0.5
  background(R,G,B);
  
  push();
  fill(59,174,171);
  noStroke();
  rectMode(CORNERS);
  rect(0,300,599,399);
  pop();
  // character
  push();
  if(frameCount<300)
  {
  translate(frameCount,0);
  character();
  }
  
  else
  {
  translate(0,0);
  character();
  }
  
  pop();
 
  //clouds//
 push();
  cloud();
  translate(90,40)
  cloud();
  translate(160,-90)
  cloud();
  translate(190,60)
  cloud();
  pop();
  
  //mouse music//
  push();
  fill(30,100,180);
 stroke(30,100,180);
  ellipse(mouseX-20,mouseY+20,25);
  ellipse(mouseX+20,mouseY+20,25);
  line(mouseX-20,mouseY+20,mouseX-20,mouseY-20);
  line(mouseX-20,mouseY-20,mouseX+20,mouseY-20);
  line(mouseX+20,mouseY-20,mouseX+20,mouseY+20);
  pop();
  
  
 
  function character()
  {
  push();
    translate(-150,0);
  //feet//
  fill(249,208,214);
  ellipse(345,300,64,20)
  ellipse(250,300,64,20)
  //ears
  triangle(330,170,382,150,370,220);//R//
  triangle(272,170,206,140,230,220);//L//
  push();
  fill(100,28,65);
  triangle(330,180,375,165,363,200);//R 2//
  triangle(265,183,217,150,235,200);
  pop();
  //body
  ellipse(300,230,140); 
  //eye left//
  fill(255);
  ellipse(270,225,40); //eye 1
  fill(59,174,171);
  ellipse(270,225,25); //eye 2
  fill(3,70,76);
  ellipse(270,225,15); //eye 3
  //eye right//
  line(362,225,340,240)
  line(340,240,360,242)
  //mouth//
  push();
  fill(232,130,143);
  noStroke();
  rect(310,240,14,14);
  ellipse(317,255,14,14);
  pop();
  // hands//
  push();
  fill(249,208,214);
  ellipse(220,250,30,30);//L//
  ellipse(365,265,30,30);//R//
  pop();
  pop();
  }
  
   function cloud()
  {
    push();
    noStroke();
    fill(R2,G2,B2);
    R2=R2+0.5
    G2=G2+0.5
    B2=B2+0.5
    ellipse(40,80,40);
    ellipse(110,80,40);
    ellipse(75,65,40);
    rect(40,70,70,30);
    pop();
  }
 
}