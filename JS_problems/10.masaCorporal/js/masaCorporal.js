//# Indice de Masa Corporal II
//El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.
//El BMI se calcula con la siguiente formula:
//`peso / altura^2`

//Escribe un programa que le pida al usuario su peso y altura. El programa deberá calcular el BMI e imprimir:
//* "Bajo de peso" si el BMI < 18.5
//* "Normal" si está entre 18.5 y 24.9
//* "Sobrepeso" si está entre 25 y 29.9
//* "Obeso" si es igual o mayor a 30

const peso = prompt("DIGITE SU PESO: ")
const altura = prompt("DIGITE SU ALTURA: ")


let bmi = parseInt (peso )/ Math.pow(altura,2);
if(bmi < 18.5) {
  console.log("USTED SE ENCUENTRA BAJO DE PESO");
  document.write("USTED SE ENCUENTRA BAJO DE PESO");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("USTED SE ENCUENTRA EN UN PESO NORMAL");
  document.write("USTED SE ENCUENTRA EN UN PESO NORMAL");
} else if (bmi >=25 && bmi <= 29.9) {
  console.log("USTED SE ENCUENTRA EN SOBREPESO");
  document.write("USTED SE ENCUENTRA EN SOBREPESO");
} else if (bmi > 30) {
  console.log("USTED SE ENCUENTRA OBESO");
  document.write("USTED SE ENCUENTRA OBESO");
}
