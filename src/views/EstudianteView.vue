<template>
  <Estudiante/>
</template>

<script>
import Estudiante from "@/components/Estudiante.vue"
export default {

    components:{
        Estudiante
    },
    methods:{
      obtenerPathVariable(){
        const CEDULA = this.$route.params.cedula;
        console.log(CEDULA)
      }
    },

}
</script>

<style>

</style>