class BaseClass {
    constructor(x, y) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:7
        }

        this.x = x;
        this.y = y;

        this.body = Bodies.rectangle(x, y, 10, 10,options);
      
        //this.image = loadImage("base.png");
        World.add(world, this.body);

        this.image = loadImage("sprites/paperball.png");
      }

      getObject() {
          return this.x + ", " + this.y;
      }

      display() {
        //push();
        //fill("red");
        //rect(this.body.position.x, this.body.position.y, this.body.width, this.body.height);
        
        image(this.image, this.body.position.x, this.body.position.y);
        //translate(this.body.position.x, this.body.position.y);
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        //pop();
      }
}