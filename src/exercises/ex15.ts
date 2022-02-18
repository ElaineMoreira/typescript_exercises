// Criando uma classe com interface
interface Elaine {
  _nome: string;
  _poder: string;
  _idade: number;
  //tipar fraseInsporadora
  fraseInspiradora(frase: string): string
}
class Elaine {
  
  constructor(nome:string, poder: string, idade: number) {
    this._nome = nome;
    this._poder = poder;
    this._idade = idade
  };
  fraseInspiradora(frase: string){
    return `${this._nome} com idade de ${this._idade} fala: ${frase}: `
  };
};

const ElaineOne = new Elaine('Elaine Moreira', 'Fala demais', 32);
console.log(ElaineOne.fraseInspiradora)
//saida
// Elaine Moreira fala: "ALguma frase colocada no console.log("