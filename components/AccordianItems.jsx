import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { Collapse } from "react-collapse"
import PropTypes from 'prop-types';

export default function AccordianItems({open, toggle, title, desc}) {
  return (
    <div className="pt-[10px] ">
       <div 
        className="py-[16px] px-[40px] rounded-t-md bg-gray-100 dark:bg-transparent hover:text-[[#175CD3] transition duration-300 light:text-black flex justify-between items-center cursor-pointer"
        onClick={toggle}
       >
         <p className="text-[13px] font-semibold light:text-black">
            {title}
         </p>
         <div className="text-[15px] font-bold">
           {open ? <AiOutlineMinus className='border border-gray-600 rounded-full p-1'  /> : <AiOutlinePlus className='border border-gray-600 rounded-full p-1' /> }
         </div>
       </div>

        <Collapse isOpened={open}>
            <div className="px-[10px] text-[13px] text-black dark:text-slate-100 mt-2 font-medium pb-[10px] pt-[10px]  rounded-b-md bg-gray-100 dark:bg-transparent">
               {desc}
            </div>
        </Collapse>
    </div>
  )
}

AccordianItems.propTypes = {
    open: PropTypes.bool, 
    toggle: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  };



