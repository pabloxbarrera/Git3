const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const mensaje = document.getElementById("mensaje")
const form = document.getElementById("form")
const parrafo = document.getElementById("aviso")

form.addEventListener("submit", e =>{   
    e.preventDefault()
    let aviso = ""
    let entrar = false
    let regexEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ 
    parrafo.innerHTML = ""
    if(nombre.value.length <2){
        aviso += `El nombre no es válido. Favor de reingresar su nombre <br>`
        entrar = true
    }
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        aviso += `El mail no es valido. Favor de escribir un mail existente <br>`
        entrar = true
    }
    if(mensaje.value.length <2){
        aviso += `El mensaje es muy corto. <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = aviso   
    }else{
        parrafo.innerHTML = "Enviado"   
    }
})
