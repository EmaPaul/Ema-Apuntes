//1

function devolver_el_primer_elemento(array){/// segun la funcion
 //nos devuelve el primer elemento
  // var array=[1,2,3,4] // 1
	return array[0];
}

//--------------------------------------------------------------------

//2

function devolver_el_ultimo_elemento(array){
  //var array =['Armando','Antonio','Jose','Jeremy']; //'Jeremy'
	return array[array.length-1];
}

//--------------------------------------------------------------------

//3

function devolver_el_largo_del_array(array){
	// var array=[1,2,3,4,5,6,7,8,9,10]; // hay 10 elementos en el array
	return array.length;// devuelve el largo o el numero de elementos del array
}

//----------------------------------------------------------------------

//4

function incrementar_por_1(array){
	//var array=[1,2,3,4,5]; // [2,3,4,5,6]
	var array=[];// Declaramos un array
	for(var i=0;i<array.length;i=i+1){// iteramos cada uno de sus elementos
		array[i]=array[i]+1;// y le decimos que a cada elemento del array le aumente 1
	}
	return array;// retornamos el array
}

//-----------------------------------------------------------------------

//5

// nota

//.push: agrega un elemento al final del array.
//.pop: elimina un elemento del array disminuyendo en 1.


function agregar_un_elemento(array,elemento){
	//var array=['Pepito','Gabriela','Jose']; // digamos que declaramos un array
	//elemento='Pepe;// y al elemento le ponemos un valor
	array.push(elemento);// y le decimos que ahora el valor de ese elemento vaya dentro del array
	return array;// retornamos el array
}

//-------------------------------------------------------------------------

//6

//nota

// unshift: Colocara un nuevo elemento en la primera posicion del array.
// shift: Eliminara el primer elemento de la matriz.

function agregar_un_elemento_al_inicio(array,elemento){
	//var array=[4,5,63,23,5,53,6];// declaramos un array
	//elemento=2;// le damos un valor al elemento
	array.unshift(elemento);// agregamos el valor del elemento al inicio del array
	return array;// retornamos el array con el nuevo elemento agregado al incio
}

//---------------------------------------------------------------------------

//7

//nota
//.join(): une todos los elementos de un array, en una cadena y devuelve esa cadena

function de_palabras_a_frase(palabras){

	//var palabras=['Hello','word']; //'Hello Word'

	//tambien puede usarse:
	// return palabras[0]+' '+palabras[1];
	
	return palabras.join('');
}

//-----------------------------------------------------------------------------

//8

function array_contiene_el_elemento(array,elemento){

	//var array=[1,2,3,4];// declaramos un array
	// ponemos el true dentro del bucle porque estamos declarando solo la condicion que se va
	// a cumplir dentro del bucle y en caso no cumpla la condicion de adentro, retornara
	// el mensaje de afuera del bucle.

	for(var i=0;i<array.length;i=i+1){//con un for iteramos los elementos del array
		if(array[i]===elemento){// y con una condicional if preguntamos si el iterador contiene el 
			return true;// el elemento del array, si es asi entonces mostrara el mensaje "true"
		};
	};
	return false;// caso contrario mostrara false;
}

//---------------------------------------------------------------------------------

//9

function agregar_numeros(numeros){
	//var numeros=[12,34,50,55,30,13];// agregamos un array
	var suma=0;// ponemos una variable de suma inicializandola en 0

	for(var i=0;i<numeros.length;i=i+1){// despues ponemos un bucle for para iterar los elementos del array
		suma=suma+numeros[i];// despues pedimos que sume los elementos del array
	}
	return suma;// y que devuelva el valor de esa suma
}

//----------------------------------------------------------------------------------

//10

function promedio_de_resultados(resultados){

	//nota:
	// se pone .length en el promedio porque necesitamos
	// dividirlo entre la cantidad de elementos de array
	// y .length tiene esa funcion.

	//var resultados=[14,16,15,16]; // primero declaramos un array
	var promedio=0;// incializamos la variable de promedio con un valor de 0
	var suma=0;// inicializamos la variable de suma con un valor de 0

	for(var i=0;i<resultados.length;i=i+1){// iteramos los elementos del array
		suma=suma+resultados[i];//sumamos los elementos que estan dentro del array
		promedio=suma/resultados.length;//y el resultado de la suma lo dividimos entre la 
		//cantidad de elementos del array
	}

	return promedio;// y retornamos el resultado de la operacion que es el promedio
}

//---------------------------------------------------------------------------------------

//11

//Funcionamiento:
// al inicializar la variable "valormaximo" en el iterador 0 del array,
// le estamos diciendo al programa que por ahora el valor maximo es el valor
// del iterador 0 que en este caso es 12.

