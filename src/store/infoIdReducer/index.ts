import { IInfo } from '../../interface/interface';
import { SET_INFO_ID } from './actions';

export const getInfoId = (state: any) => state;

const infoIdReducer = (infoId = '', action:IInfo) => {
  switch (action.type) {
    case SET_INFO_ID:
      return action.id;

    default:
      return infoId;
  }
};

export default infoIdReducer;
