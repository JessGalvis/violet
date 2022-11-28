//The setup function only happens once
var lu=150;
var bam=350;
function setup() {
	createCanvas(500,500); //create a 500px X 500px canvas
  r=random(255);
  g=random(255);
  b=random(255);
}

//The draw function happens over and over again
function draw() {
  background(181,214,178); //an RGB color for the canvas' background
  //circle
  strokeWeight(4);
  stroke(r,g,b); // an RGB color for the circle's border
  fill(r,g,b,127); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,60,60); // center of canvas, 20px dia
  stroke(162,138,208);
  fill(108,58,92);
  rect(lu,lu,60,60);
  stroke(247,191,180);
  fill(8,126,139);
  rect(bam,bam,60,60);

}

function mousePressed(){
  if(lu>100)
    {lu=0;}
  else{lu=lu+1;}

  if(bam<250)
    {bam=400;}
  else{bam=bam=1;}

  let d=dist(mouseX,mouseY,250,250);
  if(d<100){
    r=random(255);
    g=random(255);
    b=random(255);
  }

} 


