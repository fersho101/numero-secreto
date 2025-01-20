const numMax = 10
listaNumerosSorteados = []
numeroSecreto = 0
intentos = 0

const asignarTextoElemento = (elem, texto) => {
    const elemHTML = document.querySelector(elem)
    elemHTML.innerHTML = texto
    return
}

const verificarIntento = () => {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value)

    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento(
            'p',
            `Acertaste el numero en ${intentos} ${
                intentos === 1 ? 'vez' : 'veces'
            }`
        )
        document.getElementById('reiniciar-btn').removeAttribute('disabled')
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor')
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor')
        }
        intentos++
        limpiarCaja()        
    }
}

const limpiarCaja = () => {
    document.querySelector('input').value = ''
}

const generarNumeroSecreo = () => {
    let numeroGenerado = Math.floor(Math.random() * numMax) + 1

    // console.log(numeroGenerado)
    // console.log(listaNumerosSorteados)

    if (listaNumerosSorteados.length == numMax) {
        asignarTextoElemento('p', 'Ya se sorteron todos los numeros posibles')
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreo()
        } else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado
        }
    }
}

const codicionesIniciales = () => {
    asignarTextoElemento('h1', 'Juego del numero secreto!')
    asignarTextoElemento('p', `Digita un numero del 1 al ${numMax}: `)
    numeroSecreto = generarNumeroSecreo()
    // console.log(numeroSecreto)
    intentos = 1
}

const reiniciarJuego = () => {
    limpiarCaja()
    codicionesIniciales()
    document.getElementById('reiniciar-btn').setAttribute('disabled', 'true')
}

codicionesIniciales()
