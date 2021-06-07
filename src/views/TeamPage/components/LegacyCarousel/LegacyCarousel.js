import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import picture from "assets/img/HD-amazing-photo-underwater.jpg"
import placeholder from "assets/img/team/author.jpg"

const LegacyCarousel = () => {
    return (
        <div>
            <Carousel >
                <Carousel.Item interval={null} style={{ maxHeight: '500px' }}>
                    <img
                        className="d-block w-100"
                        src={picture}
                        alt="First slide"
                        style={{ opacity: '0.2', maxHeight: '500px' }}
                    />

                    <Carousel.Caption style={{ color: 'black', maxHeight: '500px', top: '20%' }}>
                        <img
                            src={placeholder}
                            alt="First slide"
                            style={{ maxWidth: '200px', widows: '100%' }}
                        />
                        <h3>First slide label</h3>
                        <h4>Present Position</h4>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={null}>
                    <img
                        className="d-block w-100"
                        src={picture}
                        alt="Second slide"
                        style={{ opacity: '0.2', maxHeight: '500px' }}
                    />
                    <Carousel.Caption style={{ color: 'black' }}>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={null} >
                    <img
                        className="d-block w-100"
                        src={picture}
                        alt="Third slide"
                        style={{ opacity: '0.2', maxHeight: '500px' }}
                    />

                    <Carousel.Caption style={{ color: 'black' }}>
                        <h3>Third slide label</h3>
                        <h4>Present Position</h4>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br />
        </div>
    )
}

export default LegacyCarousel
