class Ground{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.ground = Bodies.rectangle(x,y,1600,20,options);
        this.width = 1600;
        this.height = 20;
        World.add(world,this.ground);
    }

    display(){
        push();
        fill(255,0,0);
        rectMode(CENTER);
        rect(this.ground.position.x, this.ground.position.y, this.width, this.height);
        pop();
    }
}