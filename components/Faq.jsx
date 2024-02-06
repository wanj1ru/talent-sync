

import React, { useState } from 'react'
import AccordianItems from "./AccordianItems";



const Faq = () => {
    const [open, setOpen] = useState(false)

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null)
    }

    setOpen(index)
  }

    const accordianData = [
       
        {
            title: "How many participants can join a ClearLink video conference?",
            desc:  "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
                                            
          },
        
             
        {
            title: "How does ClearLink ensure the security of my video conferences?",
            desc: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
        },

        {
          
            title: "Can I use ClearLink on multiple devices?",
            desc: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
          },
        {
            
            title: "Do I need to download any software to use ClearLink?",
            desc: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
          },
          {
           
           title: "What kind of customer support does ClearLink provide?",
            desc: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
          },
    
        
      ]


  return (
    <div>

<div 
           className="mt-24 px-16 min-[760px]:px-32  flex items-center flex-col mb-32  " 
         >
            <div 
              className="text-left px-5 font-bold text-5xl text-[#171616e6] flex flex-col items-start justify-between space-y-3">
                

                
               
              
             </div>

           <div className="flex max-[360px]:w-[290px] max-[440px]:w-[320px] max-[540px]:w-[400px] max-[720px]:w-[500px] max-[999px]:w-[650px] min-[1000px]:w-[850px]  light:text-black space-x-2 md:space-y-0 md:flex-row items-center justify-between">
              <div>

                {
                  accordianData.map((data, index) => {
                    return <AccordianItems 
                    key={index}
                    open={index === open}
                    title={data.title}
                    desc={data.desc}
                    toggle={() => toggle(index)}
                    />
                  })
                }
              </div>

          
           </div>
         </div>
    </div>
  )
}

export default Faq