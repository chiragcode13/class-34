class Rope {
 constructor(bodyA,pointB){
     var options={
    length:100,
    stiffness:0.3,
    bodyA:bodyA,
    pointB:pointB

   }
    this.rope= Constraint.create(options)
    this.pointB=pointB
     World.add(world,this.rope)

 }
 
 display(){

 var pointA=this.rope.bodyA.position;
 var pointB=this.pointB

line(pointA.x,pointA.y,pointB.x,pointB.y);



 }

}
