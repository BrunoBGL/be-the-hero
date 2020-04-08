import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './global.css';
import Routes from './routes';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer autoClose={5000} />
    </>
  );
}

export default App;
