/*• Realizar un algoritmo que dado un
número entero ingresado por el
usuario, visualice en pantalla si es
par o impar
• En el caso de ingresar un cero, se
debe volver a pedir el número por
teclado (hasta que se ingrese un
número mayor que cero)*/

let numeroUsuario: number | null = Number(prompt("Ingrese un numero entero"));

if (numeroUsuario === 0) {
  console.log("El número es 0 - Ingrese otro numero-");
} else if (numeroUsuario % 2 === 0) {
  console.log("El número ingresado es par.");
} else {
  console.log("El número ingresado es impar.");
}

/*if (numeroUsuario % 2 === 0) {
  console.log("El numero " + numeroUsuario + " es par");
} else {
  console.log("El numero " + numeroUsuario + " es impar");
}
if (numeroUsuario <= 0) console.log(" Ingrese un numero mayor a cero");*/
