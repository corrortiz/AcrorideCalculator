import { createStore, combineReducers } from 'redux';

import globalsReducer from './reducers/globals';

export default () => {
  const store = createStore(
    combineReducers({
      globals: globalsReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //left on purpose by anyone who wants to play with the redux store
  );

  return store;
};