//entonces:
//pasa por cada uno de los valores empezando con el 12 
// si 12>12 entonces no pasa nada y sigue buscando
// si 23>12 entonces el 23 pasa a ser el valor maximo por ahora 
// pero sigue buscando.
// si 344>23 entonces el valor maximo pasa a ser 344 pero no se detiene
// y sigue buscando.
// si 45>344 no pasa nada y sigue buscando.
// si 55>344 no pasa nada y termina la busqueda al no aver mas elementos en
// el array.
// entonces como valor maximo nos devuelve el 344.

function el_numero_mas_grande(numeros){
	
	var numeros=[12,23,344,45,55];// primero declaramos el array numeros
	var valormaximo=numeros[0];//inicializamos la variable "valormaximo" en el iterador
	//0 del array


	for(var i=0;i<numeros.length;i=i+1){// iteramos el array para buscar el valor maximo
		if(numeros[i]>valormaximo){// y ponemos la condicion para buscar el valor maximo
				valormaximo=numeros[i];// si lo encuentra el valor maximo sera igual a ese valor
		};
	};
	return valormaximo;// retornamos el valor maximo
}

//---------------------------------------------------------------------------------------

//12

function multiplicar_el_argumento(){
	//var arguments=[1,2,3,4,5,6,7,8]; primero declaramos un array "arguments"
	var multiplicacion=1;// la variable multiplicacion la iniciamos en 1 porque si la ponemos en 0
	// todo el array se multiplicara por 0 y como resultado sera el mismo.

	if(arguments.length<1){// si el numero de argumentos es menor a 1 entonces retorna 0.
	 			return 0;// porque quiere decir que no esta ingresando argumentos.
	}

	for(var i=0;i<arguments.length;i=i+1){// entonces iteramos el array.
	 		multiplicacion=multiplicacion*arguments[i];// y le pedimos que multiplique todos los elementos del array.
	};

	return multiplicacion;// nos muestra el resultado.
}

//---------------------------------------------------------------------------------------

//13

function contando_elementos(arreglo){
	//var arreglo=[1,2,3,4,5,6,5,2,3,4,5,6,7,8,5,4,45,66,7,6,4,3,4,34,3,43,54,3,5,3,42,32];
	// declaramos un arreglo.
	var contador=0;

	for(var i=0;i<arreglo.length;i=i+1){
		if(arreglo[i]>18){// si alguno de los elementos del arreglo es mayor a 18
			contador=contador+1;// entonces el contador lo cuenta
		};
	};

	return contador;// retorna el numero de elementos mayores a 18
}

//-----------------------------------------------------------------------------------------

//14

// opcion 1:
function dias_laborales_y_no_laborales(dias){
	// 1=domingo,2=lunes,3=martes,4=miercoles,5=jueves,6=viernes,7=sabado // suponiendo

	switch(dias){ // segun los casos sabremos si el dia segun el numero , es fin de semana
	case 1:              // o dia laboral.
	 if(dias===1){
	 	return "Es fin de semana";
	 };
	 break;
	case 2:
	 if(dias===2){
	 	return "Es dia laboral";
	 };
	 break;
	case 3:
	if(dias===3){
	 	return "Es dia laboral";
	 };
	 break;
	case 4:
	if(dias===4){
	 	return "Es dia laboral";
	 }
	 break;
	case 5:
	if(dias===5){
	 	return "Es dia laboral";
	 }
	 break;
	case 6:
	if(dias===6){
	 	return "Es dia laboral";
	 }
	 break;
	case 7:
	 if(dias===7){
	 	return "Es fin de semana";
	 };
	 break;

	 default:
	 return "Es fin de semana"; break;
  };
}	

// opcion 2

function dias_laborales_y_no_laborales(dias){
	// 1=domingo,2=lunes,3=martes,4=miercoles,5=jueves,6=viernes,7=sabado // suponiendo
	// porque si le digo mayor a 1 empieza desde el lunes y menor a 7 entonces se queda en viernes
	// como se ve el la suposicion 

	if(dias>1 && dias<7){// si el dia es mayor a 1 y menor a 7 es decir si el dia esta entre lunes y viernes
		return "Es dia laboral";// entonces es dia laboral 
	}
	else{// caso contrario
		return "Es fin de semana";// es fin de semana
	};

}


//---------------------------------------------------------------------------------------------------

//15

function empieza_o_inicia_con_9(numero){
	// .tostring(): devuelve una cadena de carateres de alguna variable seleccionada.
	// .charAt():detecta los elementos de un string como si fuera un array.
	
	var conversion=numero.toString();// convertimos el numero a string
	// con el fin de detectar el primer numero
	if(conversion.charAt(0)==="9"){// ahora si en la posicion 0 hay un string 9 entonces
		return true;// retorna "true"
	}else{// caso contrario
		return false;// retorna "false"
	}

}

