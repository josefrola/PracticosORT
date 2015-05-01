
/*---------------llamada de funciones -------------------------*/
$(document).ready(LoadFunction);


/*------------------------------variables glovales ---------------------------------*/

var contador = 0;
var acumulador1 = 0;
var acumulador2 = 0;
var acumulador3 = 0;

/*-------------------------------------fin de las variables glovales --------------*/

function LoadFunction() {
    $('#btnData').click(MostrarData);
    $('#btnShowData').click(CheckNumber);
    $('#btnShowNum').click(FunctionEjer3);
    $('#btnShowDataEje4').click(FunctionEjer4);
    $('#btnClaculate').click(Ejericio5);
    $('#btnShowResult').click(Ejericio6);
    $('#btnEjericio7').click(Ejericio7);
    $('#btnEjericio8').click(Ejercicio8);
    $('#btnCalculate').click(Ejericio9);
    $('#btnMostrar').click(Ejericio10);
    $('#btnCalcularEjer11').click(Ejercicio11);
    $('#btnEje12Calcular').click(Ejericio12);
    $('#btnCalcularEje13').click(Ejericio13);
    $('#btnTemperatura').click(Ejercicio14);

}


function MostrarData() {

    var number = parseInt($('#txtName').val());

    if (number >= 0) {
        alert('Número Positivo');
    } else {
        alert('Número Negativo');
    }

}

function CheckNumber() {

    var number = parseInt($('#txtName').val());

    if (number > 10) {
        alert('Número mayor que 10');
    }
}

function FunctionEjer3() {
    var number = parseInt($('#txtNum').val());

    if (number > 20) {
        alert('El Número es mayor que 20');
    } else if (number <= 20) {
        alert('El numero es menor o igual a 20');
    }
}

function FunctionEjer4() {
    var number = parseInt($('#txtNumber4').val());
    var value = 0;
    var message = "";
    if (number < 0) {
        value = number * -1;
        message = "El Número es :" + value;
    }
    $('#divShowData').html(message);
}

function Ejericio5() {
    var numbr_1 = Math.abs($('#txtNumber1').val());
    var number_2 = Math.abs($('#txtNumber2').val());
    var number_3 = Math.abs($('#txtNumber3').val());
    var number_4 = Math.abs($('#txtNumber4').val());
    var number_5 = Math.abs($('#txtNumber5').val());
    var number_6 = Math.abs($('#txtNumber6').val());

    var total = 0;
    total = numbr_1 + number_2 + number_3 + number_4 + number_5 + number_6;
    $('#divResult').html(total);

}

function Ejericio6() {
    var number = parseInt($('#txtNumberEj6'));

    if ((number > 10) && (number < 20)) {
        alert('Es mayor que 10 y menor que 20');
    } else {
        alert('No es mayor que 10 ni menor a 20');
    }
}

function Ejericio7() {
    var numero = (parseInt($('#txtNumberEj7').val()));
    var total = numero % 7;
    var total1 = numero % 3;

    if ((total === 0) && (total1 === 0)) {
        alert('Los números ingresados son multiplos de 7 y 3');
    } else {
        alert('Los Números ingresados nos son multiplos de 7 y 3');
    }
}

function Ejercicio8() {
    var numero = (parseInt($('#txtNumberEj8').val()));
    var negativo = -20;
    var positivo = 20;

    if ((numero < negativo) || (numero > positivo)) {
        alert('Cumple');
    } else {
        alert('No Cumple');
    }
}

function Ejericio9() {
    var numero = (parseInt($('#txtNumber_1Ejp9').val()));
    var total = 0;
    total = numero * 5;
    console.log(total);

}

function Ejericio10() {
    var numero = (parseInt($('#txtnumero').val()));

    if (numero > 30) {
        alert('Número es mayor que 30');
    } else if (numero < 10) {
        alert('Número menor que 10');
    } else {
        alert('Numero esta entre 10 y 30');
    }
}

