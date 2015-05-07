$(document).ready(cargarTodo);


function cargarTodo() {

    $('#btnEje4Calcular').click(Ejercicicio4);
    
    $('#btnEje5').click(Ejercicio5);
}



/*-----------------------------Ejercicio 4--------------------------*/
function Ejercicicio4() {
    var base = parseInt($('#txtbase').val());
    var altura = parseInt($('#txtaltura').val());
    var resultado = 0;
    resultado = CalcularArea(base, altura);

    $('#divEjer4').html(resultado);


}

function CalcularArea(base, altura) {
    var resultado = 0;
    
    if(isNaN(base) || isNaN(altura)){
         resultado = -1;
    }else{
       resultado = (base * altura) / 2;  
    }
   
    return resultado;
}

/*-----------------------------Fin Ejercicio 4----------------------*/

/*-----------------------------Ejercicio 5--------------------------*/
function Ejercicio5() {
    var ancho = parseInt($('#txtancho').val());
    var alto = parseInt($('#txtalto').val());
    var resultado = 0;
    
    resultado=CalcularAreaRetangulo(ancho,alto);
    
    $('#divEje5Area').html(resultado);
}

function CalcularAreaRetangulo(ancho, alto) {
    var resultado = 0;
    if(isNaN(ancho) || isNaN(alto))
    {
        resultado= -1;
    }else{
      resultado=ancho * alto;   
    }
   
    
    return resultado;
}
/*-----------------------------Fin Ejercicio 5--------------------------*/