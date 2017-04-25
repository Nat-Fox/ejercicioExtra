function convertirTemp() {
    //trae el valor de la etiqueta celsius del formulario
    var inputCel = document.getElementById('celsius').value;
    //trae el valor de la etiqueta farenheit del formulario
    var inputFarenh = document.getElementById('farenheit').value;
    console.log(inputCel);
    console.log(inputFarenh);
    if (inputFarenh) {
        //muestro en el td con id resultF la transformacion a celsius
        document.getElementById('resultF').innerHTML = fToC(inputFarenh);
    }

    if (inputCel) {
        //muestro en el td con id resultC la transformacion  a farenheit
        document.getElementById('resultC').innerHTML = cToF(inputCel);
    }

}


function fToC(value) {
    return ((value - 32) * 5) / 9;
}

function cToF(value) {
    return ((9 / 5) * value) + 32;
}

/*
if(celsius){
    var tempCels = document.getElementById('celsius').value;
    return ((9 / 5) * tempCels) + 32;
}else{
    var tempFarenh = document.getElementById('farenheit').value;
    return ((tempFarenh-32) * 5) / 9
}
*/