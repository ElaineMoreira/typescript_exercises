/**funcao para adição de numeros*/

export function sum(y: number, x: number) {
  return x + y;
}

/**funcao para adição de todos os números que estão dentro de um array. Para isso, faremos uma função sum acima que será chamada dentro da função sumArray , que por sua vez utilizará o método reduce para realizar a soma dos valores.*/
export function sumArray(numbers: number[]): number {
  return numbers.reduce(sum, 0)
};
