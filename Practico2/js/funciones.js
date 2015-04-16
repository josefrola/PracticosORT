

$(document).ready(LoadFunction);


function LoadFunction() {
    $('#btnData').click(MostrarData);
    $('#btnShowData').click(CheckNumber);
    $('#btnShowNum').click(FunctionEjer3);
    $('#btnShowDataEje4').click(FunctionEjer4);
    $('#btnClaculate').click(Ejericio5);
}


function MostrarData() {
    
    var number = parseInt($('#txtName').val());

    if (number >= 0) {
        alert('Número Positivo');
    } else {
        alert('Número Negativo');
    }

}

function CheckNumber(){
    
    var number=parseInt($('#txtName').val());
    
    if(number > 10){
        alert('Número mayor que 10');
    }
}

function FunctionEjer3(){
    var number=parseInt($('#txtNum').val());
    
    if(number > 20){
        alert('El Número es mayor que 20');
    }else if(number <= 20){
       alert('El numero es menor o igual a 20'); 
    }
}

function FunctionEjer4(){
    var number=parseInt($('#txtNumber4').val());
    var value=0;
    var message="";
    if(number < 0){
        value=number * -1;
        message="El Número es :" + value; 
    }    
    $('#divShowData').html(message);   
}

function Ejericio5(){
    var numbr_1=Math.abs($('#txtNumber1').val());
    var number_2=Math.abs($('#txtNumber2').val());
    var number_3=Math.abs($('#txtNumber3').val());
    var number_4=Math.abs($('#txtNumber4').val());
    var number_5=Math.abs($('#txtNumber5').val());
    var number_6=Math.abs($('#txtNumber6').val());
    
    var total=0;
    total=numbr_1 + number_2 + number_3 + number_4 + number_5 + number_6;
    $('#divResult').html(total);
    
}

function Ejericio6(){
    var number=parseInt($('#txtNumberEj6'));
    
    if((number > 10) && (number < 20)){
        
    }
}