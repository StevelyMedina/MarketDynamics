function mostrar_ocultar(id){
    //Declaración de la función y paso por parametro el selector de referencia a ocultar/mostrar
    let div = document .getElementById(id);
    //Condicional if para saber si el div esta oculto (Display: none) o si esta visible
    if (div.style.display == "none"){
        div.style.display = "flex";
    }
    else {
        div.style.display = "none";
    }
}