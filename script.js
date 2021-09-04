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

    /*-------------------
    /*--------reloj---------
    --------------------*/

    // function codeAddress() {
    //     dia = new Date

    //     diaSemana = ``
    //     numeroMes= dia.getDate()
    //     mes = ``
    //     annon = dia.getYear()+ 1900

    //     switch (dia.getDay()) {
    //         case 0:
    //             diaSemana = `Domingo`
    //             break;
    //         case 1:
    //             diaSemana = `Lunes`
    //             break;
    //         case 2:
    //             diaSemana = `Martes`
    //             break;
    //         case 3:
    //             diaSemana = `Miercoles`
    //             break;
    //         case 4:
    //             diaSemana = `Jueves`
    //             break;
    //         case 5:
    //             diaSemana = `Viernes`
    //             break;
    //         case 6:
    //             diaSemana = `Sabado`
    //             break;
    //         default:
    //             break;
    //     }

    //     switch (dia.getMonth()) {
    //         case 0:
    //             mes = `Enero`
    //             break;
    //         case 1:
    //             mes = `Febrero`
    //             break;
    //         case 2:
    //             mes = `Marzo`
    //             break;
    //         case 3:
    //             mes = `Abril`
    //             break;
    //         case 4:
    //             mes = `Mayo`
    //             break;
    //         case 5:
    //             mes = `Junio`
    //             break;
    //         case 6:
    //             mes = `Julio`
    //             break;
    //         case 7:
    //             mes = `Agosto`
    //             break;
    //         case 8:
    //             mes = `Septiembre`
    //             break;
    //         case 9:
    //             mes = `Octubre`
    //             break;
    //         case 10:
    //             mes = `Noviembre`
    //             break;
    //         case 11:
    //             mes = `Diciembre`
    //             break;
    //         default:
    //             break;
    //     }


    //     segundos = dia.getSeconds()
    //     minutos = dia.getMinutes()
    //     horas = dia.getHours()

    //     if (dia.getHours()/9 >= 1) {
    //         horas = dia.getHours()
    //     }else{
    //         horas = `0`+ dia.getHours()
    //     }

    //     if (dia.getMinutes()/9 >= 1) {
    //         minutos = dia.getMinutes()
    //     }else{
    //         minutos = `0`+ dia.getMinutes()
    //     }

    //     if (dia.getSeconds()/9 >= 1) {
    //         segundos = dia.getSeconds()
    //     }else{
    //         segundos = `0`+ dia.getSeconds()
    //     }
    //     document.getElementById("dias_id").innerHTML = `${diaSemana} ${numeroMes} de ${mes} del ${annon}`
    //     document.getElementById("hora_id").innerHTML = `${horas}:${minutos}:${segundos} `

    //     setTimeout('codeAddress()',1000)
    // }
    // window.onload = codeAddress;


    /*-------------------
    /*--------Cronometro---------
    --------------------*/
    

    // window.onload = init;
function init(){
    document.querySelector(".start").addEventListener("click",cronometrar);
    document.querySelector(".stop").addEventListener("click",parar);
    document.querySelector(".reiniciar").addEventListener("click",reiniciar);
    h = 0;
    m = 0;
    s = 0;
    document.getElementById("hms").innerHTML="00:00:00";
}         
function cronometrar(){
    escribir();
    id = setInterval(escribir,1000);
    document.querySelector(".start").removeEventListener("click",cronometrar);
}
function escribir(){
    var hAux, mAux, sAux;
    s++;
    if (s>59){m++;s=0;}
    if (m>59){h++;m=0;}
    if (h>24){h=0;}

    if (s<10){sAux="0"+s;}else{sAux=s;}
    if (m<10){mAux="0"+m;}else{mAux=m;}
    if (h<10){hAux="0"+h;}else{hAux=h;}

    document.getElementById("hms").innerHTML = hAux + ":" + mAux + ":" + sAux; 
}
function parar(){
    clearInterval(id);
    document.querySelector(".start").addEventListener("click",cronometrar);

}
function reiniciar(){
    clearInterval(id);
    document.getElementById("hms").innerHTML="00:00:00";
    h=0;m=0;s=0;
    document.querySelector(".start").addEventListener("click",cronometrar);
}

/*-------------------
/*--------temporizador---------
--------------------*/
