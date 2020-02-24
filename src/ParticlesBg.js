import React from 'react'
import Particles from 'react-particles-js'

export default function ParticlesBg() {
    return (
        <div>
            <Particles
            params={{
                particles: {
                    number:{value:80},
                    color:{value:"#ffffff"},
                    size:{anim:{value:6}}

                }                   
            }}/>
        </div>
    )
}
