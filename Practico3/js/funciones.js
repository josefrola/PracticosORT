
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

    $('#btnejercicio5for').click(Ejercicio5for);
    $('#btnejercicio5while').click(Ejericiowhile);
    $('#btnejercicio5do').click(Ejercicio5do);


    $('#btnEjericio6For').click(Ejericio6For);
    $('#btnEjericio6while').click(Ejericio6While);
    $('#btnEjericio6do').click(Ejercicio6do);

    $('#btnForEjericiocio7').click(Ejercicio7for);
    $('#btnwhileEjericiocio7').click(Ejercicio7While);
    $('#btndoEjericiocio7').click(Ejjericicio7Do);


    $('#btnMostrarEjercicio8').click(Ejercicio8For);
    $('#btnMostrarEjercicio8while').click(Ejercicio8While);
    $('#btnMostrarEjericio8do').click(Ejericio8do);

    $('#btnEjercicio9while').click(Ejericio9While);
    $('#btnEjercicio9do').click(Ejercicio10Do);
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

function Ejercicio2do() {
    var numero = "";
    var i = 0;
    do {
        numero += "Numero: " + i + "<br>";
        i++;
    } while (i <= 100);

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

function Ejercicio3While() {
    var numero = "";
    var i = -100;
    while (i <= 10) {
        numero += "Numero: " + i + "<br>";
        i++;
    }
    $('#mostrarNumero2').html(numero);
}

function Ejercicio3do() {
    var numero = "";
    var i = -100;
    do {
        numero += "Numero : " + i + "<br>";
        i++;
    } while (i <= 10);

    $('#pmostarNumero3do').html(numero);
}

/*---------------------------Fin Ejercicio 3------------------------------------*/

/*---------------------------Ejercicio 4------------------------------------*/

function Ejercicio4for() {
    var numero = "";
    for (var i = 40; i >= 10; i--) {
        numero += "Numero: " + i + "<br>";
    }
    $('#pMostrarEje3_for').html(numero);
}

function Ejericicio4While() {
    var numero = "";
    var i = 40;
    while (i >= 10) {
        numero += "Numero: " + i + "<br>";
        i--;
    }
    $('#pMostrarEje3_for').html(numero);

}

function Ejercicio4do() {
    var numero = "";
    var i = 40;
    do {
        numero += "Numero: " + i + "<br>";
        i--;
    } while (i >= 10);

    $('#pMostrarEje4_do').html(numero);
}

/*---------------------------Fin Ejercicio 4------------------------------------*/

/*----------------------------Ejercicio 5-----------------------------------------*/
function Ejercicio5for() {

    var numero = "";
    for (var i = 20; i >= -30; i--) {
        numero += "Numero:" + i + "<br>";

    }
    $('#divforEjercicio5').html(numero);
}

function Ejericiowhile() {
    var i = 20;
    var numero = "";
    while (i >= -30) {
        numero += "Numero:" + i + "<br>";

        i--;
    }
    $('#divwhileEjercicio5').html(numero);
}
;

function Ejercicio5do() {
    var i = 20;
    var numero = "";
    do {

        numero += "Numero: " + i + "<br>";
        i--;

    } while (i >= -30);


    $('#divdoEjercicio5').html(numero);
}

/*----------------------------Fin Ejercicio 5-----------------------------------*/
/*---------------------------- Ejercicio 6-------------------------------------*/

function Ejericio6For() {
    var numeroMultiplo = "";
    var resultado = 0;

    for (var i = 1; i <= 450; i++) {

        resultado = parseInt(i % 5);

        if (resultado === 0) {
            numeroMultiplo += "Numero:" + i + "<br>";
        }

    }

    $('#numerosMultiples').html(numeroMultiplo);

}

function Ejericio6While() {
    var NumeroMultiplo = "";
    var resultado = 0;
    var i = 1;

    while (i <= 450) {
        resultado = parseInt(i % 5);

        if (resultado === 0) {
            NumeroMultiplo += "Numero:" + i + "<br>";
        }

        i++;
    }
    $('#numeroMultiplowhile').html(NumeroMultiplo);
}

function Ejercicio6do() {
    var NumeroMultiple = "";
    var resultado = 0;
    var i = 1;

    do {
        resultado = parseInt(i % 5);

        if (resultado === 0) {
            NumeroMultiple += "Numero:" + i + "<br>";
        }

        i++;

    } while (i <= 450);

    $('#numeroMultiplodo').html(NumeroMultiple);
}

/*----------------------------Fin Ejercicio 6-------------------------------------*/

/*---------------------------- Ejercicio 7----------------------------------------*/
function Ejercicio7for() {
    var NumeroMultiplo = "";
    var resultado = 0;

    for (var i = -33; i <= 230; i++) {

        resultado = parseInt(i % 4);

        if (resultado === 0) {
            NumeroMultiplo += "Numero:" + i + "<br>";
        }
    }

    $('#divNumerosFor').html(NumeroMultiplo);
}

function Ejercicio7While() {
    var NumeroMultiple = "";
    var resultado = 0;
    var i = -33;

    while (i <= 230) {

        resultado = parseInt(i % 4);
        if (resultado === 0) {
            NumeroMultiple += "Numero:" + i + "<br>";
        }

        i++;
    }

    $('#divNumeroswhile').html(NumeroMultiple);
}

function Ejjericicio7Do() {
    var NumeroMultiple = "";
    var resultado = 0;
    var i = -33;

    do {
        resultado = parseInt(i % 4);

        if (resultado === 0) {
            NumeroMultiple += "Numero:" + i + "<br>";
        }
        i++;

    } while (i <= 230);

    $('#divNumerosdo').html(NumeroMultiple);
}

/*---------------------------- Ejercicio 7----------------------------------------*/

/*---------------------------- Ejercicio 8----------------------------------------*/
function Ejercicio8For() {
    var numero = parseInt($('#txtNumero').val());
    var guiones = "-";
    var message = "";
    for (var i = 1; i <= numero; i++) {
        message += guiones;
    }

    $('#divDatos').html(message);
}

function Ejercicio8While() {
    var numero = parseInt($('#txtNumero').val());
    var guiones = "-";
    var message = "";
    var i = 1;

    while (i <= numero) {
        message += guiones;

        i++;
    }
    $('#divDatos_1').html(message);
}

function Ejericio8do() {
    var numero = parseInt($('#txtNumero').val());
    var guiones = "-";
    var message = "";
    var i = 1;

    do {
        message += guiones;
        i++;
    } while (i <= numero);

    $('#divDatos_2').html(message);
}
/*---------------------------- Fin Ejercicio 8-------------------------------------*/

/*-----------------------------Ejercicio 9 ----------------------------------------*/
function Ejericio9While() {
    var numero1 = parseInt($('#txtNumero1').val());
    var numero2 = parseInt($('#txtNumero2').val());
    var numeroMostrar = "";
    var num_1 = 0;
    var num_2 = 0;

    if (numero1 >= numero2) {
        num_1 = numero2;
        num_2 = numero1;
    } else {
        num_1 = numero1;
        num_2 = numero2;
    }

    while (num_1 <= num_2) {
        numeroMostrar += "Numero:" + num_1 + "<br>";

        num_1++;
    }

    $('#divMostrarwhile').html(numeroMostrar);
}

function Ejercicio10Do() {
    var numero1 = parseInt($('#txtNumero1').val());
    var numero2 = parseInt($('#txtNumero2').val());
    var numeroMostrar = "";
    var num_1 = 0;
    var num_2 = 0;

    if (numero1 >= numero2) {
        num_1 = numero2;
        num_2 = numero1;
    } else {
        num_1 = numero1;
        num_2 = numero2;
    }

    do {
        numeroMostrar += "Numero:" + num_1 + "<br>";
        num_1++;
    } while (num_1 <= num_2);

     $('#divMostrardo').html(numeroMostrar);
}

/*-----------------------------Fin Ejercicio 9 ----------------------------------------*/

