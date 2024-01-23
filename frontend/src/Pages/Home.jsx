import React,{useEffect} from 'react'
import CounterCard from '../Reusables/CounterCard'
import { ItemCount } from '../Reusables/ItemCount'
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { clearErrors } from '../redux/actions/userAction';
import { toast } from 'react-toastify';

const Home = () => {
  const {isAuthenticated,user,error}=useSelector(state=>state.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  let counter=6;



  useEffect(()=>{
    if(error)
    {
      toast.error(error)
      dispatch(clearErrors())
    }
    if(!isAuthenticated)
    {
      navigate("/login")
    }
  },[isAuthenticated,error,dispatch])

  return (
    <div className='flex gap-3 w-full  bg-[#03254c] rounded-b-xl h-[82vh] max-h-[100%]'>
      {/* left side   */}
        <div className='flex-[0.7] h-fit  flex flex-wrap gap-2 overflow-auto shadow-2xl'>
        {
          Array(counter).fill().map((item,index)=>(
            
            <CounterCard key={index} counterNo={index+1}/>
          ))
        }
           
        </div>

      {/* right side */}
      <div className='flex-[0.3]  p-2 bg-[#05204a] shadow-sm shadow-black'>
            <ItemCount/>
      </div>
    </div>
  )
}

export default Home