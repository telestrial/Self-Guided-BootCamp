interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic: Vehicle = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary() {
    return `${this.name}, ${this.year}, and ${this.broken}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary);
};

printVehicle(oldCivic);
