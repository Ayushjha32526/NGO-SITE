'use client'

import React from 'react'
import AutoCompleteAddress from './AutoCompleteAddress'
import { useRouter } from 'next/navigation'
import {checkout} from './checkout'
const Booking = () => {
    const screenheight =window.innerHeight*0.65;
    const router:any= useRouter()
  return (
    <div className='p-5'>
        <h1 className='text-[20px] font-semibold'>Dr. G. Viswanathan <br></br> Founder of VIT</h1>
      <div className='border-[1px] p-5 rounded-md'
      style={{height:screenheight}}>
         <AutoCompleteAddress></AutoCompleteAddress>
    </div>
    <div>
        <button className='w-full bg-yellow-400'
        onClick={() =>{
            router.push("/payment")
            checkout({
                lineItems:[{price:"price_1OhQpLSCjR7BgfZCDS2f5rO9", quantity:1}]
              })
        }} 
        > Donate</button>
        
    </div>
    </div> 
  )
}

export default Booking