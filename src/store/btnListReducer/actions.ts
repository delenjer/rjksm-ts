export const SET_BUTTON_LIST = 'SET_BUTTON_LIST';
export const SET_BUTTON_TEXT = 'SET_BUTTON_TEXT';

export const setButtonList = (btnList: any) => ({
  type: SET_BUTTON_LIST,
  btnList,
});

export const setButtonText = (text: string) => ({
  type: SET_BUTTON_TEXT,
  text,
});
