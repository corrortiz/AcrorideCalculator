import {
  GET_DESTINO,
} from '../actions/destinos';

const DestinoReducerDefaultState = {
  arregloDeDestinos:[{ 
      geojson: "",
      ent_abr: "",
      id_dest: "",
      nombre: ""
    }]
};

export default (state = DestinoReducerDefaultState, action) => {
  switch (action.type) {
    case GET_DESTINO:
      console.log(action)
      return {
        ...state,
        arregloDeDestinos: action.mira.data
      };
    default:
      return state;
  }
};
