<template>
  <div>
    <h1>Formulario Estudiante</h1>
    <input v-model="id" type="text" placeholder="Ingrese ID del estudiante" />
    <button @click="consultar">Consultar</button>
    <EstudianteId :estudiante="estudiante" :error="error" />
  </div>
</template>

<script>
import { consultarEstudiantePorIDFachada } from "@/clients/EstudianteClient";
import EstudianteId from "@/components/EstudianteId.vue";

export default {
  components: { EstudianteId },
  data() {
    return {
      id: '',
      estudiante: null,
      error: ''
    };
  },
  methods: {
    async consultar() {
      this.error = '';
      this.estudiante = null;
      if (!this.id) {
        this.error = 'Por favor ingrese un ID.';
        return;
      }
      try {
        this.estudiante = await consultarEstudiantePorIDFachada(this.id);
      } catch (err) {
        this.error = 'Estudiante no encontrado';
      }
    }
  }
};
</script>

<style>

</style>