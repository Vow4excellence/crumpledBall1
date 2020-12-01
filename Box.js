class Box{
    constructor(x,y,width,height){
        
        this.box = Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width = width;
        this.height = height;
        World.add(world,this.box);
    }
    display(){
        fill("green");
        rectMode(CENTER);
        rect(this.box.position.x,this.box.position.y, this.width, this.height);
    }
}