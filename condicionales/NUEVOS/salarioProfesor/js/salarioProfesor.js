//A un profesor le pagan según sus horas trabajadas  y una tarifa de pago por hora
//Si la cantidad de horas trabajadas es mayor a 40 horas, la tarifa se incrementa en un 50 % para
//las horas extras. Calcular el salario del profesor dadas las horas trabajadas y la tarifa.

// 1. capturar horas trabajadas.
// 2. capturar tarifa
//3. evaluar  si las horas trabajadas son mayores a 40 (horas trabajadas >40)
//3.1 si es asi  se incremneta 50% las horas extras (horas trabajadas - 40) * (tarifa * 1.50)
//3.2 al valor anterior se le suma las horas normales por la tarifa normal (40 * tarifa)
// 4. Si no es asi se calcula el valor normal. (horas trabajadas * tarifa)



 var horasTrabajadas = parseFloat(prompt("Ingrese Cantidad de Horas Trabajas"));
 var tarifa = parseFloat(prompt("Ingrese Tarifa "));
 var valorTotal;
if (horasTrabajadas > 40) {
  var horasExtras = horasTrabajadas - 40;
  var tarifaHoraExtra = tarifa * 1.50;
  var valorIncremento =  horasExtras * tarifaHoraExtra;
  valorTotal = (40 * tarifa) + valorIncremento;
}
else {
  valorTotal = horasTrabajadas * tarifa;
}
console.log("el valor a pagar es " +  valorTotal);
