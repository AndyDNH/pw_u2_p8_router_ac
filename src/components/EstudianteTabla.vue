<template>
  <div class="container">
    <div v-show="mostrar">
      <h1>{{ mensajeFinal }}</h1>
    </div>
    <div class="textos">
      <label for="id_nombre">Nombre</label>
      <input v-model="nuevoNombre" id="id_nombre" type="text" />
      <span v-if="mensaje.nombre">{{ mensaje.nombre }}</span>

      <label for="id_apellido">Apellido</label>
      <input v-model="nuevoApellido" id="id_apellido" type="text" />
      <span v-if="mensaje.apellido">{{ mensaje.apellido }}</span>

      <label for="id_genero">Género</label>
      <input v-model="nuevoGenero" id="id_genero" type="text" />

      <label for="id_edad">Edad</label>
      <input v-model="nuevaEdad" id="id_edad" type="number" />

      <label for="id_correo">Correo</label>
      <input v-model="nuevoCorreo" id="id_correo" type="email" />
    </div>

    <br />
    <button v-on:click="agregarEstudiante"><b>Agregar</b></button>

    <table border="1">
      <thead>
        <!--tr siempre es primero y representa una fila, primero se contruye tanto en la cabecera como el cuerpo-->
        <tr>
          <!--Como contenido de la fila declaro todas las columnas-->
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Genero</th>
          <th>edad</th>
          <th>Correo</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{ nombre, apellido, genero, edad, correo } in lista"
          :key="nombre + apellido"
        >
          <!--Para la columna ya no declaro un th si no que un elemento td-->
          <td>{{ nombre }}</td>
          <td>{{ apellido }}</td>
          <td>{{ genero }}</td>
          <td>{{ edad }}</td>
          <td>{{ correo }}</td>
          <td><button>Ver</button></td>
        </tr>
        <!--Por cada fila es un elemento html tr-->
      </tbody>
    </table>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      nuevoNombre: null,
      nuevoApellido: null,
      nuevoGenero: null,
      nuevaEdad: null,
      nuevoCorreo: null,
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
      mostrar: false,
      nombreMensaje: false,
      apellidoMensaje: false,
      mensaje: {
        nombre: null,
        apellido: null,
      },
      mensajeFinal:null,
    };
  },
  methods: {
    agregarEstudiante() {
      if (this.validarEntradas() == true) {
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
          this.mostrar = false;
        }, 3000);
        this.mensajeFinal="Estudiante Guardado"
        this.limpiarPagina();
      }
    },
    validarEntradas() {
      try {

      
      // let validar= this.mensaje.apellido.primero;
      let numero = 2;
      if (this.nuevoNombre === null) {
        this.mensaje.nombre = "Nombre es Obligatorio";
        numero--;
      };
      if (this.nuevoApellido === null) {
        this.mensaje.apellido = "Apellido es Obligatorio";
        numero--;
      };
      if (numero === 2){
        return true;
      }else {
        return false;
      }
      }catch(error){
        console.error("Ha ocurriido un problema");
        console.error(error);
        this.mostrar = true;
        this.mensajeFinal= "Ha ocurrido un error del sistema";
      }
    
  
    },
    limpiarPagina(){
      this.nombre = null;
      this.mensaje.nombre = null;
      this.mensaje.apellido = null;
    },
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
  padding: 12px 10px;
  font-size: 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 120px;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 0.95rem;
  background-color: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
  margin: 20px;
}

thead {
  background-color: #f4f6f8;
}

thead th {
  text-align: C;
  padding: 15px;
  color: #333;
  font-weight: 600;
  border-bottom: none;
}

tbody tr {
  transition: background-color 0.2s;
}

tbody tr:nth-child(even) {
  background-color: #7bacdd;
}

tbody tr:hover {
  background-color: #9da0a5;
}

tbody td {
  padding: 15px;
  border-bottom: 1px solid #e3e6ea;
  color: #444;
}
</style>