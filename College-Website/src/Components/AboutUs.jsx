import React from "react";
import aboutimg from "./../assets/about.png";
import Title from "./Title/Title";

const AboutUs = () => {
  return (
    <section>

        <div className="video-img">
          <img src={aboutimg} alt="aboutimg" />
        </div>
        <div className="about-us_content">
          <h3>about university</h3>
         <h2>Nurturing Tomorrow's <br />
            Leaders Today</h2>
        
          <p>
            Embark on a transformative educational journey with our university's
            comprehensive education programs. Our cutting-edge curriculum is
            designed to empower students with the knowledge, skills, and
            experiences needed to excel in the dynamic field of education.</p>
            <p> With
            a focus on innovation, hands-on learning, and personalized
            mentorship, our programs prepare aspiring educators to make a
            meaningful impact in classrooms, schools, and communities.</p>
            
            <p> Whether
            you aspire to become a teacher, administrator, counselor, or
            educational leader, our diverse range of programs offers the perfect
            pathway to achieve your goals and unlock your full potential in
            shaping the future of education.
          </p>
        </div>

    </section>
  );
};

export default AboutUs;
