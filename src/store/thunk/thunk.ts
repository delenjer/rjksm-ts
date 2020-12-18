import { getArtCollections, getInfo } from '../../api/api';
import {setArtCollections} from '../artCollectionsReducer/actions';
import { setLoading } from '../loadReducer/actions';
import { setInfo } from '../infoReducer/actions';

export const loadingArtCollections = (currentPage: number, pageSize: number) => {
  return (dispatch: (arg: { type: string }) => void) => {
    dispatch(setLoading(true));
    getArtCollections(currentPage, pageSize)
      .then(async data => {
        dispatch(await setArtCollections(data));
        dispatch(setLoading(false));
      });
  }
};

export const loadInfo = (id: string) => (dispatch: (arg: { type: string }) => void) => {
  dispatch(setLoading(true));
  getInfo(id).then((data) => {
    dispatch(setInfo(data));
    dispatch(setLoading(false));
  });
};
