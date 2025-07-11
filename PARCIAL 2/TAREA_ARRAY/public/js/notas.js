function calcularPromedio(){
    //obtener las notas separadas por comas
    let notas = document.getElementById("notas").value; 
    console.log(notas);
  
    let notasArray = notas.split(",").map(Number); 
    console.log(notasArray);

    let promedio = 0;
    document.getElementById("notasIngresadas").innerHTML = " "; //limpiar el contenido del div antes de mostrar las notas ingresadas
    for(let i = 0; i < notasArray.length; i++){
        document.getElementById("notasIngresadas").innerHTML += "Nota " +[i+1]+" : "+ notasArray[i] + "<br>"; 

    }

 
    for(let i = 0; i < notasArray.length; i++){
        promedio += notasArray[i];
    }
    promedio = promedio / notasArray.length;
    console.log("El promedio es: " + promedio);
    //mostrar el promedio en el input
    document.getElementById("promedio").value= promedio;
}