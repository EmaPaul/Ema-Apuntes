//1 

// nos pide ingresar un nombre en minusculas y devolverlo con la primera letra del nombre
// en mayusculas.

// en esta primera parte ponemos una funcion
function dar_un_usuario(usuario){
	return usuario;
}

function nombre(usuario,cb){// entonces con esta invocamos a la funcion a traves de un callback
	return cb(usuario.charAt(0).toUpperCase()+usuario.slice(1));
}

// charAt:detecta los elementos de un string como si fuera un array.
// toUpperCase: devolver el valor de una string en mayusculas.
// slice:devuelve una copia plana de los elementos especificados del array original. 

// o tambien directamente

function primera_letra_del_nombre_con_mayuscula(nombres){
	return nombres.charAt(0).toUpperCase()+nombres.slice(1);
};

/*
porque ejemplo digamos que nombres="mati"

que pasa si slice tiene un valor de 0

Mmati--> proviene de colocar nombres.charAt(0).toUpperCase()+nombres.slice(0);
que lo que hace es mostrar con el comando charAt() y toUpperCase() la primera letra que es m pero en mayuscula,
agregando las demas letras desde el iterador 0 .

Ahora que sucede cuando el valor de slice es 1

Mati--> en este caso lo que pasa es lo siguiente al tener la Mmati cuando el slice tiene el valor de 1
lo que hace es tomar desde la m minuscula hasta el final y convinados con los comandos charAt y toUpperCase
hacemos que la letra m que ahora esta en el iterador 0 se mayuscula.

		
*/

//---------------------------------------------------------------------------------------------------------------

//2

//CallBack: es invocar una funcion a traves de un valor

function decir_me_gustas_a_una_persona(nombre){ // creamos una funcion
	return "Me gustas "+nombre;
}


function como_invocar_a_un_callback(persona,cb){// creamos una funcion donde vamos a invocar a la funcion que 
	return cb(persona);// creamos anteriormente.
}

como_invocar_a_un_callback("Pancracia",decir_me_gustas_a_una_persona);// instaciamos
//------------------------>"ponemos un valor", "colocamos el nombre de la funcion a invocar";

// como seria en formula:

function invocando_un_callback(callback){
	return callback("aqui iria el valor que vamos a poner");
}

//--------------------------------------------------------------------------------------------------------------

//3
//parseInt: convierte cualquier a string numerica a un valor entero.

// la operacion puede ser una suma,resta,multiplicacion,division,etc.

function sumarnumeros(numero1,numero2){// invocamos una funcion
	return parseInt(numero1)+parseInt(numero2);// ponemos que va retornar la suma de los numeros ingresados como
}// argumentos

function hacer_la_operacion(nro1,nro2,cb){// se hace el callback
	return cb(nro1,nro2);//y ponemos los valores que vamos a utilizar para invocar la funcion dentro del cb
}

hacer_la_operacion("15","12",sumarnumeros);// instaciamos y debe invocar la funcion para sumar

//----------------------------------------------------------------------------------------------------------------

//4

//opcion 1
function sumaunarray(numeros,cb){ //colocamos la funcion
	var sumadenumeros=numeros.reduce(function(acumulado,elemento){// y con el comando reduce
		return acumulado+elemento;// hacemos que todos los elementos del array se sumen
	},0);// inicializamos el acumulado en 0
	cb(sumadenumeros); // pasamos a "cb" el valor de la suma de los numeros del array
}

// llamada desde la funcion
//sumaunarray(numeros="Array",cb="Funcion")
sumaunarray(numeros=[1,2,3,4],function(){ 
	var sumadenumeros=numeros.reduce(function(acumulado,elemento){
		return acumulado+elemento;
	},0);
	console.log(sumadenumeros);
})

// y esto aplica para las otras 2 soluciones

//opcion 2
function sumaunarray2(numeros,cb){// ponemos la funcion
	cb(numeros.reduce(function(acumulado,elemento){ // el cb puede ir al inicio comando reduce
		return acumulado+elemento;
	},0));//y se le pone todas las especificaciones
}

// llamada desde la funcion
// al poner los dichos elementos
sumaunarray2(numeros=[1,2,3,4],function(){
	console.log(numeros.reduce(function(acumulado,elemento){//ponemos el console.log al empezar
		return acumulado+elemento;
	},0));// con todas las especificaciones
})// y nos devuelve el la suma.


//opcion3

