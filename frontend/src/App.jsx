import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import './App.css'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Toast from './Reusables/Toast'
import {BrowserRouter as Router,Routes,Route,useNavigate} from "react-router-dom"
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import AddItems from './Pages/AddItems'
import AllOrders from './Pages/AllOrders'
import Allcustomers from './Pages/Allcustomers'
import { loadUser } from './redux/actions/userAction'
import Scanner from './Reusables/Scanner'
function App() {

  const {isAuthenticated}=useSelector(state=>state.user)
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(loadUser())
  
  },[dispatch])

  return (
    <div className='py-9 h-full  max-h-full max-w-[1200px] w-full m-auto'>
    <Toast/>
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/counter/:counterId' element={<AddItems/>}/>
        <Route exact path="/allOrders" element={<AllOrders/>}/>
        <Route exact path="/allCustomers" element={<Allcustomers/>}/>
        <Route exact path='/scanner' element={<Scanner/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
