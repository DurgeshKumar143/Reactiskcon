import React from 'react'
import bgimg from '../Assects/Radha-Krishna.jpg'
import janmastmi from '../Assects/iskcon-janmastami.jpg'
import diwali from '../Assects/ISKCON-Diwali.jpg'
import holi from '../Assects/iskcon-holi.jpg'
import kirtan from '../Assects/iskcon-kirtan-bhajan.jpg'
import tulsi from '../Assects/tulasi-saligrama-vivaha.jpeg'
import radha from '../Assects/image-radha.jpeg'
import rathyatra from '../Assects/iskcon-rath-yatra.jpg'

export default function Event() {
  return (
   <div>

<style dangerouslySetInnerHTML={{__html: "\n.event-card {\n    border: 1px solid #e3e6f0;\n    border-radius: 10px;\n    padding: 20px;\n    margin-bottom: 20px;\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n    transition: transform 0.3s ease-in-out;\n}\n\n.event-card:hover {\n    transform: translateY(-10px);\n}\n" }} />

  <div className="container-fluid">
    <div className='row mb-4'>
    <h1 className='text-center text-success' style={{marginBottom:'40px'}}>Events</h1>
    <hr></hr>
      <div className='col-sm-1'></div>
      <div className='col-sm-10'>
        <div className='row mt-3'>
          <div className='col-sm-8'>
            <h2>Janmastami</h2>
            
            Janmastami – the birth of Lord Krishna – is one of the biggest events of the year. It is the Vaishnava equivalent of Christmas in that devotees celebrate God’s advent 5,000 years ago into this material world from the spiritual. The name Krishna means “All-Attractive.” Lord Krishna exhibits six opulences in full: beauty, knowledge, fame, wealth, strength, and humility. Thus, He is worshipped as “The Supreme All-Attractive Personality of Godhead.”

Today, Janmastami is celebrated across the globe with unparalleled grandeur at all ISKCON centers. All day performances of music, drama, dance and chanting in glorification of the enchanting pastimes of the Lord, lead up the midnight hour at which Lord Krishna appeared. A midnight service accompanied by kirtan and dancing is followed by a multi-course vegetarian feast for all.</div>
          <div className='col-sm-4'>
            <img src={janmastmi} height={300} width={400}/>
          </div>
        </div>

        <div className='row'>
                 <div className='col-sm-4'>
            <img src={diwali} height={300} width={400}/>
          </div>
          <div className='col-sm-8'>
            <h2>Diwali</h2>
            
            Diwali, or the Festival of Lights, marks the Hindu New Year, and is associated with many of the Supreme Lord’s pastimes on earth. Diwali is the best known of Vedic holidays and is today marked by events in places as varied as ISKCON temples and America’s White House.

For ISKCON members, this day is most notable because it marks the return of Lord Rama, an incarnation of Krishna, to his kingdom of Ayodhya, after his defeat of the evil king Ravana. Rama was welcomed by all the citizens who lit lamps or dipas illuminating the sky for his joyous return. It also marks a day during Lord Krishna’s advent when He dispatched the demoniac Narakasura.

Diwali thus signifies the victory of light over darkness and good over evil. The festival also symbolizes a time for spiritual renewal by lighting a lamp within our own hearts for spiritual enlightenment and by welcoming the Lord into our lives. The festival is often celebrated with elaborate firework displays, lighting Diwali lamps and feasting.

 </div>
 
        </div>

        <div className='row mt-4'>
          <div className='col-sm-8'>
            <h2>Rath Yatra</h2>
            
            With the exception of Kumbha Mela, the Rath Yatra traditionally held in Puri, India attracts the largest gathering of pilgrims in India. During this festival, the beautifully bedecked Deities of Jagannath (Lord of the universe) , Baladev (Krishna’s brother) and Subhadra (Krishna’s sister) are taken out on three giant chariots specially constructed for the parade.

According to scriptures, even though Krishna became a great King of Dwarka, his childhood was spent amongst simple cowherd boys and girls in the village of Vrindavana. This mood of wanting to bring back Krishna to the playful pastimes of Vrindavana signifies the inner meaning of Rath Yatra. When devotees pull the ropes of the cart, it symbolizes the pulling of the Lord into our hearts.

In the late 1960s, A.C. Bhaktivedanta Swami Prabhupada inaugurated this joyous event in North America. With roots steeped in spiritual traditions, the festival is now celebrated in every major city around the world, including London, Paris, Durban, Sydney, Mumbai and New York. For instance , in Los Angeles, more than 50,000 people take part in the colorful walk, pulling three giant 40-foot tall chariots. Exhibitions and stage performances often accompany the parade, amidst melodious singing, chanting, drumming,dancing and feasting.

</div>
          <div className='col-sm-4'>
            <img src={rathyatra} height={300} width={400}/>
          </div>
        </div>

        <div className='row mt-4 mt-4'>
                 <div className='col-sm-4'>
            <img src={kirtan} height={300} width={400}/>
          </div>
          <div className='col-sm-8'>
            <h2>Bhajan-Kirtan</h2>
            
            The power of sound is profound and tangible, yet also mystical. The Vedas, the ancient Sanskrit books of spiritual knowledge, prescribe invoking our original blissful spiritual consciousness through the medium of sound, a process considered especially effective for this current age. The joyous feelings awakened through the melodious glorification of the Divine are a kind of sonic theology, in which both performer and audience gradually awaken spiritual understanding of the self and the Supreme Self, or God, in ways difficult to achieve through other means.

The rich field of devotional music, the music of bhakti, has given rise to several distinct styles and traditions. The Madras Music Academy of South India puts it simply with their slogan, kanu bina gita nahi. “Without Krishna (God) there is no song.”

Kirtan, a form of devotional call-and-response chanting first popularized five hundred years ago in India by Sri Chaitanya Mahaprabhu, is practiced regularly by ISKCON devotees and has now spread around the world by efforts of the Vaishnava community.
 </div>
 
        </div>


      </div>
      <div className='col-sm-1'></div>
    </div>
   


    <div id='bgimg' className="row mb-5 mt-4">
   
      <div className="col-sm-1" />
      <div className="col-sm-10 ">
        <div className="row">
          <div className="col-sm-4 d-flex justify-content-center">
         <div className="event-card" style={{width: '25rem'}}>
  <img src={janmastmi} className="card-img-top" alt="..." />
  <div className="card-body"><br></br>
    <h3 className="card-title">Janmastami</h3><br></br>
    <p className="card-text">Janmastami – the birth of Lord Krishna – is one of the biggest events of the year. It is the Vaishnava equivalent of Christmas in that devotees celebrate God’s advent 5,000 years ago into this material world from the spiritual. </p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>

          </div>
          <div className="col-sm-4 d-flex justify-content-center">
          <div className="event-card" style={{width: '25rem'}}>
  <img src={diwali} className="card-img-top" alt="..." />
  <div className="card-body"><br></br>
    <h3 className="card-title">Diwali</h3><br></br>
    <p className="card-text">Diwali, or the Festival of Lights, marks the Hindu New Year, and is associated with many of the Supreme Lord’s pastimes on earth. Rama was welcomed by all the citizens who lit lamps or dipas illuminating the sky for his joyous return.

.</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
          </div>
          <div className="col-sm-4 d-flex justify-content-center">
         <div className="event-card " style={{width: '25rem'}}>
  <img src={holi} className="card-img-top" alt="..." />
  <div className="card-body"><br></br>
    <h3 className="card-title">Holi- Festival of Colors</h3><br></br>
    <p className="card-text">Traditionally, Holi announces the arrival of spring. It is also connected with a special pastime of Lord Krishna wherein He and his devotees playfully sprayed each other with colored water. </p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>

          </div>
          {/* <div className="col-sm-3 d-flex justify-content-center">
          <div className="event-card" style={{width: '18rem'}}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  
  </div>
</div>
          </div> */}
           </div>



           <div className="row ">
          <div className="col-sm-4 d-flex justify-content-center">
         <div className="event-card" style={{width: '25rem'}}>
  <img src={kirtan} className="card-img-top" alt="..." height={300} />
  <div className="card-body"><br></br>
    <h3 className="card-title">Kirtan-Bhajan</h3><br></br>
    <p className="card-text"> The power of sound is profound and tangible, yet also mystical. The Vedas, the ancient Sanskrit books of spiritual knowledge, prescribe invoking our original blissful spiritual consciousness through the medium of sound, a process considered especially effective for this current age.</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>

          </div>
          <div className="col-sm-4 d-flex justify-content-center">
          <div className="event-card" style={{width: '25rem'}}>
  <img src={tulsi} className="card-img-top" alt="..." height={300} />
  <div className="card-body"><br></br>
    <h3 className="card-title">Tulasi Saligram Vivah</h3><br></br>
    <p className="card-text">Tulasi Saligram Vivah is performed on the eleventh day of the bright fortnight in the month of Kartik (October-November), coinciding with Devuthani Ekadashi or Prabodhini Ekadashi.</p>

    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
          </div>
          <div className="col-sm-4 d-flex justify-content-center">
         <div className="event-card " style={{width: '25rem'}}>
  <img src={radha} className="card-img-top" alt="..." height={300}/>
  <div className="card-body"><br></br>
    <h3 className="card-title">Sri Radhastami </h3><br></br>
    <p className="card-text">The transcendental goddess Srimati Radharani is the direct counterpart of Lord Sri Krsna. She is the central figure for all the goddesses of fortune. She possesses all the attractiveness to attract the all-attractive Personality of Godhead. </p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>

          </div>
          {/* <div className="col-sm-3 d-flex justify-content-center">
          <div className="event-card" style={{width: '18rem'}}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  
  </div>
</div>
          </div>
           */}



          
      </div>




      </div>
      <div className="col-sm-1" />
    </div>
  </div>
</div>

  )
}
