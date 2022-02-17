class Vehicle {
  constructor(public color: string) {}

  public honk(): void {
    console.log('BEEP');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
  }
}

const vehicle = new Vehicle('Blue');
vehicle.honk();

const car = new Car(4, 'Pink');
// car.drive(); => because it's private, it can't be called like this.
car.startDrivingProcess();
car.honk();
