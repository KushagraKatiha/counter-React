import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function reset(){
    setCount(0)
  }

  return (
    <>
  <div className='container'>
    <div className="container1">
    
      <h1 className='heading'>Counter: Chant and Chill !!</h1>
      <div className="screen">
        <p className="display">
        {count}
        </p>
      </div>

      <div className="card">
        <button className='add' onClick={() => setCount((count) => count + 1)}>
          +
        </button>

        <button className='reset' onClick={reset}>
          Reset
        </button>
      </div>
  </div>
    </div>
    
    </>
  )
}

export default App
