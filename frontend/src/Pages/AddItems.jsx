import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { ItemCount } from '../Reusables/ItemCount';
import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { toast } from 'react-toastify';
const AddItems = () => {

    const {counterId}=useParams();
    const [items,setItems]=useState([]);
  const [newItem,setNewItem]=useState({itemName:"",price:"",qty:1});
  const {itemName,price,qty}=newItem;
    const clearHandler=()=>{
      setNewItem({itemName:"",price:"",qty:1})
    }

    const addSubmit=()=>{
      if(!itemName||!price||!qty)
      {
        toast.error("Please provide necessary information.")
      }
      else{
        setItems([...items,newItem]);
        setNewItem({itemName:"",price:"",qty:1});
      }

    }

    const changeHandler=(e)=>{
      setNewItem({...newItem,[e.target.name]:e.target.value})
    }

    const addQty=()=>{
      setNewItem({...newItem,qty:qty+1})
    }
    const subQty=()=>{
      setNewItem({...newItem,qty:qty-1})
    }

    useEffect(()=>{
      console.log(items)
    },[items])

  return (
    <div className='flex gap-3 w-full  bg-[#03254c] rounded-b-xl h-[82vh] max-h-[100%] text-white'>
    {/* left side   */}
      <div className='flex-[0.7] flex flex-col items-center'>
        <h2 className='text-2xl tracking-widest mb-2 self-start p-3 pl-4 font-bold'>Counter-{counterId}</h2>
         <div className='flex flex-col w-full items-center'>
            <h2 className='text-2xl tracking-widest mb-2 self-start font-bold font-mono text-center w-full'>Add Items</h2>
            <div className='flex flex-col gap-2 items-center w-full'>
                <div className='flex gap-2 items-center w-full justify-between mt-10 text-lg tracking-tight text-center font-bold'>
                  <h2 className='w-full'>Item Name</h2>
                  <h2 className='border-r-[1px] border-l-[1px] w-full'>Price</h2>
                  <h2 className='w-full'>Qty</h2>
                </div>
                <div className='flex items-center w-full justify-center mt-10 text-lg tracking-widest text-center font-light'>
                  <input placeholder='Item name' className='outline-none border-none text-center p-2 w-full type
                  ml-3 bg-purple-700' name='itemName' value={itemName} onChange={changeHandler}/>
                  <input placeholder="price" className='border-r-[1px] bg-purple-700 border-l-[1px] outline-none border-none text-center p-2 w-full
                  ' min={0} name="price" value={price} onChange={changeHandler}/>
                  <div className='flex items-center w-full'>
                  <button className='px-4 py-2 bg-purple-500' onClick={subQty}>-</button>
                  <input placeholder='quantity'  min={1} className='outline-none border-none text-center p-2 w-[70%]
                   bg-purple-700' name='qty' type='number' value={qty} onChange={changeHandler}/>
                  <button className='px-4 py-2 bg-purple-500' onClick={addQty}>+</button>
                  </div>
                </div>

                <div className='flex gap-2 items-center w-full justify-evenly mt-10  text-center font-bold'>
                
                <div className='flex gap-3 items-center bg-purple-600 p-3 px-4 rounded-md cursor-pointer' onClick={clearHandler}>
                  <p>CLEAR</p>
                  <ClearRoundedIcon fontSize='large'/>
                  </div>

                  <div className='flex gap-3 items-center bg-purple-600 p-3 px-4 rounded-md cursor-pointer' onClick={addSubmit}>
                  <p>ADD</p>
                  <TrendingFlatRoundedIcon fontSize='large'/>
                  </div>
                </div>
            </div>
         </div>
      </div>

    {/* right side */}
    <div className='flex-[0.3]  p-2 bg-[#05204a] shadow-sm shadow-black'>
          <ItemCount items={items} setItems={setItems}/>
    </div>
  </div>
  )
}

export default AddItems