class Bob{

    constructor(x, y, r){
        var paper_options={
            isStatic: false,
           restitution: 0.5,
           friction:0.5,
           density:1.2
        }
        //define all the Box properties here
        this.x=x
        this.y=y
        this.r=r
        this.body = Bodies.circle (this.x,this.y,this.r/2,paper_options);
        
        World.add(myWorld, this.body);
    }

    //define all the Box functions here
    display () {
        
        push();  ///save my settings before translation
        translate(this.body.position.x, this.body.position.y);
        ellipseMode (CENTER);
        fill("pink")
        ellipse (0, 0,this.r,this.r);
        pop(); //go back to my previous settings
        
      
        
    }
}

