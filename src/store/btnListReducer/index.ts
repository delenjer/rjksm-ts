import { SET_BUTTON_LIST, SET_BUTTON_TEXT } from './actions';

const initialState = {
  btnList: [],
  btnText: 10,
};

export const getBtnList = (state: any) => state;

const btnListReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case SET_BUTTON_LIST:
      return {
        ...state,
        btnList: action.btnList,
      };

    case SET_BUTTON_TEXT:
      return {
        ...state,
        btnText: +action.text,
      };

    default:
      return state;
  }
};

export default btnListReducer;
