class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
           
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        this.image=loadImage("paper.png");
        World.add(world,this.body);
    }
    display()
    {
        var paperpos=this.body.position;
       
        image(this.image,paperpos.x,paperpos.y,80,80);
      
    }
}