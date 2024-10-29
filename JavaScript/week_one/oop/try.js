class Circle {
    constructor(radius) {
        this.radius = radius
        this.draw = function () {
            console.log(radius)
        };
    }
    draw1 = () => {
        console.log('========= TEST =========')
    }

}



let circle = new Circle(2)

circle.draw()
circle.draw1()