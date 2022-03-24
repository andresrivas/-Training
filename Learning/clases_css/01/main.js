var Peso = prompt("Digita tu peso en kg(ejemplo:20)");
var Altura = prompt("Digite Su Altura en metros(ejemplo:1.8)");
var total;

total = Peso/(Altura*Altura);
console.log("Tu BMI es:" + total);

// if (total *[18.5 , 24.9] - total >- && total <= 24.9   )

if (total > 19  )
{
    console.log=("Bajo Peso");
}else {
    if(total < 25)
    {
        console.log("Normal");
    }else {
        if(total < 30)
        {
            console.log("Sobrepeso")
        }else{
            console.log("obeso")
        }
    }

};