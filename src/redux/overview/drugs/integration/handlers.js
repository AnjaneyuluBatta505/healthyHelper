const initialState = {
  data: [],
  error: '',
  searchString: '',
  isLoading: false,
};

export const getDataByStringRequest = state => ({ ...state, isLoading: true });
export const getDataByStringSuccess = (state, { payload }) => ({ ...state, isLoading: false, data: payload });
export const getDataByStringFailure = (state, { payload }) => ({ ...state, isLoading: false, error: payload });

export const setSearchString = (state, { payload }) => ({ ...state, searchString: payload });

export default initialState;
