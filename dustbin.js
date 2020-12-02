class Block{
    constructor(x,y,width,height){
      var Options={
        restitution:0,
        friction: 5.0,
        isStatic:true
      
  
      }
        this.body=Bodies.rectangle(x,y,width,height,Options);
        this.width=width;
        this.height=height;
        this.image=loadImage("dustbingreen.png");
        World.add(world,this.body);
        
    }
    display(){
        var pos=this.body.position;
        var poq=this.body.angle;
        push();
        
        image(this.image,1000,345,140,150);
        pop();
    }
  }
  
     