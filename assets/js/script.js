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

var TipoMascota = () => {
    var tipoSelect = document.getElementById("tipo");
    var options = document.getElementsByTagName("option");
    return options[tipoSelect.value - 1].textContent;
};

let formulario = document.querySelector('form');
formulario.addEventListener('submit', datosAgregados);

function datosAgregados (event) {
    console.log("funciona");
    event.preventDefault();
    let propietario = document.getElementById('propietario').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let enfermedad = document.getElementById('enfermedad').value;
    let select = document.getElementById('tipo').value;
    let resultado = document.getElementById('resultado');
    
    switch (select) {
        case "1":
            let perro = new Perro(propietario,direccion,telefono,nombreMascota,TipoMascota(),enfermedad);
            resultado.innerHTML = "Los datos del propietario son: " + perro.datosPropietario() + ".<p> Los datos de la mascota son: <p>" + perro.datosAnimal() + " y su enfermedad es: " + perro._enfermedad;
            break;

        case "2":
            let gato = new Gato(propietario,direccion,telefono,nombreMascota,TipoMascota(),enfermedad); 
            resultado.innerHTML = "Los datos del propietario son: " + gato.datosPropietario() + ".<p> Los datos de la mascota son: <p>" + gato.datosAnimal() + " y su enfermedad es: " + gato._enfermedad;
            break;

        case "3":
            let conejo = new Conejo(propietario,direccion,telefono,nombreMascota,TipoMascota(),enfermedad); 
            resultado.innerHTML = "Los datos del propietario son: " + conejo.datosPropietario() + ".<p> Los datos de la mascota son: <p>" + conejo.datosAnimal() + " y su enfermedad es: " + conejo._enfermedad;
            break;
    }
    
}