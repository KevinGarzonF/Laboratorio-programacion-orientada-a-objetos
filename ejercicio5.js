const prompt = require("prompt-sync")();

function Vehiculo(marca, color, puertas, precio, año) {
    this.marca = marca;
    this.color = color;
    this.puertas = puertas;
    this.precio = precio;
    this.año = año;
    this.vendido = false;
    
    this.pintar = function(nuevoColor) {
        const colorAnterior = this.color; 
        this.color = nuevoColor;          
        console.log(`El carro de la marca ${this.marca} cambio de color de ${colorAnterior} a ${this.color}.`);
    };
    this.detallesVehiculo = function() {
        return `${this.marca} ${this.color} (${this.año})  Puertas: ${this.puertas}  Precio: $${this.precio}`;
    }
    this.vender = function() {
        if (!this.vendido) {
            this.vendido = true;
            console.log(`El carro de la marca ${this.marca} ya no está disponible.`);
        } else {
            console.log(`El carro de la marca ${this.marca} ya había sido vendido antes.`);
        }
    };
    
}
const vehiculos = [];

for (let i = 1; i <= 3; i++) {
    console.log(`Ingresando datos del vehículo ${i}...`);
    
    const marca = prompt(`Vehículo ${i} - Ingrese la marca del vehiculo:`);
    const color = prompt(`Vehículo ${i} - Ingrese el color del vehiculo:`);
    const puertas = parseInt(prompt(`Vehículo ${i} - Ingrese el número de puertas del vehiculo:`));
    const precio = parseFloat(prompt(`Vehículo ${i} - Ingrese el precio del vehiculo:`));
    const año = parseInt(prompt(`Vehículo ${i} - Ingrese el año del vehiculo:`));

    const nuevoVehiculo = new Vehiculo(marca, color, puertas, precio, año);
    vehiculos.push(nuevoVehiculo);
}



vehiculos[0].pintar("rosa");


vehiculos[1].vender(true);

console.log(vehiculos[2].detallesVehiculo());