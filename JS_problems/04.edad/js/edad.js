//# Mi Edad
//Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual
// en la consola con la frase "Tienes X años". Por ejemplo,  asumiendo que el año actual es 2019
 //y el usuario ingresa 1999, el programa debe imprimir en la consola:
//`Tienes 29 años`

//1. solicitar año de nacimiento
//2. año actual = 2022;
//3.impromir años actuales.



var año1 = parseInt(prompt("INGRESE SU FECHA DE NACIMIENTO"));
var añoActual = 2022;
var edad = (añoActual - año1);
document.write("Tienes actualmente " + edad + " años");
