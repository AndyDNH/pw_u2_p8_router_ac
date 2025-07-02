<template>
  <div class="container">
    <h1>Estudiantes</h1>
    <button @click="mostrar = !mostrar">
      {{ mostrar ? 'Ocultar' : 'Consultar' }} estudiantes
    </button>
    <div class="table" v-if="mostrar">
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha Nacimiento</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="estudiante in listaEstudiantes"
              :key="estudiante.id">
            <td>{{ estudiante.id }}</td>
            <td>{{ estudiante.nombre }}</td>
            <td>{{ estudiante.apellido }}</td>
            <td>{{ estudiante.fechaNacimiento }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listaEstudiantes: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      mostrar: false
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}

h1 {
  margin-bottom: 20px;
  color: #2c3e50;
}

button {
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 24px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 16px;
  transition: background 0.2s;
}
button:hover {
  background-color: #217dbb;
}

.table {
  width: 100%;
  display: flex;
  justify-content: center;
}

table {
  border-collapse: collapse;
  min-width: 600px;
  background: #fff;
  box-shadow: 0 2px 12px rgba(44, 62, 80, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

th, td {
  padding: 14px 18px;
  text-align: center;
}

th {
  background-color: #2980b9;
  color: #fff;
  font-weight: 600;
}

tr:nth-child(even) {
  background-color: #f2f6fa;
}

tr:hover {
  background-color: #eaf1fb;
  transition: background 0.2s;
}
</style>