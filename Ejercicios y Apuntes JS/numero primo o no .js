function es_primo(numero){
	
	if(numero<2){ /// ponemos esta condicion porque recordemos que 0 y 1 no son considerados primos
		return false;// por lo tanto retornara false.
	}

	if(numero===2){ /// pero aqui la condicion es true porque 2 si es considerado un numero primo
		return true;
	}

	for(var i=2;i<numero;i=i+1){// ponemos la condicion
		if(numero%i===0){  //si el numero entre la i da como residuo 0 va ser false 
			return false;
		}
	}
	return true// si no da como residuo 0 sera true
}

/*
digamos que numero entra el valor 1
2<1 no !! por lo tanto no corre el programa y arroja un false.
2<3 si y empieza el programa 
y divide 3%2=1.5 y como no da residuo 0 entonces es true primo 
2<4 
se divide 4%2=2 da como residuo cero por lo tanto es false. no primo
*/