function Ejercicio11() {
    var minAzucar = 1;
    var minHarina = 100;
    var minAceite = 1;
    var minAgua = 1;

    var Azucar = (parseInt($('#txtazucar').val()));
    var Harina = (parseInt($('#txtharina').val()));
    var Aceite = (parseInt($('#txtaceite').val()));
    var Agua = (parseInt($('#txtagua').val()));

    var canMinima = Number.MAX_VALUE;

    var gAzucar = Azucar / minAzucar;
    var gHarina = Harina / minHarina;
    var gAceite = Aceite / minAceite;
    var gAgua = Agua / minAgua;

    if (gAzucar < canMinima)
        canMinima = gAzucar;
    if (gHarina < canMinima)
        canMinima = gHarina;
    if (gAceite < canMinima)
        canMinima = gAceite;
    if (gAgua < canMinima)
        canMinima = gAgua;

    $('#mensaje').html('La cantidad minima es :' + canMinima);
}

function Ejericio12() {
    var valorcasa = parseInt($('#txtprecioCasa').val());
    var ingreso = parseInt($('#txtingresocomprador').val());
    var porsentajePaga = 0;
    var restoPagar = 0;
    var cuotas;
    var messageporsentaje = "";
    var message = "";

    if (ingreso < 20000) {
        porsentajePaga = valorcasa * 0.15;
        restoPagar = valorcasa - porsentajePaga;
        cuotas = restoPagar / 2;
        messageporsentaje = "Debe pagar el 15% del valor de l casa que es:" + porsentajePaga;
        message = "El resto a pagar son dos cuotas de:" + cuotas;
    } else if (ingreso >= 20000) {
        var mesesAno = 12;
        var totalmeses = 0;
        porsentajePaga = valorcasa * 0.30;
        restoPagar = valorcasa - porsentajePaga;
        totalmeses = mesesAno * 7;
        cuotas = restoPagar / totalmeses;
        messageporsentaje = "Debe pagar el 30% del valor de l casa que es:" + porsentajePaga;
        message = "El resto a pagar son " + totalmeses + " cuotas de:" + cuotas;
    }

    $('#porsentajepago').html(messageporsentaje);
    $('#coutasPagar').html(message);
}

function Ejericio13() {
    var tipopago = $('#tipodepago').val();
    var montoPagar = parseFloat($('#montoPagar').val());
    var descuento = 0.04;
    var total = 0;
    var montoInferior = 10000;
    var message = "";

    if ((tipopago == '2' || tipopago == '3') && (montoPagar < montoInferior)) {
        var descuento = montoPagar * descuento;
        total = montoPagar - descuento;
        message = "<div> Total:" + montoPagar + "<br>Descuento:" + descuento + "<br>Total a Pagar:" + total + "</div>"
    } else {
        message = "Total:" + montoPagar;
    }

    $('#totalPagar').html(message);
}

function Ejercicio14() {
    var temperatura = parseInt($('#temperatura').val());
    var dias = $('#diasSemana').val();
    var message = "";
    if ((temperatura < 10)) {
        if (dias == "Lunes" || dias == "Martes" || dias == "Miercoles" || dias == "Jueves" || dias == "Viernes" || dias == "Sabado") {
            message = "Levantarse abrigarse mucho. Ir al trabajo";
        } else {
            message = "Levantarse abrigarse que esta frio, hoy no trabaja";
        }
    } else if (temperatura > 20) {
        if (dias == "Lunes" || dias == "Martes" || dias == "Miercoles" || dias == "Jueves" || dias == "Viernes" || dias == "Sabado") {
            message = "Levantarse ponerse ropa comoda . Ir al trabajo";
        } else {
            message = "Levantarse ponerse ropa comoda , hoy no trabaja";
        }
    } else if (temperatura > 10 && temperatura < 20) {
        if (dias == "Lunes" || dias == "Martes" || dias == "Miercoles" || dias == "Jueves" || dias == "Viernes" || dias == "Sabado") {
            message = "Levantarse ponerse abrigo intermedio . Ir al trabajo";
        } else {
            message = "Levantarse ponerse abrigo intermedio , hoy no trabaja";
        }
    }
    
    $('#message').html(message);
}


