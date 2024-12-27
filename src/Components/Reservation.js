import React from 'react';
import './Reservation.css'


const Reservation = () =>{
    return (
        <div className="reservation" id="Reservation">
            <div className="container center_item">
                <div className="res_caption">
                    <h1>RESERVATION</h1>
                </div>
                <div className="res-form">
                    <div className="res-col j-between">
                        <div>
                            <h2>Send us a message
                                <svg className="mail" xmlns="http://www.w3.org/2000/svg" width="60" height="60"
                                     viewBox="0 0 20 20">
                                    <g fill="#85693e" fill-rule="evenodd" clip-rule="evenodd">
                                        <path
                                            d="M2.5 8a.5.5 0 0 1 .5.5V17h14V8.5a.5.5 0 0 1 1 0v9a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5"/>
                                        <path
                                            d="M3 5.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v4.67a.5.5 0 0 1-.223.416l-6.5 4.33a.5.5 0 0 1-.554 0l-6.5-4.33A.5.5 0 0 1 3 10.17zM4 6v3.902l6 3.997l6-3.997V6z"/>
                                        <path
                                            d="M9.723 2.084a.5.5 0 0 1 .554 0l4.5 3l-.554.832L10 3.101L5.777 5.916l-.554-.832zm7.131 5.062l1 1l-.708.708l-1-1zm-13 .708l-1 1l-.708-.708l1-1zM6.75 8A.25.25 0 0 1 7 7.75h6a.25.25 0 1 1 0 .5H7A.25.25 0 0 1 6.75 8m.5 2a.25.25 0 0 1 .25-.25h5a.25.25 0 1 1 0 .5h-5a.25.25 0 0 1-.25-.25"/>
                                    </g>
                                </svg>
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, commodi consectetur
                                consequatur corporis, delectus dicta eligendi eum incidunt ipsa mollitia nisi quia
                                quidem
                                sed voluptates.</p>
                        </div>
                        <div className="contact_info">
                            <ul>
                                <li>
                                    <svg className="contact" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                         viewBox="0 0 26 26">
                                        <path fill="#85693e"
                                              d="M23 4H3C1.3 4 0 5.3 0 7v12c0 1.7 1.3 3 3 3h20c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3m.8 15.4L16 13.8l-3 2l-3.1-2l-7.7 5.6l6.3-6.5l-7.7-6L13 13.5L25.1 7l-7.6 6z"/>
                                    </svg>
                                    Contact@HouseTroha.com
                                </li>
                                <li>
                                    <svg className="contact" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                         viewBox="0 0 24 24">
                                        <path fill="#85693e"
                                              d="M7.616 22q-.691 0-1.153-.462T6 20.385V3.615q0-.69.463-1.152T7.616 2h8.769q.69 0 1.152.463T18 3.616v16.769q0 .69-.462 1.153T16.384 22zM12 20.038q.31 0 .54-.23t.23-.539t-.23-.54T12 18.5t-.54.23t-.23.54t.23.539t.54.23m-5-3.5h10V5.5H7z"/>
                                    </svg>
                                    +12 092 345 123
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="res-col">
                        <form>
                            <label>Your name</label>
                            <input type="text" name='name' placeholder='Enter your name' required/>
                            <label>Phone Number</label>
                            <input type="tel" name='phone' placeholder='Enter your phone number' required/>
                            <label>Write your message here</label>
                            <textarea name="message" id="" rows="6" placeholder='Enter your message'></textarea>
                            <button type='submit' className="btn">Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Reservation;





