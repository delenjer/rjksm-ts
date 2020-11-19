import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { IState } from '../interface/interface';

import artCollectionsReducer, *as selectorsArtCollections from './artCollectionsReducer/index';

export const getArtCollections = (state: IState) => selectorsArtCollections
  .getArtCollections(state.artCollections);

const rootReducer = combineReducers({
  artCollections: artCollectionsReducer,
});

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;
