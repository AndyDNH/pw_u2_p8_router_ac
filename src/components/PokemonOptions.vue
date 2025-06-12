<template>
  {{mensaje2 }}
  <div class="options-container">
    
    <ul>
      <li @click="comunicarClic(pokemon.id)" v-for="pokemon in pokemons" 
      :key="pokemon.id">{{ pokemon.nombre }}</li>
      
    </ul>
  </div>
</template>

<script>

export default {
  props : {
      pokemons:{
         type:Array,
         required:true
      }

   },
   data(){
    return{
      mensaje2:'mensaje2'
    }
   },
   methods:{
    // comunicar desde cualquier parte no solo desde un metodo puedo llamar a una funcion
    // llamada como $emit
    comunicarClic(id){
      console.log("Se dio clic");
      console.log(id);
      // lo que quiero enviar lo coloco como segundo argumento del emit
      const objetoEnviado={
        atributo:id,
        atributo2:"Edison",
        atributo3:true
      }
      
      this.$emit('seleccionado',objetoEnviado )

      
    }
   }

};
</script>

<style scoped>
ul {
  list-style-type: none;
}
li {
  background: blanchedalmond;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

.options-container {
  display: flex;
  justify-content: center;
}

li:hover {
  background: rgba(0, 0, 0, 0.08);
}
</style>