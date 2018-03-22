import axios from 'axios';
//CONF of Axios
axios.defaults.headers.contentType = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
//API URL
const ROOT_URL = `http://gaia.inegi.org.mx/sakbe_v3.1/buscadestino`;
//TODO:Change a una ENV en produccion 
const API_KEY = process.env.REACT_APP_API_KEY;

export const GET_DESTINOS_INICIAL = 'GET_DESTINOS_INICIAL';
export const getDestinosInicial = async lugar => {
  const destinosInicial = await axios({
    method: 'post',
    url: `${ROOT_URL}?key=${API_KEY}&type=json&buscar=${lugar}`,
    data: {
      key: API_KEY,
      type: "json",
      buscar: lugar
    },
    headers:{
      //TODO: Change te URL
      "Access-Control-Allow-Origin": "http://localhost:3000",
    }
  })

  return {
    type: GET_DESTINOS_INICIAL,
    destinosInicial
  };
};

export const SET_DESTINO_INICIAL = 'SET_DESTINO_INICIAL';
export const setDestinosInicial = destionoSeleccionado => {
  return {
    type: SET_DESTINO_INICIAL,
    destionoSeleccionado
  };
};