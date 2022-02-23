// nota todo va de acuerdo a la funcion.

//1

function obtener_el_mayor(x,y){

if(x>y){// si la x es mayor
	return x;/// regresa la x
}
else{//caso contrario
	return y;///regresa la y
}

//y si son iguales regresa cualquiera de los 2 ya que ambos son el mismo numero
}

//-----------------------------------------------------------------------------

//2

function mayor_de_edad(edad){

	if(edad>=18){ // si la edad es mayor o igual a 18
		return "allowed"; // entonces muestra este mensaje
	}else{///caso contrario
		return "Not allowed";///muestra este mensaje
	}

}

//-----------------------------------------------------------------------------

//3

function coneccion(estatus){
	switch(estatus){ // segun estatus
		case 1: return"online"; break; // si es 1 es online
		case 2: return "Away";	break;// si es 2 es away
		default:/// caso contrario si no hay otra opcion
			return "offline"; break; /// offine
	}
}

//----------------------------------------------------------------------------

//4

function saludos(idioma){

	switch(idioma){// segun idioma
		case 'aleman': ///si es aleman
		return "Guten Tag!"; break;//devuelve el saludo en aleman
		case 'mandarin': // si es mandarin
		return "Ni Hao!"; break;// devuelve el saludo en mandarin
		case 'ingles':// si es ingles
		return "Hello!"; break;//devuelve el saludo en ingles
		default:// caso contrario que no sea ninguno de estos idiomas
		return "Hola!";// devuelve el saludo en español
	}
}

//----------------------------------------------------------------------------

//5

function numero_entero(numero){

	if(numero===Math.floor(numero)){// si no lo redondea es "true" y si lo redondea es "false" 
		return true;// es true
	}else{/// caso contrario 
		return false;//false
	}
	//el Math.floor redondea un numero ,al entero mas cercano hacia abajo.
	// en este caso si el Math.floor recibia un numero entero no hacia nada ya que no hay nada que redondear
	// hacia abajo, caso contrario si recibia un numero con decimales, entonces si tenia que redondear el
	// numero hacia abajo y por eso mostraba el false, es decir si no lo redondea es true y si lo redondea
	// es false.
}

//------------------------------------------------------------------------------

//6

function colores(color){

	if(color==='blue'){ // si el color es igual a "blue"
		return "This is blue"; // entonces muestra el mensaje "This is blue"
	}else if(color==='red'){//si el color es igual a "red"
		return "This is red";// entonces muestra el mensaje "This is red"
	}else if(color==='green'){//si el color es igual a "green"
		return "This is green";// entonces muestra el mensaje "This is green"
	}else if(color==='orange'){//si el color es igual a "orange"
		return "This is orange";// entonces muestra el mensaje "This is orange"
	}else{// caso de no existir los colores mencionados
		return "Color not found";/// muestra el mensaje: "color not found"
	}

}

//--------------------------------------------------------------------------------

// 7

function Diez_o_Cinco(numero){

	if (numero===10 || numero===5){ // si el numero es 10 o 5
		return true; // muestra "true"
	}else{// caso contrario
		return false;//"muestra false"
	}

}

//--------------------------------------------------------------------------------

//8

function Esta_en_rango(numero){

	if(numero>20 && numero<50){ // ponemos un rango que sea mayor a 20 y menor a 50, su cumple esa condicion
		return true; // muestra "true"
	}else{//caso contrario
		return false;//muestra "false"
	}

}

//----------------------------------------------------------------------------------

//9

// nota: se pone entre 15 porque necesitamos saber que numeros son divisibles entre 5 y 3
// y ya que por ejemplo si dividimos 15/15 nos da 1 y es como si dividieramos 15/5*3 eso nos da 
// el mismo resultado de 1.

function fizzbuzz(numero){

	if(numero%3===0 && numero%5===0){ // primero colocamos si es divisible entre ambos 
		return "fizzbuzz"; // si lo es muestra el mensaje "fizzbuzz"
	}else if(numero%3===0){// si es divisible entre 3 
		return "fizz";// muestra el mensaje "fizz"
	}else if(numero%5===0){// si es divisible entre 5
		return "buzz";// muestra el mensaje "buzz"
	}else{// caso contrario
		return numero;// regresa el numero
	}
}

