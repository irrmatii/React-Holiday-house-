import './App.css';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import Gallery from "./Components/Gallery";
import Prices from "./Components/Prices";

function App() {

  return (
    <div>
        <Navbar/>
        <Hero/>
        <AboutUs/>
        <Gallery/>
        <Prices/>
    </div>
  );
}

export default App;
