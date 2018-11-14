import React from 'react';
import ReactDOM from 'react-dom';
//import {Provider} from 'react-redux';
import App from './components/App';
import './index.css';

ReactDOM.render(
        <App />,
    document.getElementById('root')
);
/*//add store to provider
ReactDOM.render(
    <Provider >
        <App />
    </Provider>,
    document.getElementById('root')
);
*/
