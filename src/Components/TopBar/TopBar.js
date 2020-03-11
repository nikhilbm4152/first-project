import React, { Component } from 'react'
import { Navbar, FormControl, Button, Form } from 'react-bootstrap'
import SignPage from '../SignPage/SignPage'

export class TopBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Popup:true
        }
    }
    togglePopup(){
        this.setState({
            Popup:!this.state.Popup
        })
    }
    
    render() {
        return (
            <div>
                <Navbar bg="hsla(120, 60%, 70%, 0.3)" expand="lg">
                    <Navbar.Brand href="#home" className="mr-auto">Freengineeringnotes</Navbar.Brand>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success" className='grow bg-white'>Search</Button>
                            <Button className= 'login-button' onClick={this.togglePopup.bind(this)} >login</Button>
                        </Form>
                </Navbar>
            </div>
        )
    }
}

export default TopBar
