import {
  GET_DESTINOS_FINAL,
  SET_DESTINO_FINAL
} from '../actions/destinoFinal';

const DestinoReducerDefaultState = {
  arregloDeDestinosFinales:[{ 
      geojson: "",
      ent_abr: "",
      id_dest: "",
      nombre: ""
    }],
  destinoFinal:{
    geojson: "",
    ent_abr: "",
    id_dest: "",
    nombre: ""
  }
};

export default (state = DestinoReducerDefaultState, action) => {
  switch (action.type) {
    case GET_DESTINOS_FINAL:
      return {
        ...state,
        arregloDeDestinosFinales: action.destinosFinal.data.data
      };
    case SET_DESTINO_FINAL:
      return {
        ...state,
        destinoFinal: action.destionoSeleccionado
      };
    default:
      return state;
  }
};
