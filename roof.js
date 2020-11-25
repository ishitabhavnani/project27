class Roof{
    constructor (x,y,width,height){
        var ground_options={
            isStatic:true
        }
        this.roof=Bodies.rectangle(x,y,width,height, ground_options);
        this.width=width;
        this.height=height;
        World.add(myWorld , this.roof);
    }
    displayGround(){
        rectMode(CENTER);
        rect(this.roof.position.x,this.roof.position.y,this.width,this.height)
    }
}