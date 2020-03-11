import React, { Component } from 'react'
import './Signpage.css'

export class SignPage extends Component {
    render() {
        return (
            <div className="main-page">
                <div className="form-box">
                    <div className="button-box">
                        <div id="btn"></div>
                        <button type="button" className="toggle-btn">Log In</button> <button type="button" className="toggle-btn">Register</button>
                        {/* <button type="button" className="toggle-btn">Register</button> */}
                    </div>
                    <form id="login" className="input-group">
                        <input type="text" className="input-field" placeholder="Enter Your Email iD " required></input>
                        <input type="text" className="input-field" placeholder="Enter Your Password" required></input>
                        <button type="submit" className="submit-btn">Log In</button>
                    </form>
                    <form id="register" className="input-group">
                        <input type="text" className="input-field" placeholder="Full Name" required></input>
                        <input type="email" className="input-field" placeholder="Enter Your Email" required></input>
                        <input type="text" className="input-field" placeholder="Enter Your Password" required></input>
                        <checkbox type="checkbox" className="check-box"></checkbox><spam>i agree to all terms and conditions </spam>
                        <button type="submit" className="submit-btn">Register</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default SignPage
