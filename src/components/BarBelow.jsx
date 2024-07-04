import { useState } from "react";
import './Barblw.css';
import { FaAngleDown,FaSearch } from 'react-icons/fa'; // Import the dropdown icon
// import { Link } from "react-router-dom";

const Barbelow = () => {
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

    const subjects = [
        { name: 'Mathematics', details: 'study of numbers and space' },
        { name: 'English', details: 'study of english litreture' },
        { name: 'Hindi', details: 'study of hindi language' },
        { name: 'Sanskrit', details: 'study of sanskrity, old culture' },
        { name: 'Social Science', details: 'study of Past and environment' },
        { name: 'Computer Science', details: 'study of computers' }
    ];

    const toggleDropdown = (subject) => {
        setSelectedSubject(subject);
        setShowDropdown(!showDropdown);
    };


    return (
        <div className="bar-below-navbar">
            {/* Content of the bar below the navbar */}
            <div className="dropdown" onClick={() => setShowDropdown(!showDropdown)}>
                <button className="subject-button">
                    Subject <FaAngleDown />
                </button>
                {showDropdown && (
                    <div className="dropdown-content">
                        {subjects.map((subject, index) => (
                            <div key={index}>
                                <span onClick={() => toggleDropdown(subject)}>{subject.name}</span>
                                {selectedSubject && selectedSubject === subject.name && (
                                    <div className="details">{subject.details}</div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="link-container" >   
                <a href="https://byjus.com/cbse-notes/">Notes</a>
                <a href="https://www.learnohub.com/">Tutorials</a>
                <a href="https://www.youtube.com/@educationaltutorials7591/playlists">NeedToKnow</a>
            </div>
            <div className="search-bar">
                <input  className= "ser-bar" type="text" placeholder="Search..." />
                <button className="ser-but"><FaSearch/></button>
            </div>
        </div>
        
    );
};

export default Barbelow;
