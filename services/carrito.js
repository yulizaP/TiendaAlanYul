let articulos = new Array();

class Carrito {
  constructor(articulo, meterArticulos, sacarArticulos){

    this.articulo = articulo;
    /* this.meterArticulos = meterArticulos;
    this.sacarArticulos = sacarArticulos; */

  }

  meterArticulos(articulo) {
    articulos.push(articulo);
    return console.log(articulos);

  }
  
  sacarArticulos(articulo) {
    articulos = articulos.filter(element => element !== articulo);
    return console.log(articulos);
  }
}

let Compra = new Carrito();

Compra.meterArticulos('ROPA');
Compra.meterArticulos('ZAPATOS');
Compra.meterArticulos('TELEFONO');

Compra.sacarArticulos('ZAPATOS');


