
//////////////////////  EVALUA NOMBRE ///////////////////////////////////////////////////////////////

function evaluaNombre(){

    let nombre = document.getElementById("nombre");

    const patternNombre = new RegExp ("^[A-Z]+$","i");// Regular expresion para nombre, solo campo letras, mayúsculas o minúsculas

    if(!patternNombre.test(nombre.value)){      /*si el análisis del pattern da fallo cambiamos formulario_grupo_nombre a -incorrecto
                                                    para poder usar los estilos de css -incorrectos, recuadro rojo, x y mensaje texto*/

        document.getElementById("formulario_grupo_nombre").classList.add("formulario_grupo-incorrecto");
        document.getElementById("formulario_grupo_nombre").classList.remove("formulario_grupo-correcto");
        
        if(nombre.value==""|| nombre.value==" ") {      //Si esta en blanco o con espacio se muestra el mensaje de "rellene este campo"      
           
            document.querySelector("#formulario_grupo_nombre .formulario_input_vacio").classList.add("formulario_input_vacio-activo");
            document.querySelector("#formulario_grupo_nombre .formulario_input_error").classList.remove("formulario_input_error-activo");
           
        } else {      //Si hay algo escrito pero sigue fallando se muestra el mensaje de "introduzca un nombre válido"

            document.querySelector("#formulario_grupo_nombre .formulario_input_error").classList.add("formulario_input_error-activo");
            document.querySelector("#formulario_grupo_nombre .formulario_input_vacio").classList.remove("formulario_input_vacio-activo");
        }
    } else {        //Si no hay errores es correcto, mostramos los estilos de css -correcto (recuadro verde y tick) y quitamos el resto

        document.getElementById("formulario_grupo_nombre").classList.remove("formulario_grupo-incorrecto");
        document.getElementById("formulario_grupo_nombre").classList.add("formulario_grupo-correcto");
               
        document.querySelector("#formulario_grupo_nombre .formulario_input_error").classList.remove("formulario_input_error-activo");
        document.querySelector("#formulario_grupo_nombre .formulario_input_vacio").classList.remove("formulario_input_vacio-activo");
    }
}

    /////////////////////////////      EVALUA EMAIL  ///////////////////////////////////////

function evaluaEmail(){

    let email = document.getElementById("email");
       
    const patternEmail = new RegExp (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/); 
                    /*Regular expresion para validar email, obligacion de: Caracter de Palabra (a-z,A-Z,0-9, _), que puede contener o no [.-_+]
                     y debe acabar en caracter de palabra, obligatorio @ y caracter de palabra con o sin [.-] y que acabe en caracter de palabra, 
                     obligatorio punto seguido de caracter de palabra cuya longitud esté entre 2 y 10. 
                     ^ $ = respectivamente que empiece y acabe en cadena de texto*/

    if(!patternEmail.test(email.value)){      /*si el análisis del pattern da fallo cambiamos formulario_grupo_email a -incorrecto
                                                        para poder usar los estilos de css -incorrectos*/            
        document.getElementById("formulario_grupo_email").classList.add("formulario_grupo-incorrecto");
        document.getElementById("formulario_grupo_email").classList.remove("formulario_grupo-correcto");
            
            if(email.value==""|| email.value==" ") {      //Si esta en blanco o con espacio se muestra el mensaje de "rellene este campo"      
           
                document.querySelector("#formulario_grupo_email .formulario_input_vacio").classList.add("formulario_input_vacio-activo");
                document.querySelector("#formulario_grupo_email .formulario_input_error").classList.remove("formulario_input_error-activo");
               
            } else {      //Si hay algo escrito pero sigue fallando se muestra el mensaje de "introduzca un email válido
    
                document.querySelector("#formulario_grupo_email .formulario_input_error").classList.add("formulario_input_error-activo");
                document.querySelector("#formulario_grupo_email .formulario_input_vacio").classList.remove("formulario_input_vacio-activo");
            }
    } else {        //esta corecto, flag=false, no hay fallos, aplicamos estilo grupo-correcto

        document.getElementById("formulario_grupo_email").classList.remove("formulario_grupo-incorrecto");
        document.getElementById("formulario_grupo_email").classList.add("formulario_grupo-correcto");
               
        document.querySelector("#formulario_grupo_email .formulario_input_error").classList.remove("formulario_input_error-activo");
        document.querySelector("#formulario_grupo_email .formulario_input_vacio").classList.remove("formulario_input_vacio-activo");
    }
}

//////////////////////  EVALUA CLAVE1   //////////////////////////////////////


