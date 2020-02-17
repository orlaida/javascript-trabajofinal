
var operandoa;
var operandob;
var operacion = "";
var operacion;


function init() {
    //variables
    var pantalla = document.getElementById('display')
    var uno = document.getElementById('1')
    var dos = document.getElementById('2')
    var tres = document.getElementById('3')
    var cuatro = document.getElementById('4')
    var cinco = document.getElementById('5')
    var seis = document.getElementById('6')
    var siete = document.getElementById('7')
    var ocho = document.getElementById('8')
    var nueve = document.getElementById('9')
    var cero = document.getElementById('0')
    var igual = document.getElementById('igual')
    var punto = document.getElementById('punto')
    var mas = document.getElementById('mas')
    var menos = document.getElementById('menos')
    var por = document.getElementById('por')
    var dividido = document.getElementById('dividido')
    var raiz = document.getElementById('raiz')
    var sign = document.getElementById('sign')
    var on = document.getElementById('on')
    //eventos
    uno.addEventListener('click', function() {
        escribir('1')
    })
    dos.addEventListener('click', function() {
        escribir('2')
    })
    tres.addEventListener('click', function() {
        escribir('3')
    })
    cuatro.addEventListener('click', function() {
        escribir('4')
    })
    cinco.addEventListener('click', function() {
        escribir('5')
    })
    seis.addEventListener('click', function() {
        escribir('6')
    })
    siete.addEventListener('click', function() {
        escribir('7')
    })
    ocho.addEventListener('click', function() {
        escribir('8')
    })
    nueve.addEventListener('click', function() {
        escribir('9')
    })
    cero.addEventListener('click', function() {
        escribir('0')
    })

    on.addEventListener('click', function() {
        resetear();
    })
    mas.addEventListener('click', function() {
        operandoa = display.textContent;
        operacion = "+";
        limpiar();
    })

    punto.addEventListener('click', function() {
      var display=pantalla.innerHTML
       if (display.indexOf(".")==-1){
         pantalla.innerHTML+=".";
       }
   })
    menos.addEventListener('click', function() {
        operandoa = display.textContent;
        operacion = "-";
        limpiar();
    })
    por.addEventListener('click', function() {
        operandoa = display.textContent;
        operacion = "*";
        limpiar();

    })
    dividido.addEventListener('click', function() {
        operandoa = display.textContent;
        operacion = "/";
        limpiar();
    })
    igual.addEventListener('click', function() {
        operandob = display.textContent;
        resolver();
    })
}

sign.addEventListener('click',function(){
var pantalla = document.getElementById("display")
pantalla.textContent = pantalla.textContent *-1

})

function limpiar() {
    var pantalla = document.getElementById("display");
    pantalla.innerHTML = ""
}

function resetear() {
    display.textContent = "0";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function cambio() {
    var pantalla = document.getElementById("display");
    pantalla.innerHTML = float(pantalla.innerHTML) * -1;
}


function escribir(numero) {
    var display = document.getElementById('display')

    if (display.innerHTML.length < 8) {
        if (display.innerHTML != '0') {
            display.innerHTML += numero
        } else {
            display.innerHTML = numero
        }
    }
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    display.textContent = res.toString().substring(0, 8);
}



function escribir(numero) {
    var display = document.getElementById('display')

    if (display.innerHTML.length < 8) {
        if (display.innerHTML != '0') {
            display.innerHTML += numero
        } else {
            display.innerHTML = numero
        }
    }
}





init()
