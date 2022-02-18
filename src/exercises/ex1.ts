/** tipos primitivos*/

let yes: boolean = true
let no: boolean = false

/** criando variavel number*/

let x: number;
let y: number = 0;
let z: number = 123.456;

/** criando variavel string*/

let s: string;
let emptyString: string = "";
let abc: string = 'cde';

/** void, serve para indicar ausencia de um valor, como em uma funcao sem valor retornado*/

function sayHellowWord(): void {
  console.log("hellow word!")
};

/**usando null e undefined*/

let nullValue = null;
let undefinedValue = undefined;

/**variaveis utilizando inferencia de tipo*/

let flag = true /**o compilador ira inferir o tipo boolean*/
let numberPi = 3.14 /** o compilador ira inferir o tipo number*/
let message = 'Hellow Word!' /** o compilador ira inferir o tipo string*/
