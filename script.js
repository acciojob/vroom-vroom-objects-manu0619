// Base class: Car
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  // Method to get make and model
  getMakeModel() {
    return `${this.make} ${this.model}`;
  }
}

// Subclass: SportsCar
class SportsCar extends Car {
  constructor(make, model, topSpeed) {
    super(make, model); // Call the parent class constructor
    this.topSpeed = topSpeed;
  }

  // Method to get the top speed
  getTopSpeed() {
    return this.topSpeed;
  }
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
