// Clase padre o súper clase
class Propietario {
    constructor(nombre,direccion,telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    datosPropietario(){
        return `El propietario se llama ${this.nombre}. Su dirección es ${this.direccion} y su teléfono es ${this.telefono}`;
    }
}

// Hijo y padre
class Animal extends Propietario {
    constructor(nombre,direccion,telefono,nombreanimal,tipo){
        super(nombre,direccion,telefono);
        this.nombreanimal = nombreanimal;
        this.tipo = tipo;
    }
    datosAnimal(){
        return `El animal se llama ${this.nombreanimal} y es el tipo ${this.tipo}`;
    }
}

// Hijo
class Perro extends Animal {
    constructor(nombre,direccion,telefono,nombreanimal,tipo,enfermedad){
        super(nombre,direccion,telefono,nombreanimal,tipo);
        this.enfermedad = enfermedad;
    }
}

// Hijo
class Gato extends Animal {
    constructor(nombre,direccion,telefono,nombreanimal,tipo,enfermedad){
        super(nombre,direccion,telefono,nombreanimal,tipo);
        this.enfermedad = enfermedad;
    }
}

// Hijo
class Conejo extends Animal {
    constructor(nombre,direccion,telefono,nombreanimal,tipo,enfermedad){
        super(nombre,direccion,telefono,nombreanimal,tipo);
        this.enfermedad = enfermedad;
    }
   
}

var conejo1 = new Conejo('Dianne','Ñuñoa','9999','Canela','Perro','mañosa');
console.log(conejo1);