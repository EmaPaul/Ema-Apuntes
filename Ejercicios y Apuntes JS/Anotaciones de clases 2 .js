function decir_hola_al_usuario(usuario){ // se crea una funcion donde le decimos "Hola" al usuario
	return "Hola "+usuario+"!";//<------ Llamando a la primera funcion
};

function decir_adios_al_usuario(usuario){// se crea una funcion donde le decimos "Adios" al usuario
	return "Adios "+usuario+"!";//<---- llamando a la segunda funcion
};

// cb ---> CallBack // llama a las funciones que vamos a utilizar ( otras palabras tambien "invoca")

function crear_saludo(usuario,cb){
	return cb(usuario);// callback("llamando al usuario de la funcion")
}


//          (nombre,decir_hola_al_usuario) // llamando a la funcion de saludo
crear_saludo("Dan",decir_hola_al_usuario); // Hola Dan!
//          (nombre,decir_adios_al_usuario) // llamando a la funcion de despedida
crear_saludo("Dan",decir_adios_al_usuario);// Adios Dan!

//------------------------------------------------------------------------------------------------

// formas de llamar a la funcion

function saludar(parametro){
	return "Hola "+parametro;
}

function crear_saludo(usuario,func){
	return func(usuario);
}

crear_saludo("Emmanuel",saludar);

crear_saludo("Emmanuel",function saludar(parametro){return "Hola "+parametro;});

crear_saludo(15,function saludar(parametro){return parametro*10});

function multiplicarpor10(parametro){
	return parametro*10;
}

crear_saludo(15,multiplicarpor10);

//----------------------------------------------------------------------------

// para entrar en concepto de for each
function crear_saludo(usuario,password,cb){
	return cb(usuario,password);// por ejemplo si quisieramos llamar al usuario y su password
};

crear_saludo(15,function saludar(parametro,parametro2){return parametro*10});
// al momento de crear el saludo tenfo que tener en la funcion 2 parametros que es uno para 
// el usuario y otro para el password pero como para que reciba ambos valores tenemos que 
// documentarlos para que pueda recibir los valores de usuario y password.

// ejemplo

var alumnos=['mati','leo','tincho','emi','Jimmy','franco'];

// sin callback

for(var i=0;i<alumnos.length;i=i+1){
	console.log(alumnos[i]);
}

// con callback

alumnos.forEach(function(elemento,indice){
	console.log(elemento+" ---> "+indice)
});


alumnos.forEach(function(elemento,indice){console.log(elemento)});

//----------------------------------------------------------------------------

// maps

var numeros=[1,5,10,15];

// con callback

// sin indice
var doble=numeros.map(function(x){
	return x*2;// que nos retorne los valores del array pero multiplicados por 2
});


// si es con el indice
var doble=numeros.map(function(x,indice){
	return x*2+" ---> "+indice;// que nos retorne los valores del array multiplicados por 2
});// pero con el indice del array que seria su iterador

//sin callback

var arrayNuevo=[];// declaramos un array nuevo

for(var i=0;i<numeros.length;i=i+1){// iteramos el array
	arrayNuevo.push(numeros[i]*2);// agregamos al nuevo array los elementos de array anterior
}// pero multiplicados por 2

// ejemplo con el var de alumnos

var alumnos=['mati','leo','tincho','emi','Jimmy','franco'];

String.prototype.capital=function(){
	return this.charAt(0).toUpperCase()+this.slice(1);// porque en el slice se pone 1?
}
/*
porque si ponemos 0 entonces nos retornara de esta manera
[ 'Mmati', 'Lleo', 'Ttincho', 'Eemi', 'JJimmy', 'Ffranco' ] , lo que pasa aqui
es que cuando ponemos charAt hacemos que el string se vea como un array entonces le decimos
que la primera letra del array se convierta en mayuscula , que se hace con el comando
toUpperCase() y sumandole mas el slice que muestra una cierta parte del array.

caso contrario:
si ponemos 1 entonces que pasa
[ 'Mati', 'Leo', 'Tincho', 'Emi', 'Jimmy', 'Franco' ]
se elimina la letra minuscula porque esta letra esta en el iterador 1, recordando que 
en un array el iterador empieza desde 0 entonces le decimos this.slice(1) ,porque lo que decimos
es que por ejemplo Mmati sea solamente mati y con los comandos anteriores colocados el programa
indetifica que la primera letra colocada con el iterador 0 se conviertira en mayuscula , lo que hara
que sea ahora Mati es decir la m es esta dentro del iterador 0. 

*/

//con callback
var nuevosalumnos=alumnos.map(function(elemento,indice){
	return elemento.capital();
})

//sin callback

var arrayNuevo=[]

for(var i=0;i<alumnos.length;i=i+1){
	arrayNuevo.push(alumnos[i].capital());
};

// otro ejemplo

var numeros=[1,5,10,15];

var par=numeros.map(function(x) {
	if(x%2===0){
		return x*2;
	};
});

//------------------------------------------------------------------------------------------

//Reduce

var numeros=[1,2,3,4,5,6,7];

// sin callback

var suma=0;// le damos un valor a la suma de 0

for(var i=0;i<numeros.length;i=i+1){// iteramos el array
	suma=suma+numeros[i];//sume todos los elementos del array
}

// con callback

var sumareduce=numeros.reduce(function(acumulador,elemento){// invocamos la funcion 
	return acumulador+elemento;// con los valores del array
},0);// y le pedimos que nos devuelva el acumulador mas el elemento
// y da el 28 que en si es el acumlado de todo.

/*
lo que hace la funcion reduce es lo siguiente:

0 es el valor inicial del acumulador
asi que:

el acumulador=0 entonces 
retorna 0+1 que donde el 1 es el primer elemento del array

despues el acumulador=1 entonces
retorna 1+2 que donde el 2 es el segundo elemento del array

despues el acumulador=3 entonces
retorna 3+3 que donde el 3 es el tercer elemento del array 

y asi sucesivamente hasta el final 

*/

// si nos pidiera multiplicar

var sumareduce=numeros.reduce(function(acumulador,elemento){
	return acumulador*elemento;
});