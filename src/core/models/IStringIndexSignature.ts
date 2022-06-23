import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export interface IStringIndexSignature {
  [key: string]: ActionCreatorWithPayload<string>;
}

