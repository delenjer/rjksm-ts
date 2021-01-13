import { IActionModal } from '../../interface/interface';
import { SET_ACTION } from './actions';

export const getActiveModal = (state: boolean) => state;

const modalWindowReducer = (isActiveModal = false, action:IActionModal) => {
  switch (action.type) {
    case SET_ACTION:
      return action.isAction;

    default:
      return isActiveModal;
  }
}

export default modalWindowReducer;
