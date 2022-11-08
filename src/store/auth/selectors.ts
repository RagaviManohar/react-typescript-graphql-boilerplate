/**
 * Selectors for AuthSlice
 */

import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';

import { initialState, sliceName } from 'store/auth';

export const selectWallet = (state: RootState) =>
  state?.[sliceName] || initialState;

export const selectLoading = createSelector(
  [selectWallet],
  subState => subState.loading,
);

export const selectError = createSelector(
  [selectWallet],
  subState => subState.error,
);
