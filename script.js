
function recargo(cantCuotas,precio){  //Calculo de recargos en cuotas sobre un monto determinado.
    let precioCuota =0;

        switch (cantCuotas){
        
        case 1: alert("El precio final es de $" + (precio.toFixed(2))) 

        break;

        case 3: precio = precio*1.05; //Recargo del 5%
                precioCuota = precio/3
                alert("El precio final es de $" + (precio.toFixed(2)) + " en 3 cuotas de $" + (precioCuota.toFixed(2)))
        break;
        
        case 6: precio = precio*1.10; //Recargo del 10%
                precioCuota = precio/6
                alert("El precio final es de $" + (precio.toFixed(2)) + " en 6 cuotas de $" + (precioCuota.toFixed(2)))
        break;
            
        }
}

function descuento(banco,precioDesc){ //Calculo del precio de un producto en función de descuentos bancarios.
    switch (banco){
        case 1:
                precioDesc = precioDesc*0.95; //Descuento del 5%
        break;
        case 2: 
                precioDesc = precioDesc*0.90; //Descuento del 10%
        break;
        
        default: precioDesc = precioDesc*1; //No hay descuento
        break;
   
    }
    return precioDesc;
}

class Producto {     //Creo una clase Producto
        constructor(nombre, precio){
                this.nombre = nombre;
                this.precio = Number(precio);
        }
}

let n = Number(prompt("Ingrese la cantidad de productos a comprar")) // Ingreso la cantidad de productos a comprar

const Productos = [] // Creo un array vacio

for (let i=0; i<n; i++){   
        Productos.push( new Producto(prompt("Ingrese el nombre del producto " + (i+1)),Number(prompt("Ingrese el precio del producto número " + (i+1))))) //Cargo 'n' precios de productos
        while(Productos[i] <= 0){
                alert("Ingrese un precio mayor que cero")
                Productos[i].precio = Number(prompt("Ingresa el precio del producto " + (i+1)))
        }
}

console.log(Productos) // Muestro por consola el array completo de Productos

console.log(Productos.filter((prod) => prod.precio<1000)) // Muestro por consola los Productos del array con precio menor a $1000

let total = Productos.reduce((sumatoria,{precio}) => sumatoria + parseInt(precio),0) //Sumo todos los precios del array de productos

alert ("El precio total en su carrito de compras es de $" + total)

let cantCuotas = Number(prompt("Ingresa la cantidad de cuotas a pagar"))
       while(cantCuotas != 1 && cantCuotas !=3 && cantCuotas !=6 ){
           alert("Ingrese un número de cuotas igual a 1, 3 o 6")
          cantCuotas = Number(prompt("Ingresa la cantidad de cuotas a pagar"))
      }

let banco = Number(prompt("Ingresá el banco de la tarjeta a abonar. (Tenemos descuentos con icbc (1) y bbva (2) )."))
    
let precioNuevo = Math.ceil(descuento(banco,total));

recargo(cantCuotas, precioNuevo); //Aplico el % de recargo al precio con descuento ya aplicado
 
