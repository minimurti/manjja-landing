import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import blurb from './assets/talent-gradient.png'
import './App.css'

import { generateClient } from 'aws-amplify/api';
import { createHillaryClinton } from './graphql/mutations';

function App() {
  const [displayBetaForm, setDisplayBetaForm] = useState(false);
  const [displayWaitlistForm, setDisplayWaitlistForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [email, setEmail] = useState('');
  const [showIncorrectPasscode, setShowIncorrectPasscode] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

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
    try {
      const passcodeQueryResponse = await API.graphql(graphqlOperation(yourGraphQLQuery, { passcode }));
      // Handle response accordingly
    } catch (error) {
      setShowIncorrectPasscode(true);
      // Handle incorrect passcode scenario
    }
  };

  const submitEmail = async (event) => {
    successMessage = ''
    event.preventDefault();
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

  const bgstyle = {
    backgroundImage: `url(${blurb})`
  }

  return (
    <main style={bgstyle}>
      <section className="hero">
        <h2>Your Global Career, Amplified</h2>
        <p>Discover job opportunities with personalized visa insights tailored for you.</p>
        <button onClick={showBetaForm} className="getStartedBtn">Join Beta</button>
        <button onClick={showWaitlistForm} className="getStartedBtn">Join Waitlist</button>
      </section>

      {
        displayBetaForm && (
          <div className="beta-form-container">
            <div className="beta-form">
              <button onClick={hideBetaForm} className="exit-button">X</button>
              <form onSubmit={submitPasscode} id="passcodeForm">
                <input type="text" placeholder="Enter Beta Passcode" value={passcode} onChange={(e) => setPasscode(e.target.value)} />
                <button type="submit">Submit</button>
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
            <form onSubmit={submitEmail} id="emailForm">
              <input type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Submit'}</button>
            </form>
            {successMessage && <p style={{ color: 'blue' }}>{successMessage}</p>}
          </div>
        </div>
      )}

      <section className="features">
        <div className="feature">
          <div className="feature-content">
            <img src="/assets/image1.jpg" alt="Feature 1" />
            <h3>Job Listings</h3>
            <p>Explore a wide array of job listings, each with its specific visa sponsorship likelihood.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-content">
            <img src="image2.jpg" alt="Feature 2" />
            <h3>AI-Validated Insights</h3>
            <p>Benefit from our AI-driven analysis providing accurate and tailored visa insights.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-content">
            <img src="image3.jpg" alt="Feature 3" />
            <h3>Personalized Assessments</h3>
            <p>Receive customized visa probability assessments tied to individual job opportunities.</p>
          </div>
        </div>
      </section>
    </main >
  );
}

export default App
