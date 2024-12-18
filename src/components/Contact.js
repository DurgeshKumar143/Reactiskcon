import React from 'react'
import call from '../Assects/call.png'
import email from '../Assects/email.avif'
import add from '../Assects/location.jpg'


export default function Contact() {
  return (
    <div>
        <header className="bg-dark text-white text-center py-5 con">
    <h1 style={{fontWeight:'bold'}}>Contact Us</h1>
    <p style={{fontWeight:'bold'}}>We would love to hear from you! Please fill in the form below to send us your questions.</p>
  </header>
        <div className='row mt-5 m-0 p-0'>
            <div className='col-sm-1'></div>
            <div className='col-sm-5' style={{border:'2px solid blueviolet',padding:'2%'}}>
            <form>
                <h3 className='text-center'>Contact Us</h3><hr></hr>
  <div className="form-group">
    <label htmlFor="name"><b>Full Name</b></label>
    <input type="text" className="form-control" id="name" placeholder="Enter your full name" />
    <br></br>
  </div>
  <div className="form-group">
    <label htmlFor="email"><b>Email address</b></label>
    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
    <br></br>
  </div>
  <div className="form-group">
    <label htmlFor="subject"><b>Subject</b></label>
    <input type="text" className="form-control" id="subject" placeholder="Enter the subject" />
    <br></br>
  </div>
  <div className="form-group">
    <label htmlFor="message"><b>Message</b></label>
    <textarea className="form-control" id="message" rows={4} placeholder="Write your message" defaultValue={""} />
    <br></br>
  </div>
  <button type="button" className="btn btn-info btn-block mt-3">Submit</button>
  </form>
  </div>
  <div className="col-sm-5">
    <h1 className='text-center' style={{color:'blueviolet',fontWeight:'bold'}}>Get in Touch</h1>
    <div className='row mt-4 mb-4'>
    <div className='col-sm-1'></div>
        <div className='col-sm-3'><img src={call} style={{height:'10vh'}}/></div>
        <div className='col-sm-7'><p className='pt-2' style={{fontSize:'20px'}}><b>Contact us:</b> +9984756465,777493857</p>
        <div className='col-sm-1'></div>

        </div>
    </div>
    <div className='row mt-4 mb-4'>
        <div className='col-sm-1'></div>
        <div className='col-sm-3'><img src={email} style={{height:'10vh'}}/></div>
        <div className='col-sm-7'><p className='pt-2' style={{fontSize:'20px'}}><b>Mail us: </b>iskonckt@gmai.com, info.iskconcktd@gmail.com</p>

        </div>
        <div className='col-sm-1'></div>
    </div>
    <div className='row mt-4 mb-4'>
    <div className='col-sm-1'></div>
        <div className='col-sm-3'><img src={add} style={{height:'10vh',borderRadius:'70px'}}/></div>
        <div className='col-sm-7'><p className='pt-2' style={{fontSize:'20px'}}>ISKCON Chitrakoot, Chitra Road, Near water tank, Sitapur, Chitrakoot, 210204, India</p>
        <div className='col-sm-1'></div>
        </div>
    </div>
  </div>

  <div className="col-sm-1"></div>

</div>
<div className='row p-0 mt-3'>
    <div className='col-sm-12'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14441.763468550193!2d80.8656548!3d25.1883508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3984a747d7d5bd73%3A0x52a25e74316a9ff2!2sISKCON%20Chitrakoot!5e0!3m2!1sen!2sin!4v1732092347456!5m2!1sen!2sin"  style={{border: 0,height:'50vh',width:'100%'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

    </div>
</div>
</div>
  )
}
