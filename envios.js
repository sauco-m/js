
let pesoingresado = prompt("ingrese el peso en kg de la encomienda que quiere enviar")
let pesoMedio = 1000
let pesoGrande = 2500
if (pesoingresado <50)
console.log (`su encomienda se considera mediana, por lo tanto el precio es de ${pesoMedio} pesos`) 
if (pesoingresado >=50)
console.log(`su encomienda se considera grande, por lo tanto el precio es de ${pesoGrande} pesos`) 

let ganador = false
let contador = 1

do{
    let descuento = prompt(" descuento especial si puede nombrar al jugador que hizo el segundo gol en la final de la copa del mundo ")
        if(descuento.toLowerCase() == "di maria"){
            ganador = true
            console.log("felicidades has ganado un descuento especial")
        }else{
            console.log(`la respuesta : ${descuento} no es correcta. Era tu chance N°${contador}`)
            contador = contador + 1
            if(contador == 4){
                console.log ("ya tuviste tus chances, andá pa allá bobo")
            }
}
}while(!ganador && contador < 4)
