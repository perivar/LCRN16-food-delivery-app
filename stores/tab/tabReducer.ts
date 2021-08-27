import { AnyAction } from 'redux';
import * as tabActionTypes from './tabActions';

export interface IState {
  selectedTab: string;
}

const initialState: IState = {
  selectedTab: '',
};

const tabReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case tabActionTypes.SET_SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.payload.selectedTab,
      };
    default:
      return state;
  }
};

export default tabReducer;
