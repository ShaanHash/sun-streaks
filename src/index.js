import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ClockContainer from './modules/clockcontainer';
import { Container } from 'react-bootstrap';
import PageContainer from './modules/pagecontainer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageContainer></PageContainer>
  </React.StrictMode>
);

