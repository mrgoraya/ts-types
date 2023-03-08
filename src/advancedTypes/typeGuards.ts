import { Admin, Employee, ex1 } from "./intersection";

// union type
type UnknownEmployee = Employee | Admin;

// Type Guards
export const printEmployeeInfo = (emp: UnknownEmployee) => {
  console.log("Name: ", emp.name);

  // Those are type guards
  if ("privaleges" in emp) {
    console.log("Privalages: ", emp.privaleges);
  }

  if ("startDate" in emp) {
    console.log("Start Date", emp.startDate);
  }
};

// An example using Class
class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo: ", amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();

  // this does not work
  // vehicle.locadCargo()
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
};

useVehicle(v1);
useVehicle(v2);
