function DO_WHILE(numero){
	var valor=numero;
	var contador=0;

	do{  /// primero actua y despues piensa

	contador=contador+1;// cuenta las 8 veces
	valor=valor+5;// y al valor ingresado le sumara 5

	}while(contador<8);// el contador es menor a 8 porque esta empezando de 0
	//0 1 2 3 4 5 6 7 
	return valor;
}