let getData = function ()  {

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;
      
 /*para limpiar los elementos capturados*/
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("password2").value = "";
    
   
    if (nombre == "") {alert("el campo Nombre es obligatorio");

    } 
    if (apellido == "") {alert("el campo Apellido es obligatorio");
    
        
    }
    if (email == "") {alert("el campo email es obligatorio");
    
    }
    if (password == "") {alert("el campo password (Contraseña) es obligatorio");
    }
    if (password2 == "") {alert("por favor verifica el campo de password (Contraseña) es obligatorio")
    }
    
    if (password != password2) { alert("La contraseña deben ser iguales")
    }
    if (acepto === "") {alert("Debes aceptar los terminos y condiciones")
    
    }
     

    if (nombre, apellido, email, password, password2 != nombre.value, apellido.value, email.value, password.value, password2.value) {
        alert("Gracias te has registrado con exito ahora puedes iniciar sesión.")
    } 
    console.log(nombre+" "+apellido+" "+email+" "+password+" "+password2); 
}