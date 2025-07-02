<template>
  <EstudianteRest :listaEstudiantes="estudiantes" />
</template>

<script>
import { consultarEstudiantesFachada } from "@/clients/EstudianteClient";
import EstudianteRest from "@/components/EstudianteRest.vue";
export default {
  components: {
    EstudianteRest
  },
  data() {
    return {
      estudiantes: []

    };
  },
  mounted() {
    this.obtenerEstudiantes()
  },
  methods: {
    async obtenerEstudiantes() {
      return this.estudiantes = await consultarEstudiantesFachada();
    }

  },



}
</script>

<style></style>