import React,{useState} from 'react'
import img1 from '../Assects/groupiskon.jpg';
import img2 from '../Assects/image2.jpg'
import image1 from '../Assects/radhe3.jpg';
import image2 from '../Assects/groupiskon.jpg';
import image3 from '../Assects/radhekrishna.jpg';
import img5 from '../Assects/image5.jpg';
import {validname,validemail,validamount} from '../Regex'

export default function Donate() {

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[amount,setAmount]=useState("");
   
    const[nameerror,setNamerror]=useState("");
    const[emailerror,setEmailerror]=useState("");
    const[amounterror,setAmounterror]=useState("")
    
  
  
    const savebtn=()=>{
  
      let status=false;
      if(!validname.test(name)){
        status=true;
        setNamerror("Enter Your Name");
       }
       else{
        setNamerror(" ")
   
       }
       if(!validamount.test(amount)){
        status=true;
        setAmounterror("Enter Amount");
       }
       else{
        setAmounterror(" ");
   
       }

      if(!validemail.test(email))
      {
       status=true;
       setEmailerror("Enter Valid email Id");
      }
      else{
       setEmailerror(" ");
      }
      
  
     
      return status;
    }

  return (
    <div>

  {/* Image Section 1 */}
  <div className="container image-section">
    <div className="row">
      <div className="col-md-6">
        <img src={img1} className="img-fluid" alt="Image 1" />
      </div>
      <div className="col-md-6">
        <img src={img2}  style={{height:'39vh',width:'100%'}} className="img-fluid" alt="Image 2" />
      </div>
    </div>
  </div>
  <div className='row'>
    <div className='col-sm-1'></div>
    <div className='col-sm-10'>
      <h5 className='text-center mt-4' style={{fontFamily:'serif'}}>
      YOUR INVESTMENT TRANSFORMS LIVES.<b> DONATE NOW</b>. HELP END HUNGER IN THESE TOUGH TIMES.
      </h5>
    </div>
    <div className='col-sm-1'></div>
  </div>
  


<div className="container my-5">
  <div className="page-header">
  </div>
  <div className="row row-cols-1 row-cols-md-3 g-4">
    {/* Card 1 - Basic Donation */}
    <div className="col">
      <div className="card">
        <div className="card-header">
          <h4>Garlands</h4>
        </div>
        <div className="card-body">
          <h5 className="card-title">Rs.500</h5>
          <p className="card-text">Help us with basic temple maintenance and community outreach.</p>
          <a href="#" className="btn btn-info donation-btn">Donate Now</a>
        </div>
      </div>
    </div>
    {/* Card 2 - Intermediate Donation */}
    <div className="col">
      <div className="card">
        <div className="card-header">
          <h4>Aarti</h4>
        </div>
        <div className="card-body">
          <h5 className="card-title">Rs.1000</h5>
          <p className="card-text">Support our educational programs and spiritual retreats.</p>
          <a href="#" className="btn btn-info donation-btn">Donate Now</a>
        </div>
      </div>
    </div>
    {/* Card 3 - Premium Donation */}
    <div className="col">
      <div className="card">
        <div className="card-header">
          <h4>Prasadam</h4>
        </div>
        <div className="card-body">
          <h5 className="card-title">Rs.3100</h5>
          <p className="card-text">Make a significant impact on temple projects and charitable initiatives.</p>
          <a href="#" className="btn btn-info donation-btn">Donate Now</a>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container my-5">
  <div className="page-header">
  </div>
  <div className="row row-cols-1 row-cols-md-3 g-4">
    {/* Card 1 - Basic Donation */}
    <div className="col">
      <div className="card">
        <div className="card-header">
          <h4>Mangal Bhog</h4>
        </div>
        <div className="card-body">
          <h5 className="card-title">Rs.751</h5>
          <p className="card-text">Help us with basic temple maintenance and community outreach.</p>
          <a href="#" className="btn btn-info donation-btn">Donate Now</a>
        </div>
      </div>
    </div>
    {/* Card 2 - Intermediate Donation */}
    <div className="col">
      <div className="card">
        <div className="card-header">
          <h4>Balya Bhog</h4>
        </div>
        <div className="card-body">
          <h5 className="card-title">Rs.1100</h5>
          <p className="card-text">Support our educational programs and spiritual retreats.</p>
          <a href="#" className="btn btn-info donation-btn">Donate Now</a>
        </div>
      </div>
    </div>
    {/* Card 3 - Premium Donation */}
    <div className="col">
      <div className="card">
        <div className="card-header">
          <h4>Raj Bhog</h4>
        </div>
        <div className="card-body">
          <h5 className="card-title">Rs.1501</h5>
          <p className="card-text">Make a significant impact on temple projects and charitable initiatives.</p>
          <a href="#" className="btn btn-info donation-btn">Donate Now</a>
        </div>
      </div>
    </div>
  </div>
 
</div>


<div className="container my-5">
  
  {/* Carousel */}
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="row g-4 mt-5">
          <div className="col-md-6">
            <div className="card">
              <img src='https://iskconahmedabad.com/wp-content/uploads/2022/03/2.png' className="card-img-top" alt="Image 1" style={{height:'60vh'}}/>
             
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <img src='https://iskconahmedabad.com/wp-content/uploads/2022/02/3-2-800x800.png' className="card-img-top" alt="Image 2" style={{height:'60vh'}}/>
             
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="row g-4 mt-5">
          <div className="col-md-6">
            <div className="card">
              <img src={img5} className="card-img-top" alt="Image 4" style={{height:'60vh'}} />
              
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <img src='https://iskconahmedabad.com/wp-content/uploads/2022/02/1-2-800x800.png' className="card-img-top" alt="Image 5" style={{height:'60vh'}}/>
              
            </div>
          </div>
          
        </div>
      </div>
     
      {/* Add more carousel items if necessary */}
    </div>
    <h5 className="text-center" style={{fontFamily:'serif'}}>ISKCON ALL OVER THE COUNTRY FEED MORE THAN 7 CRORE MEALS DURING THE PANDEMIC <b> STILL COUNTING…</b></h5>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>



     <section className="donation-section bg-light">
  <div className="container">
    <div className="section-header">
      <h2 style={{color:'blueviolet'}}>Make a Donation to ISKCON</h2>
      <p>Your donation will help support our temples, educational programs, and charitable activities.</p>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="donation-card">
          <h3>Donate Online</h3>
          <form action="your-payment-processing-url" method="POST">
            <div className="form-group">
              <label htmlFor="donationAmount"><b>Donation Amount</b></label>
              <input type="number" className="form-control" id="donationAmount" name="amount" value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Enter amount"/>
              {amounterror && <span style={{fontSize:'15px',color:'red'}}>{amounterror}</span>}<br></br>
            </div>
            <div className="form-group">
              <label htmlFor="donorName"><b>Your Name</b></label>
              <input type="text" className="form-control" id="donorName" name="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Enter your name" />
              {nameerror && <span style={{fontSize:'15px',color:'red'}}>{nameerror}</span>}<br></br>
            </div>
            <div className="form-group">
              <label htmlFor="email"><b>Email Address</b></label>
              <input type="email" className="form-control" id="email" name="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your email" />
              {emailerror && <span style={{fontSize:'15px',color:'red'}}>{emailerror}</span>}<br></br>
            </div>
            <button type='button' className="btn btn-success btn-block mt-3" onClick={savebtn}>Donate Now</button>
          </form>
        </div>
      </div>
      <div className="col-md-6">
        <div className="donation-card">
          <h3>Other Ways to Donate</h3>
          <ul>
            <li><strong>Bank Transfer:</strong> Bank account details will be provided upon request.</li>
            <li><strong>PayPal:</strong> You can donate via PayPal to our official account at paypal@iskcon.org.</li>
            <li><strong>Cheque:</strong> Make cheques payable to ISKCON and send them to our office address.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
