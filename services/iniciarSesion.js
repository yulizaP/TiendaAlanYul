let crearCuenta=document.getElementById('crearCuenta')
let seccionLogin=document.getElementById('iniciar-sesion')
let seccionRegistro=document.getElementById('crear-cuenta')

crearCuenta.addEventListener('click',()=>{
    seccionLogin.style.display='none'
    seccionRegistro.style.display='block'
})

/*let Entrar=document.getElementById('btn-entrar')
let usuario=document.getElementById('inputEmail').value
const iniciarSesion=()=>{
    Entrar.addEventListener('click',()=>{
        DatosApi.forEach(usuariR)=>{
           
        }
    })
}*/