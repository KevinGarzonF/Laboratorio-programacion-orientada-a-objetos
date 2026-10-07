function Mascota(nombre,especie,edad,peso){
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;

    this.presentarse = function() {
        return `El nombre del animal es ${this.nombre}. Se trata de un ${this.especie}, tiene ${this.edad} años y pesa ${this.peso} kilos.`;
    }
}

const animal1 = new Mascota("Arturo", "Gato", 2, 10);
const animal2 = new Mascota("Dante", "Perro", 8, 15);
const animal3 = new Mascota("Perry", "Ornitorrinco", 10, 20);

console.log(animal1.presentarse());
console.log(animal2.presentarse());
console.log(animal3.presentarse());