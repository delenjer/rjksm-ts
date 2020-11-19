import { IActionArtCollections, IArtCollections } from '../../interface/interface';
import { SET_ART_COLLECTIONS } from './actions';

export const getArtCollections = (state: IArtCollections) => state;

const artCollectionsReducer = (artCollections = {}, action:IActionArtCollections) => {
  switch (action.type) {
    case SET_ART_COLLECTIONS:
      return action.artItem;

    default:
      return artCollections;
  }
}

export default artCollectionsReducer;
