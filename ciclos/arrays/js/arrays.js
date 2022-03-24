// arreglo, array
var array = [1, "Pedro", true, false, "Juan", ["yony", "arley"]]

console.log(array);

//nombre_arreglo[posicion]

var frutas = ["naranja", "uva", "pera", "mandarina", "banano", "coco", "maracuya"];
// longitud 7
// posiciones 6

console.log(frutas[0]);
console.log(frutas[2]);
console.log(frutas[6]);

// Array tipo de dato objeto, atributos (propiedades) y metodos
// atributos, son datos que describen ese objeto
// metodos, son acciones que puede el realizar el objeto

// longitud, cuantos datos hay en el array
console.log(frutas.length);

// Quiero 2 en el HTML cada nombre de las frutas y que se vea en una lista ordenada

/*
1- nombra una variable que represente la posicion que quiero imprimir, posicion
2- inicializar posicion en cero
3- evaluar la condicion , posicion < frutas.length si es verdadero
    4- imprimir el valor del array que esta en la posicion
    frutas[posicion]
    5- incremento posicion en 1
    6- volver al paso 3
7- si es falso, terminar
*/

//1
var posicion;
//2
posicion = 0;
//3
var html = "<ol>";
while (posicion < frutas.length){
    //4
    html += `<li>${frutas[posicion]}</li>`;
    //5
    posicion++;
}

html += "</ol>";
document.write(html);

var html2 = "<ul>";
for (var pos=0; pos < frutas.length; pos++){
    html2 += `<li>${frutas[pos]}</li>`;
}
html2 += "</ul>";
document.write(html2);

// cambiar elementos
// nombre_arreglo[posicion] = valor;
var frutas2 = ["naranja", "uva", "pera", "mandarina", "banano", "coco", "maracuya"];

/*
 (a + b)**2

 a = 5 , b = 7

 (5 + 7)**2
*/
console.log("antes", frutas2)
frutas2[3] = "durazno";
console.log("despues", frutas2)

frutas2.push("cereza") // inserta al final
console.log("despues", frutas2)

frutas2.splice(2, 0, "guanabana") // inserta en una posicion dada, el segundo parametro siempre debe ser cero
console.log("despues", frutas2)
frutas2.splice(4, 3)// elimina elementos se le da una posicion inicial y el numero de elementos, si solo se le da la posicion inicial elimina a partir de ella
console.log("despues", frutas2)

frutas2.splice(4)
console.log("despues", frutas2).js
