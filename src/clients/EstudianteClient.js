import axios from "axios";

let arreglo = []

const consultarEstudiantes = async() => {
    const respuesta = axios.get("http://localhost:8081/api/matricula/v1/estudiantes/").then(resp => resp.data);
    console.log(respuesta);
    return respuesta;
    
}

const consultarEstudiantesPorID = async(id) => {
    const respuesta = axios.get(`http://localhost:8081/api/matricula/v1/estudiantes/${id}`).then(resp => resp.data);
    console.log(respuesta);
    return respuesta;
    
}

export const consultarEstudiantesFachada = async() => {
    return await consultarEstudiantes();
    
}

export const consultarEstudiantePorIDFachada = async (id) => {
    return await consultarEstudiantesPorID(id);
};