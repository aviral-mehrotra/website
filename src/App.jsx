import Spline from '@splinetool/react-spline';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'
import 'react-social-icons/medium'
import 'react-social-icons/instagram'
import './App.css'


function App() {

  const centerDivStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }

  const socialIconStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const headerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <>
      <div style={ centerDivStyle }>
        <div style={ headerStyle }>
          <h1>Aviral Mehrotra</h1>
          <p>
            I'm a first-year student at the University of Chicago studying Computer Science and Business Economics
          </p>
          <div style={ socialIconStyle }>
            <div style={{ marginRight: '3px' }}>
              <SocialIcon bgColor="#888" network="linkedin" url="https://www.linkedin.com/in/aviralmehrotra" target="_blank"/>
            </div>
            <div style={{ marginLeft: '3px', marginRight: '3px' }}>
              <SocialIcon bgColor="#888" network="github" url="https://github.com/aviral-mehrotra" target="_blank"/>
            </div>
            <div style={{ marginLeft: '3px', marginRight: '3px' }}>
              <SocialIcon bgColor="#888" network="medium" url="https://medium.com/@aviral.mehrotra" target="_blank"/>
            </div>
            <div style={{ marginLeft: '3px' }}>
              <SocialIcon bgColor="#888" network="instagram" url="https://www.instagram.com/aviral_mehrotra/" target="_blank"/>
            </div>
            <div className='down-arrow'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
