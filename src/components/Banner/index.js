import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import vinos from '../../assets/images/bebidas1.jpg'
import bebidas from '../../assets/images/vinos2.jpg'
import vino from '../../assets/images/vinos.jpeg'

class Banner extends React.Component {
    render () {
        return (
            <Carousel>
                <div>
                    <img src={vinos} alt="Vinos"/>
                </div>
                <div>
                    <img src={bebidas} alt="bebidas"/>
                </div>
                <div>
                    <img src={vino} alt="bebidas"/>
                </div>
            </Carousel>
        )
    }
}

export default Banner