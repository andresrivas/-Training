console.log ("conectado!!")
alert("conectado!!")

var precioProducto = parseInt(prompt("Ingrese el valor del Producto "));
var valorUsuario = parseInt(prompt("Ingrese el valor dado por Usuario"));
var mensaje;
var cambio;

if ( precioProducto > valorUsuario){
  cambio =    precioProducto - valorUsuario;
  mensaje =  ` Falta dinero de CAMBIO  ${cambio}`;
} else if (precioProducto < valorUsuario) {
   cambio =  valorUsuario - precioProducto;
   mensaje =  `SU CAMBIO ES ${cambio}`;
 } else {
   mensaje ="No hay devolucion de cambio";
 }
 document.write("<h1>"+ mensaje +"</h1>" );
