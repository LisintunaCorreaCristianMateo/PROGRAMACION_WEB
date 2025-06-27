function calcular_suma(){
    let numero1;
    let numero2;
    let suma;
    let resta;
    let multiplicacion;
    let division;

    numero1=document.getElementById('primerNumero').value;
    numero2=document.getElementById('segundoNumero').value;



    suma=parseFloat(numero1)+parseFloat(numero2);
   resta=parseFloat(numero1)-parseFloat(numero2);

    let resultado_dom;
    resultado_dom=document.getElementById('resultado');
    resultado_dom.value=suma;
    let resultado_dom2;
    resultado_dom2=document.getElementById('resultado2');
    resultado_dom2.value=resta;

    let resultado_dom3;
    resultado_dom3=document.getElementById('resultado3');
    multiplicacion=parseFloat(numero1)*parseFloat(numero2);
    resultado_dom3.value=multiplicacion;

    let resutado_dom4;
    resutado_dom4=document.getElementById('resultado4');
    division=parseFloat(numero1)/parseFloat(numero2);
    resutado_dom4.value=division;
}
//suma resta 
//multiplicacion 
//division