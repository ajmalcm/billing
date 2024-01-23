import React,{useEffect, useState} from 'react'
import KeyIcon from '@mui/icons-material/Key';
import EmailIcon from '@mui/icons-material/Email';
import { Link ,useNavigate} from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useSelector,useDispatch } from 'react-redux';
import { clearErrors, login } from '../redux/actions/userAction';
import { toast } from 'react-toastify';

const Login = () => {
  const [hideShow,setHideshow]=useState(false);
  const [loginData,setloginData]=useState({email:"",password:""})
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {isAuthenticated,loading,error}=useSelector(state=>state.user);
  const {email,password}=loginData;



  const changeHandler=(e)=>{
    setloginData({...loginData,[e.target.name]:e.target.value});
}

const hideNshow1=()=>{
  setHideshow(!hideShow)
}

const submitHandler=(e)=>{
  e.preventDefault();
  dispatch(login(loginData));
}

useEffect(()=>{
if(error)
{
  toast.error(error);
  dispatch(clearErrors());
}
if(isAuthenticated)
{
  toast.success("Logged-In successfully.")
  navigate("/")
}
},[error,isAuthenticated,dispatch])


  return (
    <div className="rounded-b-xl h-[82vh] max-h-[100%] w-full bg-[#03254c] flex flex-col text-white font-mono">
      {/* top */}
      {/* <div>
        <Navbar />
      </div> */}

      {/* bottom */}
      <div className="flex flex-col items-center gap-4">
        {/* bheader */}
        <h2 className="text-2xl tracking-wider font-thin py-3 border-b-[1px] my-3">LOGIN CASHIER</h2>

        {/* form */}
        <form className="flex flex-col items-center justify-center gap-3 w-[50%] bg-[#052040] px-12 py-10 shadow-2xl" onSubmit={submitHandler}>
          <div className="flex  items-center gap-3 px-4 py-2 bg-purple-700 w-3/4" >
            <div className="flex-[0.25]"><EmailIcon/></div>
            <input placeholder="Email" type="email" className="flex-0.75 outline-none border-none rounded-md bg-purple-700" name="email" onChange={changeHandler} value={email}/>
          </div>
          <div className="flex  items-center gap-3 px-4 py-2 bg-purple-700 w-3/4 relative">
            <div className="flex-[0.25]"><KeyIcon/></div>
            <input placeholder="Password" type={hideShow?"text":"password"} className="flex-0.50 outline-none border-none rounded-md bg-purple-700" name="password" onChange={changeHandler} value={password}/>
            <div className="absolute right-3">{hideShow?<VisibilityIcon onClick={hideNshow1}/>:<VisibilityOffIcon onClick={hideNshow1}/>}</div>
          </div>
          <button type="submit" className="px-4 py-2 text-xl w-3/4 text-white bg-blue-600 rounded-sm tracking-wider font-light">LOGIN</button>
        </form>
        <Link to="/register"><p className="text-blue-500">Click here to Register if  You dont have an account.</p></Link>
      </div>
    </div>
  )
}

export default Login