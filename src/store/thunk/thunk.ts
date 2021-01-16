import { getArtCollections, getInfo } from '../../api/api';
import {setArtCollections} from '../artCollectionsReducer/actions';
import { setLoading } from '../loadReducer/actions';
import { setLoadingContent } from '../isLoadingContentReducer/actions';
import { setInfo } from '../infoReducer/actions';
import { setError } from '../errorMessageReducer/actions';

export const loadingArtCollections = (currentPage: number, pageSize: number, query: string, selectValue: string) => {
  return (dispatch: (arg: { type: string }) => void) => {
    dispatch(setLoading(true));
    getArtCollections(currentPage, pageSize, query, selectValue)
      .then(async data => {
        dispatch(await setArtCollections(data));
        dispatch(setLoading(false));
      });
  }
};

export const loadInfo = (infoId: string) => (dispatch: (arg: { type: string }) => void) => {
  dispatch(setLoadingContent(true));
  getInfo(infoId).then(async (data) => {
    dispatch(await setInfo(data));
    dispatch(setLoadingContent(false));
  }).catch(() => {
    dispatch(setError(true));
  });
};
