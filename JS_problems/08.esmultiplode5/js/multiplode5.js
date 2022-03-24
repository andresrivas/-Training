//Un múltiplo de 5 es aquel que dividio por 5 da por resultado un número entero (sin residuo).
//Por ejemplo 10, 15, 20, etc. son múltiplos de 5. 11 no es múltiplo de 5 porque quedaría un residuo de 1.

//Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.
//Si es múltiplo debe imprimir "Si, el número x es múltiplo 5", de lo contrario debe imprimir "No, el número x no es múltiplo de 5".

//1. pedir al usuario un numero
//2. Si numero / 5 y el resultado sea igual a == 0
//2.1 improma mensaje
//3. si no
//4. imprima mensaje



const numero=parseInt(prompt('INGRESE UN NUMERO'));

if(numero % 5 ===0){
  console.log("SI EL NUMERO  "+ numero +"  ES MULTIPLO DE 5");
  document.write("SI EL NUMERO  "+ numero +"  ES MULTIPLO DE 5");
}else{
  console.log("NO, EL NUMERO  "+ numero +"  NO ES MULTIPLO DE 5");
  document.write("NO, EL NUMERO  "+ numero +"  NO ES MULTIPLO DE 5");
}
