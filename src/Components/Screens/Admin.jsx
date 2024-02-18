import React, { useEffect, useState } from 'react';
import logo from "../../Assets/logo_final.png";
import "../../Styles/Admin.css";
import load from "../../Assets/loading.gif"

const initialResponse = {
    'All': 45,
    'Attack on Anime': 13,
    'Bgmi': 2,
    'Blind Code': 27,
    'Carrom': 6,
    'Chess': 5,
    'Clash of Code': 27,
    'Coding Contest': 29,
    'Css Battle': 26,
    'Free Fire': 1,
    'Jumbled Code': 33,
    'Marvel/DC quiz': 9,
    'Missing Code': 30,
    'Movie quiz': 24,
    'Oxedebug': 31,
    'PC Building': 15,
    'Poster Design': 13,
    'Prompt Engineering': 13,
    'Reverse Coding': 30,
    'Sales Talk': 8,
    'Tech Feud': 22,
    'Type racer': 13,
    'UI Design Contest': 15,
    'Valorant': 3,
}

const Admin = () => {
    const [passkey, setPasskey] = useState('');
    const [selectedEvent, setSelectedEvent] = useState('All');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [response, setResponse] = useState(initialResponse);
    const [searchText, setSearchText] = useState('');
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [centerContent, setCenterContent] = useState(false);

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
            setLoading(true); // Set loading to true just before making the fetch request
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Invalid passkey. Please try again !');
            }
            const result = await response.json();
            // Handle the response and set states accordingly
            setResponse(result);
            setIsLoggedIn(true);
            setFilteredEvents(Object.keys(result));
        } catch (error) {
            alert("Invalid Password !!!");
            console.error("Error:", error.message);
        } finally {
            setLoading(false); // Set loading to false after the fetch request completes (success or error)
        }
    };

    useEffect(() => {
        const handleEnterKeyPress = (e) => {
            if (e.key === 'Enter') {
                // setResponse(initialResponse);
                // setIsLoggedIn(true);
                // setFilteredEvents(Object.keys(initialResponse));
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
        setCenterContent(false);
        setFilteredEvents(Object.keys(response));
        setSearchText("");
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchText(value);
        filterEvents(value);
    };

    const filterEvents = (searchText) => {
        const filtered = Object.keys(response).filter(event =>
            event.toLowerCase().split(' ').some(word => word.startsWith(searchText.toLowerCase()))
        );
        setFilteredEvents(filtered);
        setCenterContent(true);
    };

    const startCountAnimation = (targetCount) => {
        const duration = 2000;
        const framesPerSecond = 30;
        const frameDuration = 1000 / framesPerSecond;
        const totalFrames = Math.round(duration / frameDuration);
        const countIncrement = (targetCount - count) / totalFrames;

        let currentFrame = 0;
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + countIncrement);
            currentFrame++;

            if (currentFrame === totalFrames) {
                setCount(targetCount);
                clearInterval(interval);
            }
        }, frameDuration);
    };

    const getTotalCount = () => {
        return response[selectedEvent] || 0;
    };

    useEffect(() => {
        startCountAnimation(getTotalCount());
        if (centerContent) {
            setCenterContent(false);
        }
    }, [selectedEvent, response]);

    return (
        <div style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyItems: 'center', textAlign: 'center', backgroundColor: '', overflowX: "hidden"}}>
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
                                placeholder="Enter passkey..."
                            />
                        </label>
                        {loading && (
                            <div className="loading-container">
                                <img src={load} alt="Loading" />
                                <p>Loading...</p>
                            </div>
                        )}
                        <br />
                    </div>
                </>
            ) : (
                <div className='selection-container'>
                    <h2>Events</h2>
                    <input
                        type="text"
                        placeholder="Search Event Name..."
                        value={searchText}
                        onChange={handleSearchChange}
                    />
                    <div className={`event-container ${centerContent ? 'center-content' : ''}`}>
                        {filteredEvents.map((event) => (
                            <button
                                key={event}
                                onClick={() => handleEventSelection(event)}
                            >
                                {event}
                            </button>
                        ))}
                    </div>
                    <br /><br />
                    <div className='count-card'>
                        <span>{selectedEvent}</span>
                        <div>
                            <p>
                                {Math.round(count)}
                            </p>
                        </div>
                    </div>
                </div>)
            }
        </div >
    );
}

export default Admin;
