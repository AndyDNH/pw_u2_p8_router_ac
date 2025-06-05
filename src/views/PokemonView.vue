<template>
  <h1>Seleccione el Pokemon Correcto</h1>
  <PokemonImage :pokemonID="255" :mostrarImagen="true" />
  <PokemonOptions :pokemons="vectorPokemon" />
</template>

<script>
import { obtenerOpcionesFachada } from "@/clients/PokemonClient";
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
export default {
  data() {
    return {
      vectorPokemon: [],
    };
  },
  components: {
    PokemonImage,
    PokemonOptions,
  },
  methods: {
    async iniciarJuego() {
      const opciones = await obtenerOpcionesFachada(4);
      this.vectorPokemon = opciones;
      console.log(this.vectorPokemon);
    },
  },
  mounted() {
    this.iniciarJuego();
  },
};
</script>

<style>
</style>