class Paper {
    constructor(x,y){
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Matter.Bodies.circle(x, y, 50, options);
        this.diameter = 50;

        World.add(world, this.body);
    }
    display(){
        //var pos = this.body.position;
        //var angle = this.body.angle;
        //push();
        //translate(pos.x, pos.y);
        //rotate(angle);
        //circleMode(CENTER);
        strokeWeight(4);
        stroke("red")
        fill(225);
        circle(200, 200, this.diameter);
        //pop();
    }
};