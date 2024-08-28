import Image from "../../assets/work1.jpg";
import Image1 from "../../assets/google.png";
import Image2 from "../../assets/slack.png";
import Image3 from "../../assets/toko.png";
import Image4 from "../../assets/amazon.png";
import Image5 from "../../assets/avast.png";
import "./body.css";
import { Link } from "react-router-dom";

function Body1() {
  return (
    <>
      <section className="perfact">
        <div className="div">
          <h1>Best Way To Find A Perfect Job</h1>
          <p className="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            nostrum fugit veritatis.
          </p>
          <div>
            <div className="div1">
              <button className="btn2">Remote</button>
              <button className="btn3">Office</button>
            </div>
            <Link to="/signup">
              <button className="start">Get Started</button>
            </Link>
          </div>
        </div>
        <img src={Image} alt="" className="work" />
      </section>
      <section className="team">
        <div>
          <h2 className="trust">
            20M+ users trust Job<span>Seeker</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            consequatur iste, tempora eius dicta porro soluta moles praesentium.
          </p>
          <div className="company">
            <img src={Image1} alt="" className="com_pho" />
            <img src={Image2} alt="" className="com_pho" />
            <img src={Image3} alt="" className="com_pho" />
            <img src={Image4} alt="" className="com_pho" />
            <img src={Image5} alt="" className="com_pho1" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Body1;
