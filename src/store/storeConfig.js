import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import globalsReducer from './reducers/globals';
import destinosReducer from './reducers/destinos';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default () => {
  const store = createStoreWithMiddleware(
    combineReducers({
      globals: globalsReducer,
      destinos: destinosReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //left on purpose by anyone who wants to play with the redux store
  );

  return store;
};
