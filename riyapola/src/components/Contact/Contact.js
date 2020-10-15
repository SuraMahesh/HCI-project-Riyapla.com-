import React from 'react';
import "./contact.styles.scss";

function Contact() {
    return (
        <div className="container">
        <div className="row" gutters-sm>
            <div className="col-md-14">
                <div className="card">
                    <div className="card-body tab-content">
                        <div className="tab-pane active" id="profile">
                            <h4 className="publish">PUBLISH</h4>
                            <hr />
                            <form>
                                <label htmlFor="phone">Phone Number</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="Select a category....." />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div role="separator" className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                </div>
                                <p></p>

                                <div className="row">
                                    <label htmlFor="phone">Title</label>
                                    <div className="col">
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>


                                <p></p>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="phone"
                                        placeholder="Enter your phone number"
                                    ></input>
                                </div>
                                <p></p>
                                <div className="form-group">
                                    <label htmlFor="phone">Cell Phone Number</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="phone"
                                        placeholder="Enter your cell phone number"
                                    ></input>
                                </div>
                                <p></p>
                                <div className="form-group">
                                    <label htmlFor="fullName">Country</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fullName"
                                        aria-describedby="fullNameHelp"
                                        placeholder="Enter your country"
                                    ></input>
                                    <small id="fullNameHelp" className="form-text text-muted">
                                    </small>
                                </div>
                                <p></p>
                                <div className="form-group">
                                    <label htmlFor="fullName">Region</label>
                                    <p></p>
                                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                                        Select a region....
                                     </button>
                                    <div className="dropdown-menu dropdown-menu-lg-right">
                                        <button className="dropdown-item" type="button">Action</button>
                                        <button className="dropdown-item" type="button">Another action</button>
                                        <button className="dropdown-item" type="button">Something else here</button>
                                    </div>
                                </div>
                                <p></p>
                                <div className="form-group">
                                    <label htmlFor="fullName">City</label>
                                    <p></p>
                                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                                        Select a City....
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-lg-right">
                                        <button className="dropdown-item" type="button">Action</button>
                                        <button className="dropdown-item" type="button">Another action</button>
                                        <button className="dropdown-item" type="button">Something else here</button>
                                    </div>
                                </div>
                                <p></p>
                                <div className="form-group">
                                    <label htmlFor="bio">Addres</label>
                                    <input
                                        className="form-control autosize"
                                        id="bio"
                                        placeholder="Enter your currnt address"
                                        style={{}}
                                    ></input>
                                </div>
                                <p></p>
                                <div className="form-group">
                                    <label htmlFor="url">Website</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="url"
                                        placeholder="Enter your website address"
                                    ></input>
                                </div>
                                <p></p>
                                <div className="form-group">
                                    <label htmlFor="location">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="location"
                                        placeholder="Enter your location"
                                    ></textarea>
                                </div>
                                <div className="form-group small text-muted">
                                </div>
                                <p></p>
                                <button type="button" className="btn btn-primary">
                                    Update Profile
                                </button>
                                <button type="reset" className="btn btn-light">
                                    Reset Changes
                                 </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Contact
