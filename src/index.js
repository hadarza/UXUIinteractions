import React from "react";

// import ReactDOM from "react-dom";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";
import {store} from './Redux/store/store'
import {Provider} from 'react-redux'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    // <StrictMode> remove this because for noe 4.9.22 react beautiful dnd doesnt support strictMode for React 18
        <Provider store={store}>
            <App />
        </Provider>
    // </StrictMode>,
);