class Ball {
    constructor(x, y,r) {

        var options ={
            isStatic:true,
            restitution:1
        }
        this.r=r;
        this.body = Bodies.circle(x, y, this.r,options);       
        this.image=loadImage("ballimg.png");
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        // push();
        //translate(pos.x, pos.y);
        //rotate(angle);
        imageMode(CENTER);
        noStroke();
        image(this.image,pos.x,pos.y);
        //pop();

    }

};