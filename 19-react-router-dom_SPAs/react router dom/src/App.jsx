// npm install react-router-dom

import { RouterProvider } from "react-router-dom"
import router from "./router"

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App