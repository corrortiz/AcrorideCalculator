import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  showSnackBar,
  messageSnackBar,
  showLoading,
} from '../../store/actions/globals';

/**
 * This is a HOC for the globals redux state
 * @param {*Componetn to recibe globals state} WrappedComponent
 * First a function is created that receives the component that we are going to wrap as a
 * parameter, this function returns the wrapped component to which the new properties are added
 * through Redux Connect, which are chosen by the functions mapStateToProps and mapDispachToProps
 */
const ConectorGlobal = WrappedComponent => {
  /**
   * New class that is necessary to connect to redux
   */
  class NameWrappedComponent extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  /**
   * Here we choose the redux states to pass
   * @param {*} state
   */
  const mapStateToProps = state => {
    return {
      globals: state.globals
    };
  };
  /**
   * Actions dispachers
   * @param {*} dispatch
   */
  const mapDispatchToProps = dispatch => ({
    showSnackBar: () => dispatch(showSnackBar()),
    showLoading: () => dispatch(showLoading()),
    messageSnackBar: message => dispatch(messageSnackBar(message))
  });
  /**
   * Here we connect the react-redux HOC and the new class
   */
  return connect(mapStateToProps, mapDispatchToProps)(NameWrappedComponent);
};

export default ConectorGlobal;
