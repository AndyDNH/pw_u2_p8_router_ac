<template>
  <div class="container">

    <div v-show="mostrar">
      <h1>Estudiante Guardado</h1>
      
    </div>
    <div class="textos">
      <label for="id_nombre">Nombre</label>
      <input v-model="nuevoNombre" id="id_nombre" type="text" />

      <label for="id_apellido">Apellido</label>
      <input v-model="nuevoApellido" id="id_apellido" type="text" />

      <label for="id_genero">Género</label>
      <input v-model="nuevoGenero" id="id_genero" type="text" />

      <label for="id_edad">Edad</label>
      <input v-model="nuevaEdad" id="id_edad" type="number" />

      <label for="id_correo">Correo</label>
      <input v-model="nuevoCorreo" id="id_correo" type="email" />
    </div>

    <br />
    <button v-on:click="agregarEstudiante"><b>Agregar</b></button>

    <button v-on:click="obtenerPathVariable"> Llamar metodo</button>
    <ul>
      <li
        v-for="{ nombre, apellido, genero, edad, correo } in lista"
        :key="nombre + apellido"
      >
        Nombre: {{ nombre }} - Apellido: {{ apellido }} - Género: {{ genero }} -
        Edad: {{ edad }} - Correo: {{ correo }}
      </li>
    </ul>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      nuevoNombre: "",
      nuevoApellido: "",
      nuevoGenero: "",
      nuevaEdad: 20,
      nuevoCorreo: "",
      lista: [
        {
          nombre: "Andres",
          apellido: "Cueva",
          genero: "F",
          edad: 20,
          correo: "belen@gmail.com",
        },
        {
          nombre: "Tomas",
          apellido: "Perez",
          genero: "F",
          edad: 22,
          correo: "josefina@gmail.com",
        },
        {
          nombre: "Jenny",
          apellido: "Cueva",
          genero: "M",
          edad: 23,
          correo: "andy@gmail.com",
        },
        {
          nombre: "Rodrigo",
          apellido: "Freire",
          genero: "M",
          edad: 24,
          correo: "paul@gmail.com",
        },
        {
          nombre: "Estefano",
          apellido: "Serrano",
          genero: "F",
          edad: 25,
          correo: "camila@gmail.com",
        },
        {
          nombre: "Cinthya",
          apellido: "Lopez",
          genero: "F",
          edad: 26,
          correo: "carla@gmail.com",
        },
        {
          nombre: "Anahis",
          apellido: "Silva",
          genero: "F",
          edad: 27,
          correo: "anahis@gmail.com",
        },
      ],
      mostrar:true,
    };
  },
  methods: {
    agregarEstudiante() {
      const nuevo = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        genero: this.nuevoGenero,
        edad: this.nuevaEdad,
        correo: this.nuevoCorreo,
      };
      
      // this.lista.unshift(nuevo);
      this.lista.push(nuevo);
      this.mostrar = true;
      this.nombre = null;

      setTimeout(() => {
        this.mostrar=false;
      }, 3000);
    },
    obtenerPathVariable(){
        const CEDULA = this.$route.params.cedula;
        console.log(CEDULA)
        const anio = this.$route.query.anio;
        const mes =this.$route.query.mes;
        console.log(anio)
        console.log(mes)
    }
    
  },
};
</script>
 
<style scoped>
li {
  font-size: 20px;
}

.container {
  background: #edf7f6;
  border: 1px solid;
  border-radius: 12px;
  max-width: 900px;
  /* auto coloca el mismo valor a la derecha como a la izq */
  margin: 50px auto;
  padding: 30px;
}

label {
  display: block;
  color: #333;
  text-align: left;
  padding-left: 75px;
}

input {
  background: #4e91f9;
  color: #fff;
  width: 80%;
  border-radius: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  padding: 10px 15px;
  text-align: left;
}

button {
  background: #4e91f9;
  color: #fff;
  padding: 12px 20px;
  font-size: 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 120px;
}

ul {
    list-style: none;
    margin-top: 30px;
    
}

li {
    background: #7ec2fd;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 15px;
    color: #333;
    font-size: 20px;
}
</style>