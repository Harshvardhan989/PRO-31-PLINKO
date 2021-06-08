class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.1,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("block.png")
      this.Visiblity = 255
    }
    display(){
      if(this.body.speed < 3){
        var pos= this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y);
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         pop();
       }  
      //rect(pos.x,pos.y,this.width, this.height);
    }
}