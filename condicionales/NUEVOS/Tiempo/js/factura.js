//se trata de escribir un algoritmo que permita emitir la factura correspondiente a una compra de un
//un articulo determinado, de que se adquieren una o varias unidades. el IVA es del 15% y si el precio bruto (precio venta mas IVA)
//es mayor de 50.000 pesos se debe realizar un descuento del 5%.

//se definen variables precio, numArticulos, precioVenta, Descuento.
//se solicita al usuario el precio del producto y cantidad adquirida.
//el precioVenta = precio * numero de numArticulos
// se calcula el iva = precio precioVenta * iva.
// si el precioVenta >= 50000  entonces calcularia
// descuento = (precioVenta * 5)/ 100
//si no
//descuento= 0
// total = preciobruto-descuento
//impromir precioVenta, IVA, preciobruto,, descuento, total de produccto

 var precio = parseInt(prompt("INGRESE PRECIO VENTA PRODUCTO"));
 var articulos = parseInt(prompt("INGRESE CANTIDAD DE PRODUCTOS COMPRADOS "));
 var precioVenta = precio * articulos;
 var iva = precioVenta * 0.15;
 var precioBruto = precioVenta + iva;
 var total;
 if (precioVenta >= 50000)
 {
  var descuento = (precioBruto * 5)/100 ;
}
else {
  descuento = 0;
}
total = precioBruto - descuento;

document.write("EL TOTAL DE LOS PRODUCTOS ADQUIRIDOS ES    " + total + "  CON UN PRECIO DE VENTA DE    " + precioVenta + "   CON UN INCREMENTO DE IVA  " + iva + "   CON EL VALOR CON IVA SOBRE PRODUCTO DE 0.15 % "  + "   CON UN DESCUENTO DE LA VENTA SOBRE " + descuento + "  GRACIAS POR SU COMPRA   ");
