import React, { useEffect, useState } from 'react';
import logo from "../../Assets/logo_final.png";
import "../../Styles/Admin.css"
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

const Admin = () => {
    const [passkey, setPasskey] = useState('');
    const [selectedEvent, setSelectedEvent] = useState('All');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [response, setResponse] = useState(null);

    const fetchData = async () => {
        const url = "https://asia-south1-cryptera-414315.cloudfunctions.net/get_event_count";
        const data = {
            passkey: passkey,
            // CrYpTeRa$#!@2K24
        };

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Invalid passkey. Please try again.');
            }
            const result = await response.json();
            console.log(result)
            setResponse(result);
            setIsLoggedIn(true);
        } catch (error) {
            alert("Invalid Password !!!");
            console.error("Error:", error.message);
        }
    };

    useEffect(() => {
        const handleEnterKeyPress = (e) => {
            if (e.key === 'Enter') {
                fetchData();
            }
        };

        window.addEventListener('keydown', handleEnterKeyPress);

        return () => {
            window.removeEventListener('keydown', handleEnterKeyPress);
        };
    }, [passkey]);

    const handleEventSelection = (event) => {
        setSelectedEvent(event);
    };

    const getTotalCount = () => {
        return response[selectedEvent] || 0;
    };

    return (
        <div style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyItems: 'center', textAlign: 'center', backgroundColor: ''}}>
            {!isLoggedIn ? (
                <>
                    <div className='admin-container'>
                        <h2>Admin</h2>
                        <img
                            src={logo}
                            alt="logo"
                        />
                        <label>
                            <input
                                type="password"
                                value={passkey}
                                onChange={(e) => setPasskey(e.target.value)}
                                placeholder="Enter passkey"
                            />
                        </label>
                        <br />
                    </div>
                </>
            ) : (
                <div className='selection-container'>
                    <h2>Event Selection</h2>
                    <div className='button-flex'>
                        {Object.keys(response).map((event) => (
                            <button
                                key={event}
                                onClick={() => handleEventSelection(event)}
                                style={{
                                    marginRight: '10px',
                                    padding: '10px',
                                    backgroundColor: '#3498db',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                }}
                            >
                                {event}
                            </button>
                        ))}
                    </div>
                    <br /><br />
                    <h3>Event: {selectedEvent}</h3>
                    <h3>Count: {getTotalCount()}</h3>
                </div>)
            }
        </div >
    );
}

export default Admin;

// return (
//     <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'center', textAlign: 'center', marginTop: '20px' }}>
//         {!isLoggedIn ? (
//             <>
//                 <div className='admin-container'>
//                     <h2>Admin</h2>
//                     <img
//                         src={logo}
//                         alt="logo"
//                     />
//                     <label>
//                         Passkey:
//                         <input
//                             type="password"
//                             value={passkey}
//                             onChange={(e) => setPasskey(e.target.value)}
//                             placeholder="Enter passkey"
//                             onKeyDown={(e) => {
//                                 if (e.key === 'Enter') {
//                                     handleLogin();
//                                 }
//                             }}
//                         />
//                     </label>
//                     <br />
//                 </div>
//             </>
//         ) : (
// <div className='selection-container'>
//     <h2>Event Selection</h2>
//     <div style={{ marginBottom: '20px' }}>
//         <button
//             onClick={() => handleEventSelection('All')}
//             style={{
//                 marginRight: '10px',
//                 padding: '10px',
//                 backgroundColor: '#3498db',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '5px',
//                 cursor: 'pointer',
//             }}
//         >
//             All
//         </button>
//         {Object.keys(response).map((event) => (
//             <button
//                 key={event}
//                 onClick={() => handleEventSelection(event)}
//                 style={{
//                     marginRight: '10px',
//                     padding: '10px',
//                     backgroundColor: '#3498db',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '5px',
//                     cursor: 'pointer',
//                 }}
//             >
//                 {event}
//             </button>
//         ))}
//     </div>

// <h3 style={{ color: '#333' }}>Selected Event: {selectedEvent}</h3>
// <h3 style={{ color: '#333' }}>Count: {getTotalCount()}</h3>
//             </div>
//         )}
//     </div>
// );