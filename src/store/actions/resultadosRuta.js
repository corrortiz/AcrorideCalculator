import axios from 'axios';
//CONF of Axios
axios.defaults.headers.contentType = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
//API URL
const ROOT_URL = `http://gaia.inegi.org.mx/sakbe_v3.1/cuota`;
//TODO:Change a una ENV en produccion 
const API_KEY = process.env.REACT_APP_API_KEY;

export const GET_RESULTADOS_RUTA = 'GET_RESULTADOS_RUTA';
export const getResultadoRuta = async (inicial, final) => {
  const calculoRuta = await axios({
    method: 'post',
    url: `${ROOT_URL}?key=${API_KEY}&type=json&v=1&dest_i=${inicial}&dest_f=${final}&proj=MERC`,
    data: {
      key: API_KEY,
      type: "json",
      dest_i: inicial,
      dest_f: final,
      proj:"MERC",
      v:1
    },
    headers:{
      //TODO: Change the URL
      "Access-Control-Allow-Origin": "*",
    }
  })

  return {
    type: GET_RESULTADOS_RUTA,
    calculoRuta
  };
};