function evaluaClave1 (){

    let clave1 = document.getElementById("clave1").value;
    let clave2 = document.getElementById("clave2").value;
    
                 console.log(clave1.value); //compruebo que funciona la funcion con un console.log

        if(!(clave1===clave2) && !(clave2=="") ){// PARA COMPROBAR SI COINCIDE CON LA CLAVE2 E INTERACTUAR CON ELLA

            document.getElementById("formulario_grupo_clave2").classList.add("formulario_grupo-incorrecto");
            document.getElementById("formulario_grupo_clave2").classList.remove("formulario_grupo-correcto");

            //si clave1 y 2 son distintas y clave 2 no esta vacia añadimos incorrecto y activamos el error en clave2
            document.querySelector("#formulario_grupo_clave2 .formulario_input_vacio").classList.remove("formulario_input_vacio-activo");
            document.querySelector("#formulario_grupo_clave2 .formulario_input_error").classList.add("formulario_input_error-activo");
        }
        else if ((clave1===clave2) && !(clave2=="") ){ // si clave1=clave2 y clave 2 no esta vacia, cambiar clave 2 a -correcto y quitar mensajes

            document.getElementById("formulario_grupo_clave2").classList.remove("formulario_grupo-incorrecto");
            document.getElementById("formulario_grupo_clave2").classList.add("formulario_grupo-correcto");
                   
            document.querySelector("#formulario_grupo_clave2 .formulario_input_error").classList.remove("formulario_input_error-activo");

            ///////////AÑADO ESTO PORQUE SI SON COINCIDENTES Y CLAVE DOS NO ES VACIO, COINCIDEN EN ALGO, SE BORREN TB MENSAJES DE CLAVE 1
            document.getElementById("formulario_grupo_clave1").classList.remove("formulario_grupo-incorrecto");
            document.getElementById("formulario_grupo_clave1").classList.add("formulario_grupo-correcto");

            document.querySelector("#formulario_grupo_clave1 .formulario_input_error").classList.remove("formulario_input_error-activo");
        }
  
    if(clave1.length>8||clave1==""|| clave1==" "){  /*si el análisis del pattern da fallo cambiamos formulario_grupo_clave1 a -incorrecto
    para poder usar los estilos de css -incorrectos*/

        document.getElementById("formulario_grupo_clave1").classList.add("formulario_grupo-incorrecto");
        document.getElementById("formulario_grupo_clave1").classList.remove("formulario_grupo-correcto");

        if(clave1.length > 8 ){     //si hay mas de 8 activo mensaje error "no mas de 8 caracteres"

            document.querySelector("#formulario_grupo_clave1 .formulario_input_error").classList.add("formulario_input_error-activo");
            document.querySelector("#formulario_grupo_clave1 .formulario_input_vacio").classList.remove("formulario_input_vacio-activo");

        }else if (clave1==""|| clave1==" "){        // si está vacio o con espacio activo mensaje vacio "rellene campo"

            document.querySelector("#formulario_grupo_clave1 .formulario_input_vacio").classList.add("formulario_input_vacio-activo");
            document.querySelector("#formulario_grupo_clave1 .formulario_input_error").classList.remove("formulario_input_error-activo");
        }
    } else {
        
        document.getElementById("formulario_grupo_clave1").classList.remove("formulario_grupo-incorrecto");
        document.getElementById("formulario_grupo_clave1").classList.add("formulario_grupo-correcto");
               
        document.querySelector("#formulario_grupo_clave1 .formulario_input_error").classList.remove("formulario_input_error-activo");
        document.querySelector("#formulario_grupo_clave1 .formulario_input_vacio").classList.remove("formulario_input_vacio-activo");

    }
}

//////////////////////  EVALUA CLAVE2   //////////////////////////////////////

function evaluaClave2 (){   

    let clave1 = document.getElementById("clave1").value;
    let clave2 = document.getElementById("clave2").value;

                      
    if(!(clave1===clave2)||clave2==""|| clave2==" "|| clave2.length > 8 ){ // AÑADOO clave2.length > 8 PARA QUE SALGA ERROR SI SUPERA 
                                                                                // LONGITUD DE 8, PARA QUE NO SALGA VERDE SI HAY 9 y COINCIDE
        document.getElementById("formulario_grupo_clave2").classList.add("formulario_grupo-incorrecto");
        document.getElementById("formulario_grupo_clave2").classList.remove("formulario_grupo-correcto");

        if(clave2==""|| clave2==" ") {

            document.querySelector("#formulario_grupo_clave2 .formulario_input_vacio").classList.add("formulario_input_vacio-activo");
            document.querySelector("#formulario_grupo_clave2 .formulario_input_error").classList.remove("formulario_input_error-activo");
            
        }else  { 
            document.querySelector("#formulario_grupo_clave2 .formulario_input_error").classList.add("formulario_input_error-activo");
            document.querySelector("#formulario_grupo_clave2 .formulario_input_vacio").classList.remove("formulario_input_vacio-activo");           
        }
    } else {
        
        document.getElementById("formulario_grupo_clave2").classList.remove("formulario_grupo-incorrecto");
        document.getElementById("formulario_grupo_clave2").classList.add("formulario_grupo-correcto");

        document.querySelector("#formulario_grupo_clave2 .formulario_input_error").classList.remove("formulario_input_error-activo");
        document.querySelector("#formulario_grupo_clave2 .formulario_input_vacio").classList.remove("formulario_input_vacio-activo");
    }        
} 

