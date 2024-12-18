import React from 'react'
import ghat from '../Assects/ghat.jpg';
import hanuman from '../Assects/water.jpg';
import kamad from '../Assects/kamad.jpg'
import bharat from '../Assects/bharat.avif'

export default function Chitrakoot() {
  return (
    <div>
        <div className='container-fluid'>
            <div className='row mt-4 mb-4 m-0 p-0'>
              <div className='col-sm-12'></div>
                <div className='col-sm-1'></div>
                <div className='col-sm-6'>
                  <h2 className='text-center' style={{color:'orange'}}>About Chitrakoot</h2>
                    <p style={{fontSize:'18px'}}>Chitrakoot means the <b>‘Hill of many wonders’</b>. Chitrakoot falls in the northern Vindhya range of mountains spread over the states of Uttar Pradesh and Madhya Pradesh. Chitrakoot district in Uttar Pradesh was created on<b> 4 September 1998</b>. Chitrakoot Parvat Mala includes  Kamad Giri, Hanumaan Dhara, Janki Kund, Lakshman pahari, and<b> Devangana</b> famous Religious mountains.Lord Rama spend a major part of his exile here. According to the epic Ramayana, Chitrakoot is the place where Bharat, brother of <b>Lord Rama </b>came to visit him and asked him to return to Ayodhya and <b>rule the kingdom</b>. It is believed that the supreme Gods of Hinduism, (<b>Brahma, Vishnu, and Shiva</b>) took incarnations here. The place is dotted with many temples and several religious sites. At Chitrakoot, everything relates to<b> Lord Rama</b>. One can also explore the amalgamation of culture and history on this land. Chitrakoot is a spiritual retreat, thronged almost throughout the year by travellers, who have a penchant for the unknown and unexplored. Chitrakoot is a perfect blend of <b>divinity</b>, serenity, and<b> natural beauty</b>.</p>
                </div>
                <div className='col-sm-4'>
                    <img src={ghat} style={{width:'100%'}}/>
                </div>
                <div className='col-sm-1'></div>
            </div>
               
               <div className='row mb-5 m-0 p-0'>
                <div className='col-sm-12 m-0 p-0'><h1 className='text-center' style={{color:'orange'}}>Places to visit</h1></div>
                <div className='row m-0 p-0'>
                    <div className='col-sm-1'></div>
                    <div className='col-sm-3'>
                <div className="container">
  <img src={kamad} alt="Avatar" className="image" />
  <div className="overlay">
    <div className="text"><h4>Kamadgiri</h4>
    <p></p></div>
  </div>
</div>
</div>
<div className='col-sm-4'>
                <div className="container">
  <img src={hanuman} alt="Avatar" className="image" />
  <div className="overlay">
    <div className="text"><h4>Shabri waterfall</h4>
    <p></p></div>
  </div>
</div>
</div>
<div className='col-sm-3'>
                <div className="container">
  <img src={bharat} alt="Avatar" className="image" />
  <div className="overlay">
    <div className="text"><h4>Bharat Koop</h4>
    <p></p>
    </div>
  </div>
</div>
</div>
<div className='col-sm-1'></div>
</div>
</div>

             
               </div>

        </div>
  )
}
