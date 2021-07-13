


$(document).ready(function () {
    $('#boton').click(() => start());



    start();


});

var start = () => {
    let numero;
    let mensaje = "";
    $('#mensaje').text("");
    do {

        numero = prompt(mensaje + "Ingrese un numero entre 1 y 20 ");

        if (numero > 20 || numero < 1)
            mensaje = "Numero invalido, por favor: ";


    } while (numero > 20 || numero < 1);

    for (let i = 1; i <= numero; i++) {
        console.log(i + " X " + numero + " = " + i * numero);

        $('#mensaje').append("<div>"+i + " X " + numero + " = " + i * numero +"</div>");

    }
    var fact = 1;
    for (let i = 1; i <= numero; i++) {
        fact *= i;
        console.log("El factorial de " + i + " es: " + fact);
        $('#mensaje').append("<div>"+"El factorial de " + i + " es: " + fact +"</div>");

    }

}



var factoriales = (numero) => {
    if (numero == 0) {
        return 1;
    }
    else {

        return numero * factoriales(numero - 1);
    }
}





