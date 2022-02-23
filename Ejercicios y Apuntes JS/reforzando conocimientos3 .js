//1
function crear_un_gato(nombre,edad){// digamos que el gato se llama "fifi", y tiene 3 años
    var objeto={ // de edad
        nombre:nombre,// esto entra el objeto dentro de la propiedad nombre
        edad:edad,// y dentro de la propiedad edad 
        meow:function(){// y por ultimo se hace la llamada a la funcion
            return "Meow!";// para que el gato diga "Meow!" 
        },
    };
    return objeto;// retornamos el objeto
}
// ejemplo:
/*function crear_un_gato(){
    var objeto={ 
        nombre:"fifi",
        edad:3,
        meow:function(){
            return "Meow!";
        },
    };
    return objeto;
}
como llamar a las propiedades:
crear_un_gato().nombre // "fifi";
crear_un_gato().edad // 3;
crear_un_gato().meow();//"Meow";
*/
////-------------------------------------------------------

//2 
function agregar_propiedades(objeto,property){
    objeto[property]=null;// estamos agregando un valor null a la propiedad "property"
    return objeto;/// retornamos el objeto
}
// ejemplo
/* digamos que la funcion no exite
  var objeto={ 
        nombre:"fifi",
        edad:3,
        meow:function(){
            return "Meow!";
        },
    };
    y usando el ejemplo del gato veremos como es agregar una propiedad
    , suponiendo que a estos datos queremos agregar la raza del gato
    colocamos : objeto['Raza']='Persa'; por ejemplo
    y al verificar denuevo el objeto debe mostrar esto:
    objeto
    { nombre: 'fifi', edad: 6, meow: [Function: meow], Raza: 'Persa' }
*/
//----------------------------------------------------------

//3
/* a diferencia del objeto donde teniamos que crear un gato,
en este caso tenemos que invocar una funcion dentro del objeto
*/
function invocar_metodo(objeto,metodo){
    objeto[metodo](); 
}
// ejemplo:
/*
Digamos que la funcion no esta por un momento,
y tomando de ejemplo a los gatos nuevamente
 var objeto={ 
        nombre:"fifi",
        edad:3,
        meow:function(){
            return "Meow!";
        },
    };

    en este ejemplo vemos una funcion dentro del objeto entonces como la invocamos?
    Hay 2 formas:
    1.- objeto.meow()// meow
    2.- objeto.['meow']()// meow
    en ambas llamamos a la funcion, diciendole al objeto el nombre de la propiedad
    y poniendo parentesis para decir que es una funcion.
*/

//-----------------------------------------------------------------------------------

//4 

function multiplicar_numero_desconocido_por_5(objetomisterioso){  

    //ejemplo de como seria con un objeto

    var valor=1 // declarar una varible de valor
    var objetomisterioso={// despues creo el objeto misterioso
        numeromisterioso:valor=numeromisterioso*5,// y le pongo a la propiedad que 
        // la variable valor va a ser la multiplicacion de el numeromisterioso por 5
    }
    return valor;// retonamos el valor 

    // si le damos un valor desde la funcion a numero misterioso seria asi 
    // multiplicar_numero_desconocido_por_5(numeromisterioso=150);
    // da 750

    // entonces como seria en si la forma si 
    var multiplicacion=objetomisterioso.numeromisterioso*5; 
    return multiplicacion;
    // aqui estamos diciendo que multiplique el valor de la propiedad
    // numero misterioso por 5
    // y despues que termine nos devuelva el valor
}
//--------------------------------------------------------------------------------------

//5
function eliminar_una_propiedad(objeto,propiedad){
    // supongamos que no existe la funcion poniendo este
    // ejemplo de como seria la eliminacion de una propiedad
    var objeto={// hacemos un objeto con su propiedad
        propiedad:"unapropiedad",
    };
    delete objeto['propiedad']; // ponemos delete luego el objeto y encerrando 
    // entre corchetes y comillas el nombre de la propiedad
     
    // como seria en si la forma
    delete objeto[propiedad]; // ponemos el delete para eliminar despues el objeto
    return objeto;// y su propiedad al final y un return para regresar el objeto vacio
    // y si lo esta , o sin una propiedad menos.
}

//--------------------------------------------------------------------------------

//6

function nuevo_usuario(nombre,email,password){
    /// declaro el objeto

    var objeto={
         nombre:nombre,// y declaramos las porpiedades que estan en la funcion
         email:email,
         password:password,
    };

    // para llamar desde la funcion al objeto es asi:
    //nuevo_usuario("felix","felixad@gmail.com",1233)
    //{ nombre: 'felix', email: 'felixad@gmail.com', password: 1233 }

    return objeto;// y al final retornamos el objeto
}

