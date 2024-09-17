import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import { useReducer } from 'react'

const reducer = (state, action) => {
  if (action.type === 'increament') {
    return {
      count: state.count + 1
    }
  }
  else if (action.type === 'decreament') {
    return {
      count: state.count - 1
    }
  }
}

function App() {
  const [state, setDispatch] = useReducer(reducer, { count: 0 })

  const Increament = () => {
    setDispatch({
      type: 'increament',
    })
  }


  const Decreament = () => {
    setDispatch({
      type: 'decreament',
    })
  }


  return (
    <>
      <div className="continer">
        <button onClick={Increament}
          type="button" className="btn btn-primary mybtn">+</button>
        <span>{state.count}</span>
        <button onClick={Decreament}
          type="button" className="btn btn-danger  mybtn">-</button>
      </div>
    </>
  )
}

export default App
