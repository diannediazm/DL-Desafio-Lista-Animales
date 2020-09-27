// Clase padre o súper clase
class Propietario {
    constructor(nombre,direccion,telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    datosPropietario(){
        return `<p>Nombre: ${this.nombre}. Su dirección es ${this.direccion} y su teléfono es ${this.telefono}`;
    }
}

// Hijo y padre
class Animal extends Propietario {
    constructor(nombre,direccion,telefono,nombreMascota,tipo){
        super(nombre,direccion,telefono);
        this.nombreMascota = nombreMascota;
        this.tipo = tipo;
    }
    datosAnimal(){
        return `El animal se llama ${this.nombreMascota} y es el tipo ${this.tipo}`;
    }
}

// Hijo Perro
class Perro extends Animal {
    constructor(nombre,direccion,telefono,nombreMascota,tipo,enfermedad){
        super(nombre,direccion,telefono,nombreMascota,tipo);
        this._enfermedad = enfermedad;
    }
    get enfermedad(){
        return this._enfermedad;
    }
    set enfermedad(nuevaEnfermedad){
        this._enfermedad = nuevaEnfermedad;
    }
}

// Hijo Gato
class Gato extends Animal {
    constructor(nombre,direccion,telefono,nombreMascota,tipo,enfermedad){
        super(nombre,direccion,telefono,nombreMascota,tipo);
        this._enfermedad = enfermedad;
    }
    get enfermedad(){
        return this._enfermedad;
    }
    set enfermedad(nuevaEnfermedad){
        this._enfermedad = nuevaEnfermedad;
    }
}

// Hijo Conejo
class Conejo extends Animal {
    constructor(nombre,direccion,telefono,nombreMascota,tipo,enfermedad){
        super(nombre,direccion,telefono,nombreMascota,tipo);
        this._enfermedad = enfermedad;
    }
    get enfermedad(){
        return this._enfermedad;
    }
    set enfermedad(nuevaEnfermedad){
        this._enfermedad = nuevaEnfermedad;
    }

}

let formulario = document.querySelector('form');
let instancias = (event) => {
    event.preventDefault();
    let propietario = document.getElementById('propietario').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;
    let mascota = new Perro(propietario,telefono,direccion,nombreMascota,tipo,enfermedad);
    
    document.getElementById('resultado').innerHTML = "Los datos del propietario son: " + mascota.datosPropietario() + ".<p> Los datos de la mascota son: <p>" + mascota.datosAnimal() + " y su enfermedad es: " + enfermedad;
}
formulario.addEventListener('submit', instancias);