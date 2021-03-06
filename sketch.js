const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var engine, world;

var plinkos=[];
var particles=[];
var divisions=[];
var divisionheight = 300;

function setup() {
  createCanvas(800,400); 

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
     
  for(var i =0; i<=width; i=i+80 ){
    divisions.push(new division(i,height-divisionheight/2,10,divisionheight))
    } 

    for (var a = 40; a<=width;a=a+50){
      plinkos.push(new plinko(a,75));
      }  
  
      for (var a = 15; a<=width-10 ;a=a+50){
          plinkos.push(new plinko(a,175));
          } 
  
      for (var a = 40; a<=width;a=a+50){
      plinkos.push(new plinko(a,275));
       } 
  
   
}

function draw() {
  background(255,255,255);   
  
  Engine.update(engine);

  ground.display(); 

  
 
  for (var k=0; k<divisions.length; k=k+1){
    divisions[k].display();
    } 

    if(frameCount%60===0){  
      particles.push(new particle(random(width/2-30, width/2+30), 10,10)); 
     } 
     
    for (var j=0;j<particles.length; j=j+1) {
      particles[j].display();
    } 

    for (var e=0;e<plinkos.length; e=e+1) {
      plinkos[e].display();
    } 
    

  drawSprites();
  
    }