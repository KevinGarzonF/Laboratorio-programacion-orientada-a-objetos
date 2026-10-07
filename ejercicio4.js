
function Libro(titulo, color, genero, prestado = false) {
    this.titulo = titulo;
    this.autor = color;
    this.genero = genero;
    this.prestado = prestado;

    this.prestar = function() {
        if (!this.prestado) { 
            this.prestado = true;
            console.log(`el libro ${this.titulo} puede ser prestado`)
        } else {
            
            console.log(`lo siento, el libro ${this.titulo} ya esta prestado`)
        }
    };
    this.devolver = function() {
        if (this.prestado) { 
            
            this.prestado = false;
            console.log(`El libro ${this.titulo} fue devuelto`);
        } else {
            
            console.log(`El libro ${this.titulo} no se pudo devolver`);
        }
    }
}

const libro1 = new Libro("La isla de las palabras", "Rojo", "Infantil");
const libro2 = new Libro("El libro de las ciudades", "azul", "Infantil");
const libro3 = new Libro("Escalera al cielo", "negro", "Trajedia");


libro1.devolver(); 
libro1.prestar();  
libro2.prestar();  
libro2.devolver();
libro3.prestar();
libro3.devolver(); 