//-----------------------------------------------------------------------------------

//7

function tiene_email_o_no(usuario){
    // segun el objeto
    var usuario={
        email:"ejemplo@hotmail.com",// si tenemos un valor // o nada poniendo null
    };

    // cree el objeto para entender mejor la solucion

    if(usuario['email']){// entonces entra la condicion si dentro de el objeto usuario,
        // la propiedad email tiene algun valor, si es asi entonces 
        return true;// devuelve el valor de true
    }else{// caso contrario 
        return false;// devuelve el valor de false
    };

}

//----------------------------------------------------------------------------------------

//8

function tiene_propiedad(objeto,propiedad){
    // creamos un ejemplo 
    var objeto = { // ponemos el objeto
        propiedad:"propiedad",// y le creamos una propiedad
    };
    //--------------------------------------
    if(objeto['propiedad']){ // determinamos si dentro del objeto hay una propiedad con un valor adentro     
        return true;// si es asi retorna true
    }else{// caso contrario 
        return false;// retorna false
    }
    /// en si como seria la formula 
    if(objeto[propiedad]){
        return true;
    }else{
        return false;
    }
}

//-------------------------------------------------------------------------------

//9

function verificar_password(usuario,password){
    // primero ponemos el objeto para entender el problema
    var usuarios={
        password:password,// aqui ponemos asi porque vamos a poner el valor de password
    }// desde la funcion

    /*
    en la condicion su puede interpretar de esta manera,
    si el objeto usuario tiene dentro la propiedad password y
    su valor de la propiedad password es igual al de la propiedad
    */
    // entonces
    if(usuario['password']===password){
        return true; // entonces muestra true
    }else{// caso contrario
        return false;// muestra false
    };

    /*
    como llamar desde la funcion:
    verificar_password(password="password")
    sale true
    */
    
}

//------------------------------------------------------------------------------------

//10

function actualizar_password(usuario,nuevapass){
    // ejemplo del objeto usuario para entender el problema
    // ahora diciendo que no exite la funcion.
    var usuario={
        password:"password",
    };
    // opcion 1:
    usuario['password']="nuevapass";
    // opcion 2:
    usuario.password="nuevapass";
    // formula
    usuario.password=nuevapass;
    // retornamos el usuario con su nueva contraseña
    return usuario;

}

//------------------------------------------------------------------------------------

//11

function agregar_un_amigo(usuario,nuevo_amigo){
    /// primero declaramos el objeto junto con el array para entender mejor el problema
    var usuario={
        amigos:[],
    }
    // ahora suponiendo que no hay una funcion
    usuario.amigos.push("nuevo_amigo"); // ponemos el objeto , la propiedad y ponemos un 
    // push para agregar un elemento al array, en este caso el elemento nuevo se llamara
    // "nuevo_amigo".

    // como seria la formula
    usuario.amigos.push(nuevo_amigo);
    
    //retornamos el usuario
    return usuario;
    
}

//---------------------------------------------------------------------------------------

//12

function pasar_usuario_a_premiun(usuarios){
    // primeramente cada propiedad que sea es premiun en el array debe ser true
    var usuarios=[espremium,espremium];

   /*
   aqui lo que tenemos es un array que cada propiedad es "esPremiun"
   debe ser true y debe devolver el array.
   */
    
  for(var i=0;i<usuarios.length;i=i+1){// como se ve aqui iteramos el array
      usuarios[i].espremium=true;// ponemos que cada iterador que tenga la propiedad
  }// espremiun sera igual a true
  return usuarios;// y despues devuelva el array
}

//--------------------------------------------------------------------------------------

//13

function sumar_likes_de_un_usuario(usuario){
   
    var suma=0; // iniciamos una variable de suma


    for(var i=0;i<usuario.posts.length;i=i+1){//iteramos el array
        suma=suma+usuario.posts[i].likes;// y sumamos los elementos de
    }// la propiedad likes, que esta dentro del objeto posts. 

    return suma;// retornamos la suma,

}

//---------------------------------------------------------------------------------------

//14

function calcular_un_descuento(producto){
    var producto={// declaramos un objeto
        precio:precio,// ponemos un precio   // que vamos a declarar desde la funcion
        descuento:descuento,// ponemos un descuento
        calculardescuento:function(){//ponemos el calculo del descuento con una funcion
            return this.precio-(this.precio*this.descuento);// y retonamos el resultado
        }
    };
    return producto;// y al final retorna el objeto
}

//---------------------------------------------------------------------------------------