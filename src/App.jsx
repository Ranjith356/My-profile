import Contact from "./Pages/Contect/contect";
import Footer from "./Pages/Footer/footer";
import Navigation from "./Pages/Navigation/nav";
import Portfolio from "./Pages/Protfolio/protfolio";
import Services from "./Pages/Services/services";
import Intro from "./Pages/intro/intro";
import "./index.css";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Intro />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
