import React from "react";
// import image8 from "../assets/img/icon7 (1).png

// import image13 from "../assets/img/temp2.png";
// import image14 from "../assets/img/temp3.png";

import "../assets/css/index.css";
import { pc1, pc2, pc3, pc4, pc5, pc6, pc7, java } from "./mls_constants";
import DataScience from '../assets/img/dataScience.jpg';
import WebDev from '../assets/img/webDev.webp';
import SoftTest from '../assets/img/SoftTest.jpeg';
import DigitalMarketing from '../assets/img/DigitalMarketing.jpg';
import DSA from '../assets/img/DSA.jpeg';
import DevOps from '../assets/img/DevOps.jpg';

import Stem from '../assets/img/stem.png';
import UIUX from '../assets/img/uiux.jpg';
import Blockchain from '../assets/img/blockchain.jpg';

function render(name, poster, link) {
  const className = "course " + name;
  const image = poster;
  return (
    <div class={className}>
      <img src={image} alt={className} href={link}></img>
      {/* <a href={link}>{name}</a> */}
    </div>
  );
}
function Courses() {
  return (
    <div class="courses">
      <div class="slide slide-wrapper">
        {render("Data Science", DataScience)}
        {render("Web Dev", WebDev)}
        {render("Software Test", SoftTest)}
        {render("Digital Marketing", DigitalMarketing)}
        {render("DSA", DSA)}
        {render("Devops", DevOps)}
        {render("Stem", Stem)}
        {render("UIUX", UIUX)}
        {render("Blockchain", Blockchain)}
      </div>
    </div>
  );
}
export default Courses;
