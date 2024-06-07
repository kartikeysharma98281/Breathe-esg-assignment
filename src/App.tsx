import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/SignUp'
import './App.css'
import MainPage from './Pages/MainPage'


function App() {


  return (
      

      <BrowserRouter>
         <Routes>
             <Route path="/Login" element={<Login />} />
             {/* <Route path="/" element={<Login />} /> */}
             <Route path="/signup" element={<Signup />} />
             <Route path='/mainpage' element={<MainPage />} />
          </Routes>
      </BrowserRouter>
      
   )
}

export default App
