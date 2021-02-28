class Pin{
    constructor(x,y,r){
        var options ={
            isStatic:true,
            friction:10.0,
            
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        this.x = x;
        this.y = y;

        this.image = loadImage("bowlingPin.png");
        World.add(world,this.body);
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