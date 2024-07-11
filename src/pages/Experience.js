import "./Experience.css";
import Navbar from "./Navbar";
import tin06 from "./img/gown 01.jpg"
import tin07 from "./img/toxido 01.jpg"
import tin08 from "./img/groom01.jpg"
import tin09 from "./img/bridesmaid 01.jpg"
import tin10 from "./img/ballgown01.webp"
import tin11 from "./img/umbrella01.jpg"
import tin12 from "./img/offshoulder02.jpg"
import tin13 from "./img/longtail01.jpg"
import tin14 from "./img/jewelries01.jpg"
import tin15 from "./img/wedding bands01.webp"
import tin16 from "./img/bouquet02.jpg"
import tin17 from "./img/shoes01.jpg"




const Experience = () => {
  return (
    <>
      <Navbar />
      <div id="experience-info" className="bg-secondary bg-gradient">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Product Page
              </h1>
            </div>
          </div>
        </div>
      </div>

     <div className="exp">
      <div className="container">
        <hr/>
        <div className="row mb-5">
          <h3 className="text-center">Wedding Sets</h3>
          <hr/>
          <div className="col-lg-6 text-center">
            <img className="one" src={tin06} />
            <h4 > Bridal Gown </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={tin07} />
            <h4 > Toxido </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={tin08} />
            <h4> Groomsmen Suits </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={tin09} />
            <h4 > Mismatched Bridesmaid Dresses </h4>
          </div>
        </div>
        <hr />
        <div className="row mb-5">
          <h3 className="text-center"> GOWN DESIGN</h3>
          <hr/>
          <div className="col-lg-6">
            <img className="one" src={tin10} />
            <h4> Ball gown design </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={tin11} />
            <h4 > Umbrella cut gown design </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={tin12} />
            <h4 > Offshoulder gown design </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={tin13} />
            <h4> Longtail gown design </h4>
          </div>
        </div>
        <div className="row mb-5">
          <h3 className="text-center"> Jewelries/Bouquet/Shoes </h3>
          <hr/>
          <div className="col-lg-6">
            <img className="one" src={tin14} />
            <h4> Wedding Accesories </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={tin15} />
            <h4> Wedding Bands </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={tin16} />
            <h4 > Wedding Bouquet </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={tin17} />
            <h4> Wedding Shoes </h4>
          </div>
        </div>
      </div>
     </div>

           
    </>
  );
};

export default Experience;