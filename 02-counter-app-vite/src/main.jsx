import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';

import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title="John Santa" subtitle="Bueno, esta es mi historia"/> */}
        <CounterApp value={26}/>
    </React.StrictMode>
)