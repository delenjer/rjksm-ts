import { getArtCollections, getInfo } from '../../api/api';
import {setArtCollections} from '../artCollectionsReducer/actions';
import { setLoading } from '../loadReducer/actions';
import { setInfo } from '../infoReducer/actions';
import { setError } from '../errorMessageReducer/actions';

export const loadingArtCollections = (currentPage: number, pageSize: number, query: string) => {
  return (dispatch: (arg: { type: string }) => void) => {
    dispatch(setLoading(true));
    getArtCollections(currentPage, pageSize, query)
      .then(async data => {
        dispatch(await setArtCollections(data));
        dispatch(setLoading(false));
      });
  }
};

export const loadInfo = (id: string) => (dispatch: (arg: { type: string }) => void) => {
  dispatch(setLoading(true));
  getInfo(id).then(async (data) => {
    dispatch(await setInfo(data));
    dispatch(setLoading(false));
  }).catch(() => {
    dispatch(setError(true));
  });
};
