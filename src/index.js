import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FCompanent from './FCompanent';
import SelectCompanent from './SelectCompanent';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <InputShow />
    <SelectCompanent  />
    <FCompanent name='Sergey' />
  </div>
)
function InputShow() {



   return (
     <div>
       
     </div>
   )
}