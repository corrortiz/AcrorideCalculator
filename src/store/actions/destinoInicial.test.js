import * as destinos from './destinoInicial';

describe('Destino inicial', () => {
  test('deberia de regresar un destino', () => {
    const lugar = "veracruz" 
    const expectedAction = {
      type: destinos.GET_DESTINO,
    };
    expect(destinos.getDestinos(lugar)).toContain(expectedAction.type);
  });

});
