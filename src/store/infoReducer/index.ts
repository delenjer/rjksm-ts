import { IActionInfo } from '../../interface/interface';
import { SET_INFO } from './actions';

export const getInfo = (state: any) => state;

const infoReducer = (info = [], action:IActionInfo) => {
  switch (action.type) {
    case SET_INFO:
      return action.id;

    default:
      return info;
  }
};

export default infoReducer;
