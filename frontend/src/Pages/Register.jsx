import React,{useEffect, useState} from "react";
import EmailIcon from '@mui/icons-material/Email';
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import LockIcon from '@mui/icons-material/Lock';
import {Link} from "react-router-dom"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { toast } from "react-toastify";
import { clearErrors, register } from "../redux/actions/userAction";
const Register = () => {
    const dispatch=useDispatch();
  const navigate=useNavigate();
  const {user,error,loading,isAuthenticated}=useSelector(state=>state.user);

    const [hideShow,setHideshow]=useState({hideShow1:false,hideShow2:false});
    const {hideShow1,hideShow2}=hideShow;
    const [registerData,setRegisterData]=useState({name:"",email:"",password:"",confirmPassword:""})
    const {name,email,password,confirmPassword}=registerData;

    const changeHandler=(e)=>{
        setRegisterData({...registerData,[e.target.name]:e.target.value});
    }

    const hideNshow1=()=>{
      setHideshow({...hideShow,hideShow1:!hideShow1})
    }
    const hideNshow2=()=>{
      setHideshow({...hideShow,hideShow2:!hideShow2})
    }

    const submitHandler=(e)=>{
      e.preventDefault()
      console.log(registerData)
      dispatch(register(registerData));
    }

    useEffect(()=>{
      if(error)
      {
        toast.error(error);
        dispatch(clearErrors())
      }
      if(isAuthenticated)
      {
        toast.success("Registered successfully.");
        navigate("/")
      }

    },[isAuthenticated,error,dispatch])

  return (
    <div className="rounded-b-xl h-[82vh] max-h-[100%] w-full bg-[#03254c] flex flex-col font-mono text-white">
      {/* top */}
      {/* <div>
        <Navbar />
      </div> */}

      {/* bottom */}
      <div className="flex flex-col items-center gap-4">
        {/* bheader */}
        <h2 className="text-2xl tracking-wider font-thin py-3 border-b-[1px] my-3">REGISTER CASHIER</h2>

        {/* form */}
        <form className="flex flex-col items-center justify-center gap-3 w-[50%]  bg-[#052040] px-12 py-10 shadow-2xl" onSubmit={submitHandler}>
          <div className="flex items-center gap-3 px-4 py-2 bg-purple-700 w-3/4">
            <div className="flex-[0.25]"><PersonIcon/></div>
            <input placeholder="Name" type="text" className="flex-0.75 outline-none border-none rounded-md bg-purple-700" name="name" value={name}  onChange={changeHandler}/>
          </div>
          <div className="flex  items-center gap-3 px-4 py-2 bg-purple-700 w-3/4">
            <div className="flex-[0.25]"><EmailIcon/></div>
            <input placeholder="Email" type="email" className="flex-0.75 outline-none border-none rounded-md bg-purple-700" name="email" value={email}  onChange={changeHandler}/>
          </div>
          <div className="flex  items-center gap-3 px-4 py-2 bg-purple-700 w-3/4 relative">
            <div className="flex-[0.25]"><KeyIcon/></div>
            <input placeholder="Password" type={hideShow1?"text":"password"} className="flex-0.50 outline-none border-none rounded-md bg-purple-700" name="password" value={password} onChange={changeHandler}/>
            <div className="absolute right-3">{hideShow1?<VisibilityIcon onClick={hideNshow1}/>:<VisibilityOffIcon onClick={hideNshow1}/>}</div>
          </div>
          <div className="flex  items-center gap-3 px-4 py-2 bg-purple-700 w-3/4 relative">
            <div className="flex-[0.25]"><LockIcon/></div>
            <input placeholder="Confirm Password" type={hideShow2?"text":"password"} className="flex-0.50 outline-none border-none rounded-md bg-purple-700" name="confirmPassword" value={confirmPassword} onChange={changeHandler}/>
            <div className="absolute right-3">{hideShow2?<VisibilityIcon onClick={hideNshow2}/>:<VisibilityOffIcon onClick={hideNshow2}/>}</div>
          </div>
          <button type="submit" className="px-4 py-2 text-xl w-3/4 text-white bg-blue-600 rounded-sm tracking-wider font-light">REGISTER</button>
        </form>
        <Link to="/login"><p className="text-blue-500">Click here to Login if you already have an account.</p></Link>
      </div>
    </div>
  );
};

export default Register;
