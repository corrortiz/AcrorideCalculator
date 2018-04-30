import React from 'react';
import Link from 'react-router-dom/Link';
//Material UI Components
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
//ICons
import Accessible from 'material-ui-icons/Accessible';
import DirectionsRun from 'material-ui-icons/DirectionsRun';
import LocalHotel from 'material-ui-icons/LocalHotel';
import ContentPaste from 'material-ui-icons/ContentPaste';
import History from 'material-ui-icons/History';
import LibraryAdd from 'material-ui-icons/LibraryAdd';
import QueuePlayNext from 'material-ui-icons/QueuePlayNext';
import GroupAdd from 'material-ui-icons/GroupAdd';
import ExitToApp from 'material-ui-icons/ExitToApp';

const style = {
  fill: "#003c8f"
}

export const inicialListItems = (
  <div>
    <ListItem 
      button  
      component={Link}
      to="/ingreso-paciente" 
    >
      <ListItemIcon>
        <Accessible style={style} />
      </ListItemIcon>
      <ListItemText primary="Ingreso Paciente" />
    </ListItem>
    <ListItem 
      button
      component={Link}
      to="/alta-paciente" 
    >
      <ListItemIcon>
        <DirectionsRun style={style}/>
      </ListItemIcon>
      <ListItemText primary="Alta Paciente" />
    </ListItem>
  </div>
);

export const medioListItems = (
  <div>
    <ListItem 
      button
      component={Link}
      to="/servicios-medicos" 
    >
      <ListItemIcon>
        <LocalHotel style={style}/>
      </ListItemIcon>
      <ListItemText primary="Servicios Médicos" />
    </ListItem>
    <ListItem 
      button
      component={Link}
      to="/areas-auxiliares" 
    >
      <ListItemIcon>
        <ContentPaste style={style}/>
      </ListItemIcon>
      <ListItemText primary="Áreas de Auxiliares" />
    </ListItem>
    <ListItem 
      button
      component={Link}
      to="/historial-de-estudios" 
    >
      <ListItemIcon >
        <History style={style}/>
      </ListItemIcon>
      <ListItemText primary="Historial de estudios" />
    </ListItem>
  </div>
);

export const finalListItems = (
  <div>
    <ListItem  button
      component={Link}
      to="/alta-de-servicios" 
    >
      <ListItemIcon>
        <LibraryAdd style={style}/>
      </ListItemIcon>
      <ListItemText primary="Alta Servicios" />
    </ListItem>
    <ListItem 
      button
      component={Link}
      to="/alta-area-auxiliares"
    >
      <ListItemIcon>
        <QueuePlayNext style={style}/>
      </ListItemIcon>
      <ListItemText primary="Alta de Área Aux" />
    </ListItem>
    <ListItem 
      button  
      component={Link}
      to="/crear-usuarios" 
    >
      <ListItemIcon>
        <GroupAdd  style={style}/>
      </ListItemIcon>
      <ListItemText primary="Crear Usuarios"  />
    </ListItem>
  </div>
);

export const salirListItems = (
  <div>
    <ListItem 
      button  
      component={Link}
      to="/" 
    >
      <ListItemIcon>
        <ExitToApp style={style}/>
      </ListItemIcon>
      <ListItemText primary="Salir"  />
    </ListItem>
  </div>
);