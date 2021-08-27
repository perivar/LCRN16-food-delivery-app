import { Dispatch } from 'react';
import { Action } from 'redux';

export const SET_SELECTED_TAB = 'SET_SELECTED_TAB';

export const setSelectedTabSuccess = (selectedTab: string) => ({
  type: SET_SELECTED_TAB,
  payload: { selectedTab },
});

export function setSelectedTab(selectedTab: string) {
  return (dispatch: Dispatch<Action>) => {
    dispatch(setSelectedTabSuccess(selectedTab));
  };
}
