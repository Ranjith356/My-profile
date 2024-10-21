import "./services.css";
import Card from "../Cart/Cart";
import HeartEmoji from "../img/download (1).jpg";
import UiUX from "../img/download.jpg";
import developer from "../img/images (2).jpg";
import { motion } from "framer-motion";
import Resume from "./experienceResume.pdf";
// import resume from "./"

const Services = () => {
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Hi! I’m a self learned and meticulous Used Interface(UI) <br />
          and User Experience (UX) Developer.
          <br />
          Possesses strong analytical and User-Centered design skills <br /> to
          create holistic solutions that are functional and research driven
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={developer}
            heading={"Developer"}
            detail={
              "Html, Css, JavaScript, React js, Redux Toolkit, Ant design, Tailwind Ui, Github"
            }
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={UiUX}
            heading={"UI/UX"}
            detail={
              "Creative UI/UX Designer with a passion for crafting visually appealing and user-friendly digital experiences"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
