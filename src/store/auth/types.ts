/**
 * Types for Wallet Slice
 */

import { PayloadAction } from '@reduxjs/toolkit';

export interface WhoisDetails {}

export interface AuthSliceState {
  loading: boolean;
  error: string | null;
  details: WhoisDetails;
}

interface WhoisApiType {}
export type GetWhoisActionProps = PayloadAction<WhoisApiType>;
export type GetWhoisSuccessProps = PayloadAction<WhoisDetails>;
export type GetWhoisErrorProps = PayloadAction<string>;
