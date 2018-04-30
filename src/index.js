import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.css';
import registerServiceWorker from './registerServiceWorker';

import Layout from './components/Layout';

ReactDOM.render(<Layout/>, document.getElementById('root'));
registerServiceWorker();
