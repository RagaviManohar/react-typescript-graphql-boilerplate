/**
 * Common Types
 */

export interface JWTPayload {
  orgUuid: string;
  walletAddress: string;
  role: string;
  exp: number;
}
