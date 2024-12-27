import './App.css';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import Gallery from "./Components/Gallery";
import Prices from "./Components/Prices";
import Reservation from "./Components/Reservation";
import Footer from "./Components/Footer";

function App() {

  return (
    <div>
        <Navbar/>
        <Hero/>
        <AboutUs/>
        <Gallery/>
        <Prices/>
        <Reservation/>
        <Footer/>
    </div>
  );
}

export default App;
