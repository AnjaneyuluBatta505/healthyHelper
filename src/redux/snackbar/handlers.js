const initialState = {
  errorMessage: '',
  isVisible: false,
};

export const showError = (state, { payload }) => ({ ...state, errorMessage: payload, isVisible: true });

export const removeError = state => ({ ...state, errorMessage: '', isVisible: initialState.isVisible });

export default initialState;
