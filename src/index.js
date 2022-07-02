import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <HelloWorld name='Sereja' lang = 'en'/>
    <HelloWorld name='Сережа' lang = 'ru'/>
  </div>
)
function HelloWorld(props) {
  
  let [username, setUsername] = useState(props.name)

  if (props.lang === 'ru') {
      return (
        <div>
          Привет {props.name}
        </div>
      )
  }
  if (props.lang === 'en') {
      return (
        <div>
          Hello {props.name}
        </div>
      )
  }

  

  // return (
  //   <div>
  //     <div>Hello {username} </div>

  //   </div>
  // )
}