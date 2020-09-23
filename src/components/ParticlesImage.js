import React, { Component } from 'react'
import Particles from "react-particles-js";

import PhoneSVG from '../images/iphone-160307.svg'

class ParticlesImage extends Component {
render(){
    return(
<Particles
    params={{
        "size": {
            "width": 1000,
            "height": 1207,
          },
	    "fps_limit": 28,
	    "particles": {
	        "collisions": {
	            "enable": false
	        },
	        "number": {
	            "value": 200,
	            "density": {
	                "enable": false
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "distance": 30,
	            "opacity": 0.4
	        },
	        "move": {
	            "speed": 1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "opacity_min": 1,
	                "speed": 1,
	                "sync": false
	            },
	            "value": 0.4
	        }
	    },
	    "polygon": {
	        "enable": true,
	        "scale": 1,
	        "type": "outside",
	        "move": {
	            "radius": 10
	        },
	        "url": "https://res.cloudinary.com/dexdumfqy/image/upload/v1600820219/rbl-art-designs/iphone-160307_fshiye.svg",
	        "inline": {
	            "arrangement": "equidistant"
	        },
	        "draw": {
	            "enable": true,
	            "stroke": {
	                "color": "rgba(255, 255, 255, .9)"
	            }
	        }
	    },
	    "retina_detect": false,
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "size": 6,
	                "distance": 40
	            }
	        }
        },

	}} />
    )
}
}

export default ParticlesImage