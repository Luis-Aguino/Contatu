function obtenerListaUsuarios(){
    let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));

    if (listaUusarios == null) {
        listaUsuarios = [
            ["luasjaramillo@hotmail.com", "123456","1"],
            ["luasjaramillo@gmail.com", "123", "2"],
        ]
    }
    return listaUsuarios;
}
 function validarCredenciales(pEmail, pPassword){
     let listaUsuarios = obtenerListaUsuarios();
     let bAcceso = false;
     for (i=0; i< listaUsuarios.length; i++){
         if (pEmail == listaUsuarios[i] [0] && pPassword == listaUsuarios [i] [1] ) {
            bAcceso == true; 
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][0]+''+listaUsuarios[i][1]);
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][3]);
        }
        return bAcceso;
     }
 }

document.querySelector('#tnIngresar').addEventListener('click', iniciarSesion);

 function iniciarSesion(){
    let sEmail = '';
    let sPassword = '';
    let bAcceso = false;
    sEmail = document.querySelector('#txEmail').value;
    sPassword = document.querySelector('#txPassword').value;
    bAcceso = validarCredenciales(sEmail, sPassword);
    console.log(bAcceso);

  }