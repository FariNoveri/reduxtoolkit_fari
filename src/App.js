import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './features/counter/counterslice'

import './App.css'

function App() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div className="container">
      <h1>Redux Counter</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <div className="controls">
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          onClick={() =>
            dispatch(incrementAsync(Number(incrementAmount) || 0))
          }
        >
          Add Async
        </button>
      </div>
    </div>
  )
}

export default App