//--------------------------------------------------------------------------------------

//10

function Operadores_logicos(num1,num2,num3){

	if(num1===0 || num2===0 || num3===0){ // si uno de los numeros es 0, hay un error
		return "Error";
	}else if(num1<0 || num2<0 || num3<0){// si uno de los numeros es menor a 0, hay un negativo
		return "Hay negativos";
	}else if(num1>num2 && num1>num3 && num1>0){// si el numero 1 es mayor a los demas entonces 
		return "Numero 1 es mayor y positivo";// es mayor y positivo
	}else if(num3>num1 && num3>num2){//si el numero 3 es mayor a los demas
		return num3+1;// entonces el numero 3 aumenta en 1
	}else{// caso contrario que no se cumpla ninguna de estas condiciones entonces 
		return false;// mostrar "false"
	}

}

//----------------------------------------------------------------------------------------

// 11

// nota:
//esto funciona de la siguiente manera:

// 2 es automaticamente primo ya que fue declarado a parte

// pero la parte de la condicional if
// funciona de la siguiente manera:
// si el numero que dividimos entre i y nos da un residuo de 0
// entonces es false caso contrario sera true

/// ejemplo:
// si ponemos que numero=3
// entonces 3%2===1.5
// no da residuo 0 por lo tanto no entra en el mensaje de "false" y se va afuera para el mensaje de "true",
// pero si ponemos 4%2===2 residuo 0 entonces entra en el mensaje de "false"
// 
function numeroprimo(numero){

if(numero<2){// si numero es menor a 2 entonces es false
	return false;// porque 0 y 1 no son considerados primos
}

if(numero===2){// si el numero es igual a 2
	return true;// entonces es primo
}

for(var i=2;i<numero;i=i+1){// el ciclo empieza desde 2 hasta donde nos diga el valor de "numero"
	if(numero%i===0){// aqui determinamos si el numero es divisible entre mas de un valor del
		return false;/// bucle, dependiendo que valor le pongamos a "numero"
	}
}

return true;

}

//----------------------------------------------------------------------------------------------------

// 12

function es_verdadero_o_falso(valorboll){

if(valorboll===true){ // si el valor booleano es true
	return "Soy verdadero"; /// entonces muestra "Soy verdadero"
}else{// Caso contrario
	return "Soy falso";// entonces muestra "Soy falso"
}

}

//-----------------------------------------------------------------------------------------------------

//13

//nota: se puede usar "var",aunque tambien con let da el mismo resultado.

//let: permite declarar variables limitando su alcanse al bloque. (opcional)
//push: añade uno o mas elementos al final de un array.

function tabla_del_6(){
	var array=[];
	// como nos pide desde el 0 hasta el 60 hacemos que el bucle vaya desde el 0 al 10
	for(var i=0;i<11;i=i+1){// para despues multiplicar los valores de la i por 6
		array.push(6*i);// aqui al array le agregamos los elementos de la i multiplicados por 6 
	}
	
	return array;// al final retonamos al array
}

//-------------------------------------------------------------------------------------------------------

//14

function numero_de_3_digitos(numero){
	if(numero>99 && numero<1000){// como pide que el numero sea de 3 digitos ponemos un rango
		return true;// donde solo haya numeros de 3 digitos y si es asi mandara "true"
	}else{// caso contrario
		return false;// retorna "false"
	}
}

//--------------------------------------------------------------------------------------------------------

//15

// Nota: una caracteritica del do while es que actua y luego piensa , caso contrario al while que primero 
//piensa y despues actua.

function do_while(numero){
	var valor=numero; // primero a esta variable llamada valor le damos el valor de "numero";
	var contador=0;// despues iniciamos un contador en 0;

	do{
		contador=contador+1; // en este caso ponemos primero el contador para que vaya de 1 en 1 
		valor=valor+5;// y despues el aumento en 5
	}while(contador<8);//y esto se hara hasta que el contador llegue hasta las 8 veces

	return valor;// despues retornara el valor
}
