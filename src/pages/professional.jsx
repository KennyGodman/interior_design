import React from "react";
import Header from "../components/header/header";
import photo from "../assets/img/Photo.jpg";
import photob from "../assets/img/Photob.jpg";
import "../styles/prof.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs"; 
import { CgWebsite } from "react-icons/cg"; 

const Professional = () => {
  return (
    <div className="prof">
      <Header bgImg={photo} headerText="Professional Guide" pathText="Professional"/>
      <div className="prof_bio">
        <div className="prof_bio_info">
          <div className="img">
            <img src={photob} />
          </div>
          <div className="content">
            <h2>John Smith</h2>
            <h4>Designer</h4>
            <h4>
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrpobelie frandomised words which don't
              look even slightly believable.
            </h4>
            <h4> <AiOutlineMail /> info@yourdomain.com</h4>
            <h4> <BsTelephone /> +1 (378) 400-1234</h4>
            <h4><CgWebsite /> www.yourdomain.com</h4>
            
          </div>
        </div>
        <div>
          <h2>details</h2>
        </div>
      </div>
    </div>
  );
};

export default Professional;
