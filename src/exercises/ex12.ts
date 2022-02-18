/**genericos */
// para evitar o uso do 'any' que nao é uma boa pratica
// os genericos definem uma ou mais variaveis de tipo ou tipos que serao passados para o componente
// colocados entre < >  é um nome comumente usado para um generico mas pode renomear do que quiser

function getArray<T>(items: T[]) : T[] {
  return new Array<T>().concat(items)
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25); /**certo */
numberArray.push("This is not a number") /**erro de complilacao *, impede que items errados entre na operacao */

let stringArray = getArray<string>(["Elaine", "Diego", "Floki"]);
stringArray.push("Stark"); /**certo */

// pode passar quantas variaveis de tipo for necessario para nossos componentes genericos
function indentity<T, U>(value: T, message: U): T {
  console.log(message);
  return value
};

let returnNumber = indentity<number, string>(100, "Olá");
let returnString = indentity<string, string>("Oi", "Olá");
let returnBoolean = indentity<boolean, string>(true, "Olá");
