let contador = 1;

setInterval(function(){

    document.getElementById('slide' + contador).checked = true;
    contador ++;

    if (contador > 32) {
        contador = 1;
    }

}, 3000)

