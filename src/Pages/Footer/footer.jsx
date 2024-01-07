/* eslint-disable react/jsx-no-target-blank */
import "./footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-LinkedIn";
import Wave from "../img/wave.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>ranjithsurya02@gmail.com</span>
        <div className="f-icons">
          <a
            href="https://www.instagram.com/meta_ranjith356/?next=%2F"
            target="_blank"
          >
            <Insta color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.linkedin.com/in/ranjith-selvaraj-66728a200/"
            target="_blank "
          >
            <LinkedIn color="white" size={"3rem"} />
          </a>

          <a href="https://github.com/Ranjith356" target="_blank">
            {" "}
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