function sumaunarray3(numeros,cb){// creamos la funcion

	var suma=0;

	for(var i=0;i<numeros.length;i=i+1){// bucle for 
		suma=suma+numeros[i];// le decimos que sume todos los elementos del array
	}// que estan identificados con un iterador i

	cb(suma); 
}

// se llama desde la funcion 
// aqui vendria a ser de la misma forma solo que utilizamos un ciclo for
sumaunarray3(numeros=[1,2,3,3,4],function(){
	var suma=0;
	for(var i=0;i<numeros.length;i=i+1){
		suma=suma+numeros[i];
	}
	console.log(suma);
})

// esta es una forma de instanciacion directa

// otra forma es la siguiente

function versuma(numeros){
	console.log(numeros);
}

var numeros=[1,2,3,3,4]

sumaunarray3(numeros,versuma);
// esta forma funciona para todas las opciones solo que es mas directa


//-----------------------------------------------------------------------------------------------------

//5

// podemos poner cb 3 veces

// opcion 1: poniendo una variable adicional y poniendo dentro de ella el forEach
function iterar_matriz(array,cb){
	var valoresdea=array.forEach(function(elemento){
		cb(elemento);;
	})
}

// opcion 2: poniendo un bucle for para que itere y muestre los elementos del array
function iterar_matriz2(array2,cb){
	for(var i=0;i<array2.length;i=i+1){
		cb(array2[i]);
	}
}

//opcion 3: poniendo directamente el forEach que tendria el mismo funcionamiento que la opcion 1

function iterar_matriz3(array3,cb){
	array3.forEach(function(elemento){
		cb(elemento);
	})
}

// funcionamiento

// ponemos una funcion para invocarla y que nos muestre los numeros
function arrayimp(numeros){
	console.log(numeros);
}

// y lo que hace esto es mostrar los elementos del array que puede funcionar 
// con cualquiera de las 3 funciones.
var numeros=[1,2,3,4,5];// ponemos un array
iterar_matriz(numeros,arrayimp)// y atraves de cualquiera de las 3 funciones
// en este caso es la primera instanciamos y ponemos el array y la funcion ultima
// que se creo para invocar.

// otra forma mas directa

iterar_matriz([1,2,3,4,5],function arrayimp(numeros){
	console.log(numeros);
})

// Tambien es lo mismo

iterar_matriz(array=[1,2,3,4,5],function arrayimp(numeros){
	console.log(numeros);
})


//----------------------------------------------------------------------------------------------------

//6

function nuevoA(array,cb){// ponemos la funcion
	var nuevoArray=[];// creamos un nuevo array

	array.map(function(elemento){// ponemos un comando map con un array y una funcion
		nuevoArray.push(cb(elemento))// ponemos con el comando push agregar los elementos de array
	})// al nuevoArray

	return nuevoArray;// retornamos
}


var array=[1,2,3,4,5];// ponemos un array

function imprimir (nuevoArray){// ponemos una funcion para que sea invocada por los valores del array
	return nuevoArray;// retornamos el nuevo array 
};
nuevoA(array,imprimir);// y instaciamos

// otra forma mas directa 

// cualquiera de las 2 funciona sea array= o solamente colocando el array
nuevoA([1,2,3,4,5],function imprimir (nuevoArray){  
	return nuevoArray;
});

nuevoA(array=[1,2,3,4,5],function imprimir (nuevoArray){
	return nuevoArray;
});


//----------------------------------------------------------------------------------------------

//7

//filter: El método filter() 
//crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

function filtrarpalabras(array){ // creamos la funcion
	var nuevoArray=[];// ponemos un nuevo array pero vacio

	var valores=array.filter(function(x){// con una ayuda de una variable invocamos el comando filter
		if(x.charAt(0)==="a"){// y ponemos que si alguno de los elementos del array empieza con "a"
			nuevoArray.push(x);// entonces se van al nuevo array
		};
	});

	return nuevoArray;// y al final retornamos el array
}

// instanciar
var array=["agua","soldado","audios","cajas"];

function imprimir_palabras(nuevoArray){ // ponemos una funcion
  return nuevoArray;// y le pedimos que nos retorne el array
}

filtrarpalabras(array,imprimir_palabras)// instanciamos con los valores del array
// para invocar la funcion de imprimir

filtrarpalabras(["agua","soldado","audios","cajas"])// o tambien directamente colocando el array

//----------------------------------------------------------------------------------------------------
