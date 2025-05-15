import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Button = ({title="Get started"}) => {
    return(
   <div className='min-w-40 px-4 py-2 h-8 bg-zinc-200 text-black rounded-full flex justify-between items-center'>
          <span className=' flex items-center text-sm font-medium'>{title}</span>
          <FaArrowRight />
            </div>
    );
};

export default Button;