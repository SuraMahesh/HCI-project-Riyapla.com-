import React from 'react';
import "./Contact.css";
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
    console.log("Captcha value:", value)
}

function Contact() {
    return (
        <div className="publish">
            <div className="publish__card">
                <div className='publish__container'>
                    <h1>Send E-mail</h1>

                    <form>

                        <div className="details">
                            <h6 className="topic">Your name(optional)</h6>
                            <div className="form-group">
                                <input type="text" className="form-control" id="inputCity"></input>
                            </div>
                        </div>
                        <p />
                        <div className="details">
                            <h6 className="topic">Your email address</h6>
                            <div className="form-group">
                                <input type="text" className="form-control" id="inputCity"></input>
                            </div>
                        </div>

                        <p />
                        <div className="details">
                            <h6 className="topic">Message</h6>
                            <div className="form-group">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        <p></p>

                        <ReCAPTCHA sitekey="YOUR_CLIENT_SITE_KEY" onChange={onChange} />
                        <p></p>

                        <div className="details1">

                        <button type="button" class="btn btn-success btn-lg">Send</button>
                        <button type="button" class="btn btn-secondary btn-lg">Cancel</button>
                        </div>
                    </form>



                </div>
            </div>
        </div>
    )
}

export default Contact
