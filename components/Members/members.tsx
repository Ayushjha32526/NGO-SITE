'use client'
import React from 'react'
import Image from 'next/image'
const members = () => {
  return (
    <div>
         <div className="bg-opacity-50 bg-cover bg-center" style={{ backgroundImage: "url('/member.jpeg')" }}>
    <div>
        <h1 className='text-6xl font-bold text-center text-green-700 '> Founder</h1>
    </div>
    <br></br>
    <br></br>
    <div>
        <p>
       "As a   dedicated BTech student dedicating ourselves in web development, I am driven by our collective passion for creating impactful digital experiences. My shared vision is to harness the power of web technologies to solve complex and enhance user interactions. Together, we aspire to build innovative and user-centric web solutions that not only meet the needs of today but also anticipate the demands of tomorrow. Through collaboration, creativity, and continuous learning, we strive to make a meaningful impact in the ever-evolving field of web development."<br></br> </p>
    </div>
    <br></br>
    <div className="flex items-center justify-around">
            <div className='text-center'>
                <Image src='/Ayush.png'
               
                alt='Anushka'
                width={50080}
                height ={3000000}
                className=' mx-40 mr-40 rounded-full w-40 h-40 mb-2'></Image>
                <p className='text-sm'>AYUSH JHA<br></br> 22BCE10964 </p>

            </div>
            
            </div>
            </div>
            </div>
  )
}

export default members