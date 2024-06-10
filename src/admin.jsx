import React, { useState } from 'react';
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import './admin.css';  // Import the CSS file

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

const Admin = () => {
    const [groupCount, setGroupCount] = useState(1);
    const [teamNames, setTeamNames] = useState([""]);
    const [teams, setTeams] = useState([]);

    const participants = [
        "Alexandria Chen", "Amir Daoudi", "Andrew Rindone", "Archer Aguilar", "Audrey Kim",
        "Avery Resnikoff", "Bennett Lee", "Carter James", "Cj Jia", "Clover Glass",
        "Colin Hou", "Cooper Rieke", "David Chung", "Davis Fried", "Diya Desai",
        "Elise Kennedy", "Ella Hammelman", "Emma Bing", "Emma Calista Lee", "Fletcher Graham",
        "Genevieve Watson", "Hansen Liao", "Henry Arinsburg", "Henry Kendall", "Hudson Shen",
        "Isaac Fujikawa", "Jack Lee", "Jai Wright", "James Salazar", "Jameson Fennimore",
        "Jasiri Johnson", "Jordan Paya", "Kasra Maghami", "Katelyn Kim", "Laila Vasandani",
        "Leah Kim", "Lee Barron", "Lucas Lee", "Lucie Benoit", "Maddie Saada",
        "Marlowe Kohn", "Mattin Tasbihgoo", "Mia Rosenfeld", "Michelle Minikes", "Mikaela Brabbee",
        "Milan Ramesh", "Miles Aguilar", "Natalia Landres", "Nathan You", "Nico Velamoor",
        "Nicole Mallion", "Oliver Elson", "Parker Rockwell", "Patrick Kim", "Raquel Reyes",
        "Rose Ananda", "Sacha Wiley", "Sally Straus", "Sam Azarbal", "Sam Carpenter",
        "Sarah Anschell", "Sarina Hayoun", "SiÃ©na Orwitz", "Simren Bindra", "Sloan Butler",
        "Sophia Reyes", "Sophia Wong", "Sophie Ro", "Tali Kann", "Victoria Wu",
        "Vikram Wright", "Yamile Maxil-Gomez", "Zack Figlin"
    ];

    const handleSliderChange = (event) => {
        const count = event.target.value;
        setGroupCount(count);
        
        const names = [...teamNames];
        if (count > names.length) {
            for (let i = names.length; i < count; i++) {
                names.push("");
            }
        } else {
            names.splice(count);
        }
        setTeamNames(names);
    };

    const handleTeamNameChange = (index, event) => {
        const names = [...teamNames];
        names[index] = event.target.value;
        setTeamNames(names);
    };

    const generateGroups = async () => {
        const shuffledParticipants = [...participants].sort(() => 0.5 - Math.random());
        const newTeams = Array.from({ length: groupCount }, () => []);

        shuffledParticipants.forEach((participant, index) => {
            newTeams[index % groupCount].push(participant);
        });

        setTeams(newTeams);

        // Save the teams to Firestore
        const teamsCollection = collection(db, 'teams');
        for (let i = 0; i < newTeams.length; i++) {
            const teamData = {
                name: teamNames[i] || `Team ${i + 1}`,
                participants: newTeams[i]
            };
            await setDoc(doc(teamsCollection, `team_${i + 1}`), teamData);
        }
    };

    const swapParticipants = (fromTeamIndex, toTeamIndex, participantIndex) => {
        const newTeams = [...teams];
        const participant = newTeams[fromTeamIndex].splice(participantIndex, 1)[0];
        newTeams[toTeamIndex].push(participant);
        setTeams(newTeams);
    };

    return (
        <div className="admin-container">
            <h1>How many groups are there?</h1>
            <input 
                type="range" 
                min="1" 
                max="15" 
                value={groupCount} 
                onChange={handleSliderChange}
                className="slider"
            />
            <p>Number of groups: {groupCount}</p>
            <p>People per group: {Math.ceil(participants.length / groupCount)}</p>
            
            {Array.from({ length: groupCount }).map((_, index) => (
                <div key={index} className="team-input">
                    <label>
                        Team {index + 1} Name:
                        <input 
                            type="text" 
                            value={teamNames[index] || ""} 
                            onChange={(event) => handleTeamNameChange(index, event)}
                            className="team-name-input text-black"
                        />
                    </label>
                </div>
            ))}
            
            <button onClick={generateGroups} className="generate-button">Generate Groups</button>
            
            {teams.length > 0 && (
                <div className="teams-container">
                    <h2>Teams</h2>
                    {teams.map((team, teamIndex) => (
                        <div key={teamIndex} className="team">
                            <h3 className="team-name">{teamNames[teamIndex] || `Team ${teamIndex + 1}`}</h3>
                            <ul className="participants-list">
                                {team.map((participant, participantIndex) => (
                                    <li key={participantIndex} className="participant">
                                        {participant}
                                        {Array.from({ length: groupCount }).map((_, targetTeamIndex) => (
                                            targetTeamIndex !== teamIndex && (
                                                <button 
                                                    key={targetTeamIndex}
                                                    onClick={() => swapParticipants(teamIndex, targetTeamIndex, participantIndex)}
                                                    className="swap-button"
                                                >
                                                    Swap to Team {targetTeamIndex + 1}
                                                </button>
                                            )
                                        ))}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Admin;