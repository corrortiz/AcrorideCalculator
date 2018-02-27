export const SHOW_SNACKBAR = 'SHOW_SNACKBAR';
export const showSnackBar = () => ({
  type: SHOW_SNACKBAR
});

export const MESSAGE_SNACKBAR = 'MESSAGE_SNACKBAR';
export const messageSnackBar = (message: string) => ({
  type: MESSAGE_SNACKBAR,
  message
});

export const SHOW_LOADING = 'SHOW_LOADING';
export const showLoading = () => ({
  type: SHOW_LOADING
});
