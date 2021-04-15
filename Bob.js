class Bob{
    constructor(x,y) {
        var options = {
            isStatic : false,
            restitution: 0.3,
            density :  1,
        }
        this.body = Bodies.circle(x,y,50,options);

        //this.radius = radius;
        World.add(world,this.body);
    }
    
    display() {
        var pos = this.body.position;
        fill("red");
        ellipse(pos.x,pos.y,50,50);
        
    }
}