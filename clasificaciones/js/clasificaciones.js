var clasificaciones = ["ana", "oswaldo", "raul", "celia", "maria", "antonio"]
documen.write("clasificaciones inicial <br>" + calificaciones);

var pos_celia = clasificaciones.indexOf("celia");
var eliminado = clasificaciones.splice(pos_celia, 1);

var pos_raul = clasificaciones.indexOf("celia");
var eliminado = clasificaciones.splice(pos_raul, 1);


clasificaciones.splice(2 , 0, "celia");
clasificaciones.splice(4, 1,);
clasificaciones.splice(5, 1,);
clasificaciones.splice(1, 0, "roberto", "amaya");
clasificaciones.splice(0, 0, "marta");
console.log();
