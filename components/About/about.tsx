"use client"
import React from 'react'
import Image from 'next/image'
import  {checkout} from  "@/components/Booking/checkout"
import { useRouter } from 'next/navigation'
const about = () => {
    const router:any= useRouter()
  return (
    
    <div>
        
         <div className="bg-opacity-50 bg-cover bg-center " style={{ backgroundImage: "url('/ngo1.avif')" }}>
        <div>
            <h1 className='text-6xl font-bold text-center text-green-700 '>
                Services
            </h1>
            <br></br>
            <br></br>
            <p className='text-4xl font-bold text-center text-black-700'>
                Our Latest Services
            </p>
        </div>
        
        <div className="flex items-center justify-around">
            <div className='text-center'>
                <Image src='/clothes.jpg'
               
                alt='Clothes'
                width={50080}
                height ={3000000}
                className='mx-60 mr-80 rounded-full w-60 h-60 mb-2'></Image>
                <p className=' font-bold text-sm'>CLOTHES <br></br><br></br>"Dressing lives with dignity and warmth is at the heart of our clothing.<br></br> Through generous donations and partnerships,<br></br> we are able to provide essential clothing items to individuals and families facing hardship. </p>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-sm'
        onClick={() =>{
            router.push("/payment")
            checkout({
                lineItems:[{price:"price_1P8Gn5SCjR7BgfZCewLJAkAe", quantity:1}]
              })
        }} 
        > Donate</button>
        
            </div>
            <div className='text-center'>
                <Image src='/food.jpeg'
               
                alt='FOOD'
                width={50080}
                height ={3000000}
                className='mx-60 mr-80 rounded-full w-60 h-60 mb-2'></Image>
                <p className='font-bold text-sm'>FOOD <br></br><br></br>our mission revolves around nourishing communities and uplifting lives through food. We understand the critical importance of addressing hunger,<br></br> which is why we run extensive food distribution programs. From providing nutritious meals to families <br></br>in need to supporting local soup kitchens and food banks, we strive to ensure that no one in our community  . </p>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-sm'
        onClick={() =>{
            router.push("/payment")
            checkout({
                lineItems:[{price:"price_1P8GilSCjR7BgfZCs7gUagSI", quantity:1}]
              })
        }} 
        > Donate</button>
            </div>
         

         <br></br>
         <br></br>
         <br></br>
         <br></br>
            </div>
            <div className="flex items-center justify-around">
            <div className='text-center'>
                <Image src='/Money.png'
               
                alt='Money'
                width={50080}
                height ={3000000}
                className='mx-60 mr-80 rounded-full w-60 h-60 mb-2'></Image>
                <p className='font-bold text-sm'>Emergency Assistance and Support Services <br></br> <br></br>The NGO can establish an emergency fund and provide support <br></br> services to assist students facing unforeseen financial hardships, personal crises, or emergencies.</p>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-sm'
        onClick={() =>{
            router.push("/payment")
            checkout({
                lineItems:[{price:"price_1P8H0gSCjR7BgfZCnWySyPp5", quantity:1}]
              })
        }} 
        > Donate</button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            
            <div className='text-center'>
                <Image src='/Healthcare.jpeg'
               
                alt='Healthcare'
                width={50080}
                height ={3000000}
                className='mx-60 mr-80 rounded-full w-60 h-60 mb-2'></Image>
                <p className='font-bold text-sm'>Healthcare <br></br> <br></br>we believe that access to quality healthcare is a fundamental right. <br></br>Our healthcare programs are designed to ensure that every individual, <br></br>regardless of their circumstances, receives the medical attention they need.</p>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-sm'
        onClick={() =>{
            router.push("/payment")
            checkout({
                lineItems:[{price:"price_1P8GuHSCjR7BgfZCbIp31PGL", quantity:1}]
              })
        }} 
        > Donate</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default about