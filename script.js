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

// generacion

class Persona{
    constructor(nombre,edad,dni,peso,altura){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.peso = peso;
        this.altura = altura;
    }

        //setter & getter
    set sex(sexo) {
        if(sexo != "M" && sexo != "F") throw new Error('El valor no es permitido');
        this.sexo = sexo;
    }
    get sex() {
        return this.sexo;
    }

    mostrarGeneraciones(){
        if ((new Date().getFullYear() - this.edad) < 1948 ) {
            // console.log("silent generation")
            document.getElementById("mostrarGeneracion_id").innerHTML= "silent generation"
        }else if ((new Date().getFullYear() - this.edad) < 1968 ) {
            // console.log("Baby Boom")
            document.getElementById("mostrarGeneracion_id").innerHTML="Baby Boom"
        }else if ((new Date().getFullYear() - this.edad) < 1980 ) {
            // console.log("Genration X")
            document.getElementById("mostrarGeneracion_id").innerHTML="Genration X"
        }else if ((new Date().getFullYear() - this.edad) < 1993 ) {
            // console.log("Genration Y")
            document.getElementById("mostrarGeneracion_id").innerHTML="Genration Y"
        }else{
            // console.log("Genration Z")
            document.getElementById("mostrarGeneracion_id").innerHTML="Genration Z"
        }

    }
    esMayorDeEdad(){
        if (this.edad >= 18) {
            // console.log("es mayor de edad")
            document.getElementById("esMayorDeEdad_id").innerHTML= "es mayor de edad"
        }
    }
    mostrarDatos(){
        // console.log(`Nombre: ${this.nombre} Edad: ${this.edad} DNI:${this.dni} Sexo: ${this.sexo} Peso: ${this.peso} Altura:${this.altura} `)

        document.getElementById("mostrarDatos_id").innerHTML = `Nombre: ${this.nombre} Edad: ${this.edad} DNI:${this.dni} Sexo: ${this.sexo} Peso: ${this.peso} Altura:${this.altura}`
    }

    }
    
    function nuevaPersona() {
        let  = []
        personaNueva = new Persona(document.getElementById("nombrePersona_id").value, Number(document.getElementById("edadPersona_id").value), Number(document.getElementById("dniPersona_id").value), Number(document.getElementById("pesoPersona_id").value), Number(document.getElementById("alturaPersona_id").value));
        personaNueva.sex = document.getElementById("sexoPersona_id").value;
        // console.log(personaNueva)
    }
