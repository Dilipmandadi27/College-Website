import React from "react";
import msg_icon from "./../assets/msg-icon.png";
import mail_icon from "./../assets/mail-icon.png";
import location_icon from "./../assets/location-icon.png";
import phone_icon from "./../assets/phone-icon.png";
import btnarrow from "../assets/white-arrow.png"
import Notify from "./Notify";

const ContactUs = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "db7525fb-1140-400b-a8d2-c5b705c8f62b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
  
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className="Contact-us">
      <div className="contact-us-content">
        <h2>
          Send us a message <img src={msg_icon} alt="" />
        </h2>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <p><img src={mail_icon} alt="" /> Contact@Dilipaa.dev</p>
        <p><img src={phone_icon} alt="" />  +91 9082389772</p>
        <p><img src={location_icon} alt="" />  Sec-20,Vashi,Navi-Mumbai,India</p>
      </div>



    
        <form onSubmit={onSubmit} className="contact-us-form">
        <label>Your Name</label>
        <input type="text" placeholder="Enter your name" required/>
        <label>Phone Number</label>
        <input type="tel" placeholder="Enter your mobile number"  required/>
        <label>Your Email</label>
        <input type="email" placeholder="Enter your email id" required/>
        <label>Write your message here</label>
        <textarea cols={30} rows={8} placeholder="Enter your message"></textarea>
        <button className="btnn">Submit now <img src={btnarrow}alt="btnarrow" /></button>

        <Notify result={result}/>
      </form>
      </div>
  );
};

export default ContactUs;
