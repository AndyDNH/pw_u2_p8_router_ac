<template>
    <h1>Seleccione el Pokemon Correcto</h1>
    <PokemonImage :pokemonID="255" :mostrarImagen="true"/>
    <PokemonOptions/>
</template>

<script>
import PokemonImage from "@/components/PokemonImage.vue"
import PokemonOptions from "@/components/PokemonOptions.vue"
export default {
    components:{
        PokemonImage,
        PokemonOptions,
    }

}
</script>

<style>

</style>