const initialState = {
  authenticated: false,
  user: {},
  error: '',
  isLoading: false,
};

export const action = state => ({ ...state });

export const setInitialState = () => ({ ...initialState });
