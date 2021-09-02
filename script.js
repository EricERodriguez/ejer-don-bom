function random(){
    let max = 10
    let min = 1

    this.number = Math.trunc((Math.random()*(max+min))) 
    // console.log(this.number)
    return number
}

function adivinar() {
    numeroEntrado = document.getElementById("numero_id").value

    // console.log(numeroEntrado)

    if (numeroEntrado == number) {
        // window.alert("Hay coincidencia")
        document.getElementById("resultado_id").style.fontSize = "3rem"
        document.getElementById("resultado_id").innerHTML= "Hay coincidencia"

    }else{
        document.getElementById("resultado_id").innerHTML= "NO hay coincidencia"
        // window.alert("No hay coincidencia")
        if (numeroEntrado > number) {
            document.getElementById("correccion_id").innerHTML= `${numeroEntrado} es mayor`
        }else{
            document.getElementById("correccion_id").innerHTML= `${numeroEntrado} es menor`
        }
    }
}