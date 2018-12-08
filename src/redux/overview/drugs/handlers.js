const initialState = {
  data: [],
};

export const setInitialState = () => ({ ...initialState });

export const getDrugsDataRequest = (state, { payload }) => ({ data: payload });

export default initialState;
