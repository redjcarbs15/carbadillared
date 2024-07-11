import "./Home.css";
import Navbar from "./Navbar";

import myImage from "./img/redj01-remove.png"

const Home = () => {
  return (
    <>
      <Navbar />



    <div className="wrapper">
      <div className="overlay">
        <div className="container1">

    <div id="home-info" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>

        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 tin">
              <h2 className="display-3 text-center text-dark pt-5 mb-5">
                Hi !!! <br/><br/> I'am Redjane F. Carbadilla. 
              </h2>
              <h4 className=" text-dark text-center mt-5"> A Business owner of BRIDAL  RENTAL GOWN provide a service in which lower budget brides could rent their dream gown </h4>
              <center>
              <a href="Portfolio" className="btn btn-brand shadow mt-5">
                Explore More
              </a>
              </center>
            </div>
            
            <div className="col-lg-6">
                <img src={myImage} />
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

export default Home;