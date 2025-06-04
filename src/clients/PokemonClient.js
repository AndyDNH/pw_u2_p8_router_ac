import axios from "axios";

const consumirPokemon = async(id) => {
    const respuesta =  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(resp => resp.data);
    console.log;
    return respuesta;
}

// Funciones Fachada

const pokemonFachada = async(id) => {
    return await consumirPokemon(id);
}