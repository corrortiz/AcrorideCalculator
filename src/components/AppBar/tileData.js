import React from 'react';
import Link from 'react-router-dom/Link';
//Material UI Components
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
//ICons
import Accessible from 'material-ui-icons/Accessible';
import DirectionsRun from 'material-ui-icons/DirectionsRun';

const style = {
  fill: "#e6cf8b"
}

export const inicialListItems = (
  <div>
    <ListItem 
      button  
      component={Link}
      to="/locales"
    >
      <ListItemIcon>
        <Accessible style={style} />
      </ListItemIcon>
      <ListItemText primary="Viaje Local" />
    </ListItem>

    <ListItem 
      button
      component={Link}
      to="/foraneos" 
    >
      <ListItemIcon>
        <DirectionsRun style={style}/>
      </ListItemIcon>
      <ListItemText primary="Viaje Foranio" />
    </ListItem>
  </div>
);
