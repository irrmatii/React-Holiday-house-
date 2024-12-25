import React, {useState} from 'react';
import './Gallery.css'
import heaven from './assets/img.png'
import img1 from './assets/heaven1.webp'
import img2 from './assets/heaven2.webp'
import img3 from './assets/heaven3.webp'
import img4 from './assets/heaven4.webp'
import img5 from './assets/heaven5.jpeg'
import forest from './assets/Designer.jpeg'
import forest1 from './assets/Designer (1).jpeg'
import forest2 from './assets/Designer (2).jpeg'
import forest3 from './assets/Designer (3).jpeg'
import forest4 from './assets/Designer (4).jpeg'
import forest5 from './assets/Designer (5).jpeg'
import forest6 from './assets/Designer (6).jpeg'
import forest7 from './assets/Designer (7).jpeg'
import forest8 from './assets/Designer (8).jpeg'
import forest9 from './assets/Designer (9).jpeg'
import pine from './assets/pine.jpeg'
import pine2 from './assets/Pine2.jpeg'
import pine3 from './assets/Pine3.jpeg'
import pine4 from './assets/Pine4.jpeg'
import pine5 from './assets/Pine5.jpeg'
import pine6 from './assets/pine6.jpeg'
import pine7 from './assets/pine7.png'


const Gallery = () => {

    const [display, setDisplay] = useState("section1")

    function showSection (value){
        setDisplay(value)
    }

    const [imageMenu, setImageMenu] = useState(false);

    function toggleMenu(){
        imageMenu ? setImageMenu(false) : setImageMenu(true);
        console.log("clicked");
    }


    return (
        <div className="gallery container" id="Gallery">
            <div className="caption borders_dark">
                <h1>GALLERY</h1>
            </div>
            <div className="image-menu">
                <svg onClick={toggleMenu} className="image-svg" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                    <g fill="none" stroke="#85693e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path d="M15 8h.01M12.5 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6.5"/>
                        <path d="m3 16l5-5c.928-.893 2.072-.893 3 0l4 4"/>
                        <path d="m14 14l1-1c.653-.629 1.413-.815 2.13-.559M19 16v6m3-3l-3 3l-3-3"/>
                    </g>
                </svg>
                <div className={`select ${imageMenu ? '': 'hide-image-menu'}`}>
                    <button onClick={() => showSection("section2")} className="section_btn">"Woodland Haven"</button>
                    <button onClick={() => showSection("section3")} className="section_btn">"Forest Nest"</button>
                    <button onClick={() => showSection("section4")} className="section_btn">"Whispering Pines"</button>
                    <button onClick={() => showSection("section1")} className="section_btn">All images</button>
                </div>
            </div>
            <div className={`photos ${display === "section1" ? "visible" : "hidden"}`}>
                <img
                    src={heaven} alt=""
                    className="img "/>
                <img src={img1} alt=""
                     className="img"/>
                <img src={img2} alt=""
                     className="img"/>
                <img src={img3} alt=""
                     className="img"/>
                <img src={img4} alt=""
                     className="img"/>
                <img src={img5} alt=""
                     className="img"/>
                <img
                    src={forest} alt=""
                    className="img"/>
                <img src={forest1} alt=""
                     className="img"/>
                <img src={forest2} alt=""
                     className="img"/>
                <img src={forest6} alt=""
                     className="img"/>
                <img src={forest4} alt=""
                     className="img"/>
                <img src={forest7} alt=""
                     className="img"/>
                <img src={forest3} alt=""
                     className="img"/>
                <img src={forest8} alt=""
                     className="img"/>
                <img src={forest9} alt=""
                     className="img"/>
                <img src={forest5} alt=""
                     className="img"/>
                <img
                    src={pine} alt=""
                    className="img"/>
                <img src={pine6} alt=""
                     className="img"/>
                <img src={pine4} alt=""
                     className="img"/>
                <img src={pine2} alt=""
                     className="img"/>
                <img src={pine3} alt=""
                     className="img"/>
                <img src={pine7} alt=""
                     className="img"/>
                <img src={pine5} alt=""
                     className="img"/>
            </div>

            <div className={`photos ${display === "section2" ? "visible" : "hidden"}`}>
                <img
                    src={heaven}
                    alt=""
                    className="img main"/>
                <img src={img1} alt=""
                     className="img"/>
                <img src={img2} alt=""
                     className="img"/>
                <img src={img3} alt=""
                     className="img"/>
                <img src={img4} alt=""
                     className="img"/>
                <img src={img5} alt=""
                     className="img"/>
            </div>

            <div className={`photos ${display === "section3" ? "visible" : "hidden"}`}>
                <img
                    src={forest} alt=""
                    className="img main_forest"/>
                <img src={forest1} alt=""
                     className="img"/>
                <img src={forest2} alt=""
                     className="img"/>
                <img src={forest6} alt=""
                     className="img"/>
                <img src={forest4} alt=""
                     className="img"/>
                <img src={forest7} alt=""
                     className="img"/>
                <img src={forest3} alt=""
                     className="img"/>
                <img src={forest8} alt=""
                     className="img kitchen"/>
                <img src={forest9} alt=""
                     className="img rest_area"/>
                <img src={forest5} alt=""
                     className="img"/>
            </div>

            <div className={`photos ${display === "section4" ? "visible" : "hidden"}`}>
                <img
                    src={pine} alt=""
                    className="img main"/>
                <img src={pine6} alt=""
                     className="img"/>
                <img src={pine4} alt=""
                     className="img"/>
                <img src={pine2} alt=""
                     className="img bedroom"/>
                <img src={pine3} alt=""
                     className="img end"/>
                <img src={pine7} alt=""
                     className="img"/>
                <img src={pine5} alt=""
                     className="img"/>
            </div>
        </div>
    )
}

export default Gallery;
