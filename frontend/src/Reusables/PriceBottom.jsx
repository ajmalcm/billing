import React,{useEffect,useState} from 'react'

const PriceBottom = ({tax,items}) => {

  const [subtotal,setSubtotal]=useState(0);
  const adder=(total,item)=> {return total+item.price*item.qty};

  useEffect(()=>{
    let pc;
    pc= items.reduce(adder,0)
    setSubtotal(pc);
  },[items])

  return (
    <div>
    <div className="flex justify-between items-center text-white  text-center gap-2">
          <button className="w-1/3 rounded-sm p-2 bg-purple-800 cursor-pointer">Discount</button>
          <button className="w-1/3 rounded-sm p-2 bg-purple-800 cursor-pointer">Cash</button>
          <button className="w-1/3 rounded-sm p-2 bg-purple-800 cursor-pointer">UPI</button>
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
              {tax?Math.floor(subtotal?(tax/100)*subtotal:0.0):0.0}
            </p>
            <p className="text-sm font-light tracking-widest text-gray-300">
              ₹{subtotal?subtotal:0.0}
            </p>
            <p className="text-bold text-lg text-white tracking-tight">
              ₹{Math.floor(subtotal?(tax/100)*subtotal:0.0)+subtotal}
            </p>
          </div>
        </div>
        {/* third */}
        <div className="flex justify-between items-center text-white  text-center mt-6">
          <button className="w-1/2 tracking-widest  p-2 bg-purple-500 cursor-pointer">KOT</button>
          <button className="w-1/2 tracking-widest  p-2 bg-purple-700 cursor-pointer">
            Place Order
          </button>
        </div>
    </div>
  )
}

export default PriceBottom