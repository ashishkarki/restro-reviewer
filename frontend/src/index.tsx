import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

// configure Amplify with aws-exports
Amplify.configure(awsExports);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
