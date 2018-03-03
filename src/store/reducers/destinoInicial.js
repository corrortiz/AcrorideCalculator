import {
  GET_DESTINOS_INICIAL,
  SET_DESTINO_INICIAL
} from '../actions/destinoInicial';

const DestinoReducerDefaultState = {
  arregloDeDestinosIniciales:[{ 
      geojson: "",
      ent_abr: "",
      id_dest: "",
      nombre: ""
    }],
  destinoInicial:{
    geojson: "",
    ent_abr: "",
    id_dest: "",
    nombre: ""
  }
};

export default (state = DestinoReducerDefaultState, action) => {
  switch (action.type) {
    case GET_DESTINOS_INICIAL:
      return {
        ...state,
        arregloDeDestinosIniciales: action.destinosInicial.data.data
      };
    case SET_DESTINO_INICIAL:
      return {
        ...state,
        destinoInicial: action.destinoInicial
      };
    default:
      return state;
  }
};
