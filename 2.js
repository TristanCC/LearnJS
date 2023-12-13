// Object creation and instantiation

// method 1: Class object creation
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

    changeEngine(cylinders, size) {
        this.engine = {
            cylinders: cylinders, 
            size: size
        }
    }
}

const myHonda = new Car("red", 4, 4, 2.2);
console.log( "myHonda:",
    myHonda.color,
    myHonda.wheels,
    myHonda.engine.cylinders,
    myHonda.engine.size
);

myHonda.drive();

myHonda.paint("blue")

myHonda.changeEngine(6, 3.0);

console.log( "myHonda:",
    myHonda.color,
    myHonda.wheels,
    myHonda.engine.cylinders,
    myHonda.engine.size
);

// method 2: Object literal creation
car2 = {
    color: "blue",
    wheels: 4,
    engine: {
        cylinders: 4,
        size: 2.2
    },
    drive: function() {
        console.log("Vroom");
    },
    brake: function() {
        console.log("Screech");
    },
    paint: function(color) {
        this.color = color;
    }
}


// achieves the same as if the function were defined in the literal declaration
car2.assignColor = function(color) {
    this.color = color;
}

car2.assignColor("red");

console.log(car2.color);