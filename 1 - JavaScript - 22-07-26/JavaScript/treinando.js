function a(pa1){
    return pa1()
}

function menos(){
    let contador = 10
    const id = setInterval(() => {
        contador--
        console.log('Tempo:', contador)
        if (contador == 0){
            clearInterval(id)
        }
    }, 1000)
}

function mais(){
    let contador = 0
    const id = setInterval(() => {
        contador++
        console.log('Tempo:', contador)
        if (contador == 10){
            clearInterval(id)
        }
    },1000)
}

a(menos)