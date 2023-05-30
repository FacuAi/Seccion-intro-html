//Video 01


/*function showAlert() {alert("hola, esta es una alerta por Js");
}
tema 01
console.log("porqeu en conosola ?");
function sumar(num1,num2){
    let resultado = num1 + num2;
    return resultado;
}tema 02
/*var edad = prompt("Ingresa tu edad?",);
var numero = 123;

alert("el tipo de dato de numero es: " + typeof numero)

var flag = true;

alert("el tipo de dato es: " + typeof flag)

var edad = prompt("que edad tienes?");    //esta es la manera de hacer un salto de linea !forma correcta!
// var mensaje = `La edad del sujeto es 
// ....                     
// ...   ${edad}`; 
                //${edad} estas indexando la edad es  acceder a un elemento específico en una estructura de datos utilizando un indice  o una clave que identifica
alert(mensaje + "\n"+ "!sos un viejooo Queridoo ¡ ") // esta es la otra manera de hacerlo \n


*/




//02 


var persona = {
    apellido:"Saens",
    nombre:"Guido",
    Nacimiento: new Date("24-09-1995"),
    dni: 34567023,

     mascotas: [
        {
        apodo:"Zeus",
        Raza :"Perro",
        numeroIdentidadticatoria: 001,
        fechaActual : new Date(16-11-2021) ,
 
},{
        apodo: "Meduza",
        Raza: "Gato",
        numeroIdentidadticatoria:002,
         Nacimiento: new Date(13-04-2010),
    
}
    ]
};

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})

// var fechaActual = new Date();
// console.log("la hora actual es: \n" + fechaActual);
// var año = fechaActual.getFullYear();
// var mes = fechaActual.getMonth(); // Enero es 0, febrero es 1, ...
// var día = fechaActual.getDate();
// var horas = fechaActual.getHours();
// var minutos = fechaActual.getMinutes();
// var segundos = fechaActual.getSeconds();
//  díaSemana = fechaActual.getDay();
// console.log("Numero de la semana : " +díaSemana);
// // var mascota = {
//     // podo:"Zeus",
//     // numeroIdentidadticatoria: 001,
//     // Nacimiento : new Date(),
//     // Nacimiento : fechaActual,

// //     a
// // };

// function clicked() {

//     console.log('boom');
// }

// console.log("la Raza : " +persona.mascotas[1].Raza);
// console.log("Apodo: "  + persona.mascotas[1].apodo);
// console.log(persona.mascotas[1].Nacimiento );
