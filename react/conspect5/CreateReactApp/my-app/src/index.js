import React from 'react'; // отвечает за работу с реактом, jsx и прочими внутренними вещами
import ReactDOM from 'react-dom/client'; // отвечает за работу с dom структурой
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

