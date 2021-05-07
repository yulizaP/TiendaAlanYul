let articulos = new Array();
let numeroArticulos = 0;
let dataArticulos = new Array();

let articulosEnCarro = new Array();


class Carrito {
  constructor(articulo, meterArticulos, sacarArticulos){

    this.articulo = articulo;
    /* this.meterArticulos = meterArticulos;
    this.sacarArticulos = sacarArticulos; */

  }

  meterArticulos(articulo) {

    
    
    dataArticulos = JSON.parse(localStorage.getItem("DATA"));
    dataArticulos.forEach(element => {
      /* articulos.find(element2 =>{
        if(element2 === element.id){
          articulosEnCarro.push(element);
          console.log(articulosEnCarro);
        }
      }) */
      if(articulos.find(element2 => element2 === element.id)){
        articulosEnCarro.push(element);
        console.log(articulosEnCarro);
      }
      //console.log(element);
      
    })
    console.log(dataArticulos);
    articulos.push(articulo);
    numeroArticulos = articulos.length;
    localStorage.setItem("Articulos", JSON.stringify(articulos));
    articulos = JSON.parse(localStorage.getItem("Articulos"));
    localStorage.setItem("cantidad", numeroArticulos);
    numeroArticulos = localStorage.getItem("cantidad");

    //let productos=document.getElementById("numeroProductos");
    //productos.textContent =`${numeroArticulos}` 
    console.log(numeroArticulos)
    
    return console.log(articulos);

  }
  
  sacarArticulos(articulo) {
    articulos = articulos.filter(element => element !== articulo);
    numeroArticulos = articulos.length;
    localStorage.setItem("Articulos", JSON.stringify(articulos));
    articulos = JSON.parse(localStorage.getItem("Articulos"));
    localStorage.setItem("cantidad", numeroArticulos);
    numeroArticulos = localStorage.getItem("cantidad");

   

    return console.log(articulos);
  }
}

let Compra = new Carrito();


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
if(window.location.href.indexOf('checkout') > -1){
let productos=document.getElementById("numeroProductos");
numeroArticulos = localStorage.getItem("cantidad");
productos.textContent =`${numeroArticulos}`  
}
  


