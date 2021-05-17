import React, { useEffect } from 'react'
import teamphoto from 'assets/img/team-photo.jpg'
import { Link } from 'react-router-dom'

import './Team.css'
import { Container, Row, Col } from 'reactstrap'

function Team () {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
        <div style={{ marginTop: '8rem' }}>
            <div className="">
                <Container style={{ textAlign: 'center' }}>
                    <Row>
                        <Col className="" md="12">
                            <h2 className="text-center heading-main">OUR TEAM</h2>
                            <img src={teamphoto} className="w-100 " alt=""/>
                            <p className="description text-center mb-2 desc-ssk1">Over the past years, the team has
                                witnessed a close collaboration between students from various departments coming and
                                sharing ideas; creating a small yet strong network of people who are eagerly looking for
                                a low-cost solution to large-scale problems.</p>
                            <p className="description text-center mb-3 desc-ssk1">Working long hours and brainstorming
                                some complex problems leads to a very special bonding between the members of the teams.
                                This leads to a lot of nicknames and some extremely fun gaming nights.</p>
                        </Col>
                        <Link to='/team' className="mt-3 btn-blue ml-auto mr-auto">
                            More
                        </Link>
                    </Row>
                </Container>
            </div>

        </div>
  )
}

export default Team
