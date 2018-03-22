import * as actions from './globals';

describe('Redux Global ACTIONS', () => {
  test('should sent SHOW_SNACKBAR', () => {
    const expectedAction = {
      type: actions.SHOW_SNACKBAR
    };
    expect(actions.showSnackBar()).toEqual(expectedAction);
  });

  test('should sent SHOW_LOADING', () => {
    const expectedAction = {
      type: actions.SHOW_LOADING
    };
    expect(actions.showLoading()).toEqual(expectedAction);
  });

  test('should set a message in a snackbar', () => {
    const message = 'AO Rules';
    const expectedAction = {
      type: actions.MESSAGE_SNACKBAR,
      message
    };
    expect(actions.messageSnackBar(message)).toEqual(expectedAction);
  });

});
