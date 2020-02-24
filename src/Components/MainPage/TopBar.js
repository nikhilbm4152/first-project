import React, { Component } from 'react'
import { Navbar,Form, FormControl, Button } from 'react-bootstrap';

export class TopBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="hsla(120, 60%, 70%, 0.3)" expand="lg">
                    <Navbar.Brand href="#home" className="mr-auto">Freengineeringnotes</Navbar.Brand>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success" className='grow bg-white'>Search</Button>
                            <Button className= 'login-button'>login</Button>
                        </Form>
                </Navbar>
            </div>
        )
    }
}

export default TopBar
