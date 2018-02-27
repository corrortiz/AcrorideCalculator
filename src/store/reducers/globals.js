import {
  SHOW_SNACKBAR,
  MESSAGE_SNACKBAR,
  SHOW_LOADING
} from '../actions/globals';

const GlobalsReducerDefaultState = {
  openSnackBar: false,
  messageSnackBar: '',
  showLoading: false
};

export default (state = GlobalsReducerDefaultState, action) => {
  switch (action.type) {
    case SHOW_SNACKBAR:
      return {
        ...state,
        openSnackBar: !state.openSnackBar
      };
    case MESSAGE_SNACKBAR:
      return {
        ...state,
        messageSnackBar: action.message
      };
    case SHOW_LOADING:
      return {
        ...state,
        showLoading: !state.showLoading
      };
    default:
      return state;
  }
};
