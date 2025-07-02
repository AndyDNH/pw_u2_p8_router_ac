<template>
  <div class="form-container">
    <form v-if="estudiante" class="estudiante-form">
      <h2>Datos del Estudiante</h2>
      <div class="form-group">
        <label>Nombre</label>
        <input :value="estudiante.nombre"  />
      </div>
      <div class="form-group">
        <label>Apellido</label>
        <input :value="estudiante.apellido"  />
      </div>
      <div class="form-group">
        <label>Fecha Nacimiento</label>
        <input :value="estudiante.fechaNacimiento"  />
      </div>
    </form>
    
  </div>
</template>

<script>
export default {
    props: {
        estudiante: Object,
        required: true,
        error: String
    }
};
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
}

.estudiante-form {
  background: #fff;
  padding: 32px 40px;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(44, 62, 80, 0.12);
  min-width: 340px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.estudiante-form h2 {
  color: #2980b9;
  margin-bottom: 18px;
  text-align: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

label {
  font-weight: 600;
  color: #34495e;
}

input {
  padding: 10px 14px;
  border: 1px solid #bfc9d1;
  border-radius: 6px;
  background: #f8fafc;
  color: #2c3e50;
  font-size: 15px;
}

input:disabled {
  background: #eaf1fb;
  color: #7f8c8d;
}

.error-msg {
  color: #e74c3c;
  margin-top: 18px;
  font-weight: 600;
  text-align: center;
}
</style>