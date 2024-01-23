import React from "react";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import PriceBottom from "./PriceBottom";
import AddedItems from "./AddedItems";
import {AnimatePresence, motion} from "framer-motion"
export const ItemCount = ({items,setItems}) => {
  return (
    <div className="flex flex-col items-center relative h-full font-mono">
      {/* top */}
      <div className="bg-purple-800 flex justify-between items-center text-white p-2 w-full mb-2">
        <div className="flex flex-col ">
          <p>Counter 1</p>
          <p className="text-[12px]">Customer name</p>
        </div>

        <div className="flex justify-between items-center">
          <DeleteOutlineRoundedIcon className="mx-2 cursor-pointer" />
          <BorderColorRoundedIcon className="mx-2 cursor-pointer" />
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
        <PriceBottom total={463.10} subtotal={440} tax={23.10}/>        
      </div>
    </div>
  );
};
