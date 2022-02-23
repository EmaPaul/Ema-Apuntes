function imprimir_de_manera_descendente(valor) {
	if (valor>=1) {
		print(valor);
		return imprimir_de_manera_descendente(valor-1);
	}
}
valor=int(input("ingrese un valor: "));
imprimir_de_manera_descendente(valor);
