'use client'
import React from 'react'
import Image from 'next/image'
const contact = () => {
  return (
    <div>
       <br></br>
       <br></br>
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-2xl font-bold text-black my-2">
        <br></br>
<br></br>
<br></br>
<h1>Welcome</h1>
          Let&apos;s Connect
        </h5>
        <p className="text-[#0e0e0e] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className='mr-40 text-left'>
                <Image src='/vitbhopal.png'
               
                alt='vitbhopal'
                width={50080}
                height ={3000000}
                className='mx-60 mr-80 rounded-full w-60 h-60 mb-2'></Image>
    </div>
    </div>
    </div>
    
  )
}

export default contact