import React from 'react';
import image1 from '../Assects/radhe3.jpg';
import image2 from '../Assects/groupiskon.jpg';
import image3 from '../Assects/radhekrishna.jpg';
import img5 from '../Assects/image5.jpg';
import img4 from '../Assects/image2.jpg';
import img3 from '../Assects/slider5.jpg';
import img2 from '../Assects/radhe4.jpg';
import img1 from '../Assects/slide1.jpeg';

 function Gallery() {
  return (


    <div>
        <div className="container my-5">
  <h2 className="text-center mb-4">Our Gallery</h2>
  <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
    {/* Image 1 */}
    <div className="col">
      <div className="card">
        <img src={image3} className="card-img-top gallery" alt="Image 1" />
      </div>
    </div>
    {/* Image 2 */}
    <div className="col">
      <div className="card">
        <img src={image1} className="card-img-top gallery" alt="Image 2" />
      </div>
    </div>
    {/* Image 3 */}
    <div className="col">
      <div className="card">
        <img src={img1} className="card-img-top gallery" alt="Image 3" />
      </div>
    </div>
    {/* Image 4 */}
    <div className="col">
      <div className="card">
        <img src={img4} className="card-img-top gallery" alt="Image 4" />
      </div>
    </div>
    {/* Image 5 */}
    <div className="col">
      <div className="card">
        <img src={img3} className="card-img-top gallery" alt="Image 5" />
      </div>
    </div>
    {/* Image 6 */}
    <div className="col">
      <div className="card">
        <img src={img2} className="card-img-top gallery" alt="Image 6" />
      </div>
    </div>
  </div>
</div>

       <div className="container my-5">
  <h2 className="text-center mb-4 text-dark" style={{fontFamily:'sans-serif'}}>Our Events Gallery</h2>
  {/* Carousel */}
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card">
              <img src='https://www.iskconbangalore.org/blog/wp-content/uploads/2021/09/79bb29cf-ac88-4d3c-835a-86202bcf0238.jpg' className="card-img-top" alt="Image 1" />
              <div className="card-body">
                <h5 className="card-title">Janamashtami</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={image2} className="card-img-top" alt="Image 2" />
              <div className="card-body">
                <h5 className="card-title">Bhajan Kirtan</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src='https://im.hunt.in/cg/mp/Chitrakoot/City-Guide/Ram.jpg' className="card-img-top" alt="Image 3" />
              <div className="card-body">
                <h5 className="card-title">Ramayan</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card">
              <img src={img5} className="card-img-top" alt="Image 4" />
              <div className="card-body">
                <h5 className="card-title">Deity Worship</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src='https://content.jdmagicbox.com/comp/chitrakoot-up/f6/9999p5198.5198.230331125208.d8f6/catalogue/iskcon-city-centre-karwi-chitrakoot-chitrakoot-up-ngos-7jwdx8q038.jpg?clr=' className="card-img-top" alt="Image 5" />
              <div className="card-body">
                <h5 className="card-title">Meetings</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={img2} className="card-img-top" alt="Image 6" />
              <div className="card-body">
                <h5 className="card-title">Murti Sthapana</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add more carousel items if necessary */}
    </div>
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


        </div>
  );
}
export default Gallery;