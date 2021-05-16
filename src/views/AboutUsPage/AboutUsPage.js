import React from 'react'

import ExamplesNavbar from '../../components/Navbars/ExamplesNavbar'

// core components
import AboutUs from '../LandingPage/components/AboutUs/AboutUs.js'
import Participation from './components/Participation/Participation'
import Achievements from './components/Achievements/Achievements'
import './AboutUsPage.css'

function LandingPage () {
  document.documentElement.classList.remove('nav-open')
  React.useEffect(() => {
    window.scrollTo(0, 0)
    document.body.classList.add('profile-page')
    return function cleanup () {
      document.body.classList.remove('profile-page')
    }
  })
  return (
        <div className="mobile-responsive">
            <ExamplesNavbar activePage="/about-us"/>
            <div className="main ">
                <AboutUs/>
                <Participation/>
                <Achievements/>
            </div>
        </div>
  )
}

export default LandingPage
