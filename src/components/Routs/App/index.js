import React from 'react';
import { Route, withRouter } from 'react-router-dom';
//Animate Routs
import { spring, AnimatedSwitch, } from 'react-router-transition';
//Internal Routs
import Locales from './Locales';
import Foraneos from './Foraneos';

function glide(val) {
  return spring(val, {
    stiffness: 174,
    damping: 24
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

const Screen = ({ children }) => <div className="screen">{children}</div>;

export const Routs = withRouter(({ location }) => (
  <Screen>
    <div className="rule">
      <AnimatedSwitch
        {...pageTransitions}
        mapStyles={styles => ({
          transform: `translateX(${styles.offset}%)`
        })}
        className="switchRule"
      >
        <Route path="/locales" component={Locales} />
        <Route path="/foraneos" component={Foraneos} />
      </AnimatedSwitch>
    </div>
  </Screen>
));

export default Routs;
