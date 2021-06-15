import React from 'react'
import {Carousel} from "react-bootstrap";

const VehicleCarousel = ({images}) => {
    return (
        <div>
            <Carousel fade controls={false}>
                {
                    images.map(
                        image =>(
                            <Carousel.Item interval={2000}>
                                <img height={350} src={image} alt="slide" />
                            </Carousel.Item>
                        )
                    )
                }
            </Carousel>
        </div>
    )
}

export default VehicleCarousel
