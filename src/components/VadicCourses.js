import {React ,useState} from 'react'
import Image1 from '../Assects/bhakti.jpg'
import Image2 from '../Assects/bhagvatgita.jpg'
import Image3 from '../Assects/birth and death.jpg'
import Image4 from '../Assects/chaitanya.jpg'
import Image5 from '../Assects/civilization.jpg'
import Image6 from '../Assects/consciousness.jpg'
import Image7 from '../Assects/easy to journy.jpg'
import Image8 from '../Assects/perfectcreater.jpg'


export default function Header() {
  const [name, setName] = useState('');
  const [mob, setMob] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    mob: '',
    email: '',
    pass: '',
    address: ''
  });

  const validateForm = () => {
    let formErrors = { name: '', mob: '', email: '', pass: '', address: '' };
    let isValid = true;

    // Name validation
    if (!name) {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    // Mobile number validation
    if (!mob) {
      formErrors.mob = 'Mobile number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(mob)) {
      formErrors.mob = 'Please enter a valid 10-digit mobile number';
      isValid = false;
    }

    // Email validation
    if (!email) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Password validation
    if (!pass) {
      formErrors.pass = 'Password is required';
      isValid = false;
    } else if (pass.length < 6) {
      formErrors.pass = 'Password must be at least 6 characters long';
      isValid = false;
    }

    // Address validation
    if (!address) {
      formErrors.address = 'Address is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const saveData = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with the form submission (e.g., send data to API)
      alert('Form submitted successfully!');
    } else {
      // alert('Please fix the errors in the form.');
    }
  };
     
  return (
<div>
<div className='container-fluid m-0 p-0'>
    <h1 style={{color:"blue",textAlign:"center",fontSize:"50px"}}>Vedic Courses</h1>
    <p style={{paddingLeft:"5px",paddingRight:"5px",fontSize:"20px"}}>Vedic courses generally refer to educational programs that focus on the ancient knowledge and texts of the Vedas, which are the foundational scriptures of Hinduism. The Vedas encompass a vast range of topics including philosophy, spirituality, rituals, cosmology, and more. Vedic education often includes studying ancient Sanskrit texts, learning spiritual practices, and understanding the historical and cultural context of Vedic teachings.</p>
    <div className='row p-2'>
      <div className='col-sm-3'>
      <div className="card" style={{width: '18rem',height:'25rem'}}>
  <img src={Image1} className="card-img-top" alt="..." style={{height:"15rem",width:"17rem"}}/>
  <div className="card-body">
    <h5 className="card-title" style={{textAlign:"center"}}><i style={{fontSize:"35px"}}>Bhakti</i><p>The art of Eternal Love</p> </h5>
    <p className="card-text">Bhakti requires the devotee to develop virtues like humility.</p>
  </div>
</div>
 </div>

 <div className='col-sm-3'>
      <div className="card" style={{width: '18rem',height:'25rem'}}>
  <img src={Image2} className="card-img-top" alt="..." style={{height:"15rem",width:"17rem"}}/>
  <div className="card-body">
    <h5 className="card-title" style={{textAlign:"center"}}><i style={{fontSize:"35px"}}>Bhagvat Gita</i><p>His Devine Grace</p></h5>
    <p className="card-text">The Bhagavad Gita is most revered and influential spiritual in the world.</p>
  </div>
</div>
 </div>

 <div className='col-sm-3'>
      <div className="card" style={{width: '18rem',height:'25rem'}}>
  <img src={Image3} className="card-img-top" alt="..." style={{height:"15rem",width:"17rem"}}/>
  <div className="card-body">
    <h5 className="card-title" style={{textAlign:"center"}}><i style={{fontSize:"35px"}}>Beyond</i><p> Birth and Death</p></h5>
    <p className="card-text">This concept challenges the materialistic view of life.</p>
  </div>
</div>
 </div>

 <div className='col-sm-3'>
      <div className="card" style={{width: '18rem',height:'25rem'}}>
  <img src={Image4} className="card-img-top" alt="..." style={{height:"15rem",width:"17rem"}}/>
  <div className="card-body">
    <h5 className="card-title" style={{textAlign:"center"}}><i style={{fontSize:"35px"}}> Sri Caitanya</i><p>Caritamrta</p> </h5>
    <p className="card-text">Sri Caitanya-caritamrta is a spiritual biography of Caitanya Mahāprabhu.</p>
  </div>
</div>
 </div>

</div>

<div className='row p-2'>
      <div className='col-sm-3'>
      <div className="card" style={{width: '18rem',height:'25rem'}}>
  <img src={Image5} className="card-img-top" alt="..." style={{height:"15rem",width:"17rem"}}/>
  <div className="card-body">
    <h5 className="card-title" style={{textAlign:"center"}}><i style={{fontSize:"35px"}}>Civilization And</i><p>Transcendence</p> </h5>
    <p className="card-text">Transcendence refers the idea of going beyond the limits of material</p>
  </div>
</div>
 </div>

 <div className='col-sm-3'>
      <div className="card" style={{width: '18rem',height:'25rem'}}>
  <img src={Image6} className="card-img-top" alt="..." style={{height:"15rem",width:"17rem"}}/>
  <div className="card-body">
    <h5 className="card-title" style={{textAlign:"center"}}><i style={{fontSize:"35px"}}>Consciousness</i><p>The Missing Link</p></h5>
    <p className="card-text">The Missing Link" is a concept of scientific and spiritual contexts.</p>
  </div>
</div>
 </div>

 <div className='col-sm-3'>
      <div className="card" style={{width: '18rem',height:'25rem'}}>
  <img src={Image7} className="card-img-top" alt="..." style={{height:"15rem",width:"17rem"}}/>
  <div className="card-body">
    <h5 className="card-title" style={{textAlign:"center"}}><i style={{fontSize:"35px"}}>Easy Journey</i><p>To Other Planets</p></h5>
    <p className="card-text"> Planets are incredibly far from Earth the closest planet.</p>
  </div>
</div>
 </div>

 <div className='col-sm-3'>
      <div className="card" style={{width: '18rem',height:'25rem'}}>
  <img src={Image8} className="card-img-top" alt="..." style={{height:"15rem",width:"17rem"}}/>
  <div className="card-body">
    <h5 className="card-title" style={{textAlign:"center"}}><i style={{fontSize:"35px"}}>Perfect Creator</i><p>Children's Story Book</p> </h5>
    <p className="card-text">A children's storybook is a wonderful way to spark creativity.</p>
  </div>
</div>
 </div>
</div>

<div className="container">
      <div className="row">
        <div className="col-sm-12 m-2 text-center text-primary pt-3">
          <h1 style={{ backgroundColor: 'navy', color: 'lightcyan', borderRadius: '10px' }}>
            Registration Form
          </h1>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-sm-2"></div>
        <div className="col-sm-8 text-light">
          <form>
            <div className="mb-3">
              <label htmlFor="tname" className="form-label">Enter Name</label>
              <input
                type="text"
                className="form-control"
                id="tname"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter your name"
              />
              {errors.name && <small className="text-danger">{errors.name}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="tnumber" className="form-label">Mobile Number</label>
              <input
                type="number"
                className="form-control"
                id="tnumber"
                value={mob}
                onChange={e => setMob(e.target.value)}
                placeholder="Enter your mobile number"
              />
              {errors.mob && <small className="text-danger">{errors.mob}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="temail" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="temail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              {errors.email && <small className="text-danger">{errors.email}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="tpass" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="tpass"
                value={pass}
                onChange={e => setPass(e.target.value)}
                placeholder="Enter your password"
              />
              {errors.pass && <small className="text-danger">{errors.pass}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="taddress" className="form-label">Address</label>
              <textarea
                className="form-control"
                rows={6}
                style={{ resize: 'none' }}
                value={address}
                onChange={e => setAddress(e.target.value)}
                placeholder="Address here"
              />
              {errors.address && <small className="text-danger">{errors.address}</small>}
            </div>
            <div>
              <button type="submit" className="btn btn-primary" onClick={saveData}>Submit</button>
            </div>
          </form>
        </div>
        <div className="col-sm-2"></div>
                </div>



                {/* container  */}
            </div>




</div>
</div>
  )
}
