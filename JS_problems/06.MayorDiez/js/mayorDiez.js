//# Mayor que Diez
//Escribe un programa que le pida un número al usuario e imprima en la consola si el número es mayor o menor/igual a 10.
//Si es mayor debe imprimir "El número es mayor a 10".
//Si es menor debe imprimir "El número es menor o igual a 10".


//1. solicitaral usuario un numero
//2.realizar validacion  de  numero ingresado
//3. si numero >=10
//3.1 imprimir "El número es mayor a 10".
//3.2 si es menor debe imprimir "El número es menor o igual a 10".
//3.3 si no es igual a 10 imprimir el numero es igual a 10

var numero = parseInt(prompt("INGRESE UN NUMERO"));
if  (numero > 10){
  document.write("EL NUMERO ES MAYOR DE 10");
}
if (numero <= 10) {
  document.write("EL NUMERO ES MENOR O IGUAL A 10");
}
else {

}
