import React from 'react'
import img2 from '../Assects/enqy.jpg'

export default function Enquiry() {
  return (
    <div>
         <div>
  <header className="bg-dark text-white text-center py-5 pm">
    <h1 style={{fontWeight:'bold'}}>Enquiry Form</h1>
    <p style={{fontWeight:'bold'}}>We would love to hear from you! Please fill in the form below to send us your questions.</p>
  </header>
  {/* Main Section */}
  <div className="container py-5">
    <div className="row">
      {/* Left Column (Form Section) */}
      <div className="col-md-6 form-section">
        <h1 className='text-center text-info card-header'>Enquiry</h1><hr></hr> 
        <form action="#" method="POST">
          <div className="mb-3">
            <label htmlFor="full-name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="full-name" name="full-name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" name="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="phone" name="phone" />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <select className="form-select" id="subject" name="subject">
              <option value="general">General Inquiry</option>
              <option value="product">Product Inquiry</option>
              <option value="service">Service Inquiry</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" name="message" rows={4} required defaultValue={""} />
          </div>
          <button type="submit" className="btn btn-info">Submit Enquiry</button>
          &emsp;<input type='reset' className='btn btn-secondary' value='clear all'/>
        </form>
      </div>
      {/* Right Column (Image Section) */}
      <div className="col-md-6 image-section">
        <img src={img2} style={{height:'100vh'}} alt="Enquiry Image" />
      </div>
    </div>
  </div>
</div>



    </div>
  )
}
