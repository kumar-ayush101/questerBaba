import React from 'react';
import './Contacts.css';

const Contacts = () => {
    return (
        <div className="contacts-container">
            <h2>Contact Me</h2>
            <div className="contact-info">
                <div className="contact-item">
                    <i className="fab fa-github"></i>
                    <a href="https://github.com/the-indian-hustler" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </div>
                <div className="contact-item">
                    <i className="fab fa-linkedin"></i>
                    <a href="https://linkedin.com/in/ayush-kumar-511396288" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </div>
                <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:jmdayushkumar@gmail.com">Email</a>
                </div>
                <div className="contact-item">
                    <i className="fas fa-code"></i>
                    <a href="https://leetcode.com/ayushkumar2023kucp1007" target="_blank" rel="noopener noreferrer">
                        LeetCode
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
