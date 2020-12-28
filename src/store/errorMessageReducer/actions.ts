export const SET_ERROR = 'SET_ERROR';

export const setError = (isError: boolean) => ({
  type: SET_ERROR,
  isError,
});
