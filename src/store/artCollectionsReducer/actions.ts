import { IActionArtCollections } from '../../interface/interface';

export const SET_ART_COLLECTIONS = 'SET_ART_COLLECTIONS';

export const setArtCollections = (artItem:IActionArtCollections) => ({
  type: SET_ART_COLLECTIONS,
  artItem,
});
