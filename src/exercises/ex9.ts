/** classes*/

// usamos enum
enum EyeColor {
  Black = "Pretos",
  Blue = "Azuis",
  Green = "Verdes",
  Brown = "Castanhos",
}

// cria classe
class Person {
  name: string;
  birthDate: Date;
  eyeColor: EyeColor;

  constructor(name: string, birthDate: Date, eyeColor: EyeColor) {
    // chamamos o this para pegar as propriedades
    this.name = name;
    this.birthDate = birthDate;
    this.eyeColor = eyeColor;
  }

  //chamando em funcoes
  speak(): void {
    console.log(`${this.name} está falando.`);
  };
  eat(): void {
    console.log(`${this.birthDate} está comendo.`);
  };
  walk(): void {
    console.log(`${this.eyeColor} está caminhando.`);
  };
};
// person pode ser reutilizada para criar qualquer quantidade de novos objetos Person, com suas proprias caracteríticas
 const personOne = new Person("Elaine Moreira", new Date("1989-04-27"), EyeColor.Green);
 const personTwo = new Person("Diego Diniz", new Date("1986-12-22"), EyeColor.Brown);
 console.log(personOne);
 // saida
  // Person: {
  //   "name": "Jane Doe",
  //   "birthDate": "1986-01-01T00:00:00.000Z",
  //   "eyeColor": "Castanhos"
  // }
  personOne.speak();
  //saida
  // "Jane Doe está falando."
  console.log(personTwo);
  // saída:
// Person: {
//   "name": "Jon Doe",
//   "birthDate": "1980-08-05T00:00:00.000Z",
//   "eyeColor": "Pretos"
// }
  personTwo.walk();
  // saida
  // "Jon Doe está caminhando."
