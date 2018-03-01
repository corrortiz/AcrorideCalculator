import axios from 'axios';
//CONF of Axios
axios.defaults.headers.contentType = 'application/json';
//API URL
const ROOT_URL = `http://gaia.inegi.org.mx/sakbe_v3.1/buscadestino`;
//TODO:Change a una ENV en produccion 
const API_KEY = process.env.REACT_APP_API_KEY;

export const GET_DESTINO = 'GET_DESTINO';
export const getDestinos = async lugar => {
  let mira = {
    data:
    [{ 
      geojson: "AA",
      ent_abr: "BB",
      id_dest: "123",
      nombre: lugar
    }]
  }
/*
  const destinos = await axios.post(ROOT_URL, {
    key: API_KEY,
    type: "json",
    buscar: lugar
  });*/
  console.log(mira);
  return {
    type: GET_DESTINO,
    mira
  };
};
