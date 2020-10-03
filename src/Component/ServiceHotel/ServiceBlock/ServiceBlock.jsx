import React from 'react';
import img4 from "../../../Image/4.jpg";

const ServiceBlock = () => {
    return (
        <div className="ServiceInfo commanBlock BGColor">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={ img4 } className="img-fluid" />
                    </div>
                    <div className="col-lg-6">
                        <h3>Excellent service</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose </p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBlock;
