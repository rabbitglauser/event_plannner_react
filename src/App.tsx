import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css'; // Assuming you have some CSS
import osakaImage from './img/osaka japan.jpg'; // Ensure correct import statement

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

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);
    const [leftButtonColor, setLeftButtonColor] = useState("transparent");
    const [rightButtonColor, setRightButtonColor] = useState("transparent");

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const clickHandler = (button: 'left' | 'right', color: string) => {
        console.log(`Clicked with color: ${color}`);
        if (button === 'left') {
            setLeftButtonColor(color);
            setRightButtonColor("transparent");
        } else {
            setRightButtonColor(color);
            setLeftButtonColor("transparent");
        }
    };

    return (
        <div style={{textAlign: 'center', margin: '20px'}}>
            <button
                onClick={() => {
                    clickHandler('left', "yellow");
                    increment();
                }}
                style={{backgroundColor: leftButtonColor}}
            >
                Add people to the trip
            </button>
            <span style={{margin: '0 10px'}}>{count}</span>
            <button
                onClick={() => {
                    clickHandler('right', "lightblue");
                    decrement();
                }}
                style={{backgroundColor: rightButtonColor}}
            >
                Remove people from the trip
            </button>
        </div>
    );
};

// ToggleText Component with the Image
const ToggleText: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <button onClick={toggleVisibility}>
                {isVisible ? 'Hide Text' : 'Find out more'}
            </button>
            {isVisible &&
                <React.Fragment>
                    <p>Japan is a country located in Asia. It has over 6 thousand islands and is one of the most populated countries ever recorded for its land area.</p>
                    <div>
                        <img src={osakaImage} alt="Osaka, Japan" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                </React.Fragment>
            }
        </div>
    );
};

// App Component (with ToggleText included)
const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Description />
            <DatePickerComponent />
            <Counter />
            <ToggleText />
        </div>
    );
};

export default App;