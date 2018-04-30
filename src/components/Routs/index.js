import React from 'react';
import { Route, withRouter } from 'react-router-dom';
//Animate Routs
import { spring, AnimatedSwitch, AnimatedRoute } from 'react-router-transition';
//Internal Routs
import Landing from './Landing';
import App from './App';
import AppBar from '../AppBar';

function glide(val) {
  return spring(val, {
    stiffness: 174,
    damping: 24
  });
}

function slide(val) {
  return spring(val, {
    stiffness: 125,
    damping: 16,
  });
}

const pageTransitions = {
  atEnter: {
    offset: 100
  },
  atLeave: {
    offset: glide(-100)
  },
  atActive: {
    offset: glide(0)
  }
};

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

const Screen = ({ children }) => <div className="screen">{children}</div>;

/**
 * Basic component for react-router where the routes and their components are declared
 * also the change animation is added by means of react-transition-group
 */
export const Routs = withRouter(({ location }) => (
  <Screen>
    <div className="rule">
      <AnimatedSwitch
        {...pageTransitions}
        runOnMount={location.pathname === '/'}
        mapStyles={styles => ({
          transform: `translateX(${styles.offset}%)`
        })}
        className="switchRule"
        location={location}
      >
        <Route exact path="/" component={Landing} />
        <Route component={App} />
      </AnimatedSwitch>
      <AnimatedRoute
        {...topBarTransitions}
        path="/:suhDude+"
        component={AppBar}
        className="routeRule"
        mapStyles={styles => ({
          transform: `translateY(${styles.offset}%)`
        })}
      />
    </div>
  </Screen>
));

export default Routs;
