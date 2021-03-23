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
    console.log(nombre+" "+apellido+" "+email+" "+password+" "+password2);

    alert("Gracias te has registrado con exito")
}