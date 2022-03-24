//Hacer un programa que lea tres notas de un alumno, que muestre su puntaje, su promedio y
//si está aprobado o desaprobado. Además si su promedio es superior a 4 que sea excelente y si
//es inferior a 3 que sea insuficiente.


//Desarrollo

 //Hacer nota1 = 0;
//Hacer  nota2 = 0;
//Hacer  nota3 = 0;

 //Lea nota1 ;
 //Lea nota2 ;
 //Lea nota3 ;
 //Haga definitiva=(nota1 + nota2 + nota3)/3;
 //si definitiva >= 4.0
 //escriba  definitiva es; y su promedio es excelente
 // sino definitiva <= 3.9
 //escriba  definitiva es; y su promedio es  insuficiente
 // fin

 console.log ("conectado!!")
 alert("conectado!!")
 var nota1 = parseFloat(prompt("Ingrese su primera nota"));
 var nota2 = parseFloat(prompt("Ingrese su segunda nota"));
 var nota3 = parseFloat(prompt("Ingrese su tercera nota"));
 var definitiva = (nota1  + nota2 + nota3)/3;
 if (definitiva >= 4.0)
 {
   document.write("La definitiva del estudiante  es "+ definitiva +  " EXCELENTE");
 }
 else if  (definitiva <= 3.9)
 {
document.write("La definitiva del estudiante  es "+ definitiva +  " INSUFICIENTE");
 }
 else {
   document.write("LAS NOTAS DEL ESTUDIANTE NO COINCIDEN");
 }
