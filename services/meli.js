// Nos muestra las categorias de Meli Mexico
let categories = fetch("https://api.mercadolibre.com/sites/MLM/categories")
.then(response => {
    response.json().then(
      response =>{
          //console.log(response);
      }
    );
}).catch(error => console.log(error));


// Nos muestra la categoria Computacion en Meli Mexico
let categorie = fetch("https://api.mercadolibre.com/categories/MLM1648")
.then(response => {
    response.json().then(
      response =>{
          //console.log(response);
      }
    );
}).catch(error => console.log(error));

//Nos muestra los items de Computacion en Meli Mexico
let dataItems;
let items = fetch("https://api.mercadolibre.com/sites/MLM/search?category=MLM430687")
.then(response => {
    response.json().then(
      response =>{
          //console.log(response);
          dataItems = response.results;
          console.log(dataItems);
          localStorage.setItem("DATA", JSON.stringify(dataItems));
          
         mostrarProductos(dataItems);
         agregarEnCarrito(dataItems);
         mejorVendido(dataItems);
      }
    );
}).catch(error => console.log(error));

//nos muestra las tendencias en Computacion en Meli Mexico
let tendencias = fetch("https://api.mercadolibre.com/trends/MLM/MLM1648")
.then(response => {
    response.json().then(
      response =>{
          //console.log(response);
      }
    );
}).catch(error => console.log(error));

let contenedorProductos=document.createElement('div');


contenedorProductos.id='contenedor-productos'
contenedorProductos.className='row card'


const seccionProductos=document.getElementById("seccion-productos")
seccionProductos.appendChild(contenedorProductos);
contenedorProductos=document.getElementById("contenedor-productos")
const fragment=document.createDocumentFragment()


const mostrarProductos=(datosItem)=>{
  //datosItem = datosItem.slice(0, 12);  
  datosItem.forEach((producto,index )=> {

        
        let i=index;
        //console.log(producto)
        let imagen=document.createElement('img')
        imagen.setAttribute('src',producto.thumbnail)
        imagen.setAttribute('class','card-img-top')
        let titulo=document.createElement('h5')
        titulo.textContent=`$${producto.price}`
        titulo.className='card-title'
        let descripcion=document.createElement('p')
        descripcion.textContent=`${producto.title}`
        descripcion.className='descripcionProducto card-text'
        let btnComprar=document.createElement('button')
        btnComprar.id=producto.id
        btnComprar.className='btn btn-primary btn-compra'
        btnComprar.textContent='Comprar'

        let clone= contenedorProductos.cloneNode(true)
        //let clone2= contenedorBotones.cloneNode(true)
        clone.id=i++;
        clone.appendChild(imagen);
        clone.appendChild(titulo);
        clone.appendChild(descripcion);
        clone.appendChild(btnComprar);
        //clone2.appendChild(btnAgregar); */
        fragment.appendChild(clone)
        //console.log(fragment)
  });
  seccionProductos.appendChild(fragment)
  seccionProductos.removeChild(contenedorProductos);

}
  



let botonBuscar = document.getElementById('btn-buscar');

const resultadoBusqueda=document.getElementById('busqueda')


botonBuscar.addEventListener('click',()=>{
  let encontrado = false;
  resultadoBusqueda.innerHTML=""
    console.log(document.getElementById('buscador').value);
    let busqueda = dataItems.filter(element => {
      let cadena = element.title.toLowerCase()
      let texto = document.getElementById('buscador').value.toLowerCase()
      let posicion = cadena.indexOf(texto);
      if (posicion !== -1){
        seccionProductos.style.display='none'
        console.log(element.id,element.title);
        traerTarjeta(element.id)//imprime tarjeta en pagina
        encontrado = true;
      }
    }) 
    if(encontrado !== true ){
      seccionProductos.style.display='none'
      console.log('entre')
      resultadoBusqueda.innerHTML=`
      <h1>NO ENCONTRAMOS LO QUE BUSCABAS</h1>`
    }
});

//funcion para obtener la tarjeta con el producto segun la busqueda e imprimirla en la pagina
const botones=document.getElementsByClassName('btn-compra')
const carta=document.getElementsByClassName('row')
const traerTarjeta=(elemento)=>{
  for(let i=0;i<botones.length;i++){
    if(botones[i].id==elemento){
      console.log(carta[i])
      fragment.appendChild(carta[i])
    } 
  }
  resultadoBusqueda.appendChild(fragment)
}

//obtenr mejor vendidos 

const mejorVendido=(tendencia)=>{
  
  const itemCarrusel1=document.getElementById('img1')
  itemCarrusel1.setAttribute('src',tendencia[0].thumbnail)
  const textoCarrusel=document.getElementById('precio-carrusel1').textContent=`$${tendencia[0].price}`
  const itemCarrusel2=document.getElementById('img2')
  itemCarrusel2.setAttribute('src',tendencia[15].thumbnail)
  const textoCarrusel2=document.getElementById('precio-carrusel2').textContent=`$${tendencia[15].price}`
  const itemCarrusel3=document.getElementById('img3')
  itemCarrusel3.setAttribute('src',tendencia[5].thumbnail)
  const textoCarrusel3=document.getElementById('precio-carrusel3').textContent=`$${tendencia[5].price}`
 
}


/* let paginacion = document.getElementById('paginacion1');
paginacion.className = 'paginacion1'; */


/* Guardado */



