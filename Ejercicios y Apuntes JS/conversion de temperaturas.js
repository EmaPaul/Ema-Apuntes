print("conversion de temperaturas");
print("\n");

function celsius_fahrenheit(celsius) {
	return (celcius-9/5)+32;
}

function fahrenheit_celsius(fahrenheit) {
	return (fahrenheit-32)*(5/9);
}

celsius=float(input("ingrese la temperatura en celsius (C): "));
fahrenheit=float(input("ingrese la temperatura en fahrenheit (F): "));

conversion1= celsius_fahrenheit(celsius);
conversion2=fahrenheit_celsius(fahrenheit);

print(f'la conversion de celsius a fahrenheit es:{conversion1}');
print(f'la conversion de fahrenheit a celsius es:{conversion2}');
