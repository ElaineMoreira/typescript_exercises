/** interface com extends*/

interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: Employee = {
  firstName : "John",
  lastName: "Doe",
  fullName(): string {
      return this.firstName + " " + this.lastName; // usamos o "this" para acessar as propriedades da interface
  }
}

employee.firstName = "10";

// proporciona na flexibilidade  de separacao em componentes reutilizaveis

interface Teacher extends Employee {
  firstName: string;
  lastName: string;
  subject: string;
  fullName(): string;
  sayHello(): string;
}
// criar uma variavel do tipo Teacher
let teacher: Teacher = {
  firstName: "Elaine",
  lastName: "Moreira",
  subject: "Informática",
  fullName() {
    return this.firstName + "" + this.lastName
  },
  sayHello(): string {
    return `Olá, eu sou ${this.fullName} e ensino ${this.subject}`;
  }
}
