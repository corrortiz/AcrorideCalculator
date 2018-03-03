import reducer from './destinoInicial';

describe('Redux destinosInicial REDUCER', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      destinos:[{ 
        geojson: "",
        ent_abr: "",
        id_dest: "",
        nombre: ""
      }]
    });
  });
  
});
