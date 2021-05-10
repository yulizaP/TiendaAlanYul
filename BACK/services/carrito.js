let articulos = new Array();
let numeroArticulos = 0;
let dataArticulos = new Array();
let total = 0;
dataArticulos = JSON.parse(localStorage.getItem("DATA"));


class Carrito {
  constructor(articulo, meterArticulos, sacarArticulos){

    this.articulo = articulo;
    /* this.meterArticulos = meterArticulos;
    this.sacarArticulos = sacarArticulos; */

  }

  meterArticulos(articulo) {

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
  
  let botones=document.getElementsByClassName('btn-compra')
  
  let carta=document.getElementsByClassName('row')
  
    for(let i=0; i<botones.length ;i++){
      botones[i].addEventListener('click',(response)=>{
        console.log(response);
        if(articulos.find(producto=> producto === botones[i].id)){
           
            Compra.sacarArticulos(botones[i].id);
            
            
        }
        else{
         
       
           Compra.meterArticulos(botones[i].id);

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
let articulosEnCarro = new Array();
articulos = JSON.parse(localStorage.getItem("Articulos"));
let listaProductos= document.getElementById('lista-productos')
let contenedor=document.createElement('div')

listaProductos.appendChild(contenedor)
const fragment=document.createDocumentFragment()
console.log(articulos)
  if(dataArticulos !== null){
    dataArticulos.forEach((element,index) => {
      let i=index;
      if(articulos.find(element2 => element2 === element.id)){
        articulosEnCarro.push(element);
        let elementoLista=document.createElement('li')
        elementoLista.className='list-group-item d-flex justify-content-between lh-sm'
        let titulo=document.createElement('h6')
        titulo.className="my-0"
        let contenedorInfo=document.createElement('div')
        contenedorInfo.className='infoProducto'
        titulo.textContent=`${element.title}`
        let imagen=document.createElement('img')
        imagen.setAttribute('src',element.thumbnail)
        imagen.className='imgProducto'
        let precio=document.createElement('span')
        precio.className='text-muted'
        precio.textContent=`$${element.price}`
        contenedorInfo.appendChild(imagen)
        contenedorInfo.appendChild(titulo)
        elementoLista.appendChild(contenedorInfo)
        elementoLista.appendChild(precio)
        let clone=contenedor.cloneNode(true)
        clone.id=`articulo${index++}`
        clone.appendChild(elementoLista)
        fragment.appendChild(clone)
      }
      
    })
    listaProductos.appendChild(fragment)
     articulosEnCarro.forEach(element => {
       total = total + element.price;
     })
     console.log(total);
    let aPagar = document.getElementById('totalPagar');
    aPagar.textContent = `$${total}`;
    
    
    
  }



}

let buttonPagar = document.getElementById('finalizarCompra');
buttonPagar.addEventListener('click', () =>{
    Swal.fire('COMPRA REALIZADA!', 'Gracias, vuelve pronto!', 'success')
    numeroArticulos = 0;
    articulos = [];
    localStorage.setItem("cantidad", numeroArticulos);
    localStorage.setItem("Articulos", JSON.stringify(articulos));
})

  

