
// // function ejercicio(cadena) { //declaramos la funcion
// //     const cadena = "Hola Mundo!";

// //     let tipos=[] ;              //declaramos el nombre
// // let cadenacaracteres=cadena.split(" ");  //declaramos  y le ponemos la el bucle.split()
// // cadenacaracteres.forEach(cadena);{  //siclo forEach
// //     tipos.push(cadena.split("").reverse().join(""))

// // };
// // return console.log(tipos.join(" "))

// // }


function invertirCadena (cadena) {
    let arrayCadena = cadena.split(" ");
    let arrayInvertido = [];
    
    arrayCadena.forEach((palabra) => {
      arrayInvertido.push(palabra.split("").reverse().join(""));
    });  
 
   invertirCadena(prompt("Indique la palabra"));

  }
  
  

  alert(message)