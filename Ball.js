class Ball {
  constructor(x,y,r){
  var options={
      friction:0.02,
      restitution:0.5,

  }
  this.r=r
    this.body = Bodies.circle(x,y,this.r/2,options)
    World.add(world,this.body);


  }
  display(){
    var pos =this.body.position;
    push()
    ellipseMode(CENTER);
    fill("brown");
    ellipse(pos.x, pos.y, this.r, this.r);
    pop()
  }

}
