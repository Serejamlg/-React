import React, {useState} from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"



function Button() {
  const [showHello, setShow] = useState('')
  const [btn, setBtn] = useState(true)


  function changeButton() {
    const hideButton = btn === 'true' ? 'Скрыть' : 'Показать';
    setBtn(hideButton)
  }


function click() {
 const newShowHello = showHello === '' ? 'Hello World' : '';
 setShow(newShowHello)

 
}
  
  //Не выхоид
  
  
  return(
    <div>
      <p>{showHello}</p>
      <button onClick={click}><p>Показать</p></button>
    </div>
  )
}









ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Button/>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)