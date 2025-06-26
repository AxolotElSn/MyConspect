import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';

import './index.css';
import App from './App';
import { Button } from './App';
import BootstrapTest from './BootstrapTest';

import 'bootstrap/dist/css/bootstrap.min.css';

const BigButton = styled(Button)`
	margin: 0 auto;
	width: 245px;
	height: 25px;
	font-weight: 500;
	text-align: center;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <BigButton as="a">Отправить отчет</BigButton> {/* атрибут as позволяет поменять тег */}
    <BootstrapTest></BootstrapTest>
  </React.StrictMode>
);


