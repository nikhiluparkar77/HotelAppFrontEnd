import React from 'react';
import { Link } from "react-router-dom";
import img4 from "../../../Image/4.jpg";
import PartsOfServices from './PartsOfServices';
const ServicesPart = () => {
    return (
        <div className="Service commanBlock">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3>Excellent service</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                </div>
                <PartsOfServices />
            </div>
        </div>
    );
};

export default ServicesPart;
