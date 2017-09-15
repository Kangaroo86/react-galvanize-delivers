import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer.js';

export default function setupStore() {
  return createStore(rootReducer);
}
