import React from 'react'

// reactstrap components
import { Container } from 'reactstrap'

function IndexHeader () {
  return (
        <>
            <div
                className="page-header section-dark"
                style={{
                  backgroundImage:
                        'url(' + require('assets/img/antoine-barres.jpg') + ')'
                }}
            >
                <div className="filter"/>
                <div className="content-center">
                    <Container>
                        <div className="title-brand">
                            <h1 className="presentation-title">Paper Kit React</h1>
                            <div className="fog-low">
                                <img alt="..." src={require('assets/img/fog-low.png')}/>
                            </div>
                            <div className="fog-low right">
                                <img alt="..." src={require('assets/img/fog-low.png')}/>
                            </div>
                        </div>
                        <h2 className="presentation-subtitle text-center">
                            Make your mark with a Free Bootstrap 4 (Reactstrap) UI Kit!
                        </h2>
                    </Container>
                </div>
            </div>
        </>
  )
}

export default IndexHeader
