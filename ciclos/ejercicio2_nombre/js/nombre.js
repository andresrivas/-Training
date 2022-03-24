document.write("Hola Mundo<br>");
document.write("Hola Mundo<br>");
document.write("Hola Mundo<br>");
document.write("Hola Mundo<br>");
document.write("Hola Mundo<br>");


// ciclo while - mientras
// en programacion el cero cuenta
var num = 0;
//0, 1, 2, 3, 4
while (num < 10){
    document.write("<p style='color: blue'>HOLA MUNDO</p>");
    num = num + 1; // num += 1; num++;  siempre modificar el valor de la variable,
     // para que garantizar que la condicion en algun momento
     // legue a ser falsa
}

// var nombre = "yony";
// while (nombre !== "yonyyonyyonyyony"){
//     document.write(`${nombre}`);
//     nombre + = nombre; // num += 1;   siempre modificar el valor de la variable,
//      // para que garantizar que la condicion en algun momento
//      // legue a ser falsa
// }
// document.write(`<br>${nombre}<br>${num}`);// interpolacion
// document.write("<br>"+ nombre + "<br>" + num);// concatenacion

var boolean = true
while (boolean) {
    document.write("HOLA MUNDO");
    boolean = false;
}

while (false) {
    console.log("ADIOS MUNDO");
}

var num = 5;
while (num > 1){
    document.write("<p style='color: green'>DECREMENTANDO</p>");
    num--;
}
// ciclo for
for (var i = 0; i < 5; i ++) {//
    document.write("<p style='color: cyan'>Esto es un for</p>");
}
