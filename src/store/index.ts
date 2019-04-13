import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import rootReducer from '../reducers';
import firebaseConfig from '../services/firebase';

const middlewares = [
  thunk.withExtraArgument({
    getFirebase,
    getFirestore,
  })
];

const rrfConfig = {
  userProfile: 'users',
}

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middlewares),
  reduxFirestore(firebaseConfig),
  reactReduxFirebase(firebaseConfig, rrfConfig)
));

export default store;
