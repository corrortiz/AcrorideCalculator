import ReactDOM from 'react-dom';

import './sass/main.css';

import Layout from './components/Layout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(Layout , document.getElementById('root'));
registerServiceWorker();
