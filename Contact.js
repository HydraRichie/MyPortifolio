import React from 'react';
import {useState} from "react";
import { useNavigate } from 'react-router-dom';


import "./Contact.css"
export default function Contact() {
    const navigation=useNavigate();
    const [user,setUser]=useState({name:"",email:"",message:""});
let value,name;
    const inputHandler=(event)=>
    {
    name=event.target.name;
    value=event.target.value;
    setUser({...user,[name]:value});
    }

    const Postdata=async(e)=>
    {
        e.preventDefault();
        const {name,email,message}=user;
      const res= fetch("/contact",
        {
            method:"POST",
            headers:
            {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name:name,email:email,message:message})
        })
        if(res.status===404)
        {
    window.alert("Sry Trry Again")
        }
        else
        {
       
            window.alert("Thank You ! We Respect Ur message");
            
            document.getElementByClassName("Formmain").reset();
        }
       
    }
  return (
    
    <div>
        <form className='Formmain'>
    <div className="background">
  <div className="containerforcontact">
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close"></div>
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>ME</span>
          </div>
          <div className="app-contact">Contact Me</div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" name="name" placeholder="NAME" value={user.name} onChange={inputHandler}/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" name="email" placeholder="Email" value={user.email} onChange={inputHandler}/>
            </div>
           
            <div className="app-form-group message">
              <input className="app-form-control" name="message" value={user.message} placeholder="MESSAGE" onChange={inputHandler}/>
            </div>
           <button className="btn" onClick={Postdata}>Submit</button>
          </div>
        </div>
      </div>
    </div>
    <div className="credits">
      inspired by
      <a className="credits-link" target="_blank">
        <svg className="dribbble" viewBox="0 0 200 200">
          <g stroke="#ffffff" fill="none">
            <circle cx="100" cy="100" r="90" stroke-width="20"></circle>
    
          </g>
        </svg>
      Elon Musk
      </a>
    </div>
  </div>
    </div>
    </form>
    </div>
  )
}
