// Bucle para registro de contraseña
/*  
let password = ""

while (password != "clave") {
    password = prompt("Ingrese su contraseña").toLowerCase()
}
console.log("Contraseña correcta")

 */


//Ciclo para calcular el monto acumulado de ahorro por mes

let ahorro = parseInt(prompt("Ingrese cuanto espera ahorrar mensualmente"))

for(let i = 1; i <= 12; i++) {
    let acumulado = ahorro * i;
    console.log("Llevará ahorrada la suma de $"+ acumulado)
}