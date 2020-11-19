import { getArtCollections } from '../../api/api';
import {setArtCollections} from '../artCollectionsReducer/actions';
// import { setLoading } from '../loadReducer/actions';
import { IActionArtCollections } from '../../interface/interface';

export const loadingArtCollections = (currentPage: number, pageSize: number) => {
  return (dispatch: (arg: { type: string; artItem: IActionArtCollections }) => void) => {
    getArtCollections(currentPage, pageSize)
      .then(data => {
        dispatch(setArtCollections(data));
      });
  }
};
