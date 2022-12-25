import React from 'react';
import './css/style.css'
import ReactDOM from 'react-dom/client';
import Header from './components/header/header';
import reportWebVitals from './reportWebVitals';
import Main from './components/main/main';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header></Header>
      <Main></Main>
  </React.StrictMode>
);

reportWebVitals();
