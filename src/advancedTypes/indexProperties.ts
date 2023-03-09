/*
 * If we want create the object with unknown prop names and values
 * then index properties can be used.
 * new property added must be string can't be number
 * In below example property name (index signature) is string and it's value is also string.
 * An index signature parameter type must be 'string', 'number', 'symbol', or a template literal type.
 *
 * It gives extra flexibility that which property we need and how many properties we need.
 **/
interface ErrorContainer {
  id: string;
  [prop: string]: string;
}

// interface ErrorContainer {
//   [prop: number]: string;
// }

const errorBag: ErrorContainer = {
  id: "id",
  email: "not a valid email",
  userName: "not a valid username",
  1: "as many as you want",
};
