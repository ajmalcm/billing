import React, { useEffect, useState } from "react";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import PriceBottom from "./PriceBottom";
import AddedItems from "./AddedItems";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion"
export const ItemCount = ({items,setItems}) => {

  const {customer}=useSelector(state=>state.customer);
  const {counterId}=useParams();
  // const [total,setTotal]=useState(0);

  // const summerize=()=>{
  //     items.map((it,i)=>{
  //       setTotal(total+(it.price*it.qty))
  //     })
  // }
  const clearAllItems=()=>{
    setItems([]);
  }

  useEffect(()=>{
    // summerize();
  },[items])

  return (
    <div className="flex flex-col items-center relative h-full font-mono">
      {/* top */}
      <div className="bg-purple-800 flex justify-between items-center text-white p-2 w-full mb-2">
        <div className="flex flex-col ">
          <p>{counterId?`Counter ${counterId}`:"Select a counter"}</p>
          <p className="text-[12px]">{customer?.name?customer?.name:" "}</p>
        </div>

        <div className="flex justify-between items-center">
          <DeleteOutlineRoundedIcon className="mx-2 cursor-pointer" onClick={clearAllItems}/>
          {/* <BorderColorRoundedIcon className="mx-2 cursor-pointer" /> */}
        </div>
      </div>

      {/* mid */}
      <div className="overflow-auto flex flex-col w-full gap-2 h-[45vh]">

<AnimatePresence>
    {
      items && items.map((it,i)=>(
        <motion.div key={i} initial={{x:100,y:-50,opacity:0}} exit={{ opacity: 0, x: 50 }} animate={{x:1,y:1}} whileInView={{opacity:1}} transition={{type:"spring",duration:0.5,ease: "easeOut"}}>
      <AddedItems itemName={it.itemName} price={it.price} qty={it.qty} index={i+1} setItems={setItems} items={items}/>
        </motion.div>
      ))
    }
</AnimatePresence>
      </div>
    
      {/* bottom */}

      <div className="w-full mt-2">
      {
        counterId&&<PriceBottom tax={28} items={items} setItems={setItems}/> 
      }
               
      </div>
    </div>
  );
};
