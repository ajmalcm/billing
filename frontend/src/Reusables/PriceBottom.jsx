import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { clearErrors, newOrder } from '../redux/actions/ordersAction';

const PriceBottom = ({tax,items}) => {

  const {counterId}=useParams();
  const dispatch=useDispatch();
  const {user}=useSelector(state=>state.user);
  const {customer}=useSelector(state=>state.customer);
  const {order,error,loading,success}=useSelector(state=>state.order);

  const [subtotal,setSubtotal]=useState(0);
  const [taxx,setTax]=useState(0);
  const [total,setTotal]=useState(0);

  const adder=(total,item)=> {return total+item.price*item.quantity};

  useEffect(()=>{
    let pc;
    pc= items.reduce(adder,0)
    setSubtotal(pc);
    setTax(Math.floor((tax/100)*pc))
    setTotal(Math.floor((tax/100)*pc)+pc)
  },[items])

  useEffect(()=>{
    if(error)
    {
      toast.error(error);
      dispatch(clearErrors())

    }
    if(success)
    {
      toast.success("Order Placed Successfully");
    }
  },[error,dispatch,order])

  const placeOrder=()=>{
    const orderData={orderItems:items,customer,user,counter:counterId,taxPrice:taxx,itemsPrice:subtotal,totalPrice:total}
    console.log(orderData);
    dispatch(newOrder(orderData));
  }

  return (
    <div>
    <div className="flex justify-between items-center text-white  text-center gap-2">
          <button className={`w-1/3 rounded-sm p-2 bg-purple-800 transition-all ease-in duration-300 ${subtotal?"hover:bg-purple-950 cursor-pointer":'hover:cursor-not-allowed'}`} disabled={subtotal?false:true}>Discount</button>
          <button className={`w-1/3 rounded-sm p-2 bg-purple-800 transition-all ease-in duration-300 ${subtotal?"hover:bg-purple-950 cursor-pointer":'hover:cursor-not-allowed'}`} disabled={subtotal?false:true}>Cash</button>
          <button className={`w-1/3 rounded-sm p-2 bg-purple-800 transition-all ease-in duration-300 ${subtotal?"hover:bg-purple-950 cursor-pointer":'hover:cursor-not-allowed'}`} disabled={subtotal?false:true}>UPI</button>
        </div>
        {/* second */}
        <div className="flex items-center justify-between p-2">
          <div>
            <p className="text-sm font-light tracking-widest text-gray-300">
              Tax {`${tax}%`}
            </p>
            <p className="text-sm font-light tracking-widest text-gray-300">
              Subtotal
            </p>
            <p className="text-bold text-lg text-white tracking-tight">Total</p>
          </div>
          <div>
            <p className="text-sm font-light tracking-widest text-gray-300">
              {taxx}
            </p>
            <p className="text-sm font-light tracking-widest text-gray-300">
              ₹{subtotal?subtotal:0.0}
            </p>
            <p className="text-bold text-lg text-white tracking-tight">
              ₹{total}
            </p>
          </div>
        </div>
        {/* third */}
        <div className="flex justify-between items-center text-white  text-center mt-6">
          <button className="w-1/2 tracking-widest  p-2 bg-purple-500 cursor-pointer">KOT</button>
          <button className="w-1/2 tracking-widest  p-2 bg-purple-700 cursor-pointer" onClick={placeOrder}>
            Place Order
          </button>
        </div>
    </div>
  )
}

export default PriceBottom