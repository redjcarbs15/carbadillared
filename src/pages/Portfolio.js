import "./Portfolio.css";
import Navbar from "./Navbar";
import calcuImage from "./img/calcu.png"
import tin03 from "./img/Website03.png"
import tin01 from "./img/Website01.png"
import tin02 from "./img/Website02.png"
const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div id="portfolio-info" className="bg-none">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Portfolio 
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio">
        <div className="container">
          <div className="row mt-5">
            <h3>Projects</h3>
            <hr />
          <div className="col">
          <img className="one" src={calcuImage} />
          <h4 className="mt-5">Calculator Project</h4>
          </div>
          <div className="col">
          <img className="two" src={tin01} />
          <h4 className="mt-5">PSIT 01 Project</h4>
          </div>
          <div className="col">
          <img className="three" src={tin02} />
          <h4 className="mt-5">CCIT06 Website Project</h4>
          </div>
          <div className="col">
          <img className="four" src={tin03} />
          <h4 className="mt-5">PSIT 01 Website Project 2</h4>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
