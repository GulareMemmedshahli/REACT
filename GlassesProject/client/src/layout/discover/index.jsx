import React from "react";
import "./index.scss";
const Discover = () => {
  return (
    <div>
      <div className="word">
        <h1>DISCOVER MORE</h1>
        <p>Luxe, lightweight, and made with the perfect blend of cashmere</p>
      </div>
      <div className="cards">
        <div className="card1">
          <img
            src="https://blueskytechmage.com/next_minimog/media/wysiwyg/h_glasses_box_01-480x480.jpg"
            alt=""
          />
          <h4>GUYS BESTSELLERS</h4>
        </div>

        <div className="card2">
          <img
            src="https://blueskytechmage.com/next_minimog/media/wysiwyg/h_glasses_box_02-480x480.jpg"
            alt=""
          />
          <h4>GALS BESTSLLERS</h4>
        </div>

        <div>
          <img
            src="https://blueskytechmage.com/next_minimog/media/wysiwyg/h_glasses_box_03-480x480.jpg"
            alt=""
          />
          <h4>QUALITY SHADES</h4>
        </div>
      </div>

      <div className="promise">
        <h1>WE PROMISE</h1>
        <div className="kartlar">
          <div className="return">
            <img
              src="https://blueskytechmage.com/next_minimog/media/wysiwyg/h_glasses_box_04.png"
              alt=""
            />
            <h3>100 DAYS RETURN</h3>
            <span>No question asked</span>
          </div>
          <div className="lifetime">
            <img
              src="https://blueskytechmage.com/next_minimog/media/wysiwyg/h_glasses_box_05.png"
              alt=""
            />
            <h3>LIFETIME WARRANTY</h3>
            <span>For original owners</span>
          </div>

          <div className="custom">
            <img
              src="https://blueskytechmage.com/next_minimog/media/wysiwyg/h_glasses_box_06.png"
              alt=""
            />
            <h3>CUSTOM SERVICES</h3>
            <p>Our priority</p>
          </div>
        </div>
        <div className="needhelp">
          <h5>NEED HELP?</h5>
          <p>Services Hours: Monday to Sunday 9a.m to 8p.m</p>
          <p>Email: minimog@domain.com</p>
          <p>Tel: +391 (0)35 2568</p>
        </div>
      </div>
    </div>
  );
};

export default Discover;
