class Ground {
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,15,5,options);
        this.visibility = 0;
        this.x=x;
        this.y=y;
        World.add(world,this.body);
    }
     display(){
        rectMode(CENTER);
        rect(this.x,this.y,5,5);
    }
}