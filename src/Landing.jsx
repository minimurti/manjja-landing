import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import blurb from './assets/talent-gradient.png'
import logo from './assets/inTalentLogoWhite.png'
import data from './assets/data.png'
import seniority from './assets/seniority.png'
import experience from './assets/experience.png'
import './Landing.css'
// import './fonts.css';

import { generateClient } from 'aws-amplify/api';
import { createHillaryClinton } from './graphql/mutations';

function Landing() {
  const [displayBetaForm, setDisplayBetaForm] = useState(false);
  const [displayWaitlistForm, setDisplayWaitlistForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [email, setEmail] = useState('');
  const [showIncorrectPasscode, setShowIncorrectPasscode] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const [showScrollBox, setShowScrollBox] = useState(false);
  const [showScrollBox2, setShowScrollBox2] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const triggerOffset = document.getElementById('scrollBox').offsetTop;
      const triggerOffset2 = document.getElementById('scrollBox2').offsetTop; // Change 'main' to the ID of the parent element

      if (scrollPosition > triggerOffset) {
        setShowScrollBox(true);
      } else {
        setShowScrollBox(false);
      }

      if (scrollPosition > triggerOffset2) {
        setShowScrollBox2(true);
      } else {
        setShowScrollBox2(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate();


  const showBetaForm = () => {
    setDisplayBetaForm(true);
  };

  const hideBetaForm = () => {
    setDisplayBetaForm(false);
  };

  const showWaitlistForm = () => {
    setDisplayWaitlistForm(true);
  };

  const hideWaitlistForm = () => {
    setDisplayWaitlistForm(false);
  };

  const submitPasscode = async (event) => {
    event.preventDefault();

    if (passcode == 'easy2hack') {
      navigate('/list')
    } else {
      setShowIncorrectPasscode(true);
    }


  };

  const submitEmail = async (event) => {
    event.preventDefault();

    setSuccessMessage('')
    if (!email.includes('@') || !email.includes('.')) {
      setSuccessMessage('Please enter a valid email.');
      return;
    }
    try {

      setLoading(true);
      const client = generateClient();

      const result = await client.graphql({
        authMode: 'apiKey',
        query: createHillaryClinton,
        variables: {
          input: {
            email: email
          }
        }
      });

      if (result.errors) {
        setSuccessMessage('An error occured, please try again later.');
        setLoading(false);
      } else {
        setSuccessMessage('Thank you for joining the waitlist!');
        setLoading(false);
      }
      // Handle response accordingly
    } catch (error) {
      // Handle email submission error
    }
  };

  const bgStyle = {
    backgroundImage: `url(${blurb})`,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    transition: 'opacity 0.5s ease',
    opacity: showScrollBox ? 0 : 1,
    /* Add other styles for background size, position, etc. */
  };

  return (
    <>
      <main>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" height={100} style={{ marginRight: '10px' }} />
          <button onClick={showBetaForm} className="getStartedBtn">Beta</button>
        </div>
        <section className="hero">
          <h2>
            Find jobs that will indicate the likelihood<br />
            of visa sponsorship
          </h2>
          <p>
            We use AI to validate the job listing’s likelihood<br />
            of work visa sponsorship for international students
          </p>
          <a onClick={showWaitlistForm} className="joinWaitlist">Join Waitlist</a>
          <a onClick={showBetaForm} className="getStartedBtn">Join Beta</a>
        </section>

        <section className="images" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ textAlign: 'center', margin: '15px' }}>
            <img src={data} alt="Data" height={130} style={{ width: '110px', height: '110px', margin: '50px' }} />
            <p>Company’s<br /> historical data </p>
          </div>

          <div style={{ textAlign: 'center', margin: '15px' }}>
            <img src={seniority} alt="Seniority" height={130} style={{ width: '110px', height: '110px', margin: '50px' }} />
            <p>Seniority<br /> level</p>
          </div>

          <div style={{ textAlign: 'center', margin: '15px' }}>
            <img src={experience} alt="Experience" height={130} style={{ width: '110px', height: '110px', margin: '50px' }} />
            <p>Experience<br /> level</p>
          </div>
        </section>

        <div
          id="scrollBox"
          className={`scroll-box ${showScrollBox ? 'show' : ''}`}
        >
          <img src={seniority} alt="Seniority" height={130} style={{ width: '110px', height: '110px', margin: '50px' }} />
          <h1>The Intalent Mission</h1>
          <p>
            <br></br>
            IDFK ... This oaeutaoeu aoeu aoeu aoeuthaoeuth aoetuh aoetuh aoetuh aoetuh aoetuh aoetuhthethueu ahoeu taoeu
            This oaeutaoeu aoeu aoeu aoeuthaoeuth aoetuh aoetuh aoetuh aoetuh aoetuh aoetuhthethueu ahoeu taoeu
            This oaeutaoeu aoeu aoeu aoeuthaoeuth aoetuh aoetuh aoetuh aoetuh aoetuh aoetuhthethueu ahoeu taoeu
            This oaeutaoeu aoeu aoeu aoeuthaoeuth aoetuh aoetuh aoetuh aoetuh aoetuh aoetuhthethueu ahoeu taoeu
            This oaeutaoeu aoeu aoeu aoeuthaoeuth aoetuh aoetuh aoetuh aoetuh aoetuh aoetuhthethueu ahoeu taoeu
          </p>
        </div>

        <div
          id="scrollBox2"
          style={{
            marginTop: '100px',
          }}
          className={`scroll-box ${showScrollBox2 ? 'show' : ''}`}
        >
          <img src={seniority} alt="Seniority" height={130} style={{ width: '110px', height: '110px', margin: '50px' }} />
          <h1>The Intalent Purpose</h1>
          <p>
            <br></br>
            IDFK ... This oaeutaoeu aoeu aoeu aoeuthaoeuth aoetuh aoetuh aoetuh aoetuh aoetuh aoetuhthethueu ahoeu taoeu
            This oaeutaoeu aoeu aoeu aoeuthaoeuth aoetuh aoetuh aoetuh aoetuh aoetuh aoetuhthethueu ahoeu taoeu
            This oaeutaoeu aoeu aoeu aoeuthaoeuth aoetuh aoetuh aoetuh aoetuh aoetuh aoetuhthethueu ahoeu taoeu
            This oaeutaoeu aoeu aoeu aoeuthaoeuth aoetuh aoetuh aoetuh aoetuh aoetuh aoetuhthethueu ahoeu taoeu
            This oaeutaoeu aoeu aoeu aoeuthaoeuth aoetuh aoetuh aoetuh aoetuh aoetuh aoetuhthethueu ahoeu taoeu
          </p>
        </div>

        {
          displayBetaForm && (
            <div className="beta-form-container">
              <div className="beta-form">
                <button onClick={hideBetaForm} className="exit-button">X</button>
                <form onSubmit={submitPasscode} id="passcodeForm">
                  <input type="password" placeholder="Enter Beta Passcode" value={passcode} onChange={(e) => setPasscode(e.target.value)} />
                  <button type="submit" className="submitBtn">Submit</button>
                  {showIncorrectPasscode && <p id="incorrectPasscode">Incorrect Passcode</p>}
                </form>
              </div>
            </div>
          )
        }

        {displayWaitlistForm && (
          <div className="beta-form-container">
            <div className="beta-form">
              <button onClick={hideWaitlistForm} className="exit-button">X</button>
              <form onSubmit={submitEmail} id="emailForm" >
                <input type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" className="submitBtn" disabled={loading}>{loading ? 'Loading...' : 'Submit'}</button>
              </form>
              {successMessage && <p style={{ color: 'blue' }}>{successMessage}</p>}
            </div>
          </div>
        )}
      </main >
      <div style={bgStyle}></div>
    </>
  );
}

export default Landing
