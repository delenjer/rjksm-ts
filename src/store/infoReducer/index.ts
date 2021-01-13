import { IInfo } from '../../interface/interface';
import { SET_INFO } from './actions';

export const getInfo = (state: any) => state;

const infoReducer = (info = [], action:IInfo) => {
  switch (action.type) {
    case SET_INFO:
      return action.data;

    default:
      return info;
  }
};

export default infoReducer;
