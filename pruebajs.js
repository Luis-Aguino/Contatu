let getData = function ()  {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
 /*para limpiar los elementos capturados*/
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    console.log(name+" "+age);
}


