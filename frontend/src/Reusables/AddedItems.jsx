import React from 'react'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
const AddedItems = ({itemName,price,qty,index,setItems,items}) => {

  const removeHandler=(ind)=>{
    const uitems=items.filter((i,index)=>ind!==index+1);
    setItems(uitems)
  }

  const increaseQty=(ind)=>{
    const iqty=[...items]
    iqty[ind-1].quantity+=1
    setItems(iqty)
  
  }

  const decreaseQty=(ind)=>{
    const deqty=[...items]
    if(deqty[ind-1].quantity<=0)
    return
  else
  {
    deqty[ind-1].quantity-=1
    setItems(deqty)
  }
  }

  return (
    <div className='bg-purple-900 p-2 flex flex-col gap-2 text-white'>
    <div className='flex justify-between items-center'>
    <p>{index}. {itemName} </p>
    <p>₹ {price}.</p>
    </div>
    <div className='flex justify-between items-center'>
        <div className='flex gap-1 items-center'>
            <button className='p-1 px-2 bg-purple-400' onClick={()=>increaseQty(index)}>+</button>
            <p className='bg-purple-500  text-center py-1 px-5'>{qty}</p>
            <button className='p-1 px-2 bg-purple-400' onClick={()=>decreaseQty(index)}>-</button>
        </div>
        <DeleteOutlineRoundedIcon onClick={()=>removeHandler(index)}/>
    </div>
    </div>
  )
}

export default AddedItems