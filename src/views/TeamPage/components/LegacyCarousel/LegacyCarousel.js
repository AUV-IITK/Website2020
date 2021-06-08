import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import picture from "assets/img/HD-amazing-photo-underwater.jpg"
import placeholder from "assets/img/team/author.jpg"
import "./LegacyCarousel.css"

const LegacyCarousel = () => {
    return (
        <div>
            {/* <Carousel >
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
            <br /> */}
            <section id="testimonials" className="testimonials">
                <div className="container">

                    <div className="section-title" data-aos="zoom-out">
                        <h2>Testimonials</h2>
                        <p>What they are saying about us</p>
                    </div>

                    <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
                        <div className="swiper-wrapper">

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                                    <h3>Sara Wilsson</h3>
                                    <h4>Designer</h4>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                                    <h3>Jena Karlis</h3>
                                    <h4>Store Owner</h4>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                                    <h3>Matt Brandon</h3>
                                    <h4>Freelancer</h4>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                                    <h3>John Larson</h3>
                                    <h4>Entrepreneur</h4>
                                </div>
                            </div>

                        </div>
                        <div className="swiper-pagination"></div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default LegacyCarousel
