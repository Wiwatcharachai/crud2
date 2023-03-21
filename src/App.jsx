import {Routes, Route} from "react-router-dom"
import Navbar from './Navbar'
import Users from './users'
import UserCreate from "./userCreate"

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Users/>}/ >
        <Route path="create" element={<UserCreate/>}/ >
      </Routes>
    </div>

  )
    
}

export default App
