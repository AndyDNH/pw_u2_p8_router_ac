// uso de libreria adicional para conectarme a la API
import axios from "axios";

// la funcion que me permite integrarme 

const consultarRespuesta = async ()=>{
    // siempre es correcto colocar la palara reservada await para esperar la respuesta y tambien declararlo con la palabra 
    // solamente la linea que llama a axios resulta innnecesario porque ya tienen incluido un await
    const respuesta =  axios.get('https://yesno.wtf/api').then(resp => resp.data);
    console.log;
    return respuesta;

}

// creacion de un metodo fachada como una buena practica para no tener que llamar directo
// el que voy a exponer le tengo que poner la palabra reservada export

// todo metodo que lleve la palabra reservada await y en donde sea que se use el metodo tiene que llevar async

export const consultarRespuestaFachada = async() => {
    // aqui si se usa await
    return  await consultarRespuesta();
}

