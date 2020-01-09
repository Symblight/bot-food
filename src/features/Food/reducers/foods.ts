import { Action } from './types';

const initialState = Object.freeze({});

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
