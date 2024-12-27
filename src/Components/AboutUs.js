import React from 'react';
import './AboutUs.css'
import image1 from './assets/Designer__1_-removebg-preview.png'
import image2 from './assets/Designer__8_-removebg-preview.png'
import image3 from './assets/Designer__11_-removebg-preview.png'
import image4 from './assets/about_small.png'

const AboutUs = () => {
    return (
        <div className="about container" id="AboutUs">
            <div className="caption borders_dark">
                <h1>ABOUT US</h1>
            </div>
            <div className="info">
                <div className="about-info">
                    <div className="about-text">
                        <h2>Who we are?</h2>
                        <p>We are passionate nature lovers offering unique forest retreats for those seeking a break
                            from the everyday.
                        </p>
                        <p>Our cozy, handpicked houses are nestled in serene woodland settings, providing
                            the perfect blend of comfort and adventure. Whether you’re looking to unwind, explore, or
                            reconnect with nature, we’re here to make your escape unforgettable.
                        </p>
                        <p>Experience the magic of the forest—your sanctuary awaits!</p>
                    </div>
                    <div className="empty margin-l">
                        <img className="circle_img" src={image1} alt=""/>
                    </div>
                    <div className="hide">
                        <img className="circle_img" src={image4} alt=""/>
                    </div>
                </div>
                <div className="about-info">
                    <div className="middle-image">
                        <img className="circle_img" src={image3} alt=""/>
                    </div>
                    <div className="about-text">
                        <div className="provide_text">
                            <h2>What we provide?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci corporis dignissimos
                                dolore enim laboriosam molestiae natus nisi nobis quidem quo, sint vero.</p>
                        </div>
                        <div className="house_info">
                            <div>
                                <h3>"Woodland Haven"</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad eos error
                                    possimus sunt ut voluptas. Alias facilis impedit, ipsa non obcaecati perspiciatis
                                    quibusdam suscipit.</p>
                            </div>
                            <div>
                                <h3>"Forest Nest"</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur cumque
                                    dicta dolorem explicabo natus nemo nihil quam repellendus similique? Blanditiis
                                    eligendi mollitia omnis provident, quam voluptatem.</p>
                            </div>
                            <div>
                                <h3>"Whispering Pines"</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dicta dolore
                                    ducimus
                                    ea eum expedita incidunt, quis voluptas? Aperiam dolorem eligendi repellendus
                                    repudiandae vitae. Autem?</p>
                            </div>
                        </div>
                    </div>
                    <div className="hide">
                        <img className="circle_img" src={image4} alt=""/>
                    </div>
                </div>
                <div className="about-info">
                    <div className="about-text">
                    <h2>Where to find us?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda consequuntur
                            eaque nam praesentium, qui rem saepe? Necessitatibus quos, reprehenderit?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum nam sunt. Deleniti
                            doloribus nemo tenetur. Alias consequatur delectus dolorum eius itaque iure iusto
                            laboriosam, laudantium libero magni molestiae natus, nesciunt, officiis quos repellat
                            reprehenderit!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, natus.</p>
                    </div>
                    <div className="empty margin-l">
                        <img className="circle_img" src={image2} alt=""/>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default AboutUs;


