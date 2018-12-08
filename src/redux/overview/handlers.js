const initialState = {
  data: [],
  isLoading: false,
  error: '',
};

export const getOverviewDataRequest = state => ({ ...state, isLoading: true });
export const getOverviewDataSuccess = (state, { payload }) => ({ ...state, data: payload, isLoading: false });
export const getOverviewDataFailure = (state, { payload }) => ({ ...state, isLoading: false, error: payload });

export const setInitialState = () => ({ ...initialState });

export default initialState;
