/**Type Aliases(apelidos de tipos) */

type point = {
  x: number;
  y: number;
};
// apelida o point como pt
export function printCoord(pt: point) {
  console.log("O valor da coordenada é:" + pt.x)
  console.log("O valor da coordenada é:" + pt.y)
};

printCoord({x: 100, y: 100})
// saida
// O valor da cordenada x é: 100
// O valor da cordenada y é: 100