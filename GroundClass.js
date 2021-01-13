class GroundClass {
    
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x, y, width, height, options);
      
        //this.image = loadImage("base.png");
        World.add(world, this.body);
      }

      getObject() {
          return this.x + ", " + this.y;
      }

      display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(5);
        fill("brown");
        rect(0,0,this.width,this.height);
        pop();
      }
}