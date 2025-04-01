import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import './styles/global.css'
import Productor from './pages/Productor';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <Productor> </Productor>
    </BrowserRouter>
  </StrictMode>
);