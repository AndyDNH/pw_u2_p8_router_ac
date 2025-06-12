<template>
  <h1>{{ mensaje }}</h1>
  <h1>Seleccione el Pokemon Correcto</h1>
  
  <!-- mientras el pokemon sea nulo no se va a construir -->
  <PokemonImage v-if="pokemon"  :pokemonID="pokemon.id" :mostrarImagen="mostrar" ref="miHijo1" />
  <!-- acorde al nombre que colocamos en el hijo lo podemos colocar como un evento -->
  <PokemonOptions @seleccionado="recibioPadre($event)" :pokemons="vectorPokemon" ref="miHijo2"/>
  <button @click="comunicarHijo()">Comunicar Hijo</button>
</template>

<script>
import { obtenerOpcionesFachada, obtenerAleatorioFachada } from "@/clients/PokemonClient";
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
export default {
  data() {
    return {
      vectorPokemon: [],
      pokemon:null,
      mostrar:false,
      mensaje: null,
    };
  },
  components: {
    PokemonImage,
    PokemonOptions,
  },
  methods: {
    async iniciarJuego() {
      const opciones = await obtenerOpcionesFachada(5);
      this.vectorPokemon = opciones;
      console.log(this.vectorPokemon);

      let pokemonElegido= obtenerAleatorioFachada(0,this.vectorPokemon.length);
      this.pokemon= this.vectorPokemon[pokemonElegido];
      console.log(this.pokemon.nombre);
      
    },
    recibioPadre(id){
      console.log("Mensaje recibido desde Hijo");
      console.log(id);
      this.mostrar = true
      console.log(this.mostrar);
      this.validarRespuesta(id.atributo);
      
    },
    validarRespuesta(opcionSeleccionada){
      if (opcionSeleccionada===this.pokemon.id) {
        this.mensaje= "Correcto";
      }else{
        this.mensaje = "Perdiste, el correcto es: " + this.pokemon.nombre;
      }
    },
    comunicarHijo(){
      // no solo se pueden llamar a propiedades reactivas
      // tambien se pueden llamar a metodos del hijo
      console.log(this.$refs.miHijo1.mensaje1);
      this.$refs.miHijo1.mensaje1 = "Nuevo mensaje 1"
      console.log(this.$refs.miHijo1.mensaje1);

      console.log(this.$refs.miHijo2.mensaje2);
      this.$refs.miHijo2.mensaje2 = "Nuevo mensaje 2"
      console.log(this.$refs.miHijo2.mensaje2);
      
    }
  },
  mounted() {
    this.iniciarJuego();
  },
};
</script>

<style>
</style>