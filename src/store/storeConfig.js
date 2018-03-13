import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import globalsReducer from './reducers/globals';
import destinoInicialReducer from './reducers/destinoInicial';
import destinoFinalReducer from './reducers/destinoFinal';
import resultadosRutaReducer from './reducers/resultadosRuta';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default () => {
  const store = createStoreWithMiddleware(
    combineReducers({
      globals: globalsReducer,
      destinosInicial: destinoInicialReducer,
      destinosFinal: destinoFinalReducer,
      resultadoRuta: resultadosRutaReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //left on purpose by anyone who wants to play with the redux store
  );

  return store;
};
