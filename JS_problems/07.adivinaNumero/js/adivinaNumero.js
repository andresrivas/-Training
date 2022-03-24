//# Adivina el Número

//Escribe un programa que piense un número de forma aleatoria del 1 al 10 y
//le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!",
//de lo contrario debe imprimir "Lo siento, intenta nuevamente!"

//1. crear una variable constante
//2.crear un punto flotante de 1 a 10 (pensar numero)Math.random())*10
//3.solicitar al usuario el numeo
//4.si (random===numero realice
//  4.1 imprimir MENSAJE
//5. si  no
//5.1 imprimir mensaje
const random = Math.floor((Math.random())*10);

const numero=parseInt(prompt('POR FAVOR INGRESAR UN NUMERO DE 1 A 10'));

if(random===numero){
  console.log("FELICITACIONES, ESE ERA! " + random);
  document.write("FELICITACIONES, ESE ERA! " + random);
}else{
   console.log("LO SIENTO, INTENTA DE NUEVO! "  + random);
   document.write("LO SIENTO, INTENTA DE NUEVO! " + random);
}
