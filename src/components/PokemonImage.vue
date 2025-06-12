<template>
  <div class="image-container">
    <img v-if="!mostrarImagen"
    class="ocultar" 
    :src="imagenFuente"  alt="No se pudo renderizar la imagen">
    <img v-if="mostrarImagen"
    :src="imagenFuente" 
    alt="No se pudo renderizar la imagen">
    {{mensaje1 }}
  </div>
</template>

<script>
export default {

  props:{
    pokemonID:{
      type:Number,
      required:true,
    },
    mostrarImagen:{
      type:Boolean,
      required:true,
      default:false,
    }

  },
  data(){
    return{
      mensaje1:'mensaje1'
    }
  },
  computed:{
    imagenFuente(){
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonID}.svg`;
    },
  },

};
</script>

<style scoped>
img {
  size: 200px;
  position: absolute;
  right: 45%;
}

.ocultar {
  filter: brightness(0);
}
.image-container {
  height: 220px;
  
}

</style>