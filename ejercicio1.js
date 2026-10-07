function Tienda(marca, procesador, ram, precio) {
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.precio = precio
}
const producto1 = new Tienda("Lenovo", "AMD", 16, 3000000);
const producto2 = new Tienda("HP", "I5", 8, 1500000)
const producto3 = new Tienda("MSI", "RYZEN", 16, 4000000);

console.log(producto1);
console.log(producto2);
console.log(producto3);

