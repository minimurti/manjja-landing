import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import blurb from './assets/talent-gradient.png'
import logo from './assets/inTalentLogoWhite.png'
import data from './assets/data.png'
import seniority from './assets/seniority.png'
import demographic from './assets/demographic.png'
import industry from './assets/industry.png'
import worldMap from './assets/map.png'
import experience from './assets/experience.png'
import './Landing.css'
// import './fonts.css';

import { generateClient } from 'aws-amplify/api';
import { createIntalentSurvey } from './graphql/mutations';

function Landing() {
  const [stepOpacity, setStepOpacity] = useState(0.0);
  const [displayBetaForm, setDisplayBetaForm] = useState(false);
  const [displayWaitlistForm, setDisplayWaitlistForm] = useState(false);
  const [deFadeWaitlistForm, setDeFadeWaitlistForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passcode, setPasscode] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [schoolYear, setSchoolYear] = useState('');
  const [major, setMajor] = useState('');
  const [yearsExp, setYearsExp] = useState('');
  const [interestReason, setInterestReason] = useState('');
  const [step, setStep] = useState(1);


  const [showIncorrectPasscode, setShowIncorrectPasscode] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const [showScrollBox, setShowScrollBox] = useState(false);
  const [showBgBlur, setShowBgBlur] = useState(false);
  const [showScrollBox2, setShowScrollBox2] = useState(false);
  const [showScrollBox3, setShowScrollBox3] = useState(false);
  const [showScrollBox4, setShowScrollBox4] = useState(false);
  const [worldShiftAmount, setWorldShiftAmount] = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  const [eeWidth, setEEWidth] = useState(0.0);

  const [showImage1, setShowImage1] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [showImage4, setShowImage4] = useState(false);
  const [showImage5, setShowImage5] = useState(false);

  const [showTopElement1, setshowTopElement1] = useState(false);
  const [showTopElement2, setshowTopElement2] = useState(false);
  const [showTopElement3, setshowTopElement3] = useState(false);
  const [showTopElement4, setshowTopElement4] = useState(false);
  const [showTopElement5, setshowTopElement5] = useState(false);

  var isTypingEE = false;



  function typeLetters(i) {
    if (i <= 20) {
      setTimeout(function () {
        setEEWidth(i * 7)
        typeLetters(i + 1);
      }, 50)
    }
  }

  function showSequentialElement(delay) {
    const images = [showTopElement1, showTopElement2, showTopElement3, showTopElement4, showTopElement5, showBgBlur];
    const setters = [setshowTopElement1, setshowTopElement2, setShowBgBlur, setshowTopElement3, setshowTopElement4, setshowTopElement5];

    let index = 0;

    const interval = setInterval(() => {
      // Check if all images have been displayed, then clear the interval
      if (index == setters.length) {
        clearInterval(interval);
        return;
      }

      // Show the current image
      setters[index](true);

      // Hide the current image after a delay
      setTimeout(() => {
        if (index == setters.length) {
          return;
        }
        setters[index](false);
      }, delay);

      index++;
    }, delay * 2); // Display time + delay time before the next image
  }

  function showSequentialImages(delay) {
    const images = [showImage1, showImage2, showImage3, showImage4, showImage5];
    const setters = [setShowImage1, setShowImage2, setShowImage3, setShowImage4, setShowImage5];

    let index = 0;

    const interval = setInterval(() => {
      // Check if all images have been displayed, then clear the interval
      if (index === images.length) {
        clearInterval(interval);
        return;
      }
      // Show the current image
      setters[index](true);

      // Hide the current image after a delay
      index++;
    }, delay * 2); // Display time + delay time before the next image
  }

  function hideSequentialImages(delay) {
    const images = [showImage1, showImage2, showImage3, showImage4, showImage5];
    const setters = [setShowImage1, setShowImage2, setShowImage3, setShowImage4, setShowImage5];

    let index = 0;

    const interval = setInterval(() => {
      // Check if all images have been displayed, then clear the interval
      if (index === images.length) {
        clearInterval(interval);
        return;
      }
      // Show the current image
      setters[index](false);

      // Hide the current image after a delay
      index++;
    }, delay * 2); // Display time + delay time before the next image
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
        if (worldShiftAmount == 0 || ((worldShiftAmount + 30 * ((scrollPosition - triggerOffset) / heightRelative)) > 1.8182)) {
          setWorldShiftAmount(-30 * ((scrollPosition - triggerOffset) / heightRelative))
        }
        //console.log(50 * ((scrollPosition - triggerOffset) / heightRelative))
        setShowScrollBox(true);
        setTimeout(() => {
          setShowBgBlur(false)
        }, 100);

      } else {
        setTimeout(() => {
          setShowBgBlur(true)
        }, 100);
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
        showSequentialImages(100)
      } else {
        setShowScrollBox3(false);
        hideSequentialImages(100)
      }

      if (scrollPosition > triggerOffset4) {
        //"165" being the max potential shift desired multiplied by the difference of scroll position to top of div, divided by total window height
        setShowScrollBox4(true);
      } else {
        setShowScrollBox4(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    showSequentialElement(100)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate();


  const showBetaForm = () => {
    setDisplayBetaForm(true);
    setTimeout(() => {
      setDeFadeWaitlistForm(true)
    }, 10);
  };

  const hideBetaForm = () => {
    setTimeout(() => {
      setDisplayBetaForm(false);
    }, 400);
    setDeFadeWaitlistForm(false)
  };

  const showWaitlistForm = () => {
    setDisplayWaitlistForm(true);
    setTimeout(() => {
      setDeFadeWaitlistForm(true)
      setStepOpacity(1.0);
    }, 10);
  };

  const hideWaitlistForm = () => {
    setDeFadeWaitlistForm(false)
    setTimeout(() => {
      setStepOpacity(0);
      setDisplayWaitlistForm(false);
    }, 400);
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
    if (step === 1) {

      if (!email.includes('@') || !email.includes('.')) {
        setSuccessMessage('Please enter a valid email.');
        return;
      }

      if (!firstName.trim() || !lastName.trim()) {
        setSuccessMessage('Please enter both first name and last name.');
        return;
      }

      setStepOpacity(0.0)
      setTimeout(() => {
        setStep(2);
        setStepOpacity(1.0)
      }, 410);

      return;
    }

    if (step === 2) {
      setStepOpacity(0.0)
      setTimeout(() => {
        setStep(3);
        setStepOpacity(1.0)
      }, 410);
      return;
    }
    if (step === 3) {
      try {

        setLoading(true);
        const client = generateClient();

        const result = await client.graphql({
          authMode: 'apiKey',
          query: createIntalentSurvey,
          variables: {
            input: {
              email: email,
              firstName: firstName,
              lastName: lastName,
              phoneNumber: phoneNumber,
              schoolYear: schoolYear,
              yearsExp: yearsExp,
              major: major,
              interestReason: interestReason

            }
          }
        });

        if (result.errors) {
          setSuccessMessage('An error occured, please try again later.');
          setLoading(false);
        } else {
          setStepOpacity(0.0)
          setTimeout(() => {
            setStep(4)
            setStepOpacity(1.0)
            setSuccessMessage('Thank you for joining the waitlist!');
            setLoading(false);
          }, 410);

        }
        // Handle response accordingly
      } catch (error) {
        // Handle email submission error
      }
      return;
    }
    if (step == 4) {
      hideWaitlistForm();
      setSuccessMessage('');
      setStep(1);
    }
  };

  const bgStyle = {
    backgroundImage: `url(${blurb})`,
    position: 'fixed',
    top: '25%',
    left: '25%',
    width: '100%',
    height: '100%',
    zIndex: -1,
    transition: 'opacity 0.5s ease',
    opacity: showBgBlur ? 0.225 : 0.112,
    /* Add other styles for background size, position, etc. */
  };

  return (
    <>
      <main>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" height={80} style={{ marginLeft: '2vw' }} />
          <button onClick={showBetaForm} className="getStartedBtn" style={{ fontSize: '12px', fontWeight: 'bold' }}>Beta</button>
        </div>
        <section className="hero" style={{ margin: '25px' }} >
          <h2 style={{ opacity: showTopElement1 ? 1 : 0, paddingTop: showTopElement1 ? '0px' : '100px', transition: 'opacity 0.5s ease, padding 0.3s ease' }} >
            Job listings with likelihood<br />
            of visa sponsorship
          </h2>
          <p style={{ paddingRight: showTopElement2 ? '0px' : '100px', opacity: showTopElement2 ? 1 : 0, transition: 'opacity 0.5s ease, padding 0.3s ease' }}>
            We use AI to validate the job listing’s likelihood<br />
            of work visa sponsorship for international students
          </p>
          <div style={{ marginTop: '85px' }}>
            <a onClick={showBetaForm} className="getStartedBtn" style={{
              fontSize: '20pt',
              fontWeight: '400',
              opacity: showTopElement3 ? 1 : 0,
              transition: 'opacity 0.5s ease, box-shadow 0.3s ease',
            }}>
              Join Beta
            </a>
            <a onClick={showWaitlistForm} className="joinWaitlist" style={{
              // marigins are needed to balance size of adjacent button
              fontSize: '20pt',
              opacity: showTopElement4 ? 1 : 0,
              transition: 'opacity 0.5s ease, color 0.3s ease',
            }}>
              Join Waitlist
            </a>
          </div>
        </section>

        <section style={{ width: '100vw' }}>
        </section>

        <div
          id="scrollBox"
          className={`scroll-box top ${showScrollBox ? 'show' : ''}`}>
          <div className="scroll-box-left">
            <div
              className="worldBG"
            >
              <img src={worldMap}
                className="worldImage"
                style={{
                  position: 'relative',
                  left: worldShiftAmount + 'vw'
                }}
              />
            </div>
          </div>
          <div className="scroll-box-right">
            <h1>Find Visa Sponsoring Jobs</h1>
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
            <p>
              We develop an AI model that browses in real time all job postings to evaluate their likelihood of work visa sponsorship for international students and visa-dependent applicants.
            </p>
          </div>
          <div className="scroll-box-right">
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


        </div>


        <div
          id="scrollBox3"
          style={{
            height: '750px',
          }}
          className={`scroll-box ${showScrollBox3 ? 'show' : ''}`}
        >
          <div className='scroll-box-left'>
            <section className="images">
              <span className='potentially-top-three'>
                <div style={{ opacity: showImage1 ? 1 : 0, transition: 'opacity 0.5s ease', textAlign: 'center', margin: '10 45px' }}>
                  <img src={industry} alt="Demograhics" />
                  <p>Job<br />Industry</p>
                </div>
                <div id="img-2" style={{ opacity: showImage2 ? 1 : 0, transition: 'opacity 0.5s ease', textAlign: 'center', margin: '10 45px' }}>
                  <img src={demographic} alt="Demograhics" />
                  <p>Company’s<br />Demographics Analysis</p>
                </div>
                <div id="img-3" style={{ opacity: showImage3 ? 1 : 0, transition: 'opacity 0.5s ease', textAlign: 'center', margin: '10 45px' }}>
                  <img src={data} alt="Data" />
                  <p>Company’s<br />Sponsorship History</p>
                </div>
              </span>
              <span className='potentially-bottom-two'>
                <div id="img-4" style={{ opacity: showImage4 ? 1 : 0, transition: 'opacity 0.5s ease', textAlign: 'center', margin: '10 45px' }}>
                  <img src={seniority} alt="Seniority" />
                  <p>Seniority<br /> level</p>
                </div>

                <div id="img-5" style={{ opacity: showImage5 ? 1 : 0, transition: 'opacity 0.5s ease', textAlign: 'center', margin: '10 45px' }}>
                  <img src={experience} alt="Experience" />
                  <p>Experience<br /> level</p>
                </div>
              </span>
            </section>

          </div>
          <div className='scroll-box-right'>
            <h1>How we evaluates jobs</h1>
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
            <div className={`beta-form-container ${deFadeWaitlistForm ? 'show' : ''}`}>
              <div className={`beta-form ${deFadeWaitlistForm ? 'show' : ''}`}>
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

        {displayWaitlistForm &&
          <div className={`beta-form-container ${deFadeWaitlistForm ? 'show' : ''}`}>
            <div className={`beta-form ${deFadeWaitlistForm ? 'show' : ''}`} style={{ height: '325px' }}>
              <button onClick={hideWaitlistForm} className="exit-button">X</button>
              <form onSubmit={submitEmail} id="emailForm" >
                <div style={{ height: '200px' }}>
                  {/* Ensure constant height for smooth animation */}
                  {(() => {
                    switch (step) {
                      case 1:
                        return (
                          <span style={{ opacity: stepOpacity, transition: 'opacity 0.4s ease-in-out' }}>
                            <input type="text" placeholder="First Name *" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            <input type="text" placeholder="Last Name *" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            <input type="text" placeholder="Enter Email *" value={email} onChange={(e) => setEmail(e.target.value)} />
                          </span>
                        );
                      case 2:
                        return (
                          <span style={{ opacity: stepOpacity, transition: 'opacity 0.4s ease-in-out' }}>
                            <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                            <input type="text" placeholder="School Year" value={schoolYear} onChange={(e) => setSchoolYear(e.target.value)} />
                            <input type="text" placeholder="Major" value={major} onChange={(e) => setMajor(e.target.value)} />
                          </span>
                        );
                      case 3:
                        return (
                          <span style={{ opacity: stepOpacity, transition: 'opacity 0.4s ease-in-out' }}>
                            <textarea
                              type="text" placeholder="Why are you interested in inTalent?"
                              value={interestReason} onChange={(e) => setInterestReason(e.target.value)}
                            />
                            {/* <input type="text" placeholder="Years Work Experience" value={yearsExp} onChange={(e) => setYearsExp(e.target.value)} /> */}

                          </span>
                        )
                      case 4:
                        return (
                          <div style={{ height: '100px' }}>
                          </div>
                        )
                      default:
                        return null;
                    }
                  })()}
                  {successMessage && <p style={{ color: 'white', fontWeight: '100', opacity: stepOpacity, transition: 'opacity 0.4s ease-in-out' }}>{successMessage}</p>}

                </div>
                <button type="submit" className="submitBtn" disabled={loading} style={{ width: '175px' }}>
                  {loading ? 'Loading...' : (() => {
                    switch (step) {
                      case 1:
                        return 'Submit';
                      case 2:
                        return `Submit ${step}/3`;
                      case 3:
                        return 'Finish';
                      case 4:
                        return 'Exit';
                      default:
                        return 'Submit';
                    }
                  })()}
                </button>
              </form>
            </div>
          </div>
        }
      </main >
      <div style={bgStyle}></div>
    </>
  );
}

export default Landing
