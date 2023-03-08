type Admin = {
  name: string;
  privilages: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// intersection of takes => contains intersection of both types
type ElevatedEmployee = Admin & Employee;

const ex1: ElevatedEmployee = {
  name: "Mehran",
  privilages: ["admin access"],
  startDate: new Date(),
};

// can be used with other types like union types
type Combinable = string | number;
type Numeric = number | boolean;

// intersection of both will have common type => like number
type Universal = Combinable & Numeric;