/////////////////////       ENVIAR     /////////////////////////////////

function enviar(){

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let clave1 = document.getElementById("clave1").value;
    let clave2 = document.getElementById("clave2").value;

//PRIMERO REVISAMOS QUE NO HAYA NINGUN CAMPO VACIO - Usaremos flags, cuando flag es true hay error por campo vacio
    //Para que si pulsamos enviar sin clicar todas o algunas casillas se active en esas el error de "rellenar campo"

    if (nombre==""){
        flagNombre=true;
        document.getElementById("formulario_grupo_nombre").classList.add("formulario_grupo-incorrecto");
        document.getElementById("formulario_grupo_nombre").classList.remove("formulario_grupo-correcto");
        document.querySelector("#formulario_grupo_nombre .formulario_input_vacio").classList.add("formulario_input_vacio-activo");
    }
    if (email==""){
        flagEmail=true;
        document.getElementById("formulario_grupo_email").classList.add("formulario_grupo-incorrecto");
        document.getElementById("formulario_grupo_email").classList.remove("formulario_grupo-correcto");
        document.querySelector("#formulario_grupo_email .formulario_input_vacio").classList.add("formulario_input_vacio-activo");
    }
    if (clave1==""){
        flagClave1=true;
        document.getElementById("formulario_grupo_clave1").classList.add("formulario_grupo-incorrecto");
        document.getElementById("formulario_grupo_clave1").classList.remove("formulario_grupo-correcto");
        document.querySelector("#formulario_grupo_clave1 .formulario_input_vacio").classList.add("formulario_input_vacio-activo");
    }
    if (clave2==""){
        flagClave2=true;
        document.getElementById("formulario_grupo_clave2").classList.add("formulario_grupo-incorrecto");
        document.getElementById("formulario_grupo_clave2").classList.remove("formulario_grupo-correcto");
        document.querySelector("#formulario_grupo_clave2 .formulario_input_vacio").classList.add("formulario_input_vacio-activo");
    }

                // CREAMOS UN FLAG COINCIDENCIA PARA COMPROBAR AL ENVIAR SI CLAVE1 Y CLAVE 2 COINCIDEN, si coinciden flagcoincidencia=false

    if((clave1===clave2) && (clave1!="") && (clave2!="")){ 
        flagCoincidencia=false;
    }else { 
        flagCoincidencia=true;
    }

                    //COMPRUEBO TODOS LOS CAMPOS CON FLAGS AL REALIZAR LA FUNCION ENVIAR

    const patternNombre = new RegExp ("^[A-Z]+$","i");
    if(patternNombre.test(nombre)){
        flagNombre = false;}
        else{flagNombre = true;}

    const patternEmail = new RegExp (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/); 
    if(patternEmail.test(email)){
        flagEmail = false;}
        else{flagEmail = true;}

    if((clave1.length<=8) && (clave1!="")){
        flagClave1 = false;}
        else{flagClave1 = true;}

    if((clave2.length<=8) && (clave2!="")){
        flagClave2 = false;}
        else{flagClave2 = true;}

        //Muestro los console.log de los flags de todos los campos para ver en console que todo va bien o qué falla
            console.log(flagNombre)
            console.log(flagEmail)
            console.log(flagClave1)
            console.log(flagClave2)
            console.log(flagCoincidencia)

    //////POR ÚLTIMO SI TODOS LOS FLAGS SON FALSE(NO HAY ERROR) MENSAJE ALERTA CORRECTO, SI ALGUNO SALE TRUEL: REVISAR FORMULARIO

    if(!flagNombre && !flagEmail && !flagClave1 && !flagClave2 && !flagCoincidencia){
        alert("¡La inscripcion ha sido correcta!")
    } else {
        alert("Revisar formulario");
    }
}