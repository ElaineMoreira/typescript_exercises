/**utilizaçao do Enum ou enumeração */

//==============funca exemplo sem enum=================//

/**export function checkStatus(status: number) {
  switch(status) {
    case 1:
    console.log('é admin');
    break;

    case 2:
    console.log('e editor')

    case 3:
    console.log
    ('é user normal')
    break;
  }
}

checkStatus(2);*/

//=============funcao com enum===============//
// cria um enum e colocar os numeros dentro do userStatus de uma forma melhor
enum userStatus {
  Admin = 1,
  Editor = 2,
  User = 3,
}
export function checkStatus(status: number) {
  switch(status) {
    case userStatus.Admin:
    console.log('é admin');
    break;

    case userStatus.Editor:
    console.log('e editor')

    case userStatus.User:
    console.log
    ('é user normal')
    break;
  }
}

checkStatus(2);
