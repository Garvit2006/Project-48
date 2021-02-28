class Ball{
    constructor(x,y,r){
        var options ={
            isStatic:false
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        this.x = x;
        this.y = y;
        

        this.image = loadImage("bowlingBall1.png");
        World.add(world,this.body);
    }
    remove (){
        if(this.body.position.y <498){
            World.remove(world,this.body)
        }
    }
    display(){
        var pos = this.body.position;
       
        var angle = this.body.angle;
        push();
        translate (pos.x,pos.y);
        rotate(angle);
        imageMode (CENTER);
        image(this.image,0,0,this.r,this.r);
        pop ();      
    }
}