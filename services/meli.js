
// Nos muestra las categorias de Meli Mexico
let categories = fetch("https://api.mercadolibre.com/sites/MLM/categories")
.then(response => {
    response.json().then(
      response =>{
          //console.log(response);
      }
    );
}).catch(error => console.log(error));
;

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
let items = fetch("https://api.mercadolibre.com/sites/MLM/search?category=MLM430687")
.then(response => {
    response.json().then(
      response =>{
          console.log(response);
          dataItems = response.results;
          console.log(dataItems);

          
         mostrarProductos(dataItems);
      }
    );
}).catch(error => console.log(error));
/**const obtenerItems =async()=>{
  try {
    const res= await fetch("https://api.mercadolibre.com/sites/MLM/search?category=MLM430687")
    console.log(res)
    const datosItem =await res.json()
    console.log(datosItem)
    mostrarProductos(datosItem)
  } catch (error) {
    console.log("error")
  }
}*/

const seccionProductos=document.getElementById("seccion-productos")
const contenedorProductos=document.getElementById("contenedor-productos")
const fragment=document.createDocumentFragment()

const mostrarProductos=(datosItem)=>{  
  datosItem.forEach((producto,index )=> {
        let i=index;
        console.log(i)
        let imagen=document.createElement('img')
        imagen.setAttribute('src',producto.thumbnail)
        let titulo=document.createElement('h5')
        titulo.textContent=`$${producto.price}`
        let descripcion=document.createElement('p')
        descripcion.textContent=`${producto.title}`
        descripcion.className='descripcionProducto'
        let btnComprar=document.createElement('button')
        btnComprar.dataset.id=producto.id
        btnComprar.className='btn-compra'
        btnComprar.textContent='Comprar'
        let clone= contenedorProductos.cloneNode(true)
        clone.appendChild(imagen)
        clone.appendChild(titulo);
        clone.appendChild(descripcion)
        clone.appendChild(btnComprar)
        
        
        
        fragment.appendChild(clone)
        console.log(fragment)

        
       /* template.textContent=producto.title
        console.log(template.textContent=producto.title)
        const clone=template.cloneNode(true)
        fragment.appendChild(clone)*/

    
  });
  seccionProductos.appendChild(fragment)

}


