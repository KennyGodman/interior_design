import React from "react";
import Header from "../../components/header/header";
import bgImage from "../../assets/img/project.jpg";


const Project = () => {
  return (
    <div>
      <Header bgImg = {bgImage}  headerText="Our Project" pathText="Project"/>
    </div>
  );
};

export default Project;
