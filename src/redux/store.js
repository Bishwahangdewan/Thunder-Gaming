import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

//persist store allows browser to cache store
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//create persisted version of store
export const persistor = persistStore(store);

export default { store, persistor };
