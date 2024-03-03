import { useState } from 'react'
import './App.css'

function App() {
  
  let counter = 5;
  const addValue = () => {
    console.log("value added");
  }
  return (
  <>
    <h3>Counter value: {counter}</h3>

    <button onclick = {addValue}>Add value {counter}</button>
    <br />
    <button onClick ={removeValue}>remove value {counter}</button>
       
  </>
  )
}

export default App
