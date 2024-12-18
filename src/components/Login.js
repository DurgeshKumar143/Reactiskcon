import {React,useState} from "react";
import krishna from "../Assects/krishna.png";
// import bgimg from "./Assest/Radha-Krishna.jpg";
import {validemail, validpass} from  '../Regex'
export default function Login() {

  const[email,setEmail]=useState("")
  const[pass,setPass]=useState("");
  const[emailerror,setEmailerror]=useState("")
  const[passerror,setPasserror]=useState("");
  const validateField=()=>{
  //  alert(email+pass)
   
    let status=false;
     //validate email
    if(!validemail.test(email))
    {
       status=true;
       setEmailerror("Invalid email Id");
    }
    else{
       setEmailerror("")
    }
    //validate mobile number
    if(!validpass.test(pass))
    {
       status=true;
       setPasserror("Invalid password");
    }
    else{
       setPasserror("")
    }
    return status;
   
  }
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  #bd{\n    background-image: linear-gradient(to right,\n    rgba(0,124,157,1),\n     rgb(15, 26, 234));\n}\n  ",
        }}
      />

      <div className="container-fluid">
        <div className="row">
        
          <div className="col-sm-3"></div>
          <div className="col-sm-6 m-4">
            <div id="bd" className="p-5"
              style={{ border: "5px solid orange", borderRadius: "20px" }}
 >
              <div className="row">
              <h1 className="text-center text-light mb-3">Login</h1>
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                  <img src={krishna} height={100} width={200} />
                </div>
                <div className="col-sm-4"></div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label text-light fw-bold" style={{ fontSize: "20px" }}>
                  User Id:
                </label>
                <input type="email" className="form-control" id="temail" value={email} onChange={e=>setEmail(e.target.value)}
                  placeholder="Enter User Id" style={{ fontSize: "20px" }}/></div>
              {emailerror && <p style={{fontSize:"15px",color:"red"}}>{emailerror}</p>}
              <br></br>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label text-light fw-bold" style={{ fontSize: "20px" }}>
                  Password:
                </label>
                <input type="password" className="form-control" id="tpass" value={pass} 
                onChange={e=>setPass(e.target.value)} placeholder="Enter Password" style={{ fontSize: "20px" }}/>
                {passerror && <p style={{fontSize:"15px",color:"red"}}>{passerror}</p>}
              </div>
              
                    
              <br></br>
              <div className="col-sm-12 text-center">
                <button type="button" onClick={validateField} className="btn btn-outline-warning text-center" style={{ fontSize: "22px" }}>
                  Login
                </button>
              </div>
            </div>

            <div className="col-sm-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
