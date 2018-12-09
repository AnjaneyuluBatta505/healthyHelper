const initialState = {
  drugsGroup: [],
  listOfDrugs: [],
  drugInfo: {},
  error: '',
  isLoading: false,
};

export const getDrugsGroupDataRequest = state => ({ ...state, isLoading: true });
export const getDrugsGroupDataSuccess = (state, { payload }) => ({ ...state, drugsGroup: payload, isLoading: false });
export const getDrugsGroupDataFailure = (state, { payload }) => ({ ...state, isLoading: false, error: payload });

export const getListOfDrugsRequest = state => ({ ...state, isLoading: true });
export const getListOfDrugsSuccess = (state, { payload }) => ({ ...state, listOfDrugs: payload, isLoading: false });
export const getListOfDrugsFailure = (state, { payload }) => ({ ...state, isLoading: false, error: payload });

export const getDrugInfoRequest = state => ({ ...state, isLoading: true });
export const getDrugInfoSuccess = (state, { payload }) => ({ ...state, drugInfo: payload, isLoading: false });
export const getDrugInfoFailure = (state, { payload }) => ({ ...state, isLoading: false, error: payload });

export default initialState;
