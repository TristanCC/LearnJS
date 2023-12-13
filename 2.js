class Car {
    constructor(color, wheels, cylinders, size) {
        this.color = color;
        this.wheels = wheels;
        this.engine = {
            cylinders: cylinders,
            size: size
        }
    }   

    drive() {
        console.log("Vroom");
    }

    brake() {
        console.log("Screech");
    }

    paint(color) {
        this.color = color;
    }
}

const myHonda = new Car("red", 4, 4, 2.2);
console.log(
    myHonda.color,
    myHonda.wheels,
    myHonda.engine.cylinders,
    myHonda.engine.size
);

myHonda.drive();

myHonda.paint("blue")

console.log(
    myHonda.color,
    myHonda.wheels,
    myHonda.engine.cylinders,
    myHonda.engine.size
);