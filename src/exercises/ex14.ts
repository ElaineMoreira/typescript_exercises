class ProcessIdentity <T, U>{
  _value: T;
  _message: U;

  constructor(value: T, message: U) {
    this._value = value;
    this._message = message;
  }

  getIdentity() : T {
    console.log(this._message)
    return this._value
  };
  
};
// processor esta no arquivo 12// depois importo
let processor = new ProcessIdentity<number, string>(100, "Olá");
processor.getIdentity()
// saida
//"Olá"
// retorna o valor 100