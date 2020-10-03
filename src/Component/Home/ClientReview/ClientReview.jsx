import React from 'react';
import user from "../../../Image/user.png";
import img1 from "../../../Image/1.jpg";
import img2 from "../../../Image/2.jpg";
import img3 from "../../../Image/3.jpg";

const ClientReview = () => {
    return (
        <div className="Review commanBlock">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3>Client Review</h3>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div id="Review" class="carousel slide" data-ride="carousel">
                            <ul class="carousel-indicators">
                                <li data-target="#Review" data-slide-to="0" class="active"> <img src={ user } alt="user" /></li>
                                <li data-target="#Review" data-slide-to="1"><img src={ user } alt="user" /></li>
                                <li data-target="#Review" data-slide-to="2"> <img src={ user } alt="user" /></li>
                            </ul>
                            <div class="carousel-inner text-center">
                                <div class="carousel-item active">
                                    <h4>"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old"</h4>
                                    <p>HR Manager</p>
                                </div>
                                <div class="carousel-item">
                                    <h4>"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old"</h4>
                                    <p>CEO Manager</p>
                                </div>
                                <div class="carousel-item">
                                    <h4>"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old"</h4>
                                    <p>HHD Manager</p>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#Review" data-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </a>
                            <a class="carousel-control-next" href="#Review" data-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;
