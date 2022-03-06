const mousetrap = requiere('mousetrap')
mousetrap.bind('1',clickUno)
mousetrap.bind('2',clickDos)
mousetrap.bind('+',clickSuma)

var botonUno = document.getElementById('botonUno')
var actual = document.getElementById('actual')
var resultado = document.getElementById('resultado')

botonUno.addEventListener('click', clickUno)
botonoSuma.addEventListener('click', clickSuma)

function clickUno(){
    actual.innerHTML += '1'
}

function clickDos(){
    actual.innerHTML += '2'
}

function clickTres(){
    actual.innerHTML += '3'
}

function clickCuatro(){
    actual.innerHTML += '4'
}

function clickCinco(){
    actual.innerHTML += '5'
}

function clickSeis(){
    actual.innerHTML += '6'
}

function clickSiete(){
    actual.innerHTML += '7'
}

function clickOcho(){
    actual.innerHTML += '8'
}

function clickNueve(){
    actual.innerHTML += '9'
}

function clickCero(){
    actual.innerHTML += '0'
}

function clickSuma(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorActual  + valorResultado
    actual.innerHTML = '0'
}

function clickResta(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorActual  - valorResultado
    actual.innerHTML = '0'
}

function clickDiv(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorActual / valorResultado
    actual.innerHTML = '0'
}

function clickMulti(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorActual  + valorResultado
    actual.innerHTML = '0'
}