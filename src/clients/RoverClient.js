import axios from "axios";

const API_KEY = '88JDzbzo3Ww51bFQ1N52CrbAg9lyo8r5awfViTOv';
const URL_BASE = 'https://api.nasa.gov/mars-photos/api/v1/rovers';

const consumirRespuesta = async (rover, fecha) => {
    const url = `${URL_BASE}/${rover}/photos?earth_date=${fecha}&api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data.photos;
}

export const fachadaConsumirRespuesta = async(rover,fecha) => {
    return await consumirRespuesta(rover,fecha);
}