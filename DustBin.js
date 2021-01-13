class DustBin {

    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.image = loadImage("sprites/dustbin.png");

        this.width = 100; this.height = 200;

        var options = {isStatic:true};
        this.body = Bodies.rectangle(x,y,50,100,options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();

        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("white");
        //rect(0, 0, this.width, this.height);
        image(this.image, pos.x, pos.y);

        pop();


    }


}