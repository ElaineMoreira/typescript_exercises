/**criando funcao para receber o nome  e imprimir na tela*/

export function greeter(name: string): string {
  return `Olá ${name}!`
}

/**criando funcao para mostrar na tela o nome da pessoa e sua idade*/

export function personAge(name: string, age:number) {
  return `${name} tem ${age} de idade!`
}
