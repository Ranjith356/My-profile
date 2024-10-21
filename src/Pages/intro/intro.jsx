/* eslint-disable react/jsx-no-target-blank */
import "./intro.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import boy from "../img/pi7_passport_photo.jpeg";
import Github from "../img/github.png";
import LinkedIn from "../img/linkedin.png";
import Instagram from "../img/instagram.png";

export default function Intro() {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Ranjith</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/Ranjith356" target="_blank">
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/ranjith-selvaraj-66728a200/"
            target="_blank"
          >
            <img src={LinkedIn} alt="" />
          </a>
          <a
            href="https://www.instagram.com/meta_ranjith356/?next=%2F"
            target="_blank"
          >
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={boy} alt="" />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <div className="web-dev">
            👑
            <span>Web</span>
            <span>Developer</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
