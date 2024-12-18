import React from 'react'

export default function Card(props) {
    console.log(props);
  return (
    <div>
<div className='card' style={{border:'2px solid blueviolet'}}>
    <img src={props.img} style={{borderRadius:'200px',width:'300px',height:'300px'}}/>
    <p style={{color:'blueviolet',fontSize:'20px'}}> <b>Name:&emsp;</b>{props.title}</p>
    <p>{props.email}</p>
    <p>{props.desc}</p>
</div>
    </div>
  )
}
