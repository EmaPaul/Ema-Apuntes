function Persona(){
	this.nombre = "Juan";
	this.apellido="Perez";
};

var juan=new Persona(); 
console.log(juan);
// cuando empieza a correr el programa
// juan // el nombre del objeto 
// -----> Persona { nombre: 'Juan', apellido: 'Perez' }
///////// Y la funcion persona que con la que se a contruido el objeto
/*
que tiene nombre y apellido
*/

var juan2={
	nombre:"Juan",
	apellido:"Perez",
};

/*

juan2 // este es un objeto creado directamente.
{ nombre: 'Juan', apellido: 'Perez' }

juan // y este objeto fue creado atravez de una funcion.
Persona { nombre: 'Juan', apellido: 'Perez' } contruido con clases

*/

function auto(marca,cv,color){// contruimos la funcion
	this.marca=marca;
	this.cv=cv;
	this.color=color;
}
// arreojamos el objeto a traves de la variable
var Ferrari=new auto ("Ferrari",2000,"Rojo"); //Ferrari
//auto { marca: 'Ferrari', cv: 2000, color: 'Rojo' }

var golf= new auto("Wf",1500,"Azul");//golf
//auto { marca: 'Wf', cv: 1500, color: 'Azul' }

var audi=new auto("Audi",1500,"Verde");// audi
//auto { marca: 'Audi', cv: 1500, color: 'Verde' }


function auto(marca,cv,color){
	this.marca=marca || "Audi";
	this.cv=cv || 123;
	this.color=color || "Negro";
}

var renault = new auto();
/*
renalult
auto { marca: 'Audi', cv: 123, color: 'Negro' }

*/

function Persona(edad){
	this.edad=edad;
}

Persona.prototype.GetEdad= function() { /////// cuando se ingresa de esta manera 
	return "tiene: "+ this.edad+" años";
};

Persona.prototype.GetEdad= function() {
	return  this.edad;
};

var obj1=new Persona(24); 
var obj2=new Persona(34);
var obj3=new Persona(45);
/*
> obj3.GetEdad=function() {return this.edad/2}
[Function (anonymous)]
-----------------------------------------------
obj3.GetEdad()
22.5
*/

/*
> obj1
Persona { edad: 24, GetEdad: [Function (anonymous)] }
> obj2
Persona { edad: 34 }

entonces obj2 va al prototipo
y obj3 no va al prototipo 
porque ya lo encuentra en la funcion

*/

var Persona={
	edad:"defecto",
	getEdad:function(){
		return this.edad;
	},
}

var Paul= Object.create(Persona);
/*
Uso del object create
var Paul= Object.create(Persona);
undefined
> Paul
{}
> Paul.edad
'defecto'
> Paul.getEdad()
'defecto'
 Paul.__proto__

{ edad: 'defecto', getEdad: [Function: getEdad] }

// pero cuando agregamos un valor
> Paul.edad=21
21
> Paul.getEdad()
21

*/

class Persona{
	constructor (nombre,apellido){
		this.nombre=nombre;
		this.apelldo=apellido;
	}

	getNombre (){
		return this.nombre;

	}

	saludar(){
		return "Hola "+this.nombre;
	}
}

var Emma=new Persona("Emmanuel","Carrillo");

// al correr el programa
/*
> Emma
Persona { nombre: 'Emmanuel', apelldo: 'Carrillo' }
> Emma.__proto__
{}
> Emma.saludar()
'Hola Emmanuel'
> Emma.getNombre()
'Emmanuel'
>

*/
// super : Se uiliza para llamar funciones del padre de un objeto

class Empleado extends Persona{
	constructor(nombre,apellido,empleo,sueldo){
		super(nombre,apellido);
		this.empleo=empleo;
		this.sueldo=sueldo;
		
	}
}

var Emma=new Empleado("Emmanuel","Carrillo","Desarrollador",6000);

/*
 Emma
Empleado {
  nombre: 'Emmanuel',
  apelldo: 'Carrillo',
  empleo: 'Desarrollador',
  sueldo: 6000
}

 Emma.saludar()
'Hola Emmanuel'

*/