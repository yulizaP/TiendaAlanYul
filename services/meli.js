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
          //console.log(dataItems);

          
         mostrarProductos(dataItems);
         agregarEnCarrito(dataItems)
         mejorVendido(dataItems)
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
  datosItem.forEach((producto,index )=> {

        
        let i=index;
        //console.log(i)
        
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
        clone.id=i+1;
        clone.appendChild(imagen)
        clone.appendChild(titulo);
        clone.appendChild(descripcion)
        clone.appendChild(btnComprar)
        fragment.appendChild(clone)
        //console.log(fragment)
  });
  seccionProductos.appendChild(fragment)
  seccionProductos.removeChild(contenedorProductos);

}
  



let botonBuscar = document.getElementById('btn-buscar');
let encontrado = false;
botonBuscar.addEventListener('click',()=>{
    console.log(document.getElementById('buscador').value);
    let busqueda = dataItems.filter(element => {
      let cadena = element.title
      let texto = document.getElementById('buscador').value;
      let posicion = cadena.indexOf(texto);
      if (posicion !== -1){
        console.log(element.title);
        encontrado = true;
      }
    })
    if(encontrado == false){
      console.log('NO ENCONTRE LO QUE BUSCABA');
    }
});

//obtenr mejor vendidos 

const mejorVendido=(tendencia)=>{
  
  const itemCarrusel1=document.getElementById('img1')
  itemCarrusel1.setAttribute('src',tendencia[0].thumbnail)
  const itemCarrusel2=document.getElementById('img2')
  itemCarrusel2.setAttribute('src',tendencia[15].thumbnail)
  const itemCarrusel3=document.getElementById('img3')
  itemCarrusel3.setAttribute('src',tendencia[5].thumbnail)
 
  
}