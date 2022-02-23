var Emmanuel={
	nombre: 'Emmanuel',
	apellido: 'Carrillo',
	edad: 20,
	saludo: function(){
		console.log('Hola,Emmanuel');
	},
	hobbies: ['jugar futbol','basketball','jugar pes'],
}

var Emmanuel={
	nombre: 'Emmanuel',
	apellido: 'Carrillo',
	edad: 20,
	saludo:'Hola Emmanuel',
	hobbies: ['jugar futbol','basketball','jugar pes'],
}

Paul={
	nombre: 'Paul',
	edad: 20,
	cursando:true,
}

var alumnos=[
{
	nombre: 'Emi',
	edad: 23,
	Hobbies:['Correr','Dormir','Nadar'],
	amigos:[
	 {
		nombre: 'Martin',
	 },
	 {
		nombre: 'Leo',
	 }
	],
  },

  {
 	nombre: 'Franco',
	edad: 21,
	Hobbies:['Futbol','Golf'],
	amigos:[
	 {
		nombre: 'Emi',
	 },
	 {
		nombre: 'Jimmy',
	 },
	 {
		nombre: 'Matias',
	 }
	],
  },
];


var persona={
	nombre: 'Emmanuel',
	saludar: function(){
		console.log('Hola, Emmanuel');
	}
}


var persona={
	nombre: 'Emmanuel',
	saludar: function(){
		console.log('Hola,'+ this.nombre);
	}
}

persona={
	nombre: "Toni",
	saludar: function(){
		console.log('Hola, ' + this.nombre);
	}
}


function saludar(){
	console.log('Hola ' + this.nombre);
}

var martin = {
	nombre: 'martin',
	saludar: saludar,
} 

var manu = {
	nombre:'manu',
	saludar:saludar,
}

var agus={
	nombre: 'agus',
	saludar:saludar,
}

// Objeto global
{

Paul: 13,
nombre: 'no es magia',
array:[1,2,3],
saludar:function(){
	console.log("Hola " + this.nombre);
}

}

saludar();

var boris ={
	saludar:saludar,
}

var objeto={
	edad: 13,
	getedad: function(){
		return this.edad*2;
	}
}

objeto.getedad();

getedad: function(){
	return objeto.edad*2;
}

function getedad(){
	return this.edad*2;
}

var objeto1={
	edad:32,
	getedad:getedad,
}

var objeto2={
	edad:14,
	getedad:getedad
}