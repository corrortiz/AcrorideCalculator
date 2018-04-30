import React from 'react';
import { Route, withRouter } from 'react-router-dom';
//Animate Routs
import { spring, AnimatedSwitch } from 'react-router-transition';
//Internal Routs
import App from './App';
import AppBar from '../AppBar';

function slide(val) {
  return spring(val, {
    stiffness: 125,
    damping: 16,
  });
}

const topBarTransitions = {
  atEnter: {
    offset: -100,
  },
  atLeave: {
    offset: slide(-150),
  },
  atActive: {
    offset: slide(0),
  },
};

const Screen = ({ children }) => <div className="screen__inner">{children}</div>;

/**
 * Basic component for react-router where the routes and their components are declared
 * also the change animation is added by means of react-transition-group
 */
export const Routs = withRouter(({ location }) => (
  <Screen>
    <div className="rule">
      <AnimatedSwitch
        {...topBarTransitions}
        runOnMount={location.pathname === '/locales'}
        mapStyles={styles => ({
          transform: `translateY(${styles.offset}%)`
        })}
        className="switchRule"
        location={location}
      >
        <Route path="/:sub" component={AppBar} />
        <Route component={App} />
      </AnimatedSwitch>
    </div>
  </Screen>
));

export default Routs;
