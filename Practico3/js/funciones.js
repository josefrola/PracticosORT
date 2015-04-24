
$(document).ready(CargarTodo);


function CargarTodo() {

    $('#btnejecutar').click(Ejercicio2);
    $('#btnejecutar1').click(Ejercicio2While);
    $('#btnmostrardo').click(Ejercicio2do);
    
    $('#btnejercicio3').click(Ejercicio3);
    $('#btnmostrarwhile').click(Ejercicio3While);
    $('#btnmostrardo3').click(Ejercicio3do);
    
    $('#btnMostrarEje4_1').click(Ejercicio4for);
    $('#btnMostrarEje4_2').click(Ejericicio4While);
    $('#btnMostrarEje4_3').click(Ejercicio4do);
}

/*----------------------------ejercicio 2 ------------------------------*/
function Ejercicio2() {
    var numero = "";
    for (var i = 0; i <= 100; i++) {
        numero += "numero: " + i + "<br>";
    }

    $('#numero').html(numero);
}

function Ejercicio2While() {
    var number = "";
    var i = 0;
    while (i <= 100) {
        number += "Numeros :" + i + "<br>";
        
        i++;
    }
    $('#numero_1').html(number);
}

function Ejercicio2do(){
    var numero="";
    var i =0;
    do{
        numero += "Numero: " + i + "<br>";
        i++;
    }while(i <= 100);
    
    $('#numero_2').html(numero);
}

/*----------------------------Fin ejercicio 2 ------------------------------*/

/*---------------------------Ejercicio 3------------------------------------*/

function Ejercicio3() {

    var numero = "";
    for (var i = -100; i <= 10; i++) {
        numero += "Numero: " + i + "<br>";
    }
    $('#mostrarNumero').html(numero);
}

function Ejercicio3While(){
    var numero="";
    var i=-100;
    while(i <= 10){
        numero +="Numero: " + i + "<br>";
        i++;
    }
    $('#mostrarNumero2').html(numero);
}

function Ejercicio3do(){
    var numero="";
    var i=-100;
    do{
       numero += "Numero : " + i + "<br>";
       i++; 
    }while(i <= 10); 
    
    $('#pmostarNumero3do').html(numero);
}

/*---------------------------Fin Ejercicio 3------------------------------------*/

/*---------------------------Ejercicio 4------------------------------------*/

function Ejercicio4for(){
    var numero="";
    for(var i=40; i >= 10; i--){
        numero += "Numero: " + i + "<br>";
    }
    $('#pMostrarEje3_for').html(numero);
}

function Ejericicio4While(){
    var numero="";
    var i= 40;
    while(i >= 10){
       numero += "Numero: " + i + "<br>"; 
       i--;
    }
    $('#pMostrarEje3_for').html(numero);
    
}

function Ejercicio4do(){
    var numero="";
    var i=40;
    do{
        numero +="Numero: " + i + "<br>";
        i--;
    }while(i >= 10);
    
    $('#pMostrarEje4_do').html(numero);
}

/*---------------------------Fin Ejercicio 4------------------------------------*/



