//1
/*
En este primer ejercicio tenemos que crear una clase o una funcion constructora 
pero con la condicion que debe aceptar un objeto con las propiedades: usuario,nombre
email,password.
*/

// nota:
/*
En el constructor= puede ir propiedades al igual que objetos , el mismo caso es el de la funcion.
*/
// primero ponemos una funcion para crear el usuario
function crear_usuario(){
  class Usuario{// una ves creada la funcion creamos la clase que en este caso se le llamo "Usuario"
    constructor(opciones){// hacemos el contructor poniendo adentro el nombre del objeto "opciones"
      // y declaramos las propiedades de esta manera, en mi propia interpretacion estariamos diciendo lo siguiente
      this.usuario=opciones.usuario;// este usuario esta dentro del objeto "Opciones", en la propiedad usuario
      this.nombre=opciones.nombre;// este nombre esta dentro del objeto "Opciones", en la propiedad nombre
      this.email=opciones.email;// este email esta dentro del objeto "Opciones", en la propiedad email
      this.password=opciones.password;// este password esta dentro del objeto "Opciones", en la propiedad password
    };
  };
  // despues ponemos un metodo llamado saludar dentro de su prototype
  Usuario.prototype.saludar=function(){// ponemos primero el prototype para llamar al usuario y despues ponemos el metodo
    return "Hola, mi nombre es "+ this.nombre;// saludar y agregando una funcion ponemos que esta, nos regrese un mensaje
  };// que es en este caso "Hola, mi nombre es "el nombre que se dio en la propiedad"

  return Usuario;// y retonamos el usuario
};

//-- otro modo

function crear_usuario(){
/// aqui es lo mismo con la direncia que si usamos la funcion la llamamos Usuario igual que la clase 
 function Usuario(opciones){// y adentro ponemos el objeto
	this.usuario=opciones.usuario;
    this.nombre=opciones.nombre;
    this.email=opciones.email;
    this.password=opciones.password;
  };
  // ponemos el metodo llamado saludar dentro de su prototype
  Usuario.prototype.saludar=function(){
    return "Hola, mi nombre es "+ this.nombre;
  };

  return Usuario;// y finalmente retornamos el usuario;
};
   
/*
como ingresar desde la funcion
> var datos=crearUsuario();
undefined
> var user=new datos({usuario:"afdsvf",nombre:"sacdvfbg",email:"axscvd",password:12345});
undefined
> user
Usuario {
  usuario: 'afdsvf',
  nombre: 'sacdvfbg',
  email: 'axscvd',
  password: 12345
}
> user.saludar()
'Hola, mi nombre es sacdvfbg'
*/

//---------------------------------------------------------------------------------------------------

  //2	

  function agregar_metodo_en_su_prototype(Constructor) {	

  // Ponemos una clase para entender mejor de otra forma,
  // es como si agregaramos una clase, ahora suponiendo que la funcion no esta 
  class Constructor{// hacemos esta clase
    constructor(nombre,apellido){
      this.nombre=nombre;
      this.apellido=apellido;
    };
  };
  // en este caso nos pide que agregemos un metodo llamado saludar al constructor en su prototipo
  Constructor.prototype.saludar=function(){
    return "Hello World!";// el cual es "Hello Word!"// agregarmos el metodo y pedirmos que nos
  };// retorne el mensaje

}

//-----------------------------------------------------------------------------------------------------

//3

// para realizar este ejercicio hay 2 formas

function stringivert(){
    String.prototype.reverse=function(){ 
      var palabra=this.split('');// primero aqui convierte el string que ingresemos a array
    	var palabra_reversa=palabra.reverse();// despues con el reverse se invierte los elementos del array
    	var string_final=palabra_reversa.join('');// y terminada eso con un join los separamos en un espacio
    	return string_final;// retonamos el final del array
    }
 //----------------------------------------------------

 // otra forma: aplicando la misma funcion solo remplazar dentro de la funcion el codigo de abajo.

    String.prototype.reverse = function() {
    	var inverso = '';// poner un array vacio
    	for(var i = this.length - 1; i>=0; i--) {// y con un for declaramos que el iterador i vaya desde el ultimo
        // elemento, hasta el primer elemento de 1 en 1
      		inverso = inverso + this.charAt(i);// despues de esto almacenamos en la variable "inverso"
    	};// los valores del string pero en orden contrario a como estaba, para eso se puede utilizar charAt
      // para que le ponga un iterador a cada letra del string y como lo hemos especificado en la
      // condicion lo devuelva hacia atras.

    	return inverso;// retornamos la string 
    }
 //forma de reproducir el programa
 /*
 > agregarStringInvertida()
 undefined
 > var palabra=new String("youtube");
 undefined
 > palabra.reverse()
 'ebutuoy'
 */
}

//-----------------------------------------------------------------------------------------------------

//4
// para este problema primero nos piden crear clase con sus constructores
class Persona {
    constructor(nombre,apellido,edad,domicilio) {// ponemos las propiedades del constructor
      this.nombre=nombre;
      this.apellido=apellido;
      this.edad=edad;
      this.domicilio=domicilio;
      this.detalle=function(){// y agregamos un metodo con una funcion
      	return{// para que nos retorne los datos solicitados
      		Nombre:this.nombre,
      		apellido:this.apellido,
      		Edad:this.edad,
      		Domicilio:this.domicilio,
      	};
      };
    };
}

function instanciar_identidad(nombre, apellido, edad, direccion) {// instaciamos con esta funcion
  var persona=new Persona("Pepino","Gomez","19","La canpana 123");//colocamos los datos por ejemplo
  return persona;// los datos de la persona que se llama Pepino, y retonamos la identidad
};

function agregar_metodos(){
  // y ahora le vamos a agregar un metodo llamado datos a su prototype con el fin de
  // que retorne el mensaje "Pepino, 12 años"
  Persona.prototype.datos=function(){
    return this.nombre+","+" "+this.edad+" años";// y termiamos el programa
  }

};


