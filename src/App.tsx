import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css'; // Assuming you have some CSS
import logo from './logo.svg'; // If you're using a logo, keep this

// Navbar Component
const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">Event Planner</a>
            </div>
            <div className="navbar-center">
                <ul className="nav-links">
                    <li><a href="/products">Events</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="navbar-right">
                <a href="/cart" className="cart-icon">
                    <i className="bi bi-cart"></i>
                    <span className="cart-count">0</span>
                </a>
                <a href="/account" className="user-icon">
                    <i className="fas fa-user"></i>
                </a>
            </div>
        </nav>
    );
};

// Description Component
const Description: React.FC = () => {
    const [trip, setTrip] = useState({
        country: "Japan",
        travelType: "plane",
        year: "1954",
        people: "3",
        durationOfTheTrip: "3h"
    });

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>My Trip: {trip.country}</h1>
            <p>The trip lasts around {trip.durationOfTheTrip} from <span>{trip.year}</span></p>
        </div>
    );
};

// DatePicker Component
const DatePickerComponent: React.FC = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const onDateChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <DatePicker
                selected={startDate}
                onChange={onDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
            />
        </div>
    );
};

// App Component
const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Description />
            <DatePickerComponent />
        </div>
    );
};

export default App;
