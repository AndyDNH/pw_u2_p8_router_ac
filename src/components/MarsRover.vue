<template>
    <div class="container">
        <img v-if="imagen" :src="imagen" alt="No se pudo cargar" />
        <div class="pregunta-container">
            <input v-model="fecha" type="date" placeholder="Escoge una fecha" />
            <button v-on:click="consumirAPI">Buscar</button>

            <div v-if="!buscando">
                <h1>Escoge una fecha y presiona Buscar</h1>
               
            </div>
            <div v-else-if="fotos.length === 0">
                <h1>No hay fotos para esta fecha</h1>
                <h2>Puedes probar con imagenes desde el 2013</h2>
            </div>

            <div class="fotos">
                <div v-for="foto in fotos" :key="foto.id">
                    <img :src="foto.img_src" :alt="foto.camera.full_name" width="300" />
                    <p>{{ foto.camera.full_name }}</p>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import { fachadaConsumirRespuesta } from "@/clients/RoverClient"
export default {
    data() {
        return {
            fecha: '2015-07-01',
            fotos: [],
            rover: 'curiosity',
            existe: false,
        };

    },
    methods: {
        async consumirAPI() {
            this.buscando = true;
            const resp = await fachadaConsumirRespuesta(this.rover, this.fecha);
            this.fotos = resp;
        }
    },

}
</script>



<style>
.fotos {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
</style>