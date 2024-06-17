import { useState } from 'react';
import './App.css'

function App() {
const [counter, setCounter] = useState(15)
const addValue = ()=>{
  // ? It will not add four to the counter
  // setCounter(counter + 1)
  // setCounter(counter + 1)
  // setCounter(counter + 1)
  // setCounter(counter + 1)
  // ! In order to add four to the counter
  setCounter((counter)=> counter +1 )
  setCounter((counter)=> counter +1 )
  setCounter((counter)=> counter +1 )
  setCounter((counter)=> counter +1 )
}
const removeValue = () => {
  setCounter(counter - 1)
}
  return (
    
    <>
     <h1>React Course With Hitesh</h1>
     <h2>Counter Value: {counter} </h2>
     <button 
     onClick={addValue}
     >Add Value</button>{" "}
     <button onClick={removeValue}>Remove Value</button>
     <p>Footer: {counter}</p>
        
    </>
  )
}

export default App
