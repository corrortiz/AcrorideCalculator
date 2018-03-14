import {
  GET_RESULTADOS_RUTA,
} from '../actions/resultadosRuta';

const ResultadoRutaDefaultState = {
  resultadoCalculoRuta:{
    geojson: "",
    costo_caseta:"",
    tiempo_min:"",
    advertencia:"",
    long_km: "",
    peaje: ""
  }
};

export default (state = ResultadoRutaDefaultState, action) => {
  switch (action.type) {
    case GET_RESULTADOS_RUTA:
      return {
        ...state,
        resultadoCalculoRuta: action.calculoRuta.data.data
      };
    default:
      return state;
  }
};
