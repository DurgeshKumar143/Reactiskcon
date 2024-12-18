import React,{useState} from 'react'
import {validname,validadd,validemail,validrating} from '../Regex'

export default function Feedback() {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[address,setAddress]=useState("");
  const[rating,setRating]=useState("");
  const[nameerror,setNamerror]=useState("");
  const[emailerror,setEmailerror]=useState("")
  const[adderror,setAdderror]=useState("");
  const[rateerror,setRatingerror]=useState("");


  const saveFeedback=()=>{

    let status=false;
    if(!validname.test(name)){
      status=true;
      setNamerror("Enter Your Name");
     }
     else{
      setNamerror(" ")
 
     }
    if(!validemail.test(email))
    {
     status=true;
     setEmailerror("Invalid email Id");
    }
    else{
     setEmailerror(" ");
    }
    //validate mobnumber
    if(!validadd.test(address)){
     status=true;
     setAdderror("Enter Your Message");
    }
    else{
     setAdderror(" ");

    }

    if(!validrating.test(rating)){
      status=true;
      setRatingerror("Choose Your Rating Experience");
     }
     else{
      setRatingerror(" ");
 
     }
    return status;
 }
  return (
    <div>
          <div>
  <div className="header">
    <h1>Share Your Thoughts With Us!</h1>
  </div>
  {/* Introduction Section */}
  <div className="container intro">
    </div>
  {/* Feedback Form Section */}
  <div className="feedback-form-container">
    <div className="feedback-form">
      <div className="form-header">
        <h4>Feedback Form</h4>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Your Name" />
          {nameerror && <span style={{fontSize:'15px',color:'red'}}>{nameerror}</span>}<br></br>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your Email" />
          {emailerror && <span style={{fontSize:'15px',color:'red'}}>{emailerror}</span>}<br></br>
        </div>
        <div className="mb-3">
          <label htmlFor="feedback" className="form-label">Your Feedback</label>
          <textarea className="form-control" id="feedback" value={address} onChange={e=>setAddress(e.target.value)} rows={4} placeholder="Please enter your feedback here..."  defaultValue={""} />
          {adderror && <span style={{fontSize:'15px',color:'red'}}>{adderror}</span>}<br></br>
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">How would you rate our service?</label>
          <select className="form-control" id="rating" value={rating} onChange={e=>setRating(e.target.value)}>
            <option value>Select Rating</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </select>
          {rateerror && <span style={{fontSize:'15px',color:'red'}}>{rateerror}</span>}
        </div>
        <button type="button" className="submit-btn btn btn-info" onClick={saveFeedback}>Submit Feedback</button>
      </form>
    </div>
  </div>
  
</div>

    </div>
  )
}
