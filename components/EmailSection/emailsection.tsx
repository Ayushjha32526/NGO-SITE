'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xoqgeovg");
  <div></div>
  if (state.succeeded) {
      return <p className='h-24 flex items-bottom  items-start justify-center bg-gray-200 text-6xl font-bold ml-20 text-left text-green-700'>Thanks for joining!</p>;
  }
  return (
    <div className=''>
        <div>
        <h1 className='text-6xl font-bold ml-20 text-left text-green-700 '>
                Contact us
            </h1>
        </div>
        <br></br>
<br></br>
<br></br>
      <form className="flex flex-col"
      onSubmit={handleSubmit}>
     
      <label className='text-black block mb-2 text-sm font-medium'
      htmlFor="text">
       Name
      </label>
      <input
     
        id="text"
        type="text" 
        name="text"
        required
        className="bg-[#b7baca] border border-[#33353F] placeholder-[#161a1e] text-gray-100 text-sm rounded-lg block w-full p-2.5"
        placeholder="Write your Name"
      /> 
      {/* <label className='text-black block mb-2 text-sm font-medium'
      htmlFor="text">
       Contact Number
      </label>
      <input
     
        id="text"
        type="text" 
        name="text"
        required
        className="bg-[#b7baca] border border-[#33353F] placeholder-[#161a1e] text-black-100 text-sm rounded-lg block w-full p-2.5"
        placeholder="Write your number"
      />  */}
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        required
        className="bg-[#b7baca] border border-[#33353F] placeholder-[#161a1e] text-black-100 text-sm rounded-lg block w-full p-2.5"
        placeholder="Write your email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
       <label htmlFor="message">
       Message
      </label>
      
      <textarea
        id="message"
        name="message"
        required
        className="bg-[#b7baca] border border-[#33353F] placeholder-[#161a1e] text-black-100 text-sm rounded-lg block w-full p-2.5"
        placeholder="Write Your Message"
      />
      <label htmlFor="message">
      Address
      </label>
      
      <textarea
        id="message"
        name="message"
        required
        className="bg-[#b7baca] border border-[#33353F] placeholder-[#161a1e] text-black-100 text-sm rounded-lg block w-full p-2.5"
        placeholder="Write Your address "
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
       <br></br>
            
      <button className=' p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;
