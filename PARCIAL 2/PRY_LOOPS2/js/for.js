let n1=0;  
let n2=0;   

function pasarNumero(arg){     
    let id_elemento=arg.id;      
    if(id_elemento=="txt_numero_inicio"){         
        n1=arg.value;         
        console.log("inicio "+n1);     
    }     
    else{         
        n2=arg.value;         
        console.log("fin "+n2)     
    }      
    
    //validar n1 siempre menor     
    n1=parseInt(n1);     
    n2=parseInt(n2);      
    
    if( n1>n2){         
        alert('El número final debe ser mayor al inicial');     
    }     
    else{
        // Limpiar el textarea antes de mostrar los nuevos números
        document.getElementById('mostrar').innerHTML = "";
        
        let i;         
        for(i=n1;i<=n2;i++){             
            console.log("los numeros son: "+i);
            // Agregar cada número al textarea
            document.getElementById('mostrar').innerHTML += "Los numeros son: " + i + "\n";
        } 
        multiplicar();     
    } 
      
} 

$(".js-range-slider").ionRangeSlider({ 

    
    type: "double",     
    min: 0,     
    max: 1000,     
    from: 200,     
    to: 500,     
    grid: true,     
    onStart: function(data) {         
        let n1 = data.from;         
        let n2 = data.to; 
        let valor =document.getElementById('numero');     
        let mult=0;   
        document.getElementById('mostrar').innerHTML = ""; 

        
        for(let i = n1; i <= n2; i++) {             
            console.log("Los numeros son: " + i);
            mult = i * valor.value;             
            document.getElementById('mostrar').innerHTML += "Los numeros son: " + i + "\n";         
        }   
        multiplicar();  
    },     
    onChange: function(data) {         
        let n1 = data.from;         
        let n2 = data.to;         
        document.getElementById('mostrar').innerHTML = "";          
        
        for(let i = n1; i <= n2; i++) {             
            console.log("Los numeros son: " + i);             
            document.getElementById('mostrar').innerHTML += "Los numeros son: " + i + "\n";         
        } 
        multiplicar();    
    } 
});
function multiplicar(){

    //let n1 = document.getElementById('txt_numero_inicio').value;
   // let n2 = document.getElementById('txt_numero_final').value;

//obtener valores del slider
let slider = $(".js-range-slider").data("ionRangeSlider");
       let n1 = slider.result.from;
    let n2 = slider.result.to;
    let valor = document.getElementById('numero').value;
   // n1 = parseInt(n1);
   // n2 = parseInt(n2);
    console.log(" para mult n1 ="+n1);
    console.log("para mult n2 ="+n2);
    document.getElementById('mostrar').innerHTML = ""; 
    for(let i = n1; i <= n2; i++)
    {             
        mult = i * valor;             
        console.log("Los numeros son: " + i + " x " + valor + " es: " + mult);             
        document.getElementById('mostrar').innerHTML += "Los numeros son: " + i + " x " + valor + " es: " + mult + "\n";         
    }
    
}