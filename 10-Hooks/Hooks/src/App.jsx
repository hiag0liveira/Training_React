import './App.css'
import useCounter from './hooks/useCounter.js'

function App() {
  const { count, increment } = useCounter()

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={increment}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App