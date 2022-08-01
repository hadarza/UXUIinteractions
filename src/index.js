import React from "react";

// import ReactDOM from "react-dom";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";
import {store} from './Redux/features/store'
import {Provider} from 'react-redux'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
);