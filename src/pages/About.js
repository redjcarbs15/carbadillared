import "./About.css";
import Navbar from "./Navbar";
import myImage from "./img/redjane remove.png"

const About = () => {
  return (
    <>
      <Navbar />
      <div id="about-info" className="">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                ABOUT PAGE 
              </h1>
            </div>
          </div>
        </div>
      </div>
      <body>
  <div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
  </div>
</body>
      <div id="about">
        <div className="container">
          <div className="col">
            <div className="card shadow mt-5 p-5">
              <div className="row">
              <div className="col-lg-4">
              <center><img src={myImage} /></center>
              </div>
              <div className="col-lg-8">
                <div className="card shadow mb-3 p-3">
                <h4 className="text-secondary">About Me</h4>
              <p> Hi ! I'am  Redjane F. Carbadilla . 23 years old of age a Business Owner of BRIDAL RENTAL GOWN. Located @ Purok Apitong Brgy. Tabugon Kabankalan City Negros Occidental .   </p>
              <p> </p>
                </div>
                <div className="card shadow p-3">
                <h4 className="text-secondary">Plan your Wedding with Redjane Gowns and experience greatness on your special day.</h4>
              <p> Standard Package <br /> COMPLETE ENTOURAGE<br /> for 15 thousands only <br /> - Complete Set Entourage for rent <br /> - Bride/Groom outfit <br /> - Best man / Maid <br /> - 4 Groomsmen / Bridesmaids <br /> - 4 flower girls <br /> - 3 Bearers <br /> - Cushion <br /> - Basket <br /> - Veil and Cord </p>
              <p> </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
