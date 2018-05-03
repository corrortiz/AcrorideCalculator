import React from 'react';
import Link from 'react-router-dom/Link';
//Material UI Components
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
//ICons
import DirectionsCar from 'material-ui-icons/DirectionsCar';
import LocalShipping from 'material-ui-icons/LocalShipping';

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
        <DirectionsCar style={style} />
      </ListItemIcon>
      <ListItemText primary="Viaje Local" />
    </ListItem>

    <ListItem 
      button
      component={Link}
      to="/foraneos" 
    >
      <ListItemIcon>
        <LocalShipping style={style}/>
      </ListItemIcon>
      <ListItemText primary="Viaje Foranio" />
    </ListItem>
  </div>
);
