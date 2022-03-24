//Hacer un algoritmo que lea tres notas de un alumno y muestre su nota
//definitiva teniendo en cuenta que la primera nota equivale a un 20%, la
//segunda a un 35% y la tercera un 45%.


//Desarrollo

 //Hacer nota1 = 0;
//Hacer  nota2 = 0;
//Hacer  nota3 = 0;

 //Lea nota1 * 20 %;
 //Lea nota2 * 35 %;
 //Lea nota3 * 45%;
 //Haga definitiva=(nota1 + nota2 + nota3);
 //Escriba definitiva;

console.log ("conectado!!")
alert("conectado!!")
var nota1 = parseFloat(prompt("Ingrese su primera nota"));
var not1 = nota1 * 0.20;
var nota2 = parseFloat(prompt("Ingrese su segunda nota"));
var not2 = nota2 * 0.35;
var nota3 = parseFloat(prompt("Ingrese su tercera nota"));
var not3 = nota3 * 0.45;
var definitiva = (not1  + not2 + not3);
document.write("La definitiva del estudiante  es "+ definitiva );
