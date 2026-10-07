function Estudiante(nombre, edad, nota) {
    this.nombre = nombre;
    this.edad = edad;
    this.nota = nota;
    
    this.aprobado = (this.nota >= 6);

    this.mostrarResultado = function() {
        if (this.aprobado) {
            return `El estudiante ${this.nombre} con ${this.edad} años tiene una nota de ${this.nota} y está aprobado.`;
        } else {
            return `El estudiante ${this.nombre} con ${this.edad} años tiene una nota de ${this.nota} y está desaprobado.`;
        }
    }
}

const estudiante1 = new Estudiante("Maria", 10, 10)
const estudiante2 = new Estudiante("Javier", 11, 5);
const estudiante3 = new Estudiante("Diego", 12, 1);
const estudiante4 = new Estudiante("Maruricio", 9, 8);

console.log(estudiante1.mostrarResultado());
console.log(estudiante2.mostrarResultado());
console.log(estudiante3.mostrarResultado());
console.log(estudiante4.mostrarResultado());