import React from 'react';
import { render } from 'react-dom';

import App from './App';
import NewComponent from './components/NewComponent';


//JSX: Html dentro do javascript

render(<App />, document.getElementById('app'));
render(<NewComponent />, document.getElementById('novoComponente'));
