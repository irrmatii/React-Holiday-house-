import React from 'react';
import './Prices.css'
import heaven from './assets/img for price.png'
import forest from './assets/Designer.jpeg'
import pine from './assets/pine.jpeg'

const Prices = () => {
    return (
        <div className="prices container" id="Prices">
            <div className="caption borders_light">
                <h1>PRICES</h1>
            </div>
            <div className="houses">
                <div className="sections">
                    <div className="images">
                        <img
                            src={heaven} alt=""
                            className="mainImg"/>
                        <div className="deal">Price per night: 200$</div>
                    </div>
                    <div className="house_info">
                        <div>
                            <h2>"Woodland Haven"</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus consectetur,
                                consequuntur delectus doloribus earum error, explicabo minima officia repellendus sint
                                sit
                                veritatis, voluptate voluptates voluptatibus.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aspernatur culpa debitis
                                distinctio doloribus earum expedita explicabo facere hic illo impedit, itaque labore
                                laboriosam laborum modi molestias mollitia nemo nisi obcaecati optio, praesentium
                                similique sint velit vitae? Accusantium aliquid esse, ex hic sapiente suscipit. At
                                cumque dignissimos eveniet id molestiae, nostrum quasi quo, rem rerum sed vitae
                                voluptate voluptatem!</p>
                        </div>
                        <div className="bottom-box">
                            <div className="persons">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16">
                                    <path fill="#704f1c"
                                          d="M7 14s-1 0-1-1s1-4 5-4s5 3 5 4s-1 1-1 1zm4-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"/>
                                </svg>
                                <p>1-4 persons</p>
                            </div>
                            <div className="btn_box">
                                <button className="reservation">Make a reservation</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sections">
                    <div className="images">
                        <img
                            src={forest} alt=""
                            className="mainImg"/>
                        <div className="deal">Price per night: 300$</div>
                    </div>
                    <div className="house_info">
                        <div>
                            <h2>"Forest Nest"</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis, hic impedit labore
                                minima numquam? Autem blanditiis, dolore illo iste iusto magnam modi mollitia, quam
                                soluta
                                ut voluptatibus?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid doloribus ea,
                                ex facilis illo ipsam mollitia obcaecati officiis omnis placeat quibusdam repellat
                                reprehenderit saepe vel veritatis vero, voluptate voluptatibus. Dicta dolores doloribus
                                earum error esse hic ipsam laudantium, neque nulla, officiis pariatur quis quisquam quos
                                soluta, sunt voluptas voluptatibus. Architecto, at esse in laborum quam quod saepe ut
                                velit!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet distinctio eaque eligendi
                                enim error esse, ex excepturi iste laborum nemo quas quia quos reiciendis repellat,
                                sapiente sed sint temporibus tenetur.</p>
                        </div>
                        <div className="bottom-box">
                            <div className="persons">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16">
                                    <path fill="#704f1c"
                                          d="M7 14s-1 0-1-1s1-4 5-4s5 3 5 4s-1 1-1 1zm4-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"/>
                                </svg>
                                <p>1-8 persons</p>
                            </div>
                            <div className="btn_box">
                                <button className="reservation">Make a reservation</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sections">
                    <div className="images">
                        <img
                            src={pine} alt=""
                            className="mainImg"/>
                        <div className="deal">Price per night: 250$</div>
                    </div>
                    <div className="house_info">
                        <div>
                            <h2>"Whispering Pines"</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam asperiores natus
                                obcaecati quae quas quod reiciendis sequi totam voluptate? A architecto, aut officiis
                                qui
                                quidem sed.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, blanditiis dicta
                                distinctio
                                dolor ea eos itaque laboriosam laborum magni modi nemo odio sit veniam voluptatem
                                voluptatibus. Adipisci aspernatur, commodi fugiat iusto, laudantium nisi non officia
                                ratione sapiente suscipit vel velit voluptatem voluptatum. Fuga iusto laboriosam, libero
                                necessitatibus quisquam quo tempora temporibus voluptate. Atque, tempora, veritatis.</p>
                        </div>
                        <div className="bottom-box">
                            <div className="persons">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16">
                                    <path fill="#704f1c"
                                          d="M7 14s-1 0-1-1s1-4 5-4s5 3 5 4s-1 1-1 1zm4-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"/>
                                </svg>
                                <p>1-4 persons</p>
                            </div>
                            <div className="btn_box">
                                <button className="reservation">Make a reservation</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}


export default Prices;