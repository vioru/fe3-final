import React from "react";
import { footerImages } from "../utils/urls";
// import styles from "../Styles/footerStyle.modules.css"
// import "../Styles/footerStyle.modules.css";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <p>Powered by</p>
      <div className="section">
        <img className="dh-img" src={footerImages.dh} alt="DH-logo" />
        <div className="socialMedia">
          {Object.entries(footerImages).map(([key, value], index) => {
            if (key !== "dh") {
              return <a 
              target="_blank" 
              href={`https://www.${key}.com`}
              rel="noopener noreferrer"> 
              <img key={index} src={value} alt={`logo de ${key}`} />
              </a>;
            }
            return null;
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
