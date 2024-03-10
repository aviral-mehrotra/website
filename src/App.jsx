import Spline from '@splinetool/react-spline';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'
import 'react-social-icons/medium'
import 'react-social-icons/instagram'
import './App.css'
import headshot from './assets/headshot.jpg'


function App() {

  const centerDivStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }

  const centerDivStyleAlternate = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '60vh',
    backgroundColor: '#AAA'
  }

  const socialIconStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const infoBannerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: '20px',
    marginRight: '20px'
  }

  const headerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const infoTextStyle = {
    color: '#3A4E48',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'left',
    marginRight: '20px'
  }

  return (
    <>
      <div style={ centerDivStyle }>
        <div style={ headerStyle }>
          <h1>Aviral Mehrotra</h1>
          <p style={{ paddingBottom: '2.4em' }}>
            I'm a first-year student at the University of Chicago studying Computer Science and Business Economics
          </p>
          <div style={ socialIconStyle }>
            <div style={{ marginRight: '3px' }}>
              <SocialIcon bgColor="#AAA" network="linkedin" url="https://www.linkedin.com/in/aviralmehrotra" target="_blank"/>
            </div>
            <div style={{ marginLeft: '3px', marginRight: '3px' }}>
              <SocialIcon bgColor="#AAA" network="github" url="https://github.com/aviral-mehrotra" target="_blank"/>
            </div>
            <div style={{ marginLeft: '3px', marginRight: '3px' }}>
              <SocialIcon bgColor="#AAA" network="medium" url="https://medium.com/@aviral.mehrotra" target="_blank"/>
            </div>
            <div style={{ marginLeft: '3px' }}>
              <SocialIcon bgColor="#AAA" network="instagram" url="https://www.instagram.com/aviral_mehrotra/" target="_blank"/>
            </div>
            <div className='down-arrow'></div>
          </div>
        </div>
      </div>
      <div style={ centerDivStyleAlternate }>
        <div style={ infoBannerStyle }>
          <div style={ infoTextStyle }>
            <h2>Aviral Mehrotra</h2>
            <p>
              Hello! I'm an undergraduate student at the University of Chicago studying computer science
              and business economics, interested in the intersection of technology and finance and creating projects that solve problems
            </p>
            <h3>Locations</h3>
            <p>
            I split my time between the University of Chicago campus in Hyde Park and River North in downtown Chicago
            </p>
            <h3>Contact</h3>
            <p style={{ marginBottom: '0' }}>
              The best way to reach me is via email at
            </p>
            <a href="mailto:amehrotra.web@gmail.com">amehrotra dot web at gmail dot com</a>
          </div>
          <img className="headshot" src={headshot} alt="headshot" />
        </div>
      </div>
      <div style={ centerDivStyle }></div>
    </>
  )
}

export default App
