import React,{ useState } from 'react';
import TextBox from '../../Comman/Feilds/TextBox';
import Button from '../../Comman/Feilds/Button';
import {useHistory} from "react-router-dom";
import TextArea from '../../Comman/Feilds/TaxtArea';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ContactFunction} from "../../../Redux/Action/contact";
 

const ContactFrom = ({ContactFunction}) => {

    const history = useHistory();
    const [State, SetState] = useState({
        name:"",
        email:"",
        mobile:"",
        message:""
    })


const OnSubmit = (e) => {
    e.preventDefault();
    const contactData = {
        name: State.name,
        email:State.email,
        mobile:State.mobile,
        message:State.message
    }
    // console.log(contactData, history)
    ContactFunction(contactData, history);
}
 

const OnChange = (e) =>{
    SetState({
        ...State,
        [e.target.name] :e.target.value
    })
}

    return (
        <div className="ContactFrom BGColor commanBlock">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto">
                        <div className="tableBook">
                            <h3 className="text-center">Need any info please contact us.</h3>
                            <hr />
                            <form onSubmit={OnSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <TextBox type="text" label="Name" name="name" onChange={OnChange}  value={State.name} />
                                    </div>
                                    <div className="col-lg-6">
                                        <TextBox type="text" label="Email id." name="email" onChange={OnChange} value={State.email} />
                                    </div>
                                    <div className="col-lg-12">
                                        <TextBox type="text" label="Mobile No." name="mobile" onChange={OnChange} value={State.mobile} />
                                    </div>
                                    <div className="col-lg-12">
                                        <TextArea label="Message" onChange={OnChange} name="message" value={State.message} />
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="BtnSubmit">
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

ContactFrom.propTypes = {
    ContactFunction:PropTypes.func.isRequired
}

const mapDispatchToProps = {
    ContactFunction
}

export default connect(null,mapDispatchToProps)(ContactFrom);
