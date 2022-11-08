import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import authSliceSaga from 'store/auth/saga';

// Types
import {
  WhoisDetails,
  GetWhoisActionProps,
  GetWhoisSuccessProps,
  GetWhoisErrorProps,
  AuthSliceState,
} from 'store/auth/types';

export const initialState: AuthSliceState = {
  loading: false,
  error: null,
  details: {} as WhoisDetails,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // whois api
    whoisAction: (state, { payload }: GetWhoisActionProps) => ({
      ...state,
      loading: true,
      error: initialState.error,
    }),
    whoisSuccessAction: (state, { payload }: GetWhoisSuccessProps) => ({
      ...state,
      loading: initialState.loading,
      error: initialState.error,
      details: payload,
    }),
    whoisErrorAction: (state, { payload }: GetWhoisErrorProps) => ({
      ...state,
      loading: initialState.loading,
      error: payload,
      details: initialState.details,
    }),
  },
});

export const { name: sliceName, actions } = slice;

export const useAuthSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: authSliceSaga });
  return { actions: slice.actions };
};

export default slice.reducer;
