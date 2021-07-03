class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    display() {
        if (this.sling.bodyA) {
            var bodyA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(5);
            line(bodyA.x, bodyA.y, pointB.x, pointB.y);
        }
    }
    fly() {
        this.sling.bodyA = null;
    }
}