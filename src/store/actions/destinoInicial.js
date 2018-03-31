import axios from 'axios';

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
      //TODO: Change the URL
      "Access-Control-Allow-Origin": "*",
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