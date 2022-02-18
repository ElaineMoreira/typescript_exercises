/**genericos com interfaces e classes */

export interface ProcessIdentity<T, U>{
  (value: T, message: U): T
};

 export function processIdentity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

let processor: ProcessIdentity<number, string> = processIdentity
let returnNumber = processor(100, "Olá");
// let returnString = processor("Olá", 100); /**da erro por causa da disposicao do tipo */