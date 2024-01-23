import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {Link} from "react-router-dom"
import { clearErrors, logoutUser } from '../redux/actions/userAction';
import { toast } from 'react-toastify';
import Loading from '../Reusables/Loading';

const Navbar = () => {
  const dispatch=useDispatch();
  const {success,loading,error,user}=useSelector(state=>state.user);

  const logoutHandler=()=>{
    dispatch(logoutUser())
  }

  useEffect(()=>{
    if(error)
    {
      toast.error(error)
      dispatch(clearErrors())
    }
    if(success)
    toast.success("Logged-Out successfully")
  },[error,dispatch,success])

  return (
    <>
      {loading?<Loading/>
      :
      <div className='flex justify-between items-center border-[1px] border-black  p-4 rounded-t-xl bg-[#05204a] text-white'>
    {/* left */}
    <div>
    logo
    </div>

    {/* right */}
    <div className='flex justify-between items-center gap-3 font-mono tracking-wider'>
    <p className='py-2 px-3 rounded-xl bg-purple-900 text-sm font-thin drop-shadow-2xl cursor-pointer'>
      {user?.email}
    </p>
    <Link to="/allOrders">
    <p className='py-2 px-3 rounded-xl bg-purple-500 cursor-pointer'>
      Orders
    </p>
    </Link>
    <Link to="/allCustomers">
    <p className='py-2 px-3 rounded-xl bg-purple-700 cursor-pointer'>
      Customers
    </p>
    </Link>
    <LogoutRoundedIcon fontSize='large' titleAccess='Log-Out' className='cursor-pointer' onClick={logoutHandler}/>
    </div>

    </div>
      }
    </>
   
  )
}

export default Navbar