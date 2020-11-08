const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
var engine,world,ground,ball

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  var a={
    isStatic:true
  }
  ground=Bodies.rectangle(400,380,800,20,a);
  World.add(world,ground);
var a ={
  restitution:1
}
  ball=Bodies.circle(100,100,20,a)
  World.add(world,ball)

}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}