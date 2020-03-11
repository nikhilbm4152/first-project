import React, { Component } from 'react'
import './cards.css'

export class Cards extends Component {
    
    render() {
        

        return (
            <div>
                <div class="content">
                    <a class="card" href="#!">
                        <div class="front" style={{ backgroundimage:' url(//source.unsplash.com/300x401)' }}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
                        </div>
                        <div class="back">
                            <div>
                                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                                <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
                                <button class="button">Click Here</button>
                            </div>
                        </div>
                    </a>

                    <a class="card" href="#!">
                        <div class="front" style={{backgroundimage: 'url(//source.unsplash.com/300x402)'}}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
                        </div>
                        <div class="back">
                            <div>
                                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                                <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
                                <button class="button">Click Here</button>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        )
    }
}

export default Cards