//-----------------------------------------------------------------------------------------------------

// 16

function todos_iguales(arreglo){
	//var arreglo=[1,1,1,1,1,1,1,1,1]; declaramos un arreglo 

	for(var i=0;i<arreglo.length;i=i+1){// iteramos el arreglo y decimos
		if(arreglo[i]===arreglo[i+1]){// si el primer elemento del arreglo es igual al segundo
			// tercero, cuarto, quinto .. etc. entonces 
			return true;// retorname true
		}
	}
	//caso contrario 
	return false;//retorname false

}

//------------------------------------------------------------------------------------------------------

//17

function meses_del_año(array){

	//var array=['Enero','Junio','Marzo','Noviembre','Diciembre','Julio']; declaramos un array
	var arraynuevo=[];// y ponemos un array nuevo vacio
	// ya que ahi iran los elementos que nos van a pedir
	for(var i=0;i<array.length;i=i+1){// iteramos los elementos del array que hemos declarado y hacemos
		// la pregunta
		if(array[i]==="Enero" || array[i]==='Marzo' || array[i]==='Noviembre'){// si el array contiene
			// alguno de estos meses
			arraynuevo.push(array[i]);// entonces agrega al array nuevo los elementos de array que hemos
			// creado, pero solo los que pedimos en la condicion.
		};
	}

	if(arraynuevo<3){// ahora si no encuentra ninguno de los elementos pedidos en la condicion
		return "No se encontraron los meses pedidos";// muestra el siguiente mensaje
	}
	else{// caso contrario
		return arraynuevo;// muestra los elementos que hemos pedido.
	};

}

//-----------------------------------------------------------------------------------------------------

//18

function mayor_a_cien(array){
	//var array=[100,200,99,245,23,45,13,122];// primero declaramos un array
	var arrayNv=[];// despues declaramos el array nuevo que vamos a utilizar para los valores mayores
	// a 100 

	for(var i=0;i<array.length;i=i+1){// entonces iteramos el array
		if(array[i]>100){// y preguntamos si alguno de los elementos del array es mayor a 100
			arrayNv.push(array[i]);// si es asi entonces los elementos del array se agregaran al nuevo array,
			// pero respetando la condicion que solo sean los elementos mayores a 100
		};
	}

	return arrayNv;// y despues retornamos el array nuevo con sus elementos mayores a 100
}

//-----------------------------------------------------------------------------------------------------

//19

//nota

//break: permite salir de una sentecia etiquetada.

function sentencia_break(numero){
	//var numero=12; primero le damos un valor a la variable numero
	var array=[]; // y declaramos el array donde estaran los elementos nuevos

	for(var i=0;i<10;i=i+1){ // hacemos un bucle con el fin de que hayan hasta 10 interadores
		numero=numero+2;// y el valor de variable numero sera aumentado en 2.
		// pero hay una cosa que se debe entender, una ves que pongamos un valor este aumentara en 2 
		// donde recordando tambien que esto esta dentro de un bucle es decir que el valor que aumentara
		// en 2 sera el nuevo valor de la variable numero, y despues de eso volvera a aumentar ese nuevo 
		// valor en 2 hasta llegar a 10 que son el numero de iteradores en el bucle que deben tener un valor
		if(numero===i) break; // ahora declaramos si cada numero es igual un iterador
			else{// se usa el break para que ignore la accion que esta antes del else para que haga directamente
				// la accion que buscamos que es agregar elementos al array.
				array.push(numero);// entonces se agrega al array los valores del valor de numero
			};
	}	

	// ahora como se interrumpira la operacion
	if(i<10){// si el iterador que es menor a 10 coincide con el valor aumentado en 2 o con el numero de iteraciones
		return "Se interrumpio la ejecucion";//entonces se interumpe la operacion
	}else{//caso contrario 
		return array;// pone el array
	}

}

//--------------------------------------------------------------------------------------------------------

//20

function sentencia_continue(numero){
	var array=[];// ponemos el array donde iran los elementos

	for(var i=0;i<10;i=i+1){// con un bucle colocamos 10 iteradores

		if(i===5){// si el numero de iteraciones alcanza el valor de 5
			continue;//entonces no se aumenta ni se agrega nada en este caso
		}else{// y continua al siguiente
			numero=numero+2;// y ejecuta el aumento en 2 
			array.push(numero);// y se agregan los elementos al array
		};
	}
	return array;// retornamos el array lleno
}

//-------------------------------------------------------------------------------------------------------


