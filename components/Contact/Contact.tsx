"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import "./contact.css"
function ContactForm() {
  const [state, handleSubmit] = useForm("moqgyggo");
  if (state.succeeded) {
      return <p className="ok5">Thanks for joining!</p>;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      
      
     
      <h1 className= "ok">
      Contact Us</h1>
        
 
 
 
      <label>
      
      </label>
      <textarea
      className="ok2"
        id="message"
        name="message"
        placeholder="Your Name"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
           <label htmlFor="email">
        
      </label>

      <input
      className="ok3"
      
        id="email"
        type="email" 
        name="email"
        placeholder="Your Email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      
<label>
      
      </label>
      <textarea
      className="ok4"
        id="message"
        name="message"
        placeholder="Your Message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        
      <button type="submit" disabled={state.submitting}>
        <h1 className="submit-btn "> Submit </h1>
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