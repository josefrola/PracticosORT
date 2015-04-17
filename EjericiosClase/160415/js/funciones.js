

$(document).ready(CargarTodo);


function CargarTodo() {
    $('#selectMenu').change(MostrarMenu);
}

function MostrarMenu() {
    var data = $('#selectMenu').val();
    var message = "";
    if (data == "Lunes")
    {
        message = "Lunes se sirve Milanesa";
    }
    else if (data == "Martes")
    {
        message = "Martes se sirve pescado con pure";
    }
    else if (data == "Miércoles") {
        message = "Miércoles se sirve ravioles con tuco";
    }
    else if (data == "Jueves") {
        message = "Jueves se sirve Asado";
    }
    else if (data == "Viernes") {
        message = "Viernes  se sirve Milanesa Caballo";
    }
    else if (data == "Sabado") {
        message = "Sabado  se sirve canelones de carne";
    } else {
        message = "Lunes,Martes, Miércoles, Jueves, Viernes, Sabado ";
    }

    $('#divMessage').html(message);
}


function MenuSwitch() {

    var data = $('#selectMenu').val();
     var message = "";
    switch (data) {
        case "Lunes":
            message = "Lunes se sirve Milanesa";
            break;
        case "Martes":
            message = "Martes se sirve pescado con pure";
            break;
        case "Miércoles":
            message = "Miércoles se sirve ravioles con tuco";
            break;
        case "Jueves":
            message = "Miércoles se sirve ravioles con tuco";
        case "Viernes":
            message = "Viernes  se sirve Milanesa Caballo";
            break;
        case "Sabado":
            message = "Sabado  se sirve canelones de carne";
            break;
        default:
           message = "Lunes,Martes, Miércoles, Jueves, Viernes, Sabado "; 
    }
    
    $('#divMessage').html(message);
}

