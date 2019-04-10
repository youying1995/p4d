
// Ying You
//IGME-609 project 1
//self- portrait
//January 29,2019

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255,243,219);
  
  noStroke();
  
    //background
  push();
  translate(-11,-3);
  fill(171,76,14);
  rectMode(CORNERS)
  rect(10,10,30,500);
  rect(50,10,70,500);
  rect(90,10,110,500);
  rect(130,10,150,200);
  rect(170,10,190,120);
  rect(210,10,230,50);
  rect(250,10,270,50);
  rect(290,10,310,50);
  rect(330,10,350,120);
  rect(370,10,390,500);
  rect(410,10,430,500);
  rect(450,10,470,500);
  rect(490,10,510,500);
  pop();
  
   // clothes
  beginShape();
  push();
  fill(215,156,108);
  vertex(0,500);
  vertex(55,375);
  vertex(190,356);
  vertex(242,445);
  vertex(290,358);
  vertex(415,375);
  vertex(500,500);
  endShape();
  pop();
  
  // hair
  push();
  fill(43,0,0);
  beginShape();
  vertex(250,20);
  vertex(220,15);
  vertex(190,25);
  vertex(160,45);
  vertex(140,72);
  vertex(120,130);
  vertex(110,180);
  vertex(100,240);
  vertex(98,300);
  vertex(100,370);
  vertex(110,450);
  vertex(140,490);
  
  vertex(130,450);
  vertex(130,410);
  vertex(145,440);
  vertex(160,495);
  vertex(190,460);
  vertex(210,420);
  vertex(230,360);
  
  vertex(220,355);
  vertex(205,345);
  vertex(190,335);
  vertex(160,290);
  vertex(150,250);
  vertex(140,220);
  
  vertex(183,140);
  vertex(200,90);
  vertex(220,65);
  vertex(240,59);
  vertex(270,59);
  vertex(300,75);
  vertex(325,130);
  vertex(338,165);
  vertex(333,210);
  vertex(310,290);
  vertex(270,340);
  
  vertex(268,360);
  vertex(255,390);
  vertex(278,370);
  vertex(258,410);
  vertex(285,440);
  vertex(260,455);
  vertex(285,461);
  vertex(330,450);
  vertex(360,428);
  
  vertex(378,370);
  vertex(380,290);
  vertex(360,150);
  vertex(330,70);
  vertex(288,23);
  vertex(265,15);
  vertex(250,20);
  endShape();
  pop();
  
  // face
  
  beginShape(); //eyebrow left
  push();
  fill(43,0,0);
  vertex(145,165);
  vertex(165,150);
  vertex(212,162);
  vertex(208,170);
  vertex(168,161);
  vertex(145,165);
  endShape();
  
  beginShape(); //eyebrow right
  vertex(252,165);
  vertex(300,150);
  vertex(320,168);
  vertex(300,162);
  vertex(258,170);
  vertex(252,165);
  endShape();
  pop();
  
  
  push();         //eyes
  stroke(43,0,0);
  fill(255);
  strokeWeight(2);
  ellipse(182,200,40,20);
  ellipse(285,200,40,20);
  pop();
  push();
  fill(43,0,0);
  ellipse(182,200,16);
  ellipse(285,200,16);
  pop();
  
  
  push();      // glasses
  strokeWeight(8);
  noFill();
  stroke(43,0,0);
  quad(135,222,150,268,202,272,225,235);
  quad(240,235,345,230,320,270,255,272);
  pop();
  

  push();          //mouth
  fill(192,96,90);
  beginShape();
  vertex(205,295);
  vertex(210,300);
  vertex(223,295);
  vertex(235,300);
  vertex(245,295);
  vertex(260,300);
  vertex(265,295);
  vertex(260,295);
  vertex(245,289);
  vertex(235,292);
  vertex(225,289);
  vertex(210,296);
  vertex(205,295);
  endShape();
  
  beginShape();
  vertex(210,302);
  vertex(260,302);
  vertex(248,318);
  vertex(235,321);
  vertex(220,318);
  vertex(210,302);
  endShape();
  pop();
  
 
  push();         //nose
  fill(192,153,139);
  arc(233,258,15,15,0,PI)
  pop();
  
  // Decoration
  push();
  fill(128,45,119);
  triangle(240,470,225,430,257,430);
  
  
}
 