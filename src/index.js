import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/app';

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root')
);