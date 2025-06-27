 let numero_uno="";
 let numero_dos="";
 let operacion="";
function agregarNumero(numero){

   if(operacion===""){
         numero_uno=numero_uno+numero;
   let txt_pantalla=document.getElementById('text_pantalla');
  
  
    text_pantalla.value=numero_uno;
   }

   else{
         numero_dos=numero_dos+numero;
   let txt_pantalla=document.getElementById('text_pantalla');
  
  
    text_pantalla.value=numero_dos;
   }

 
}
function seleccionarOperacion(op){
   if(numero_uno!=""){
      operacion=op;
   }
}
function calcular(){
   let n1= parseInt(numero_uno);
   let n2= parseInt(numero_dos);
   
   let resultado=0;
  switch(operacion){
      case "+":
         resultado=n1+n2;
         break;
      case "-":
         resultado=n1-n2;
         break;
      case "*":
         resultado=n1*n2;
         break;
      case "/":
         if(n2===0){
            document.getElementById("text_pantalla").value="Indeterminado";
            return;
         }
         
             resultado=n1/n2;
         break;
         
        


  }
  document.getElementById("text_pantalla").value=resultado;
  numero_uno="";
  numero_dos="";
  resultado="";
}
function eliminar(){
   numero_uno="";
  numero_dos="";
  resultado="";
    document.getElementById("text_pantalla").value=resultado;

}
