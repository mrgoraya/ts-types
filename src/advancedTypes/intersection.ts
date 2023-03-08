export type Admin = {
  name: string;
  privilages: string[];
};

export type Employee = {
  name: string;
  startDate: Date;
};

// intersection of takes => contains intersection of both types
type ElevatedEmployee = Admin & Employee;

export const ex1: ElevatedEmployee = {
  name: "Mehran",
  privilages: ["admin access"],
  startDate: new Date(),
};

// can be used with other types like union types
export type Combinable = string | number;
export type Numeric = number | boolean;

// intersection of both will have common type => like number
export type Universal = Combinable & Numeric;
