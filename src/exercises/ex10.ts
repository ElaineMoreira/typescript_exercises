/**Interfaces */
// unico trabalho da interface é descrever o objeto dentro dele
interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
};
//======declarando o objeto=======//
let Employee = {
  firstName: "Elaine",
  lastName: "Moreira",
  fullName(): string {
    // retorna o nome completo usando o this,
    return this.firstName + "" + this.lastName;
  }
}

Employee.firstName = 10; // da erro pois pede uma string como resposta e tem numero
Employee.firstName = "10" // da certo pois eh uma string
