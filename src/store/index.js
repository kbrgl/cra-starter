import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(rootSaga)
  const persistor = persistStore(store)
  return { store, persistor }
}
