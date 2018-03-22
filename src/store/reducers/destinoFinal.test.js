import reducer from './destinoFinal';

describe('Redux destinosFinal REDUCER', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
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
    });
  });
  
});
