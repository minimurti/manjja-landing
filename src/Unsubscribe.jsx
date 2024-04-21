import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { generateClient } from 'aws-amplify/api';
import { RingLoader } from 'react-spinners';

import { deleteIntalentSurvey } from './graphql/mutations';

const Unsubscribe = () => {
    const location = useLocation();
    const uID = new URLSearchParams(location.search).get('uID');
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            console.log("hiii")

            try {
                console.log(uID)
                // Simulate an API call, replace with your actual API endpoint
                const client = generateClient();
                const result = await client.graphql({
                    authMode: 'apiKey',
                    query: deleteIntalentSurvey,
                    variables: {
                        input: {
                            id: uID
                        }
                    }
                });
                const data = await result.data.deleteIntalentSurvey

                console.log(data)
                var fetchedEmail;
                var firstName;
                if (data) {
                    // Assuming the API response has an 'email' property
                    fetchedEmail = data.email ?? '';
                    firstName = data.firstName ?? '';
                }

                //Set cookie if not already set
                const existingCookieEmail = document.cookie.replace(/(?:(?:^|.*;\s*)unsubscribeEmail\s*=\s*([^;]*).*$)|^.*$/, '$1');
                const existingFirstName = document.cookie.replace(/(?:(?:^|.*;\s*)firstName\s*=\s*([^;]*).*$)|^.*$/, '$1');

                if (!existingCookieEmail && fetchedEmail) {
                    document.cookie = `unsubscribeEmail=${fetchedEmail}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
                }
                if (!existingFirstName && fetchedEmail) {
                    document.cookie = `firstName=${firstName}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
                }

                setLoading(false);
                setEmail(fetchedEmail || existingCookieEmail);
                setName(firstName || existingFirstName)
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        console.log("hiii")

        if (uID) {
            console.log("a")

            fetchData();
        } else {
            console.log("u")

            // Handle the case where uID is not provided
            setLoading(false);
        }
    }, [uID]);

    if (loading) {
        return (
            <div className="sweet-loading">
                <RingLoader size={150} color={'#36D7B7'} loading={loading} />
            </div>
        );
    }

    return (
        <div style={{ padding: 20 }}>
            {email && (
                <div>
                    <h1>Unsubscription Successful</h1>
                    <p style={{ padding: 50, width: '50vw' }}>
                        Dear {name},<br></br><br></br>

                        We have successfully unsubscribed {email} from our mailing list. If you have any feedback or would like to re-subscribe in the future, please feel free to contact us. <br></br> <br></br>

                        Thank you for being a part of our community.
                    </p>

                </div>
            )}
            {!email && (
                <h1>No email found.</h1>
            )}
        </div>
    );
};

export default Unsubscribe;