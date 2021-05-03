let articulos = new Array();
let numeroArticulos;

class Carrito {
  constructor(articulo, meterArticulos, sacarArticulos){

    this.articulo = articulo;
    /* this.meterArticulos = meterArticulos;
    this.sacarArticulos = sacarArticulos; */

  }

  meterArticulos(articulo) {
    articulos.push(articulo);
    numeroArticulos = articulos.length;
    return console.log(articulos);

  }
  
  sacarArticulos(articulo) {
    articulos = articulos.filter(element => element !== articulo);
    numeroArticulos = articulos.length;
    return console.log(articulos);
  }
}

let Compra = new Carrito();

/*Compra.meterArticulos('ROPA');
Compra.meterArticulos('ZAPATOS');
Compra.meterArticulos('TELEFONO');
Compra.sacarArticulos('ZAPATOS');*/

const agregarEnCarrito=()=>{
  
  const botones=document.getElementsByClassName('btn-compra')
    for(let i=0;i<botones.length;i++){
      botones[i].addEventListener('click',()=>{
        if(articulos.find(producto=>producto==(botones[i].id))){
            Compra.sacarArticulos(botones[i].id)
            
        }
        else{
          Compra.meterArticulos(botones[i].id)
        }
        
        //const product=datosItem.find(producto=>producto.id===(botones[i].id))
        console.log('el id es='+ botones[i].id)
      })
    }
}
/* Guardado */

//CHECKOUT
/* let productos=document.getElementById("numeroProductos");
productos.textContent= numeroArticulos; */