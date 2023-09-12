import React from 'react'
import img from '../assets/vg.webp'
import { useState,value } from 'react'
import toast from 'react-hot-toast'
import {addDoc, collection} from "firebase/firestore"
import { db } from '../firebase' 
const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [disablebtn, setDisablebtn] = useState(false)
    const submitHandler= async (e)=>{
        e.preventDefault();
        setDisablebtn(true)
      try {
        await addDoc(collection(db, "contacts"),{
            name,email,phone,message,
        })
        toast.success("Message Submit Successfully")
        setDisablebtn(false)
        setName("")
        setEmail("")
        setPhone("")
        setMessage("")
      } catch (error) {
        toast.error("Error");
        console.log(error)
        setDisablebtn(false)
      }

        
    }
  return (
    <div id="contact" className='contact-us-form'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='main-title-work text-center contact-title'>
                        <div className='title-work serv-nam'><span className='cl-chang'>C</span>ontact Us</div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='my-img'>
                        <img src={img} />
                    </div>
                </div>
                <div className='col-md-6 my-form'>
                    <form id="contact-us" action="" method="post"  onSubmit={submitHandler}>
                        <h3>Contact Me</h3>
                        <fieldset>
                            <input placeholder="Your name" type="text" tabindex="1" required autofocus 
                            value={name} onChange={(e)=>setName(e.target.value)}
                            />
                        </fieldset>
                        <fieldset>
                            <input placeholder="Your Email Address" type="email" tabindex="2" required
                            value={email} onChange={(e)=>setEmail(e.target.value)} />
                        </fieldset>
                        <fieldset>
                            <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3"
                            value={phone} onChange={(e)=>setPhone(e.target.value)}
                            />
                        </fieldset>
                        <fieldset>
                            <textarea placeholder="Type your message here...." tabindex="5" required
                            value={message} onChange={(e)=>setMessage(e.target.value)}
                            ></textarea>
                        </fieldset>
                        <fieldset>
                            <button name="submit" disabled={disablebtn} 
                            type="submit" className='disableBtn ? "disableBtn" : ""' id="contact-submit" data-submit="...Sending"
                            
                            >Submit</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Contact
