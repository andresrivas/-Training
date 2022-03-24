//dado un monto calcular el descuento considerado que por encima de 100 el descuento es del 10%
 //y por debajo de 100 el descuento es del 2%.

// 1. capturar monto.
// 2. capturar descuento
//3. evaluar  si el monto  es  >  100
//3.1 se aplica un descuento del  10%  (monto * 10 /100)
// 4. Si no es se aplica un descuento del 2%. (monto *2 /100)



 var monto= parseFloat(prompt("INGRESE EL MONTO "));
 var descuento;
 if (monto > 100)
 {
   descuento = monto * 10 / 100 ;
}
else {
  descuento =  monto * 2 / 100;
}
document.write(" EL VALOR DEL MONTO ES  "+ monto +"  EL DESCUENTO OPTENIDO ES " + descuento);
