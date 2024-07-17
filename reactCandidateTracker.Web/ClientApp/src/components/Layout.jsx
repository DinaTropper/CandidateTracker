import React from 'react';
import { Link } from 'react-router-dom';
import { useCandidatesCount } from '../Pages/CandidateCountContext';

const Layout = ({ children }) => {

    const { ConfirmedCount, RejectedCount, PendingCount } = useCandidatesCount();

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark border-bottom box-shadow">
                    <div className="container">
                        <a className="navbar-brand">reactCandidateTracker</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item"><Link to="/" className='nav-link text-light'>Home</Link></li>
                            </ul>
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item"><Link to="/AddCandidate" className='nav-link text-light'>Add Candidate</Link></li>
                            </ul>
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item"><Link to="/Confirmed" className='nav-link text-light'>Confirmed ({ConfirmedCount})</Link></li>
                            </ul>
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item"><Link to="/Rejected" className='nav-link text-light'>Rejected ({RejectedCount})</Link></li>
                            </ul>
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item"><Link to="/Pending" className='nav-link text-light'>Pending ({PendingCount})</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="container mt-5">
                {children}
            </div>
        </div>
    )
}

export default Layout;