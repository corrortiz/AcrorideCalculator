import React from 'react';
import { Route, withRouter } from 'react-router-dom';
//Animate Routs
import { spring, AnimatedSwitch, } from 'react-router-transition';
//Internal Routs
import IngresoPaciente from './IngresoPaciente';
import AltaPaciente from './AltaPaciente';
import ServiciosMedicos from './ServiciosMedicos';
import AreasAuxiliares from './AreasAuxiliares';
import HistorialEstudios from './HistorialEstudios';
import AltaServicios from './AltaServicios';
import AltaAreaAuxiliares from './AltaAreaAuxiliares';
import CrearUsuarios from './CrearUsuarios';

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
        <Route path="/ingreso-paciente" component={IngresoPaciente} />
        <Route path="/alta-paciente" component={AltaPaciente} />
        <Route path="/servicios-medicos" component={ServiciosMedicos} />
        <Route path="/areas-auxiliares" component={AreasAuxiliares} />
        <Route path="/historial-de-estudios" component={HistorialEstudios} />
        <Route path="/alta-de-servicios" component={AltaServicios} />
        <Route path="/alta-area-auxiliares" component={AltaAreaAuxiliares} />
        <Route path="/crear-usuarios" component={CrearUsuarios} />
      </AnimatedSwitch>
    </div>
  </Screen>
));

export default Routs;
