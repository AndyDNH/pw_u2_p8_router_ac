<template>
  <div class="container">
    <img v-if="imagen" :src="imagen" alt="No se pudo cargar" />
    <div class="container-2"></div>
    <div class="pregunta-container">
      <input v-model="pregunta" type="text" placeholder="Hazme una pregunta" />
      <p>Recuerda terminar con un signo de pregunta (?)</p>

      <div v-if="esValida">
        <h2>{{ pregunta }}</h2>
        <h1>{{ respuesta }}</h1>
      </div>
    </div>
  </div>
</template>
 
<script>
import { consultarRespuestaFachada } from "@/clients/YesNoClient.js";
export default {
  data() {
    return {
      pregunta: null,
      respuesta: null,
      imagen: null,
      esValida: false,
    };
  },
  watch: {
    pregunta(value, oldValue) {
      this.esValida = false;
      if (value.includes("?")) {
        this.esValida = true;
        console.log("Valor actual:" + value);
        console.log("Valor anterior:" + oldValue);
        // aqui deberia de consultar el api
        this.consumirAPI();
      }
    },
  },
  methods: {
    // solo si se usa en un metodo se declara como async
    async consumirAPI() {
      this.respuesta = "Pensando....";
      const resp = await consultarRespuestaFachada();
      console.log(resp);
      console.log(resp.image);
      console.log(resp.answer);
      console.log(resp.forced);
      this.respuesta = resp.answer;
      this.imagen = resp.image;
    },
  },
};
</script>

<style scoped>
.container-2, 
img { 
  /* para que ocupe todo el tamaño  */
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-height: 100%; 
  /* con position fixed es como si estuviera flotando el elemento como si fuera  */
  /* marca de agua */
  position: sticky;
  left: 0px;
  top: 0px; 
 } 

.container-2 {
  background-color: rgba(97, 13, 194, 0.1);
}

.pregunta-container {
  position: relative;
} 

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  margin-top: 70px;
} 
/* para evitar que cuando seleccione el cuadro salga el borde de seleccion */
input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 25px;
}

h1 {
  color: white;
} 

h2 {
  color: white;
  margin-top: 90px;
} 
</style>