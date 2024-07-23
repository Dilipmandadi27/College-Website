import React from "react";
import backbtn from "./../assets/back-icon.png";
import nextbtn from "./../assets/next-icon.png";
import user1 from "./../assets/user-1.png";
import user2 from "./../assets/user-2.png";
import user3 from "./../assets/user-3.png";
import user4 from "./../assets/user-4.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <img src={nextbtn} alt="" className="next-btn" />
      <img src={backbtn} alt="" className="back-btn" />
      <div className="slider">
        <ul>
            <li>
        <div className="slide-container">
          <div className="img-container">
            <img src={user1} alt="user1" />
            <div className="user_info">
              <h3>Tejal Nandi</h3>
              <span>Koparkhairne,India</span>
            </div>
          </div>

          <p>
            Choosing to pursue my degree at Edusity was one of the best
            decisions I've ever made. The supportive community, state-of-the-art
            facilities, and commitment to academic excellence have truly
            exceeded my expectations.
          </p>
        </div>
        </li>

        <li>
        <div className="slide-container">
          <div className="img-container">
            <img src={user2} alt="user2" />
            <div className="user_info">
              <h3>Dilipaa Mandadi</h3>
              <span>Koparkhairne,India</span>
            </div>
          </div>

          <p>
            Choosing to pursue my degree at Edusity was one of the best
            decisions I've ever made. The supportive community, state-of-the-art
            facilities, and commitment to academic excellence have truly
            exceeded my expectations.
          </p>
        </div>
        </li>

       <li>
        <div className="slide-container">
          <div className="img-container">
            <img src={user3} alt="user3" />
            <div className="user_info">
              <h3>Ram Enjam</h3>
              <span>Koparkhairne,India</span>
            </div>
          </div>

          <p>
            Choosing to pursue my degree at Edusity was one of the best
            decisions I've ever made. The supportive community, state-of-the-art
            facilities, and commitment to academic excellence have truly
            exceeded my expectations.
          </p>
        </div>
        </li>

      <li>
        <div className="slide-container">
          <div className="img-container">
            <img src={user4} alt="user4" />
            <div className="user_info">
              <h3>Dhanraj Avala</h3>
              <span>Turbhe,India</span>
            </div>
          </div>

          <p>
            Choosing to pursue my degree at Edusity was one of the best
            decisions I've ever made. The supportive community, state-of-the-art
            facilities, and commitment to academic excellence have truly
            exceeded my expectations.
          </p>
        </div>
        </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
