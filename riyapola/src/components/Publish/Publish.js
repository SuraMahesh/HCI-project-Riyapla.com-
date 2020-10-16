import React from 'react'
import "./Publish.css";

function Publish() {
    return (
        <div className="publish">
            <div className="publish__card">
                <div className='publish__container'>
                    <h1>General Information</h1>

                    <form>
                        <div className="details">
                            <h6 className="topic">Category</h6>
                            <select class="form-control">
                                <option>select a category</option>
                                <option>Vehicles</option>
                                <option>Electronics</option>
                                <option>Property</option>
                                <option>Jobs</option>
                                <option>Education</option>
                                <option>Home and Garden</option>
                            </select>
                        </div>
                        <p />
                        <div className="details1">
                            <div className="details">
                                <h6 className="topic">Title</h6>
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" id="inputCity"></input>
                                </div>

                            </div>
                            </div>
                            <div className="details">
                                <h6 className="topic">Price</h6>
                                <div className="form-group col-md-2">
                                    <select id="inputState" class="form-control">
                                        <option selected>Rs</option>
                                        <option>Dollar </option>
                                        <option>Euro</option>
                                    </select>
                                </div>
                            </div>
                           
                                <div className="form-group col-md-4">
                                    <input type="text" class="form-control" id="inputZip"/>
                                </div>
                                
                            
                                <div class="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" />
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4"/>
    </div>
  </div>

                    </form>

                        <p>
                            By signing-in you agree to the RIYAPOLA FAKE CLONE Conditions of Use & Sale. Please
                            see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

                        <button className='login__registerButton'>Create your Riyaola Account</button>
                </div>
                </div>
            </div>
    )
}

export default Publish

