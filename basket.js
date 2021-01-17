class Basket{

constructor(x,y,r){

    this.body=Bodies.circle(x,y,r,{isStatic:true});
    this.r=r;
    this.image=loadImage("basket.jpg");
    this.posy=150;
    World.add(world,this.body);

}

display(){

var pos=this.body.position;

imageMode(CENTER);
image(this.image,pos.x,pos.y);

/*if(this.body.position.y==150&&basketState==="down"){

    scrollUp();
  
  }

}

scorllUp(){

this.posy=this.posy+1;
Matter.Body.setPosition(this.body,{x:pos.x,y:this.pos});

}*/



}
}