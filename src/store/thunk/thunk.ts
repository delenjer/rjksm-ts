import { getArtCollections } from '../../api/api';
import {setArtCollections} from '../artCollectionsReducer/actions';
import { IActionArtCollections } from '../../interface/interface';

export const loadingArtCollections = () => {
  return (dispatch: (arg: { type: string; artItem: IActionArtCollections }) => void) => {
    getArtCollections()
      .then(data => {
        dispatch(setArtCollections(data));
      });
  }
};
