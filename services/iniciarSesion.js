document.addEventListener('DOMContentLoaded',()=>{
    usuariosR()
})
let crearCuenta=document.getElementById('crearCuenta')
let seccionLogin=document.getElementById('iniciar-sesion')
let seccionRegistro=document.getElementById('crear-cuenta')
seccionLogin.style.display='block'
let usuariosR = async()=>{
    try {
        const res = await fetch('../services/usuarios.json')
        const data= await res.json()
        console.log(data)
        if(seccionLogin.style.display=='block'){
        iniciarSecion(data)
        }
    } catch (error) {
        
    }
}



crearCuenta.addEventListener('click',()=>{
    if(seccionLogin.style.display=='block'){
        seccionLogin.style.display='none'
        seccionRegistro.style.display='block'
    }
   
})



    let entrar=document.getElementById('btn-entrar')
    
    const iniciarSecion=(data)=>{
        
        entrar.addEventListener('click',()=>{
            let encontrado=false
            let usuario=document.getElementById('inputEmail')
            let contraseña=document.getElementById('inputPassword')  
            let validar= data.filter(element=>{
            let correo=element.email
               if(usuario.value===correo && contraseña.value===element.password){
                   console.log('encontrado')
                   encontrado=true
                   
               }  
           })
           if(encontrado!== true){
            console.log("El usuario o la contraseña son incorrectos")
                usuario.value=""
                contraseña.value=""
                encontrado=false            
            }
        })
    }  


/*let Entrar=document.getElementById('btn-entrar')
let usuario=document.getElementById('inputEmail').value
const iniciarSesion=()=>{
    Entrar.addEventListener('click',()=>{
        DatosApi.forEach(usuariR)=>{
           
        }
    })
}*/