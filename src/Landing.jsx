import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import blurb from './assets/talent-gradient.png'
import logo from './assets/inTalentLogoWhite.png'
import data from './assets/data.png'
import seniority from './assets/seniority.png'
import worldMap from './assets/map.png'
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
  const [showScrollBox3, setShowScrollBox3] = useState(false);
  const [showScrollBox4, setShowScrollBox4] = useState(false);
  const [worldShiftAmount, setWorldShiftAmount] = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  const [eeWidth, setEEWidth] = useState(0.0);

  var isTypingEE = false;

  function typeLetters(i) {
    if (i <= 20) {
      setTimeout(function () {
        setEEWidth(i * 7)
        typeLetters(i + 1);
      }, 50)
    }
  }

  useEffect(() => {

    async function handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const triggerOffset = document.getElementById('scrollBox').offsetTop;
      const heightRelative = window.innerHeight;
      const triggerOffset2 = document.getElementById('scrollBox2').offsetTop;
      const triggerOffset3 = document.getElementById('scrollBox3').offsetTop;
      const triggerOffset4 = document.getElementById('scrollBox4').offsetTop; // Change 'main' to the ID of the parent element

      if (scrollPosition > triggerOffset) {
        //"165" being the max potential shift desired multiplied by the difference of scroll position to top of div, divided by total window height
        if (worldShiftAmount == 0 || ((worldShiftAmount + 165 * ((scrollPosition - triggerOffset) / heightRelative)) > 10)) {
          setWorldShiftAmount(-165 * ((scrollPosition - triggerOffset) / heightRelative))
        }
        //console.log(50 * ((scrollPosition - triggerOffset) / heightRelative))
        setShowScrollBox(true);
      } else {
        setShowScrollBox(false);
      }

      if (scrollPosition > triggerOffset2) {
        setShowScrollBox2(true);
        setTimeout(() => {
          setTypingDone(true);
        }, 1100); // Duration of typing animation (3 seconds in this example)
        if (!isTypingEE) {
          isTypingEE = true
          typeLetters(1)
        }
      } else {
        setTypingDone(false)
        setEEWidth(0)
        isTypingEE = false;
        setShowScrollBox2(false);
      }

      if (scrollPosition > triggerOffset3) {
        //"165" being the max potential shift desired multiplied by the difference of scroll position to top of div, divided by total window height
        setShowScrollBox3(true);
      } else {
        setShowScrollBox3(false);
      }

      if (scrollPosition > triggerOffset4) {
        //"165" being the max potential shift desired multiplied by the difference of scroll position to top of div, divided by total window height
        setShowScrollBox4(true);
      } else {
        setShowScrollBox4(false);
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
    console.log('I ran')
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
    opacity: showScrollBox ? 0.25 : 1,
    /* Add other styles for background size, position, etc. */
  };

  return (
    <>
      <main>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" height={80} style={{ marginLeft: '2vw' }} />
          <button onClick={showBetaForm} className="getStartedBtn" style={{ fontSize: '12px', fontWeight: 'bold' }}>Beta</button>
        </div>
        <section className="hero" style={{ marginBottom: '25px' }} >
          <h2>
            Find jobs that will indicate the likelihood<br />
            of visa sponsorship
          </h2>
          <p>
            We use AI to validate the job listing’s likelihood<br />
            of work visa sponsorship for international students
          </p>
          <div style={{ marginTop: '35px' }}>
            <a onClick={showWaitlistForm} className="joinWaitlist" style={{
              // marigins are needed to balance size of adjacent button
              marginLeft: '20px',
              marginRight: '20px',
              fontSize: '30px'
            }}>
              Join Waitlist
            </a>
            <a onClick={showBetaForm} className="getStartedBtn" style={{
              fontSize: '30px',
              fontWeight: 'bold'
            }}>
              Join Beta
            </a>
          </div>
        </section>

        <section className="images" style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', margin: '10 45px' }}>
            <img src={data} alt="Data" />
            <p>Company’s<br /> historical data </p>
          </div>

          <div style={{ textAlign: 'center', margin: '10 45px' }}>
            <img src={seniority} alt="Seniority" />
            <p>Seniority<br /> level</p>
          </div>

          <div style={{ textAlign: 'center', margin: '10 45px' }}>
            <img src={experience} alt="Experience" />
            <p>Experience<br /> level</p>
          </div>
        </section>

        <div
          id="scrollBox"
          className={`scroll-box ${showScrollBox ? 'show' : ''}`}>
          <div className="scroll-box-left">
            <h1>Find Visa Sponsoring Jobs</h1>
            <div style={{ width: '220px', height: '220px', margin: '0 auto', marginTop: '10vh', marginBottom: '10vh', overflow: 'hidden', borderRadius: '100%', border: '1.5px solid #fff' }}>
              <img src={worldMap} style={{
                position: 'relative',
                height: '220px',
                left: worldShiftAmount + 'px'
              }} />
            </div>
          </div>
          <div className="scroll-box-right">
            <p>
              We develop an AI model that browses in real time all job postings to evaluate their likelihood of work visa sponsorship for international students and visa-dependent applicants.
            </p>
          </div>
        </div>

        <div
          id="scrollBox2"
          className={`scroll-box ${showScrollBox2 ? 'show' : ''}`}
        >
          <div className="scroll-box-left">
            <h1>Avoid job rejections due to visa issue</h1>
            <div className={`search-box ${typingDone ? 'typing-done' : ''}`}>
              <span className="typing-text" style={{ width: eeWidth + '%' }}> 🔎 Entry Level Managment</span>
            </div>

            <div className={`job-card-example ${typingDone ? 'show-card' : ''}`} style={{ scale: '0.66' }}>
              <div className="likelihood-section" style={{ color: 'rgb(9, 188, 105)' }}>
                <p className="likelihood-text">95%</p>
                <p className="likelihood-desc">Likelihood to Sponsor</p>
              </div>
              <div className="middle-section">
                <h2>Deposit Management Entry Level</h2>
                <h4>CIBC</h4>
                {/* <p>Support the daily activities within the Deposit Operations a....</p> */}
              </div>
            </div>
          </div>
          <div className="scroll-box-right">
            <p>
              We develop an AI model that browses in real time all job postings to evaluate their likelihood of work visa sponsorship for international students and visa-dependent applicants.
            </p>
          </div>


        </div>


        <div
          id="scrollBox3"
          style={{
            marginTop: '100px',
            height: '750px',
          }}
          className={`scroll-box ${showScrollBox3 ? 'show' : ''}`}
        >
          <div className='scroll-box-left'>
            <h1>How we evaluates jobs</h1>
            <img src={experience} alt="Seniority" height={130} style={{ width: '110px', height: '110px', margin: '50px' }} />

          </div>
          <div className='scroll-box-right'>
            <ul>
              <li>
                Intalent scans job postings (~2,000 a day) in real time, using AI to assess visa sponsorship likelihood.
                <br />
                <br />
              </li>
              <li>
                After validation, we manually check the accuracy of the validated likelihood of each job posting’s
                <br />
                <br />
              </li>
              <li>
                Confirmed visa sponsorship jobs are then posted on the Intalent website
                <br />
                <br />
              </li>
            </ul>
          </div>
        </div>



        <div
          id="scrollBox4"
          style={{
            marginTop: '100px',
            marginBottom: '300px',
            paddingBottom: '100px',
            border: 'none',
            background: 'none',
            height: '750px',
            zIndex: 2
          }}
          className={`scroll-box ${showScrollBox4 ? 'show' : ''}`}
        >
          <h2>Want to find out more?</h2>
          <a onClick={showWaitlistForm} className="getStartedBtn" style={{ zIndex: 2 }}>Join Waitlist</a>
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
