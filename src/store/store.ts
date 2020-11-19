import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { IState } from '../interface/interface';

import artCollectionsReducer, *as selectorsArtCollections from './artCollectionsReducer/index';
import loadingArtItemsReducer, *as selectorsLoadingArtItems from './loadingArtItemsReducer/index';
import btnListReducer, *as selectorsBtnList from './btnListReducer/index';
import loadReducer, *as selectorsIsLoading from './loadReducer/index';

export const getIsLoading = (state: IState) => selectorsIsLoading
  .getIsLoading(state.isLoading);

export const getBtnList = (state: IState) => {
  const buttonList = selectorsBtnList.getBtnList(state.btnList);

  buttonList.btnList.forEach((item: HTMLDivElement) => {
    if (+item.innerHTML === buttonList.btnText) {
      item.classList.add('active-btn');
    } else {
      item.classList.remove('active-btn');
    }
  });
};

export const getLoadingArtItems = (state: IState) => selectorsLoadingArtItems
  .getLoadingArtItems(state.loadingArtItems);

export const getArtCollections = (state: IState) => selectorsArtCollections
  .getArtCollections(state.artCollections);

const rootReducer = combineReducers({
  artCollections: artCollectionsReducer,
  loadingArtItems: loadingArtItemsReducer,
  btnList: btnListReducer,
  isLoading: loadReducer,
});

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;