//# Mayor, Menor o Igual
//Escribe un programa que le pida un número al usuario e imprima en la consola si el número si es mayor, menor o igual que 10.
//Si el número es menor a 10 debe imprimir "El número es menor que 10".
//Si el número es mayor a 10 debe imprimir "El número es mayor que 10".
//Si el número es igual a 10 debe imprimir "El número es igual a 10".

//1. solicitar un numero al usuario.
//2. si el numero es < 10 imprimir "El número es menor que 10"
//3. si el numero es > 10 imprimir "El número es mayor que 10".
//4. si el numero es = 10 imprimir "El número es mayor que 10".


let numero = parseInt(prompt("DIGITE UN NUMERO: "));

if (numero < 10)
{
  console.log("EL NUMERO ES MENOR DE 10");
  document.write("EL NUMERO ES MENOR DE 10");
}
else if (numero > 10)
{
  console.log("EL NUMERO ES MAYOR DE  10");
  document.write("EL NUMERO ES MAYOR DE 10");
}
else
{
  console.log("EL NUMERO ES IGUAL A 10");
  document.write("EL NUMERO ES IGUAL A 10");
}
