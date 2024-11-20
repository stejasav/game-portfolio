import { useForm, ValidationError } from "@formspree/react";
import React, { useEffect } from "react";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Contact({transitioning}){
  const [state, handleSubmit] = useForm("xanybjaa");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Your message has been sent successfully!", {
        position: "top-right", 
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true
      });
      
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    }
  }, [state.succeeded]);

  
  return(
    <div>
      <div className="bg-1 text-white contact">
        {!transitioning && (<img src="./images/keys/right-arrow.svg" alt="left-arrow" className="left-arrow3" />)}
        <h1>CONTACT</h1>
        <div className="contact-containter">
          <form className="contact-form" accept-charset="utf-8" method="POST" onSubmit={handleSubmit}>
            <h2>Let's Connect</h2>
            <input id="name" type="text" placeholder="Name" name="name" className="input-field h-14" spellCheck="false" autoCorrect="off" required/>
            <ValidationError prefix="Name" field="name" errors={state.errors}/>
            <input id="email" type="email" placeholder="Email" name="email" className="input-field h-14" spellCheck="false" autoCorrect="off" required/>
            <ValidationError field="email" prefix="Email" errors={state.errors} />
            <textarea id="message" placeholder="Message" name="message" className="input-field h-36 resize-none" required/>
            <ValidationError prefix="Message" field="message" errors={state.errors}/>
            <button className="submit" disabled={state.submitting}>Send ➔</button>
          </form>
        </div>
      </div>

      <div className="ground"></div>
      <ToastContainer theme="dark"/>
    </div>
  )
}