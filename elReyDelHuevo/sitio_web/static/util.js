
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

 if (validaNombre() && validaFono() && validaCorreo() && validaPassword()){

  var username = document.querySelector('input[placeholder="Nombre de usuario"]').value;
  var email = document.querySelector('input[placeholder="Correo"]').value;
  var password = document.querySelector('input[placeholder="Contraseña"]').value;
  var phone = document.querySelector('input[placeholder="Numero telefonico"]').value;

  // Mostrar los datos en la consola para fines de demostración
  console.log("Nombre de usuario:", username);
  console.log("Correo:", email);
  console.log("Contraseña:", password);
  console.log("Número telefónico:", phone);

 }
});


/* VALIDACIÓN FORMULARIO*/

function validaNombre(){
    var name = document.getElementById("name").value;
    var caracteres = /^[A-Za-z\s]+$/;

if(!caracteres.test(name)){
    alert("Nombre inválido, reintente.");
    return false;
}

if ((name.length < 3)){
    alert("El nombre debe contener mas de 3 letras");
    return false;

}
return true;
}

function validaFono(){
    var phone=document.getElementById("phone").value;
    var numeros = /^\+?\d+$/;


if ((phone.length < 8 || phone.length>12)){
    alert("Longitud de fono inválido.");
    return false;
}

if(!numeros.test(phone)){
    alert("Fono inválido, reintente.");
    return false;
}
return true;
}

function validaCorreo(){
    var email = document.getElementById("email").value;
    var dominio = ["gmail.com","outlook.com","yahoo.com","hotmail.com"];
    var dominioIngresado = email.split('@')[1];

if(!dominio.includes(dominioIngresado)){
    alert("Dominio de correo inválido, reintente.")
    return false
}
return true;
}

function validaPassword(){
    var password = document.getElementById("password").value;
    var contieneMayus =  /[A-Z]/.test(password);

    if(!contieneMayus){
        alert("La password debe tener almenos una letra mayúscula.");
        return false;
    }

    if(password.length<8){
        alert("La password debe tener almenos 8 caracteres.");
        return false;
    }

    return true;
}