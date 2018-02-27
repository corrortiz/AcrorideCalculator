import {
  SHOW_SNACKBAR,
  MESSAGE_SNACKBAR,
  SHOW_LOADING
} from '../Actions/globals';

import reducer from './globals';

describe('Redux Global REDUCER', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      openSnackBar: false,
      messageSnackBar: '',
      showLoading: false
    });
  });

  it('should change the status of openSnackBar to true', () => {
    expect(
      reducer([], {
        type: SHOW_SNACKBAR
      })
    ).toEqual({
      openSnackBar: true
    });
  });

  it('should change the status of showLoading to true', () => {
    expect(
      reducer([], {
        type: SHOW_LOADING
      })
    ).toEqual({
      showLoading: true
    });
  });

  it('should set a message inside a snackbar', () => {
    expect(
      reducer([], {
        type: MESSAGE_SNACKBAR,
        message: 'AO HyS Rules'
      })
    ).toEqual({
      messageSnackBar: 'AO HyS Rules'
    });
  });
});
