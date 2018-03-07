import axios from 'axios';
//CONF of Axios
axios.defaults.headers.contentType = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
//API URL
const ROOT_URL = `http://gaia.inegi.org.mx/sakbe_v3.1/buscadestino`;
//TODO:Change a una ENV en produccion 
const API_KEY = process.env.REACT_APP_API_KEY;

export const GET_DESTINOS_FINAL = 'GET_DESTINOS_FINAL';
export const getDestinosFinal = async lugar => {
  const destinosFinal = await axios({
    method: 'post',
    url: `${ROOT_URL}?key=${API_KEY}&type=json&buscar=${lugar}`,
    data: {
      key: API_KEY,
      type: "json",
      buscar: lugar
    },
    headers:{
      //TODO: Change the URL
      "Access-Control-Allow-Origin": "*",
    }
  })

  return {
    type: GET_DESTINOS_FINAL,
    destinosFinal
  };
};

export const SET_DESTINO_FINAL = 'SET_DESTINO_FINAL';
export const setDestinosFinal = destionoSeleccionado => {
  return {
    type: SET_DESTINO_FINAL,
    destionoSeleccionado
  };
};