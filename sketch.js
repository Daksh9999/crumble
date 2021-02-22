  const Engine=Matter.Engine;
  const World=Matter.World;
  const Bodies=Matter.Bodies; 
  var engine,world,ground,ball;

 function setup() {

  var canvas=createCanvas(400,400);
 var ground_option={
    isStatic:true
   }
  var ball_option={
    restitution:1
  }
   engine=Engine.create();
    world=engine.world;

   ground=Bodies.rectangle(50,390,50,50,ground_option);
   World.add(world,ground);
  
   ball=Bodies.circle(200,100,20,ball_option);
   World.add(world,ball);
   console.log(ball.restitution)
}

function draw() {
  background(0); 
  Engine.update(engine);
   rectMode(CENTER);
   rect(ground.position.x, ground.position.y, 600, 50);

   ellipseMode(RADIUS);
   ellipse(ball.position.x,ball.position.y,20,20);
}