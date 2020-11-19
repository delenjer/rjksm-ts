export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_LOAD_ITEM = 'SET_LOAD_ITEM';

export const setCurrentPage = (num: number) => ({
  type: SET_CURRENT_PAGE,
  num,
});

export const setLoadItemsOnPage = (num: number) => ({
  type: SET_LOAD_ITEM,
  num,
});
