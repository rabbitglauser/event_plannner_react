import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure the correct path to the App component

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);