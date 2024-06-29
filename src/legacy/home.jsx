import React, { useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import './home.css';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkmn-WKyYNtkVHqRfLBlxMv7bjyeV2HJI",
    authDomain: "hwinc-8979d.firebaseapp.com",
    projectId: "hwinc-8979d",
    storageBucket: "hwinc-8979d.appspot.com",
    messagingSenderId: "256186471879",
    appId: "1:256186471879:web:0154a7068494f6260235e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Home = () => {
    const [name, setName] = useState("");
    const [team, setTeam] = useState(null);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const findTeam = async () => {
        if (name === "sam pulaski") {
            setTeam("GOATED");
            return;
        }

        const teamsCollection = collection(db, 'teams');
        const teamsSnapshot = await getDocs(teamsCollection);
        let foundTeam = null;

        teamsSnapshot.forEach(doc => {
            const teamData = doc.data();
            const participantsLowerCase = teamData.participants.map(participant => participant.toLowerCase());
            if (participantsLowerCase.includes(name.toLowerCase())) {
                foundTeam = teamData.name;
            }
        });

        setTeam(foundTeam);
    };

    return (
        <div className="home-container">
             {team && <p className="team-name">You are in {team}</p>}
            <h1>Find Your Team</h1>
            <input 
                type="text" 
                value={name} 
                onChange={handleNameChange} 
                placeholder="Enter your name"
                className="input-box text-black"
            />
            <button onClick={findTeam} className="find-button">Find Team</button>
        </div>
    );
};

export default Home;