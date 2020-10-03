import React from 'react';
import TextBox from '../../Comman/Feilds/TextBox';
import Button from '../../Comman/Feilds/Button';
import TextArea from '../../Comman/Feilds/TaxtArea';

const ContactFrom = () => {
    return (
        <div className="ContactFrom BGColor commanBlock">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto">
                        <div className="tableBook">
                            <h3 className="text-center">Book Your Table For Evening Party</h3>
                            <hr />
                            <form>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <TextBox type="text" label="Name" />
                                    </div>
                                    <div className="col-lg-6">
                                        <TextBox type="text" label="Email id." />
                                    </div>
                                    <div className="col-lg-12">
                                        <TextBox type="text" label="Mobile No." />
                                    </div>
                                    <div className="col-lg-12">
                                        <TextArea label="Message" />
                                    </div>

                                    <div className="col-lg-12">
                                        <div class="BtnSubmit">
                                            <Button type="submit" value="Submit" />
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    );
};

export default ContactFrom;
